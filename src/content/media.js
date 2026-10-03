// Foto's: CC0 (Openverse / rawpixel / StockSnap / Wikimedia) en Unsplash-licentie, lokaal geoptimaliseerd naar WebP.
import algemeen from "@/assets/img/algemeen.webp";
import zekeringkast from "@/assets/img/zekeringkast.webp";
import nieuwbouw from "@/assets/img/nieuwbouw.webp";
import laadpaal from "@/assets/img/laadpaal.webp";
import camera from "@/assets/img/camera.webp";
import zonnepanelen from "@/assets/img/zonnepanelen.webp";
import zonnepanelenPlaatsing from "@/assets/img/zonnepanelen-plaatsing.webp";
import woningAvond from "@/assets/img/woning-avond.webp";
import elektricienKast from "@/assets/img/elektricien-kast.webp";
import elektricienWerf from "@/assets/img/elektricien-werf.webp";
import bekabelingKast from "@/assets/img/bekabeling-kast.webp";
import elektricienMeting from "@/assets/img/elektricien-meting.webp";
import kabels from "@/assets/img/kabels.webp";
import woningTuin from "@/assets/img/woning-tuin.webp";
import cameraWand from "@/assets/img/camera-wand.webp";

export const img = {
  algemeen,
  zekeringkast,
  nieuwbouw,
  laadpaal,
  camera,
  zonnepanelen,
  zonnepanelenPlaatsing,
  woningAvond,
  elektricienKast,
  elektricienWerf,
  bekabelingKast,
  elektricienMeting,
  kabels,
  woningTuin,
  cameraWand,
};

export const serviceImages = {
  "genel-elektrik": algemeen,
  "keuring-arei": zekeringkast,
  "yeni-bina-santiye": nieuwbouw,
  "ev-laadpalen": laadpaal,
  "kamera-interkom": camera,
};

// Volgorde = volgorde van content.projects
export const projectImages = [bekabelingKast, elektricienWerf, cameraWand, laadpaal];
