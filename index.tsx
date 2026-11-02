import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cuboid, DraftingCompass, MessageCircle, Palette, Sparkles } from "lucide-react";
import heroInterior from "@/assets/hero-interior.jpg";
import asesoriaImg from "@/assets/asesoria.jpg";
import macrame1 from "@/assets/macrame-1.jpg";
import macrame2 from "@/assets/macrame-2.jpg";
import macrame3 from "@/assets/macrame-3.jpg";
import { LeafDivider } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Interior | Arquitectura, interiorismo y visualización 3D" },
      {
        name: "description",
        content:
          "Diseño de interiores, arquitectura, asesorías y visualización 3D. Proyectos personalizados en Colombia y servicios virtuales para clientes internacionales.",
      },
      { property: "og:title", content: "Aura Interior — Arquitectura & Diseño" },
      {
        property: "og:description",
        content: "Arquitectura, interiorismo y visualización 3D para crear espacios funcionales, estéticos y conectados contigo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Palette,
    title: "Diseño de interiores",
    description: "Propuestas integrales para transformar espacios residenciales y comerciales, desde la distribución hasta los materiales y detalles.",
    link: "/servicios" as const,
  },
  {
    icon: DraftingCompass,
    title: "Arquitectura y planos",
    description: "Desarrollo de conceptos, distribución espacial y documentación arquitectónica según el alcance de cada proyecto.",
    link: "/servicios" as const,
  },
  {
    icon: MessageCircle,
    title: "Asesorías personalizadas",
    description: "Orientación profesional para resolver decisiones de distribución, materiales, iluminación y decoración.",
    link: "/asesorias" as const,
  },
  {
    icon: Cuboid,
    title: "Modelado 3D y renders",
    description: "Visualización de espacios y propuestas para comunicar ideas y tomar decisiones antes de ejecutar.",
    link: "/servicios" as const,
  },
];

export function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[0.95fr_1.05fr] md:py-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-clay">
              Arquitectura · Interiores · Visualización 3D
            </p>
            <p className="mt-3 font-display text-lg italic text-oliva">Diseño que conecta esencia y bienestar</p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
              Diseñamos espacios que reflejan tu esencia.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Creamos espacios funcionales, estéticos y personales a través de la arquitectura y el diseño de interiores. Desde la primera idea hasta una propuesta visual clara, cada decisión responde a tu forma de vivir o trabajar.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Soy Jesenya Díaz, arquitecta y diseñadora de interiores. Trabajo desde Envigado, Colombia, con proyectos en el país y servicios virtuales para clientes internacionales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-arcilla">
                Solicitar una cotización <ArrowRight size={16} />
              </Link>
              <Link to="/proyectos" className="inline-flex items-center gap-2 rounded-full border border-oliva px-6 py-3.5 text-sm font-semibold text-oliva transition-colors hover:bg-secondary">
                Explorar proyectos
              </Link>
            </div>
            <p className="mt-5 text-xs tracking-wide text-muted-foreground">Atención en Colombia · Asesorías y servicios digitales internacionales</p>
          </div>
          <div className="relative">
            <img src={heroInterior} alt="Interior cálido con materiales naturales y detalles artesanales" width={1600} height={1104} fetchPriority="high" className="aspect-[5/4] w-full rounded-3xl object-cover shadow-aura md:aspect-[4/5]" />
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-papel/95 px-5 py-4 shadow-aura-soft backdrop-blur-sm md:left-[-2rem]">
              <p className="font-display text-xl text-foreground">Diseño con intención</p>
              <p className="mt-1 text-xs text-muted-foreground">Funcionalidad, belleza y bienestar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nude">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="grid gap-6 text-center sm:grid-cols-3 sm:text-left">
            <div><p className="font-display text-2xl text-foreground">Mirada arquitectónica</p><p className="mt-2 text-sm text-muted-foreground">Decisiones espaciales con criterio técnico y estético.</p></div>
            <div><p className="font-display text-2xl text-foreground">Diseño personalizado</p><p className="mt-2 text-sm text-muted-foreground">Cada propuesta parte de tus necesidades y prioridades.</p></div>
            <div><p className="font-display text-2xl text-foreground">Alcance flexible</p><p className="mt-2 text-sm text-muted-foreground">Proyectos en Colombia y acompañamiento virtual internacional.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Cómo puedo ayudarte</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
          <div><h2 className="font-display text-3xl text-foreground md:text-4xl">Servicios para cada etapa de tu proyecto</h2><p className="mt-3 max-w-2xl text-muted-foreground">Puedes contratar un servicio puntual o desarrollar un proyecto de manera integral.</p></div>
          <Link to="/servicios" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Ver todos los servicios <ArrowRight size={15} /></Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-aura-soft">
              <service.icon className="text-primary" size={27} />
              <h3 className="mt-5 font-display text-xl text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <Link to={service.link} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Conocer servicio <ArrowRight size={14} /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-papel">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <img src={asesoriaImg} alt="Material de trabajo y proceso de asesoría de diseño" width={1200} height={912} loading="lazy" className="w-full rounded-3xl object-cover shadow-aura" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Una forma de trabajar contigo</p>
            <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Un proceso claro, desde la primera conversación.</h2>
            <p className="mt-4 text-muted-foreground">Escuchamos lo que necesitas, revisamos el alcance y presentamos una propuesta antes de comenzar. Así sabes qué incluye el servicio, cuáles son sus entregables y qué decisiones siguen.</p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {["Entendemos tus objetivos y necesidades", "Definimos alcance, tiempos y entregables", "Presentamos una cotización clara", "Desarrollamos y entregamos la propuesta acordada"].map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />{item}</li>)}
            </ul>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-arcilla">Cuéntame tu proyecto <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">Selección visual</p><h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Explora el universo Aura</h2><p className="mt-3 max-w-xl text-sm text-muted-foreground">Una muestra de los recursos visuales y artesanales de la marca. En el portafolio encontrarás la estructura para presentar proyectos con su contexto, alcance y resultados.</p></div>
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Ver portafolio <ArrowRight size={15} /></Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          <Link to="/proyectos" className="group"><img src={heroInterior} alt="Interiorismo y ambientación con materiales naturales" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover transition-transform group-hover:scale-[1.01]" /><p className="mt-3 font-display text-xl text-foreground">Interiorismo</p><p className="text-xs text-muted-foreground">Espacios y atmósferas</p></Link>
          <Link to="/proyectos" className="group"><img src={asesoriaImg} alt="Proceso de asesoría y selección de materiales" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover transition-transform group-hover:scale-[1.01]" /><p className="mt-3 font-display text-xl text-foreground">Proceso de diseño</p><p className="text-xs text-muted-foreground">Análisis y decisiones</p></Link>
          <Link to="/tienda" className="group"><img src={macrame1} alt="Pieza artesanal de macramé" loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover transition-transform group-hover:scale-[1.01]" /><p className="mt-3 font-display text-xl text-foreground">Aura artesanal</p><p className="text-xs text-muted-foreground">Piezas hechas a mano</p></Link>
        </div>
      </section>

      <section className="bg-oliva text-oliva-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:grid-cols-[1fr_auto] md:py-16">
          <div><p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-70">Hecho a mano</p><h2 className="mt-3 font-display text-3xl md:text-4xl">Detalles que también cuentan historias.</h2><p className="mt-3 max-w-xl text-sm opacity-85">Descubre la línea artesanal de macramé: piezas decorativas que suman textura, calidez y personalidad a tus espacios.</p></div>
          <Link to="/tienda" className="inline-flex items-center justify-center gap-2 rounded-full bg-terracota px-6 py-3 text-sm font-semibold text-terracota-foreground transition-colors hover:bg-arcilla">Explorar tienda <ArrowRight size={16} /></Link>
          <div className="grid gap-4 sm:grid-cols-3 md:col-span-2">
            {[{ img: macrame1, name: "Tapices" }, { img: macrame2, name: "Colgadores" }, { img: macrame3, name: "Textiles" }].map((product) => <Link key={product.name} to="/tienda" className="group"><img src={product.img} alt={`Producto artesanal: ${product.name}`} loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover transition-transform group-hover:scale-[1.01]" /><p className="mt-2 text-sm font-medium">{product.name}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <LeafDivider className="mb-8" />
        <Sparkles className="mx-auto text-primary" size={25} />
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl text-foreground md:text-5xl">Tu próximo espacio comienza con una conversación.</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Cuéntame qué quieres transformar. Revisaremos tus necesidades y te orientaré hacia el servicio adecuado.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contacto" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-arcilla">Solicitar una cotización <ArrowRight size={16} /></Link>
          <Link to="/asesorias" className="inline-flex items-center gap-2 rounded-full border border-oliva px-8 py-3.5 text-sm font-semibold text-oliva hover:bg-secondary">Conocer las asesorías</Link>
        </div>
      </section>
    </main>
  );
}
