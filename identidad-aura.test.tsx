import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

// The rule: the brand palette, fonts and the official logo of "Aura Interior"
// must stay applied across the whole site, so the shared style sheet, the font
// load and the shared header/footer are checked against the approved identity
// values. The logo is the image the client supplied, used unmodified.
const css = readFileSync(path.resolve("src/styles.css"), "utf8");
const rootRoute = readFileSync(path.resolve("src/routes/__root.tsx"), "utf8");
const header = readFileSync(path.resolve("src/components/Header.tsx"), "utf8");
const footer = readFileSync(path.resolve("src/components/Footer.tsx"), "utf8");
const logo = readFileSync(path.resolve("src/components/Logo.tsx"), "utf8");

describe("Aura Interior identity", () => {
  it("keeps the approved palette as the global tokens", () => {
    expect(css).toContain("--background: #f0e8df");
    expect(css).toContain("--foreground: #5e5448");
    expect(css).toContain("--primary: #a05135");
    expect(css).toContain("--oliva: #737b4c");
    expect(css).toContain("--arena: #b88e6a");
    expect(css).toContain("--nude: #e8dfc6");
  });

  it("loads the brand fonts and uses them as display and body", () => {
    expect(rootRoute).toContain("Cormorant+Garamond");
    expect(rootRoute).toContain("Lato");
    expect(css).toContain('--font-display: "Cormorant Garamond"');
    expect(css).toContain('--font-sans: "Lato"');
  });

  it("shows the official logo image in the shared header and footer", () => {
    expect(header).toContain('import { Logo } from "./Logo"');
    expect(header).toContain("<Logo");
    expect(footer).toContain("<Logo");
    expect(logo).toContain('import logoAura from "@/assets/logo-aura.png"');
    expect(logo).toContain("src={logoAura}");
    expect(logo).toContain('alt="Aura Interior"');
  });

  it("no longer draws the brand name by hand", () => {
    expect(logo).not.toContain("<text");
    expect(logo).not.toContain("letterSpacing");
  });

  it("keeps the brand slogan where the logo appears", () => {
    expect(footer).toContain("Diseño que conecta esencia y bienestar");
  });
});
