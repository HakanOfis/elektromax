import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { motion } from "motion/react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfferDialog from "@/components/OfferDialog";
import { useContactLinks, useI18n } from "@/lib/i18n";

function setMeta(name, value) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function WhatsAppFab() {
  const links = useContactLinks();
  return (
    <a
      href={links.whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-5 bottom-24 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] transition hover:scale-105 md:bottom-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden="true" />
      <svg viewBox="0 0 32 32" fill="currentColor" className="relative size-7" aria-hidden="true">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.82A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.87-.53-5.51-1.51l-.39-.23-4.57 1.08 1.1-4.45-.25-.4A9.97 9.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.47-7.47c-.3-.15-1.770-.87-2.040-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.470-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}

// Vaste belbalk onderaan op mobiel, zoals bij de meeste Belgische vakmansites.
function MobileCallBar() {
  const { ui, x } = useI18n();
  const links = useContactLinks();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
      <a href={links.tel} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy font-semibold text-white">
        <Phone className="size-4" /> {x.mobileCall}
      </a>
      <Link to={ui.routes.contact} className="inline-flex h-12 items-center justify-center rounded-full bg-volt font-semibold text-ink">
        {x.freeQuote}
      </Link>
    </div>
  );
}

export default function Layout({ title, description, children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta("description", description);
  }, [title, description]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
      <WhatsAppFab />
      <MobileCallBar />
      <OfferDialog />
    </div>
  );
}
