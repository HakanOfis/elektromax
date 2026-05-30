import { elektromax as elektromaxTr, type SiteContent, type ServiceSlug } from "@/content/elektromax";
import { elektromaxNl } from "@/content/elektromaxNl";
import { elektromaxEn } from "@/content/elektromaxEn";

export type Locale = "nl" | "en" | "tr";

export function getContent(locale: Locale): SiteContent {
  if (locale === "nl") return elektromaxNl;
  if (locale === "en") return elektromaxEn;
  return elektromaxTr;
}

export function getService(locale: Locale, slug: ServiceSlug) {
  const content = getContent(locale);
  const s = content.services.find((x) => x.slug === slug);
  if (!s) throw new Error("Service not found");
  return s;
}

export { elektromaxTr, elektromaxNl, elektromaxEn };
export type { SiteContent, ServiceSlug };
