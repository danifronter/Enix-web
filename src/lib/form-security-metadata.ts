export type FormSecurityMetadata = {
  ipAddress: string;
  city: string;
  region: string;
  country: string;
  timezone: string;
  userAgent: string;
  referrer: string;
  sourceUrl: string;
  sourcePath: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  submittedAtClient: string;
  receivedAt: string;
  environment: string;
  turnstileStatus: string;
};

function safeDecode(value: string | null): string {
  if (!value) return "No disponible";

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function cleanText(value: unknown, fallback = "No disponible"): string {
  if (typeof value !== "string") return fallback;

  const trimmed = value.trim();
  return trimmed || fallback;
}

export function getFormSecurityMetadata(
  request: Request,
  payload: Record<string, unknown>,
): FormSecurityMetadata {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "No disponible";
  const turnstileStatus = cleanText(payload.turnstileStatus, "");
  const hasTurnstileToken =
    Boolean(cleanText(payload.turnstileToken, "")) ||
    Boolean(cleanText(payload["cf-turnstile-response"], ""));

  return {
    ipAddress,
    city: safeDecode(request.headers.get("x-vercel-ip-city")),
    region: cleanText(request.headers.get("x-vercel-ip-country-region")),
    country: cleanText(request.headers.get("x-vercel-ip-country")),
    timezone: safeDecode(request.headers.get("x-vercel-ip-timezone")),
    userAgent: cleanText(request.headers.get("user-agent")),
    referrer: cleanText(request.headers.get("referer")),
    sourceUrl: cleanText(payload.sourceUrl ?? payload.pageUrl ?? payload.currentUrl),
    sourcePath: cleanText(payload.sourcePath),
    utmSource: cleanText(payload.utm_source),
    utmMedium: cleanText(payload.utm_medium),
    utmCampaign: cleanText(payload.utm_campaign),
    utmTerm: cleanText(payload.utm_term),
    utmContent: cleanText(payload.utm_content),
    submittedAtClient: cleanText(payload.submittedAtClient ?? payload.submittedAt),
    receivedAt: new Date().toISOString(),
    environment: import.meta.env.MODE,
    turnstileStatus: turnstileStatus || (hasTurnstileToken ? "Token recibido; validación pendiente de configurar" : "No configurado"),
  };
}

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
