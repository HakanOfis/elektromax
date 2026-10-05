import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { extras, getContent, ui as uiStrings } from "@/content";

export const LOCALES = [
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "en", label: "EN", name: "English" },
  { code: "tr", label: "TR", name: "Türkçe" },
];

// Publieke URL-slugs per taal (zelfde paden als de vorige site, zodat bestaande links blijven werken).
export const SERVICE_SLUGS = {
  nl: {
    "genel-elektrik": "algemene-elektriciteitswerken",
    "keuring-arei": "keuring-arei",
    "yeni-bina-santiye": "nieuwbouw-werf",
    "ev-laadpalen": "ev-laadpalen",
    "kamera-interkom": "camerabewaking-parlofonie",
  },
  en: {
    "genel-elektrik": "general-electrical-works",
    "keuring-arei": "inspection-arei",
    "yeni-bina-santiye": "new-construction",
    "ev-laadpalen": "ev-charging-stations",
    "kamera-interkom": "cctv-intercom",
  },
  tr: {
    "genel-elektrik": "genel-elektrik",
    "keuring-arei": "keuring-arei",
    "yeni-bina-santiye": "yeni-bina-santiye",
    "ev-laadpalen": "ev-laadpalen",
    "kamera-interkom": "kamera-interkom",
  },
};

export function resolveServiceSlug(param) {
  for (const map of Object.values(SERVICE_SLUGS)) {
    for (const [internal, pub] of Object.entries(map)) {
      if (param === internal || param === pub) return internal;
    }
  }
  return null;
}

const SECTION_BY_PATH = {
  diensten: ["nl", "services"],
  projecten: ["nl", "projects"],
  "over-ons": ["nl", "about"],
  services: ["en", "services"],
  projects: ["en", "projects"],
  about: ["en", "about"],
  hizmetler: ["tr", "services"],
  projeler: ["tr", "projects"],
  hakkimizda: ["tr", "about"],
  iletisim: ["tr", "contact"],
  contact: [null, "contact"],
};

function parsePath(pathname) {
  const [first, second] = pathname.toLowerCase().split("/").filter(Boolean);
  if (!first) return { locale: null, section: "home" };
  const hit = SECTION_BY_PATH[first];
  if (!hit) return { locale: null, section: null };
  return { locale: hit[0], section: hit[1], slug: second };
}

const STORAGE_KEY = "elektromax.locale";

function readStoredLocale() {
  // ?lang=tr (bv. vanuit het paneel) heeft voorrang
  const fromQuery = new URLSearchParams(window.location.search).get("lang");
  if (LOCALES.some((l) => l.code === fromQuery)) return fromQuery;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (LOCALES.some((l) => l.code === v)) return v;
  } catch {
    // storage niet beschikbaar
  }
  return "nl";
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [stored, setStored] = useState(readStoredLocale);

  const fromPath = parsePath(location.pathname).locale;
  const locale = fromPath ?? stored;

  useEffect(() => {
    if (fromPath && fromPath !== stored) setStored(fromPath);
  }, [fromPath, stored]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // negeren
    }
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback(
    (next) => {
      setStored(next);
      const { section, slug } = parsePath(location.pathname);
      const r = uiStrings[next].routes;
      if (section === "services") {
        const internal = slug ? resolveServiceSlug(slug) : null;
        navigate(internal ? `${r.services}/${SERVICE_SLUGS[next][internal]}` : r.services);
      } else if (section === "projects") navigate(r.projects);
      else if (section === "about") navigate(r.about);
      else if (section === "contact") navigate(r.contact);
    },
    [location.pathname, navigate],
  );

  const value = useMemo(() => {
    const ui = uiStrings[locale];
    return {
      locale,
      setLocale,
      content: getContent(locale),
      ui,
      x: extras[locale],
      servicePath: (internal) => `${ui.routes.services}/${SERVICE_SLUGS[locale][internal]}`,
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function useContactLinks() {
  const { content, x } = useI18n();
  const digits = content.contact.phone.replace(/\D/g, "");
  return {
    tel: `tel:+${digits}`,
    mail: `mailto:${content.contact.email}`,
    whatsapp: (message = x.waMessage) => `https://wa.me/${digits}?text=${encodeURIComponent(message)}`,
  };
}
