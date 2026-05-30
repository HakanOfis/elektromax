import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* NL */}
        <Route path="/diensten" element={<Services />} />
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
        <Route path="/services/general-electrical-works" element={<ServiceDetail slug="genel-elektrik" />} />
        <Route path="/services/inspection-arei" element={<ServiceDetail slug="keuring-arei" />} />
        <Route path="/services/new-construction" element={<ServiceDetail slug="yeni-bina-santiye" />} />
        <Route path="/services/ev-charging-stations" element={<ServiceDetail slug="ev-laadpalen" />} />
        <Route path="/services/cctv-intercom" element={<ServiceDetail slug="kamera-interkom" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />

        {/* TR */}
        <Route path="/hizmetler" element={<Services />} />
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
