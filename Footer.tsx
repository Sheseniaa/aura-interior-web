import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

import { Logo } from "./Logo";
import { CONTACT_EMAIL, buildWhatsAppUrl } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo className="h-20" />
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Diseño que conecta esencia y bienestar
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Arquitectura, diseño de interiores, visualización 3D y artesanía en macramé.
            Espacios funcionales, cálidos y personales. Asesorías presenciales y
            virtuales para Colombia y el mundo, con Jesenya Díaz.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Explora
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/servicios" className="hover:text-terracota">Servicios</Link></li>
            <li><Link to="/proyectos" className="hover:text-terracota">Portafolio</Link></li>
            <li><Link to="/asesorias" className="hover:text-terracota">Asesorías por hora</Link></li>
            <li><Link to="/tienda" className="hover:text-terracota">Tienda artesanal</Link></li>
            <li><Link to="/contacto" className="hover:text-terracota">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Hablemos
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-primary" />
              <span>{CONTACT_EMAIL}</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} className="text-primary" />
              <a href={buildWhatsAppUrl("Hola, Aura Interior. Quisiera información sobre sus servicios.")} target="_blank" rel="noopener noreferrer" className="hover:text-terracota">WhatsApp: +31 33648105</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={15} className="text-primary" />
              <a
                href="https://www.instagram.com/_aura.interior/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracota"
              >
                @_aura.interior
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-primary" /> Envigado, Medellín, Colombia
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aura Interior — Diseño que conecta esencia y bienestar
      </div>
    </footer>
  );
}
