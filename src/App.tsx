import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/hizmetler/genel-elektrik" element={<ServiceDetail slug="genel-elektrik" />} />
        <Route path="/hizmetler/keuring-arei" element={<ServiceDetail slug="keuring-arei" />} />
        <Route path="/hizmetler/yeni-bina-santiye" element={<ServiceDetail slug="yeni-bina-santiye" />} />
        <Route path="/hizmetler/ev-laadpalen" element={<ServiceDetail slug="ev-laadpalen" />} />
        <Route path="/hizmetler/kamera-interkom" element={<ServiceDetail slug="kamera-interkom" />} />
        <Route path="/projeler" element={<Projects />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/over-ons" element={<Navigate to="/hakkimizda" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
