import type { APIRoute } from "astro";

const RESEND_API_URL = "https://api.resend.com/emails";
const allowedTypes = ["contact", "diagnostic", "audit", "service", "newsletter"] as const;

type FormType = (typeof allowedTypes)[number];

export const prerender = false;

const fieldAliases = {
  name: ["name", "nombre"],
  email: ["email", "correo"],
  phone: ["phone", "telefono", "whatsapp"],
  company: ["company", "empresa"],
  website: ["website", "sitio", "site"],
  reason: ["reason", "motivo", "necesidad", "need"],
  problem: ["problem", "problema", "necesidad"],
  service: ["service", "servicio", "selectedFocus", "hiddenCategory"],
  message: ["message", "mensaje", "need"],
  origin: ["origin", "origen", "ctaOrigin"],
  pageUrl: ["pageUrl", "currentUrl"],
  consent: ["consent", "privacy", "acepta"],
};

function sanitize(value: unknown, maxLength = 2000) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function getValue(data: Record<string, unknown>, keys: string[], maxLength = 2000) {
  for (const key of keys) {
    const value = data[key];
    if (value !== undefined && value !== null && String(value).trim()) {
      return sanitize(value, maxLength);
    }
  }

  return "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasConsent(value: string) {
  return ["on", "true", "1", "yes", "si", "sí"].includes(value.toLowerCase());
}

function labelByType(type: FormType) {
  const labels: Record<FormType, string> = {
    contact: "Contacto corporativo",
    diagnostic: "Diagnóstico digital",
    audit: "Auditoría digital",
    service: "Consulta por servicio",
    newsletter: "Suscripción newsletter",
  };

  return labels[type];
}

function emailValue(value: string, fallback = "No indicado") {
  return escapeHtml(value || fallback);
}

function emailRow(label: string, value: string, options: { href?: string; fallback?: string } = {}) {
  const content = emailValue(value, options.fallback);
  const renderedValue = options.href && value
    ? `<a href="${escapeHtml(options.href)}" style="color:#dc2626;text-decoration:none;font-weight:700;">${content}</a>`
    : content;

  return `
    <tr>
      <td style="padding:10px 0;color:#64748b;font-size:13px;font-weight:700;vertical-align:top;width:42%;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;color:#0f172a;font-size:14px;font-weight:700;vertical-align:top;">${renderedValue}</td>
    </tr>
  `;
}

function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const resendApiKey = String(import.meta.env.RESEND_API_KEY || "").trim();
    const toEmail = String(import.meta.env.CONTACT_TO_EMAIL || "hello@enix.studio").trim();
    const fromEmail = String(import.meta.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev").trim();

    console.info("[ENIX forms] env check", {
      hasResendApiKey: Boolean(resendApiKey),
      hasContactToEmail: Boolean(toEmail),
      hasContactFromEmail: Boolean(fromEmail),
      contactToEmail: toEmail,
      contactFromEmail: fromEmail,
    });

    if (!resendApiKey) {
      return jsonResponse({ ok: false, message: "Falta configurar RESEND_API_KEY." }, 500);
    }

    const contentType = request.headers.get("content-type") || "";
    let rawData: Record<string, unknown> = {};

    if (contentType.includes("application/json")) {
      rawData = await request.json();
    } else {
      const formData = await request.formData();
      rawData = Object.fromEntries(formData.entries());
    }

    const type = sanitize(rawData.type, 80) as FormType;
    if (!allowedTypes.includes(type)) {
      return jsonResponse({ ok: false, message: "Tipo de formulario inválido." }, 400);
    }

    const name = getValue(rawData, fieldAliases.name, 160);
    const email = getValue(rawData, fieldAliases.email, 180);
    const phone = getValue(rawData, fieldAliases.phone, 80);
    const company = getValue(rawData, fieldAliases.company, 160);
    const website = getValue(rawData, fieldAliases.website, 240);
    const reason = getValue(rawData, fieldAliases.reason, 180);
    const problem = getValue(rawData, fieldAliases.problem, 180);
    const service = getValue(rawData, fieldAliases.service, 180);
    const message = getValue(rawData, fieldAliases.message, 3000);
    const origin = getValue(rawData, fieldAliases.origin, 180);
    const pageUrl = getValue(rawData, fieldAliases.pageUrl, 240);
    const consent = getValue(rawData, fieldAliases.consent, 20);

    if (type !== "newsletter" && !name) {
      return jsonResponse({ ok: false, message: "Ingresa tu nombre." }, 400);
    }

    if (!email || !isValidEmail(email)) {
      return jsonResponse({ ok: false, message: "Ingresa un correo válido." }, 400);
    }

    if (type !== "newsletter" && !message && !problem && !reason && !service) {
      return jsonResponse({ ok: false, message: "Cuéntanos brevemente qué necesitas." }, 400);
    }

    if (type !== "newsletter" && !hasConsent(consent)) {
      return jsonResponse({ ok: false, message: "Debes aceptar ser contactado para responder tu solicitud." }, 400);
    }

    const formLabel = labelByType(type);
    const submittedAt = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });
    const replyHref = `mailto:${email}?subject=${encodeURIComponent(`Respuesta Enix Studio - ${formLabel}`)}`;
    const websiteHref = website && /^https?:\/\//i.test(website) ? website : website ? `https://${website}` : "";
    const pageHref = pageUrl && /^https?:\/\//i.test(pageUrl) ? pageUrl : "";
    const html = `
      <div style="margin:0;padding:0;background:#f1f5f9;font-family:Inter,Arial,sans-serif;color:#0f172a;">
        <div style="max-width:680px;margin:0 auto;padding:28px 14px;">
          <div style="overflow:hidden;border-radius:24px;background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 18px 60px rgba(15,23,42,0.10);">
            <div style="background:linear-gradient(135deg,#070b14 0%,#0b1120 48%,#26070b 100%);padding:30px 28px;color:#ffffff;">
              <div style="display:inline-block;border:1px solid rgba(248,113,113,0.35);border-radius:999px;background:rgba(220,38,38,0.14);padding:7px 12px;color:#fecaca;font-size:11px;font-weight:900;letter-spacing:0.08em;text-transform:uppercase;">
                ${escapeHtml(formLabel)}
              </div>
              <h1 style="margin:18px 0 0;font-size:28px;line-height:1.08;font-weight:900;letter-spacing:-0.02em;">
                Nuevo lead recibido
              </h1>
              <p style="margin:12px 0 0;color:#cbd5e1;font-size:15px;line-height:1.7;">
                ${emailValue(name, "Un contacto")} envió una solicitud desde Enix Studio. Responde con contexto y próximos pasos.
              </p>
            </div>

            <div style="padding:24px 28px 4px;">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div style="border-radius:18px;background:#f8fafc;border:1px solid #e2e8f0;padding:16px;">
                  <div style="color:#64748b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;">Contacto</div>
                  <div style="margin-top:7px;color:#0f172a;font-size:18px;font-weight:900;">${emailValue(name)}</div>
                  <div style="margin-top:4px;color:#475569;font-size:13px;font-weight:700;">${emailValue(company)}</div>
                </div>
                <div style="border-radius:18px;background:#fff7ed;border:1px solid #fed7aa;padding:16px;">
                  <div style="color:#9a3412;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;">Prioridad comercial</div>
                  <div style="margin-top:7px;color:#991b1b;font-size:18px;font-weight:900;">Revisar y responder</div>
                  <div style="margin-top:4px;color:#9a3412;font-size:13px;font-weight:700;">${escapeHtml(submittedAt)}</div>
                </div>
              </div>
            </div>

            <div style="padding:20px 28px 0;">
              <h2 style="margin:0 0 10px;color:#0f172a;font-size:17px;font-weight:900;">Datos del lead</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-top:1px solid #e2e8f0;">
                ${emailRow("Nombre", name)}
                ${emailRow("Email", email, { href: `mailto:${email}` })}
                ${emailRow("WhatsApp/Teléfono", phone, { href: phone ? `tel:${phone}` : undefined })}
                ${emailRow("Empresa", company)}
                ${emailRow("Sitio web", website, { href: websiteHref })}
              </table>
            </div>

            <div style="padding:22px 28px 0;">
              <h2 style="margin:0 0 10px;color:#0f172a;font-size:17px;font-weight:900;">Contexto comercial</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border-top:1px solid #e2e8f0;">
                ${emailRow("Motivo", reason)}
                ${emailRow("Problema", problem)}
                ${emailRow("Servicio", service)}
                ${emailRow("Origen", origin)}
                ${emailRow("URL", pageUrl, { href: pageHref, fallback: "No indicada" })}
              </table>
            </div>

            <div style="padding:22px 28px 0;">
              <h2 style="margin:0 0 12px;color:#0f172a;font-size:17px;font-weight:900;">Mensaje</h2>
              <div style="border-radius:18px;background:#f8fafc;border:1px solid #e2e8f0;padding:18px;color:#334155;font-size:15px;line-height:1.75;">
                ${escapeHtml(message || "Sin mensaje adicional").replace(/\n/g, "<br />")}
              </div>
            </div>

            <div style="padding:22px 28px;">
              <a href="${escapeHtml(replyHref)}" style="display:inline-block;border-radius:999px;background:#dc2626;color:#ffffff;text-decoration:none;font-size:14px;font-weight:900;padding:14px 18px;">
                Responder a ${emailValue(name, "este lead")}
              </a>
              <p style="margin:18px 0 0;color:#64748b;font-size:12px;line-height:1.7;">
                Consentimiento: <strong style="color:#0f172a;">${type === "newsletter" || hasConsent(consent) ? "Sí" : "No"}</strong> · Enviado desde Enix Studio · ${escapeHtml(submittedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    const resendResponse = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Nuevo lead Enix Studio - ${formLabel}`,
        html,
      }),
    });

    const resendResult = await resendResponse.json().catch(() => null);

    if (!resendResponse.ok) {
      console.error("Resend error:", resendResult);
      return jsonResponse(
        {
          ok: false,
          message: resendResult?.message || resendResult?.error || "Resend rechazó el envío del correo.",
        },
        500,
      );
    }

    return jsonResponse({ ok: true, message: "Solicitud enviada correctamente." });
  } catch (error) {
    console.error("Form endpoint error:", error);
    return jsonResponse(
      {
        ok: false,
        message: error instanceof Error ? error.message : "No se pudo enviar la solicitud.",
      },
      500,
    );
  }
};
