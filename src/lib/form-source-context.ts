export function getFormSourceContext() {
  if (typeof window === "undefined") {
    return {
      sourceUrl: "",
      sourcePath: "",
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      submittedAtClient: "",
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    sourceUrl: window.location.href,
    sourcePath: window.location.pathname,
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
    submittedAtClient: new Date().toISOString(),
  };
}
