import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { LeafDivider } from "@/components/Logo";
import { CONTACT_EMAIL, buildWhatsAppUrl, submitContactRequest } from "@/lib/contact";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Cotiza tu proyecto — Aura Interior" },
      {
        name: "description",
        content:
          "Cuéntanos sobre tu proyecto de arquitectura, interiorismo, asesoría o visualización 3D. Atendemos clientes en Colombia y de forma virtual en otros países.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    servicio: "Diseño de interiores",
    ubicacion: "Otra ciudad de Colombia",
    presupuesto: "Por definir",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [estadoEnvio, setEstadoEnvio] = useState<"idle" | "success" | "error">("idle");
  const [mensajeEstado, setMensajeEstado] = useState("");

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get("servicio");
    if (requestedService) setForm((current) => ({ ...current, servicio: requestedService }));
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    "Hola, Aura Interior. Quisiera información sobre sus servicios de diseño y arquitectura.",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviando(true);
    setEstadoEnvio("idle");
    setMensajeEstado("");
    try {
      await submitContactRequest({
        name: form.nombre,
        email: form.email,
        service: form.servicio,
        location: form.ubicacion,
        budget: form.presupuesto,
        message: form.mensaje,
      });
      setEstadoEnvio("success");
      setMensajeEstado("Tu solicitud fue enviada. Aura Interior se pondrá en contacto contigo al correo que proporcionaste.");
      setForm({ nombre: "", email: "", servicio: "Diseño de interiores", ubicacion: "Otra ciudad de Colombia", presupuesto: "Por definir", mensaje: "" });
    } catch (error) {
      setEstadoEnvio("error");
      setMensajeEstado(error instanceof Error ? error.message : "No pudimos enviar tu solicitud. Escríbenos directamente por WhatsApp o correo.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <LeafDivider className="mb-10" />
      <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">
            Hablemos de tu proyecto
          </p>
          <h1 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            Cuéntame qué espacio quieres transformar
          </h1>
          <p className="mt-5 max-w-md text-muted-foreground">
            Comparte tu idea, necesidad y ubicación. Revisaré la información para
            orientarte hacia el servicio adecuado y preparar los próximos pasos.
          </p>
          <div className="mt-8 space-y-4 text-sm text-foreground">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nude"><Mail size={17} className="text-primary" /></span>
              <span>{CONTACT_EMAIL}</span>
            </div>
            <a href="https://www.instagram.com/_aura.interior/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-terracota">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nude"><Instagram size={17} className="text-primary" /></span>
              @_aura.interior <ArrowUpRight size={14} />
            </a>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-nude"><MapPin size={17} className="text-primary" /></span>
              Envigado, Medellín · Colombia y asesorías virtuales internacionales
            </div>
          </div>
          {whatsappUrl ? (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full border border-oliva px-5 py-3 text-sm font-semibold text-oliva hover:bg-nude">
              Consultar por WhatsApp <ArrowUpRight size={15} className="ml-2" />
            </a>
          ) : (
            <p className="mt-8 max-w-sm text-xs leading-relaxed text-muted-foreground">
              Si prefieres, también puedes escribirnos por Instagram o directamente a
              nuestro WhatsApp comercial.
            </p>
          )}
        </div>

        <div id="cotizacion" className="rounded-3xl border border-border bg-card p-6 shadow-aura-soft md:p-8">
          <h2 className="font-display text-2xl text-foreground">Solicitud de información</h2>
          <p className="mt-2 text-sm text-muted-foreground">Completa el formulario y tu solicitud se enviará directamente desde esta página. No necesitas abrir tu aplicación de correo.</p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre *" id="nombre">
                <input id="nombre" required autoComplete="name" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={inputClass} placeholder="Tu nombre" />
              </Field>
              <Field label="Correo electrónico *" id="email">
                <input id="email" type="email" required autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="tu@correo.com" />
              </Field>
            </div>
            <Field label="¿Qué servicio necesitas? *" id="servicio">
              <select id="servicio" value={form.servicio} onChange={(e) => setForm({ ...form, servicio: e.target.value })} className={inputClass}>
                <option>Diseño de interiores</option>
                <option>Diseño de interiores y decoración</option>
                <option>Diseño arquitectónico</option>
                <option>Diseño arquitectónico y planos</option>
                <option>Asesoría personalizada</option>
                <option>Asesorías profesionales por hora</option>
                <option>Planos arquitectónicos</option>
                <option>Modelado 3D y renders</option>
                <option>Modelado 3D y visualización</option>
                <option>Macramé / producto artesanal</option>
                <option>Otro servicio</option>
              </select>
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ubicación del proyecto" id="ubicacion">
                <select id="ubicacion" value={form.ubicacion} onChange={(e) => setForm({ ...form, ubicacion: e.target.value })} className={inputClass}>
                  <option>Medellín / Envigado</option>
                  <option>Otra ciudad de Colombia</option>
                  <option>Estados Unidos</option>
                  <option>España</option>
                  <option>Otro país</option>
                </select>
              </Field>
              <Field label="Presupuesto estimado" id="presupuesto">
                <select id="presupuesto" value={form.presupuesto} onChange={(e) => setForm({ ...form, presupuesto: e.target.value })} className={inputClass}>
                  <option>Por definir</option>
                  <option>Menos de $2 millones COP</option>
                  <option>$2 a $5 millones COP</option>
                  <option>$5 a $10 millones COP</option>
                  <option>Más de $10 millones COP</option>
                  <option>Prefiero cotización en USD</option>
                </select>
              </Field>
            </div>
            <Field label="Cuéntame sobre tu proyecto *" id="mensaje">
              <textarea id="mensaje" rows={5} required value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={`${inputClass} resize-y`} placeholder="¿Qué espacio quieres diseñar? ¿Qué necesitas resolver? ¿Tienes medidas, planos o referencias?" />
            </Field>
            <button type="submit" disabled={enviando} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-arcilla disabled:cursor-not-allowed disabled:opacity-60">
              {enviando ? "Enviando solicitud…" : "Enviar solicitud"} <Send size={15} />
            </button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Tus datos se utilizarán únicamente para responder a esta solicitud.
            </p>
            {estadoEnvio !== "idle" && (
              <p role="status" aria-live="polite" className={`rounded-xl p-3 text-sm ${estadoEnvio === "success" ? "bg-nude text-oliva" : "bg-destructive/10 text-destructive"}`}>
                {mensajeEstado}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

const inputClass = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring";

function Field({ label, id, children }: { label: string; id: string; children: ReactNode }) {
  return <div><label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>{children}</div>;
}
