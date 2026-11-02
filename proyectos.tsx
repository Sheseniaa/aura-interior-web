import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, DraftingCompass, Layers3 } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";
import asesoriaImg from "@/assets/asesoria.jpg";
import { LeafDivider } from "@/components/Logo";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Portafolio de proyectos — Aura Interior" },
      {
        name: "description",
        content: "Conoce el enfoque de Aura Interior en arquitectura, interiorismo, asesorías y visualización 3D. Solicita información sobre un proyecto.",
      },
    ],
  }),
  component: ProyectosPage,
});

const categories = [
  {
    icon: Layers3,
    title: "Diseño de interiores",
    description: "Conceptualización de ambientes, distribución, selección de materiales, mobiliario, iluminación y detalles decorativos.",
  },
  {
    icon: DraftingCompass,
    title: "Arquitectura y documentación",
    description: "Desarrollo espacial y representación técnica según los objetivos, las condiciones y el alcance de cada proyecto.",
  },
  {
    icon: Camera,
    title: "Modelado y visualización 3D",
    description: "Representación tridimensional para comunicar propuestas, explorar alternativas y facilitar decisiones de diseño.",
  },
];

function ProyectosPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Portafolio</p>
        <div className="mt-3 grid items-end gap-6 md:grid-cols-[1fr_0.7fr]">
          <h1 className="font-display text-4xl text-foreground md:text-5xl">Ideas, procesos y espacios con intención.</h1>
          <p className="text-muted-foreground">Cada proyecto comienza con una necesidad distinta. Esta sección reúne el enfoque de trabajo de Aura Interior y se ampliará con fichas de proyectos, imágenes finales y detalles de cada solución.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-3xl">
          <img src={heroInterior} alt="Imagen de interiorismo de Aura Interior" className="aspect-[16/8] w-full object-cover" />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>Interiorismo · Materialidad · Ambientación</span>
          <span>Imagen de presentación de la marca</span>
        </div>
      </section>

      <section className="bg-nude">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src={asesoriaImg} alt="Materiales y recursos de trabajo para una asesoría de diseño" loading="lazy" className="w-full rounded-3xl object-cover shadow-aura" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Detrás de cada propuesta</p>
              <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Diseñar también es escuchar, analizar y decidir.</h2>
              <p className="mt-4 text-muted-foreground">Antes de definir una solución, revisamos el contexto, las prioridades, las condiciones del espacio y el presupuesto disponible. El resultado debe responder a la vida real de quien lo habita o utiliza.</p>
              <Link to="/asesorias" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Conocer las asesorías <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Áreas de trabajo</p>
        <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Una mirada integral del proyecto</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {categories.map((item) => <article key={item.title} className="rounded-2xl border border-border bg-card p-7"><item.icon className="text-primary" size={28} /><h3 className="mt-5 font-display text-xl text-foreground">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p></article>)}
        </div>
        <div className="mt-10 rounded-3xl border border-dashed border-oliva/50 bg-papel p-6 md:p-8">
          <p className="text-sm font-semibold text-foreground">Portafolio en actualización</p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">Las imágenes de esta página son recursos de presentación incluidos en la web original. Antes del lanzamiento comercial, incorpora aquí fotografías y renders de proyectos propios con su descripción, alcance, año y servicios realizados. Así el visitante podrá evaluar trabajos reales sin confundir imágenes ilustrativas con casos ejecutados.</p>
        </div>
      </section>

      <section className="bg-oliva py-16 text-center text-oliva-foreground">
        <LeafDivider className="mb-7" />
        <h2 className="mx-auto max-w-2xl px-6 font-display text-3xl md:text-4xl">¿Tienes un proyecto en mente?</h2>
        <p className="mx-auto mt-3 max-w-xl px-6 text-sm opacity-85">Cuéntanos qué necesitas y conversemos sobre la mejor manera de desarrollarlo.</p>
        <Link to="/contacto" className="mt-7 inline-flex items-center gap-2 rounded-full bg-terracota px-7 py-3 text-sm font-semibold text-terracota-foreground hover:bg-arcilla">Solicitar una cotización <ArrowRight size={15} /></Link>
      </section>
    </main>
  );
}
