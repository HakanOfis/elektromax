import { create } from "zustand";
import type { Locale } from "@/content";

type State = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const key = "elektromax.locale";
const cycle: Locale[] = ["nl", "en", "tr"];

function inferLocaleFromPath(pathname: string): Locale | null {
  const path = pathname.toLowerCase();
  const isNl =
    path === "/diensten" ||
    path.startsWith("/diensten/") ||
    path === "/projecten" ||
    path.startsWith("/projecten/") ||
    path === "/over-ons" ||
    path.startsWith("/over-ons/");
  if (isNl) return "nl";

  const isEn =
    path === "/services" ||
    path.startsWith("/services/") ||
    path === "/projects" ||
    path.startsWith("/projects/") ||
    path === "/about" ||
    path.startsWith("/about/");
  if (isEn) return "en";

  const isTr =
    path === "/hizmetler" ||
    path.startsWith("/hizmetler/") ||
    path === "/projeler" ||
    path.startsWith("/projeler/") ||
    path === "/hakkimizda" ||
    path.startsWith("/hakkimizda/") ||
    path === "/iletisim" ||
    path.startsWith("/iletisim/");
  if (isTr) return "tr";

  return null;
}

function inferLocaleFromUrl(): Locale | null {
  if (typeof window === "undefined") return null;
  const hashPath = window.location.hash.replace(/^#/, "");
  const path = hashPath.startsWith("/") ? hashPath : window.location.pathname;
  return inferLocaleFromPath(path);
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "nl";
  const fromUrl = inferLocaleFromUrl();
  if (fromUrl) return fromUrl;
  const saved = window.localStorage.getItem(key);
  if (saved === "nl" || saved === "en" || saved === "tr") return saved;
  const lang = window.navigator.language.toLowerCase();
  if (lang.startsWith("nl")) return "nl";
  if (lang.startsWith("en")) return "en";
  return "nl";
}

function applyDocumentLang(locale: Locale) {
  if (typeof document === "undefined") return;
  const map: Record<Locale, string> = { nl: "nl-BE", en: "en", tr: "tr" };
  document.documentElement.lang = map[locale];
}

export const useLocale = create<State>((set, get) => ({
  locale: getInitialLocale(),
  setLocale: (locale) => {
    set({ locale });
    if (typeof window !== "undefined") window.localStorage.setItem(key, locale);
    applyDocumentLang(locale);
  },
  toggleLocale: () => {
    const idx = cycle.indexOf(get().locale);
    get().setLocale(cycle[(idx + 1) % cycle.length]);
  },
}));

if (typeof document !== "undefined") applyDocumentLang(getInitialLocale());
