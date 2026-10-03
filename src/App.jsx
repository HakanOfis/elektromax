import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { I18nProvider } from "@/lib/i18n";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Projects from "@/pages/Projects";
import ServiceDetail from "@/pages/ServiceDetail";
import Services from "@/pages/Services";

// Zelfde URL-structuur als de vorige site (NL / EN / TR).
const SECTIONS = {
  services: ["/diensten", "/services", "/hizmetler"],
  projects: ["/projecten", "/projects", "/projeler"],
  about: ["/over-ons", "/about", "/hakkimizda"],
  contact: ["/contact", "/iletisim"],
};

// De offline versie draait vanaf file://, daar werken alleen hash-URL's (#/diensten).
const Router = import.meta.env.MODE === "offline" ? HashRouter : BrowserRouter;

export default function App() {
  return (
    <Router>
      <I18nProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {SECTIONS.services.map((p) => (
            <Route key={p} path={p} element={<Services />} />
          ))}
          {SECTIONS.services.map((p) => (
            <Route key={`${p}/:slug`} path={`${p}/:slug`} element={<ServiceDetail />} />
          ))}
          {SECTIONS.projects.map((p) => (
            <Route key={p} path={p} element={<Projects />} />
          ))}
          {SECTIONS.about.map((p) => (
            <Route key={p} path={p} element={<About />} />
          ))}
          {SECTIONS.contact.map((p) => (
            <Route key={p} path={p} element={<Contact />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </I18nProvider>
    </Router>
  );
}
