import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Cuboid, MessageCircle, Palette } from "lucide-react";
import { LeafDivider } from "@/components/Logo";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Aura Interior" },
      {
        name: "description",
        content:
          "Asesorías personalizadas por hora, diseño de interiores, planos arquitectónicos y modelado 3D. Conoce los servicios de Aura Interior.",
      },
      { property: "og:title", content: "Servicios — Aura Interior" },
      {
        property: "og:description",
        content:
          "Asesorías por hora, diseño de interiores, planos arquitectónicos y modelado 3D para dar forma a tu espacio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiciosPage,
});

const servicios = [
  {
    icon: Palette,
    titulo: "Diseño de interiores y decoración",
    descripcion:
      "Desarrollamos propuestas para espacios residenciales y comerciales: distribución, ambientación, selección de materiales, paleta de color, mobiliario e iluminación según el alcance del proyecto.",
    incluye: ["Concepto y propuesta de diseño", "Distribución y ambientación", "Selección de materiales y paleta", "Diseño de mobiliario y detalles"],
  },
  {
    icon: Compass,
    titulo: "Diseño arquitectónico y planos",
    descripcion:
      "Damos forma a tu idea desde el primer trazo, con soluciones espaciales y documentación definida según las necesidades y condiciones del proyecto.",
    incluye: ["Concepto y anteproyecto", "Planos arquitectónicos", "Documentación según alcance", "Acompañamiento en decisiones"],
  },
  {
    icon: MessageCircle,
    titulo: "Asesorías profesionales por hora",
    descripcion:
      "Orientación personalizada para resolver dudas puntuales de arquitectura o diseño. Revisamos tu caso, definimos prioridades y te entregamos recomendaciones aplicables.",
    incluye: ["Revisión previa de tu necesidad", "Sesión presencial o virtual", "Orientación sobre distribución y materiales", "Resumen y recomendaciones posteriores"],
  },
  {
    icon: Cuboid,
    titulo: "Modelado 3D y visualización",
    descripcion:
      "Representamos espacios y propuestas en tres dimensiones para comunicar ideas, explorar alternativas y tomar decisiones antes de ejecutar.",
    incluye: ["Modelado 3D de espacios", "Renders de interiores", "Visualización de mobiliario", "Apoyo para presentación de proyectos"],
  },
];

function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">
        Servicios
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-foreground md:text-5xl">
        Todo lo que tu espacio necesita, en un solo lugar
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Puedes contratar un servicio puntual o desarrollar un proyecto integral.
        Combinamos criterio arquitectónico, sensibilidad estética y visualización
        para responder al alcance real de cada necesidad.
      </p>

      <div className="mt-12 space-y-6">
        {servicios.map((s) => (
          <article
            key={s.titulo}
            className="grid gap-6 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr_1fr]"
          >
            <div>
              <s.icon className="text-primary" size={30} />
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground">{s.titulo}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.descripcion}
              </p>
            </div>
            <div className="self-center">
              <ul className="space-y-2">
                {s.incluye.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
              <a href={`/contacto?servicio=${encodeURIComponent(s.titulo)}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Solicitar información <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>

      <LeafDivider className="mt-16" />
      <div className="mt-8 rounded-3xl bg-oliva p-10 text-center text-oliva-foreground shadow-aura">
        <h2 className="font-display text-2xl md:text-3xl">
          ¿No sabes por dónde empezar?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm opacity-85">
          Cuéntanos qué necesitas. Revisaremos el alcance y te orientaremos hacia
          el servicio adecuado antes de preparar una propuesta.
        </p>
        <Link
          to="/contacto"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-terracota px-7 py-3 text-sm font-semibold text-terracota-foreground transition-colors hover:bg-arcilla"
        >
          Solicitar cotización <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
