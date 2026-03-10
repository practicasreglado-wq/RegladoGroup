const allowedOrigins = [
  import.meta.env.VITE_REGLADO_REALSTATE_URL,
  import.meta.env.VITE_REGLADO_ENERGY_URL,
  import.meta.env.VITE_REGLADO_MAPAS_URL,
  import.meta.env.VITE_REGLADO_ENPROCESO_URL,
].filter(Boolean).flatMap((value) => {
  try {
    return [new URL(value).origin];
  } catch {
    return [];
  }
});

export function sanitizeExternalReturnTo(value) {
  if (typeof value !== "string") {
    return "";
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  try {
    const url = new URL(trimmed);
    return allowedOrigins.includes(url.origin) ? url.toString() : "";
  } catch {
    return "";
  }
}
