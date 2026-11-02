import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, HeartHandshake, Sparkles } from "lucide-react";
import macrame1 from "@/assets/macrame-1.jpg";
import macrame2 from "@/assets/macrame-2.jpg";
import macrame3 from "@/assets/macrame-3.jpg";
import { LeafDivider } from "@/components/Logo";
import { buildWhatsAppUrl } from "@/lib/contact";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda artesanal de macramé — Aura Interior" },
      {
        name: "description",
        content:
          "Piezas únicas de macramé tejidas a mano: tapices de pared, colgadores de plantas y textiles en tonos terracota, oliva y nude.",
      },
      { property: "og:title", content: "Tienda artesanal de macramé — Aura Interior" },
      {
        property: "og:description",
        content:
          "Detalles tejidos a mano que traen calma, textura y calidez a tu hogar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TiendaPage,
});

const productos = [
  {
    img: macrame1,
    nombre: "Tapiz de pared Terracota",
    descripcion: "Tejido a mano en algodón crudo y terracota. El punto de calma que tu sala o tu recámara estaba pidiendo.",
    precio: "$180.000 COP",
  },
  {
    img: macrame2,
    nombre: "Colgador de plantas Oliva",
    descripcion: "Macramé en verde oliva y crudo que deja a tus plantas favoritas en su mejor lugar.",
    precio: "$65.000 COP",
  },
  {
    img: macrame3,
    nombre: "Set cojín y camino de mesa",
    descripcion: "Textiles en tonos nude y óxido que visten tu mesa y tu sofá de la misma manera tranquila.",
    precio: "$140.000 COP",
  },
];

const valores = [
  {
    icon: HeartHandshake,
    titulo: "Hecho a mano",
    texto: "Se teje nudo a nudo, con tiempo y cuidado. Ninguna pieza se repite.",
  },
  {
    icon: Leaf,
    titulo: "Materiales naturales",
    texto: "Algodón, fibras y maderas nobles en una paleta terracota, oliva y nude.",
  },
  {
    icon: Sparkles,
    titulo: "Energía zen",
    texto: "Piezas que nacen para traer calma, textura y calidez a tu hogar.",
  },
];

function TiendaPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay">
        Tienda artesanal
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl text-foreground md:text-5xl">
        Macramé con alma zen
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Tejer es la otra cara de la misma forma de ver el mundo: calidez,
        naturaleza y equilibrio. Estas piezas están disponibles hoy; si sueñas
        con una a tu medida, escríbenos y la hacemos juntas.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <article
            key={p.nombre}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-aura-soft"
          >
            <img
              src={p.img}
              alt={p.nombre}
              width={912}
              height={1104}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="p-6">
              <h2 className="font-display text-xl text-foreground">{p.nombre}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.descripcion}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-lg text-primary">{p.precio}</span>
                <a
                  href={buildWhatsAppUrl(`Hola, Aura Interior. Me interesa el producto ${p.nombre} (${p.precio}). ¿Podrían confirmarme disponibilidad y opciones de entrega?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-arcilla"
                >
                  Consultar producto
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-6 rounded-3xl bg-nude p-10 shadow-aura-soft sm:grid-cols-3">
        {valores.map((v) => (
          <div key={v.titulo} className="text-center">
            <v.icon className="mx-auto text-primary" size={28} />
            <h3 className="mt-3 font-display text-lg text-foreground">{v.titulo}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{v.texto}</p>
          </div>
        ))}
      </div>

      <LeafDivider className="mt-12" />
      <p className="mt-6 text-center text-sm text-muted-foreground">
        ¿Buscas una pieza personalizada?{" "}
        <Link to="/contacto" className="font-semibold text-primary hover:underline">
          Cuéntame tu idea
        </Link>{" "}
        y la tejemos juntas.
      </p>
    </main>
  );
}
