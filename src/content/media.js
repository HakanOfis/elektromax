// Foto's: site.json bevat per plek een bestandsnaam uit src/assets/img/ (bronnen in CREDITS.md).
// Het paneel kan nieuwe foto's uploaden en alleen de bestandsnaam aanpassen.
import data from "./site.json";

const files = import.meta.glob("../assets/img/*.{webp,jpg,jpeg,png}", { eager: true, import: "default" });
const byName = Object.fromEntries(Object.entries(files).map(([path, url]) => [path.split("/").pop(), url]));

export const photo = (name) => byName[name];

const slot = (key) => byName[data.images[key]];

export const img = {
  elektricienKast: slot("hero"),
  laadpaal: slot("heroSmall"),
  zekeringkast: slot("keuring"),
  elektricienWerf: slot("trust"),
  elektricienMeting: slot("about"),
  woningAvond: slot("aboutHero"),
  bekabelingKast: slot("servicesHero"),
  nieuwbouw: slot("projectsHero"),
  kabels: slot("contactHero"),
};

export const serviceImages = Object.fromEntries(
  ["genel-elektrik", "keuring-arei", "yeni-bina-santiye", "ev-laadpalen", "kamera-interkom"].map((s) => [s, slot(`service-${s}`)]),
);
