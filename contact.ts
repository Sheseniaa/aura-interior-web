/**
 * Contact configuration.
 * Form submissions are sent directly from the page through FormSubmit's AJAX
 * endpoint; the visitor's email application is never opened.
 */
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "aura.interioor@gmail.com";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "3133648105";

export function buildWhatsAppUrl(message: string) {
  if (!WHATSAPP_NUMBER) return undefined;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Send a contact request directly from the website using FormSubmit's AJAX
 * relay. The mailbox owner must activate the address once from FormSubmit's
 * initial confirmation email. This does not open mailto or an email app.
 */
export async function submitContactRequest(input: {
  name: string;
  email: string;
  service: string;
  location: string;
  budget: string;
  message: string;
}) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      _replyto: input.email,
      service: input.service,
      location: input.location,
      budget: input.budget,
      message: input.message,
      _subject: `Nueva solicitud Aura Interior — ${input.service}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const responseText = await response.text();
  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = responseText ? JSON.parse(responseText) : {};
  } catch {
    throw new Error("El servicio de correo devolvió una respuesta no válida. Inténtalo nuevamente.");
  }

  if (!response.ok || result.success === false || result.success === "false") {
    throw new Error(result.message || "No se pudo enviar la solicitud. Inténtalo nuevamente.");
  }
  return result;
}
