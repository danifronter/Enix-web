import type { APIRoute } from "astro";

const allowedTypes = ["contact", "diagnostic", "audit", "service", "newsletter"] as const;

type FormType = (typeof allowedTypes)[number];

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

function getValue(data: Record<string, unknown>, keys: string[], maxLength = 2000) {
  for (const key of keys) {
    const value = data[key];
    if (value !== undefined && value !== null && String(value).trim()) {
      return sanitize(value, maxLength);
    }
  }

  return "";
}

function sanitize(value: unknown, maxLength = 2000) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
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

function extractEmailAddress(value: string) {
  const match = value.match(/<([^<>]+)>/);
  return (match?.[1] ?? value).trim();
}

function isValidSender(value: string) {
  return Boolean(value.trim()) && isValidEmail(extractEmailAddress(value));
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

    if (email && !isValidEmail(email)) {
      return jsonResponse({ ok: false, message: "Ingresa un correo válido." }, 400);
    }

    if (type === "newsletter" && !email) {
      return jsonResponse({ ok: false, message: "Ingresa un correo válido." }, 400);
    }

    if (type !== "newsletter" && !email && !phone) {
      return jsonResponse({ ok: false, message: "Ingresa un correo o WhatsApp de contacto." }, 400);
    }

    if (type !== "newsletter" && !message && !problem && !reason && !service) {
      return jsonResponse({ ok: false, message: "Cuéntanos brevemente qué necesitas." }, 400);
    }

    if (type !== "newsletter" && !hasConsent(consent)) {
      return jsonResponse({ ok: false, message: "Debes aceptar ser contactado para responder tu solicitud." }, 400);
    }

    const apiKey = String(import.meta.env.RESEND_API_KEY || "").trim();
    const toEmail = String(import.meta.env.CONTACT_TO_EMAIL || "").trim();
    const fromEmail = String(import.meta.env.CONTACT_FROM_EMAIL || "").trim();

    if (!apiKey || !toEmail || !fromEmail) {
      return jsonResponse(
        {
          ok: false,
          message: "El envío de formularios no está configurado. Revisa las variables de entorno.",
        },
        500,
      );
    }

    if (!isValidEmail(toEmail) || !isValidSender(fromEmail)) {
      return jsonResponse(
        {
          ok: false,
          message: "La configuración de correos no tiene un formato válido. Revisa CONTACT_TO_EMAIL y CONTACT_FROM_EMAIL.",
        },
        500,
      );
    }

    const formLabel = labelByType(type);
    const subject = `Nuevo lead Enix Studio - ${formLabel}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2>Nuevo formulario recibido</h2>
        <p><strong>Tipo:</strong> ${escapeHtml(formLabel)}</p>
        <p><strong>Origen:</strong> ${escapeHtml(origin || "No indicado")}</p>
        <p><strong>URL:</strong> ${escapeHtml(pageUrl || "No indicada")}</p>
        <hr />
        <p><strong>Nombre:</strong> ${escapeHtml(name || "No indicado")}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "No indicado")}</p>
        <p><strong>WhatsApp/Teléfono:</strong> ${escapeHtml(phone || "No indicado")}</p>
        <p><strong>Empresa:</strong> ${escapeHtml(company || "No indicada")}</p>
        <p><strong>Sitio web:</strong> ${escapeHtml(website || "No indicado")}</p>
        <hr />
        <p><strong>Motivo:</strong> ${escapeHtml(reason || "No indicado")}</p>
        <p><strong>Problema:</strong> ${escapeHtml(problem || "No indicado")}</p>
        <p><strong>Servicio:</strong> ${escapeHtml(service || "No indicado")}</p>
        <h3>Mensaje</h3>
        <p>${escapeHtml(message || "Sin mensaje adicional").replace(/\n/g, "<br />")}</p>
        <hr />
        <p><strong>Consentimiento:</strong> ${type === "newsletter" || hasConsent(consent) ? "Sí" : "No"}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        ...(email && isValidEmail(email) ? { reply_to: email } : {}),
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.json().catch(() => null);
      console.error("Resend error:", error);
      const message = error?.message
        ? String(error.message)
        : "Resend rechazó el envío. Revisa el remitente, dominio verificado y variables de entorno.";

      return jsonResponse({ ok: false, message }, 502);
    }

    return jsonResponse({ ok: true, message: "Solicitud enviada correctamente." });
  } catch (error) {
    console.error("Form endpoint error:", error);
    const message =
      error instanceof Error && error.message
        ? error.message
        : "No se pudo enviar la solicitud. Intenta nuevamente.";

    return jsonResponse({ ok: false, message }, 500);
  }
};
