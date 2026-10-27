/**
 * Genera la imagen para compartir la landing en redes (Open Graph + Twitter/X).
 *
 *   pnpm og:image
 *
 * Salida (1200×630 PNG, mismos bytes en ambos archivos):
 *   src/app/opengraph-image.png
 *   src/app/twitter-image.png
 *
 * Usa únicamente archivos locales: ilustraciones aprobadas de `public/illustrations/`
 * y las fuentes de marca de las devDependencies `@fontsource/nunito-sans` e `@fontsource/inter`.
 * No descarga nada ni usa datos de campaña que cambien (no muestra el avance 37/100).
 * Si cambias el copy, actualiza también los `*.alt.txt` de `src/app/`.
 */
import { readFile, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import path from "node:path"
import { createRequire } from "node:module"
import { ImageResponse } from "next/og.js"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const require = createRequire(import.meta.url)
const fontFile = (pkg, file) => path.join(path.dirname(require.resolve(`${pkg}/package.json`)), "files", file)

const WIDTH = 1200
const HEIGHT = 630
const MARGIN = 60

// Paleta de marca (docs/brief.md §Color)
const C = { cream: "#FFF7E8", forest: "#184D3A", coral: "#F04F3D", golden: "#F6BE3E", ink: "#17322A" }

const art = async (name) =>
  `data:image/png;base64,${(await readFile(path.join(root, "public/illustrations", `${name}.png`))).toString("base64")}`
const font = async (pkg, file) => readFile(fontFile(pkg, file))

const h = (type, style, children, props = {}) => ({ type, props: { style: { display: "flex", ...style }, children, ...props } })
const img = (src, style) => ({ type: "img", props: { src, style: { position: "absolute", ...style } } })

const [lockup, giftPile, blob, nunito900, nunito800, inter600] = await Promise.all([
  art("footer-logo-lockup-no-location"),
  art("cta-100-gift-pile"),
  art("deco-blob-golden"),
  font("@fontsource/nunito-sans", "nunito-sans-latin-900-normal.woff"),
  font("@fontsource/nunito-sans", "nunito-sans-latin-800-normal.woff"),
  font("@fontsource/inter", "inter-latin-600-normal.woff"),
])

const pill = (text, bg, color) =>
  h("div", {
    background: bg, color, fontFamily: "Nunito Sans", fontWeight: 800, fontSize: 28, lineHeight: 1,
    padding: "14px 24px", borderRadius: 999, border: `4px solid ${C.forest}`,
  }, text)

const tree = h(
  "div",
  { position: "relative", width: WIDTH, height: HEIGHT, background: C.cream, overflow: "hidden" },
  [
    // Decoración detrás de la ilustración
    img(blob, { right: -40, top: 70, width: 600, height: 560, opacity: 0.9 }),
    img(giftPile, { right: MARGIN - 10, top: 48, width: 534, height: 530 }),

    // Columna de texto
    h("div", { position: "absolute", left: MARGIN, top: 44, width: 560, height: 560, flexDirection: "column" }, [
      img(lockup, { left: -8, top: 0, width: 380, height: 218 }),
      h("div", {
        position: "absolute", left: 0, top: 246, flexDirection: "column", fontFamily: "Nunito Sans", fontWeight: 900,
        fontSize: 64, lineHeight: 1.04, color: C.forest, letterSpacing: -1,
      }, [
        h("div", { display: "flex" }, [
          h("span", { color: C.coral }, "100"),
          h("span", {}, "\u00a0regalos"),
        ]),
        h("div", { display: "flex" }, [h("span", {}, "para\u00a0"), h("span", { color: C.coral }, "100"), h("span", {}, "\u00a0sonrisas")]),
      ]),
      h("div", { position: "absolute", left: 0, top: 410, gap: 14, flexDirection: "row" }, [
        pill("Dona un juguete", C.forest, C.cream),
        pill("Recolecta navideña 2026", C.golden, C.forest),
      ]),
      h("div", {
        position: "absolute", left: 0, top: 490, fontFamily: "Inter", fontWeight: 600, fontSize: 26, color: C.ink,
      }, "Juguetes nuevos para niñas y niños"),
    ]),
  ],
)

const response = new ImageResponse(tree, {
  width: WIDTH,
  height: HEIGHT,
  fonts: [
    { name: "Nunito Sans", data: nunito900, weight: 900, style: "normal" },
    { name: "Nunito Sans", data: nunito800, weight: 800, style: "normal" },
    { name: "Inter", data: inter600, weight: 600, style: "normal" },
  ],
})
const png = Buffer.from(await response.arrayBuffer())
for (const name of ["opengraph-image.png", "twitter-image.png"]) {
  await writeFile(path.join(root, "src/app", name), png)
}
console.log(`OK ${WIDTH}x${HEIGHT} · ${(png.length / 1024).toFixed(0)} KB`)
