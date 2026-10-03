import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";

import { Logo } from "@/components/Logo";
import { cta } from "@/components/cta";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LOCALES, useContactLinks, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function LanguageSwitch({ dark = false }) {
  const { locale, setLocale, ui } = useI18n();
  return (
    <div role="group" aria-label={ui.header.language} className="flex items-center gap-0.5">
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          title={l.name}
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          className={cn(
            "rounded-md px-2 py-1 text-xs font-bold tracking-wide transition",
            locale === l.code
              ? "bg-volt text-ink"
              : dark
                ? "text-white/60 hover:text-white"
                : "text-muted-foreground hover:text-navy",
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { ui, content, x } = useI18n();
  const links = useContactLinks();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: ui.nav.home, end: true },
    { to: ui.routes.services, label: ui.nav.services },
    { to: ui.routes.projects, label: ui.nav.projects },
    { to: ui.routes.about, label: ui.nav.about },
    { to: ui.routes.contact, label: ui.nav.contact },
  ];

  return (
    <>
      {/* Bovenbalk */}
      <div className="hidden bg-ink text-white/75 md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={links.tel} className="inline-flex items-center gap-1.5 transition hover:text-volt">
              <Phone className="size-3.5" /> {content.contact.phone}
            </a>
            <a href={links.mail} className="inline-flex items-center gap-1.5 transition hover:text-volt">
              <Mail className="size-3.5" /> {content.contact.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {content.contact.addressLine}
            </span>
          </div>
          <LanguageSwitch dark />
        </div>
      </div>

      {/* Taalkeuze op mobiel (bovenbalk is daar verborgen) */}
      <div className="flex justify-end border-b border-border bg-paper px-4 py-1.5 md:hidden">
        <LanguageSwitch />
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled ? "border-b border-border/70 bg-white/85 shadow-sm backdrop-blur-xl" : "bg-white",
        )}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
          <Link to="/" aria-label="Elektromax home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition",
                    isActive ? "text-navy" : "text-muted-foreground hover:text-navy",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-volt"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={links.tel} className={cn(cta({ variant: "outline" }), "hidden xl:inline-flex")}>
              <Phone /> {content.contact.phone}
            </a>
            <Link to={ui.routes.contact} className={cn(cta(), "hidden sm:inline-flex")}>
              {x.freeQuote}
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="grid size-11 place-items-center rounded-full border border-border text-navy lg:hidden"
                aria-label={ui.header.openMenu}
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[86%] max-w-sm gap-0 bg-ink p-0 text-white">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="border-b border-white/10 p-5">
                  <Logo inverted />
                </div>
                <nav className="flex flex-col p-3">
                  {nav.map((n, i) => (
                    <motion.div
                      key={n.to}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <NavLink
                        to={n.to}
                        end={n.end}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-xl px-4 py-3.5 font-heading text-lg font-bold transition",
                            isActive ? "bg-white/10 text-volt" : "text-white/85 hover:bg-white/5",
                          )
                        }
                      >
                        {n.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 border-t border-white/10 p-5">
                  <a href={links.tel} className={cn(cta({ size: "lg" }), "w-full")}>
                    <Phone /> {content.contact.phone}
                  </a>
                  <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer" className={cn(cta({ variant: "whatsapp", size: "lg" }), "w-full")}>
                    {x.whatsapp}
                  </a>
                  <div className="flex justify-center pt-2">
                    <LanguageSwitch dark />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <motion.div style={{ scaleX: progress }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-volt" />
      </header>

    </>
  );
}
