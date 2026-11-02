import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/proyectos", label: "Portafolio" },
  { to: "/asesorias", label: "Asesorías" },
  { to: "/tienda", label: "Tienda artesanal" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-papel transition-[box-shadow,border-color] duration-500 ease-out border-b ${
        scrolled ? "border-arena/25 shadow-[0_6px_20px_-18px_rgba(94,84,72,0.45)]" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 transition-[padding] duration-500 ease-out md:flex md:justify-between ${
          scrolled ? "py-0" : "py-1"
        }`}
      >
        <Link to="/" className="min-w-0 shrink-0" aria-label="Aura Interior — ir al inicio">
          <Logo
            className={`transition-[height] duration-500 ease-out ${
              scrolled ? "!h-16 md:!h-[4.5rem]" : "!h-20 md:!h-28"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-terracota"
              activeProps={{ className: "text-xs font-semibold uppercase tracking-[0.18em] text-terracota" }}
            >
              {l.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-arena/40" aria-hidden="true" />
          <Link
            to="/contacto"
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-arcilla"
          >
            Solicitar cotización
          </Link>
        </nav>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-arena/25 bg-papel px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-arena/15 py-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
          >
            Solicitar cotización
          </Link>
        </nav>
      )}
    </header>
  );
}
