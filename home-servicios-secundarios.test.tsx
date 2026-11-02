import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

// The rule: "Llave en mano" is not offered on the site yet, so no page may show
// it — checked on the source of both pages so no container, label or icon of the
// block can survive unnoticed.
const homeSource = readFileSync(path.resolve("src/routes/index.tsx"), "utf8");
const serviciosSource = readFileSync(path.resolve("src/routes/servicios.tsx"), "utf8");

describe("Home page — secondary services card", () => {
  it("includes the 3D visualization offer in the service architecture", () => {
    expect(homeSource).toContain("Modelado 3D y renders");
    expect(homeSource).toContain("Visualización de espacios");
    expect(homeSource).toContain("Cuboid");
  });

  it("has no trace of the llave en mano block", () => {
    expect(homeSource).not.toMatch(/llave en mano/i);
    expect(homeSource).not.toMatch(/próximamente/i);
    expect(homeSource).not.toContain("Hammer");
  });
});

describe("Servicios page — llave en mano removed", () => {
  it("has no trace of the llave en mano card or label", () => {
    expect(serviciosSource).not.toMatch(/llave en mano/i);
    expect(serviciosSource).not.toMatch(/próximamente/i);
    expect(serviciosSource).not.toContain("Hammer");
    expect(serviciosSource).not.toMatch(/\bproximo\b/);
  });

  it("still lists the four services that are active", () => {
    expect(serviciosSource).toContain("Asesorías profesionales");
    expect(serviciosSource).toContain("Diseño arquitectónico y planos");
    expect(serviciosSource).toContain("Diseño de interiores y decoración");
    expect(serviciosSource).toContain("Modelado 3D y visualización");
  });
});
