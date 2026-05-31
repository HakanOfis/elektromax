import { useEffect } from "react";
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import { useLocale } from "@/hooks/useLocale";

function inferLocaleFromPath(pathname: string) {
  const path = pathname.toLowerCase();
  const isNl =
    path === "/diensten" ||
    path.startsWith("/diensten/") ||
    path === "/projecten" ||
    path.startsWith("/projecten/") ||
    path === "/over-ons" ||
    path.startsWith("/over-ons/");
  if (isNl) return "nl" as const;

  const isEn =
    path === "/services" ||
    path.startsWith("/services/") ||
    path === "/projects" ||
    path.startsWith("/projects/") ||
    path === "/about" ||
    path.startsWith("/about/");
  if (isEn) return "en" as const;

  const isTr =
    path === "/hizmetler" ||
    path.startsWith("/hizmetler/") ||
    path === "/projeler" ||
    path.startsWith("/projeler/") ||
    path === "/hakkimizda" ||
    path.startsWith("/hakkimizda/") ||
    path === "/iletisim" ||
    path.startsWith("/iletisim/");
  if (isTr) return "tr" as const;

  return null;
}

function LocaleSync() {
  const location = useLocation();
  const locale = useLocale((s) => s.locale);
  const setLocale = useLocale((s) => s.setLocale);

  useEffect(() => {
    const inferred = inferLocaleFromPath(location.pathname);
    if (!inferred || inferred === locale) return;
    setLocale(inferred);
  }, [location.pathname, locale, setLocale]);

  return null;
}

export default function App() {
  const isGitHubPages =
    import.meta.env.PROD &&
    typeof window !== "undefined" &&
    window.location.hostname.endsWith("github.io");
  const Router = isGitHubPages ? HashRouter : BrowserRouter;

  return (
    <Router>
      <LocaleSync />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* NL */}
        <Route path="/diensten" element={<Services />} />
        <Route path="/diensten/:slug" element={<ServiceDetail />} />
        <Route path="/diensten/algemene-elektriciteitswerken" element={<ServiceDetail slug="genel-elektrik" />} />
        <Route path="/diensten/keuring-arei" element={<ServiceDetail slug="keuring-arei" />} />
        <Route path="/diensten/nieuwbouw-werf" element={<ServiceDetail slug="yeni-bina-santiye" />} />
        <Route path="/diensten/ev-laadpalen" element={<ServiceDetail slug="ev-laadpalen" />} />
        <Route path="/diensten/camerabewaking-parlofonie" element={<ServiceDetail slug="kamera-interkom" />} />
        <Route path="/projecten" element={<Projects />} />
        <Route path="/over-ons" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* EN */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/services/general-electrical-works" element={<ServiceDetail slug="genel-elektrik" />} />
        <Route path="/services/inspection-arei" element={<ServiceDetail slug="keuring-arei" />} />
        <Route path="/services/new-construction" element={<ServiceDetail slug="yeni-bina-santiye" />} />
        <Route path="/services/ev-charging-stations" element={<ServiceDetail slug="ev-laadpalen" />} />
        <Route path="/services/cctv-intercom" element={<ServiceDetail slug="kamera-interkom" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />

        {/* TR */}
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
        <Route path="/hizmetler/genel-elektrik" element={<ServiceDetail slug="genel-elektrik" />} />
        <Route path="/hizmetler/keuring-arei" element={<ServiceDetail slug="keuring-arei" />} />
        <Route path="/hizmetler/yeni-bina-santiye" element={<ServiceDetail slug="yeni-bina-santiye" />} />
        <Route path="/hizmetler/ev-laadpalen" element={<ServiceDetail slug="ev-laadpalen" />} />
        <Route path="/hizmetler/kamera-interkom" element={<ServiceDetail slug="kamera-interkom" />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
