// GitHub Pages kent geen SPA-routing: elke route krijgt een eigen index.html (HTTP 200),
// en 404.html vangt alle overige paden op.
import { copyFileSync, mkdirSync } from "node:fs";

const sections = ["diensten", "services", "hizmetler", "projecten", "projects", "projeler", "over-ons", "about", "hakkimizda", "contact", "iletisim"];
const serviceSlugs = {
  diensten: ["algemene-elektriciteitswerken", "keuring-arei", "nieuwbouw-werf", "ev-laadpalen", "camerabewaking-parlofonie"],
  services: ["general-electrical-works", "inspection-arei", "new-construction", "ev-charging-stations", "cctv-intercom"],
  hizmetler: ["genel-elektrik", "keuring-arei", "yeni-bina-santiye", "ev-laadpalen", "kamera-interkom"],
};

const routes = [...sections, ...Object.entries(serviceSlugs).flatMap(([base, slugs]) => slugs.map((s) => `${base}/${s}`))];

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync("dist/index.html", `dist/${route}/index.html`);
}
copyFileSync("dist/index.html", "dist/404.html");
console.log(`pages-routes: ${routes.length} routes + 404.html`);
