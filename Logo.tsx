import logoAura from "@/assets/logo-aura.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAura}
      alt="Aura Interior"
      width={688}
      height={526}
      className={`h-14 w-auto ${className}`}
    />
  );
}

export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-arena/40" />
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-arena"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
      >
        <path d="M12 3 C17 8 17 15 12 21 C7 15 7 8 12 3 Z" />
        <path d="M12 7 L12 18" />
      </svg>
      <span className="h-px w-16 bg-arena/40" />
    </div>
  );
}
