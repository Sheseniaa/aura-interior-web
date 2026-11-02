import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, ClipboardList, Mail, MessagesSquare } from "lucide-react";
import asesoriaImg from "@/assets/asesoria.jpg";
import { LeafDivider } from "@/components/Logo";

export const Route = createFileRoute("/asesorias")({
  head: () => ({
    meta: [
      { title: "Asesorías por hora — Aura Interior" },
      {
        name: "description",
        content:
          "Asesorías por hora de arquitectura y diseño de interiores: con Jesenya Díaz, arquitecta y diseñadora de interiores. Presenciales en Envigado, Medellín, o virtuales para clientes en Colombia y alrededor del mundo.",
      },
      { property: "og:title", content: "Asesorías por hora — Aura Interior" },
      {
        property: "og:description",
        content:
          "Una asesoría cercana: escuchamos tu necesidad, te damos un diagnóstico claro y te dejamos todo por escrito.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AsesoriasPage,
});

const pasos = [
  {
    icon: ClipboardList,
    titulo: "1. Cuéntame tu necesidad",
    texto:
      "Me cuentas qué te ronda —una duda de distribución, de materiales, de color— y hago una revisión previa para llegar con una cotización clara, sin sorpresas.",
  },
  {
    icon: CalendarCheck,
    titulo: "2. Coordinamos la reunión",
    texto:
      "Elegimos el momento que mejor te acomoda, en persona o en línea. Llego con tu caso estudiado y las ideas sobre la mesa.",
  },
  {
    icon: MessagesSquare,
    titulo: "3. Vivimos la asesoría",
    texto:
      "Una conversación tranquila y profesional: resolvemos tus dudas, probamos opciones y defines el rumbo de tu proyecto con calma.",
  },
  {
    icon: Mail,
    titulo: "4. Recibes todo por escrito",
    texto:
      "Después de la sesión te llega un resumen con conclusiones, recomendaciones y próximos pasos, para que nada se pierda en el camino.",
  },
];

const beneficios = [
  "Hablas directamente con quien diseña: sin intermediarios ni respuestas genéricas",
  "Una cotización honesta antes de que te comprometas con algo",
  "Un diagnóstico profesional pensado para tu necesidad específica",
  "Un resumen escrito que consultas cuando quieras, a tu ritmo",
  "Ideal para dudas puntuales: pagas solo por la orientación que necesitas",
  "Una mirada integral: arquitectura, interiores y sensibilidad artesanal en un solo lugar",
];

function AsesoriasPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">
            Servicio de entrada
          </p>
          <h1 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
            Asesorías por hora, cercanas y sin enredos
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            ¿Una duda de distribución, materiales, decoración o funcionalidad?
            En una sesión revisamos tu caso y definimos recomendaciones y
            próximos pasos por escrito.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-oliva">
            Asesorías de interiorismo online para clientes en Colombia y
            alrededor del mundo. También presenciales en Envigado, Medellín.
          </p>
          <a
            href="/contacto?servicio=Asesorías%20profesionales%20por%20hora"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-arcilla"
          >
            Solicitar mi asesoría
          </a>
        </div>
        <img
          src={asesoriaImg}
          alt="Asesoría personalizada revisando planos y muestras de materiales"
          width={1200}
          height={912}
          className="rounded-3xl object-cover shadow-aura"
        />
      </section>

      <section className="bg-nude">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl text-foreground">Así funciona</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((p) => (
              <div key={p.titulo} className="rounded-2xl bg-card p-6 shadow-aura-soft">
                <p.icon className="text-primary" size={26} />
                <h3 className="mt-4 font-display text-lg text-foreground">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-foreground">
              Por qué una asesoría conmigo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Creo que el buen diseño no debería sentirse lejano. Por eso en
              Aura Interior trabajo por hora: un modelo cercano, honesto y
              centrado en lo que realmente necesitas hoy. Soy Jesenya Díaz,
              arquitecta y diseñadora de interiores, y te atiendo
              personalmente, estés donde estés.
            </p>
          </div>
          <ul className="space-y-3">
            {beneficios.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeafDivider className="mx-auto mb-10" />
      <section className="bg-oliva py-16 text-center text-oliva-foreground">
        <h2 className="mx-auto max-w-xl px-6 font-display text-3xl">
          Tu espacio merece una hora de atención profesional
        </h2>
        <a
          href="/contacto?servicio=Asesorías%20profesionales%20por%20hora"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-terracota px-8 py-3 text-sm font-semibold text-terracota-foreground transition-colors hover:bg-arcilla"
        >
          Solicitar asesoría
        </a>
      </section>
    </main>
  );
}
