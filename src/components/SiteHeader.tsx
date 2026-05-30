import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Menu, Phone, X, Moon, SunMedium } from "lucide-react";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { useI18n } from "@/hooks/useI18n";
import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/content";

type NavItem = { label: string; to: string };

function NavItems({ nav, onNavigate }: { nav: NavItem[]; onNavigate?: () => void }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
      {nav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "rounded-full px-4 py-2 text-sm font-semibold text-zinc-200/85 transition hover:bg-white/6 hover:text-zinc-100",
              isActive && "bg-white/10 text-zinc-100",
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

const LOCALES: { code: Locale; label: string }[] = [
  { code: "nl", label: "NL" },
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
];

function LangSwitcher() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 gap-0.5">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-extrabold transition",
            locale === code
              ? "bg-white/15 text-zinc-100"
              : "text-zinc-400 hover:text-zinc-200",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, ui, content } = useI18n();
  const location = useLocation();

  const telHref = useMemo(
    () => `tel:${content.contact.phone.replace(/\s+/g, "")}`,
    [content.contact.phone],
  );

  const nav: NavItem[] = [
    { label: ui.nav.home, to: "/" },
    { label: ui.nav.services, to: ui.routes.services },
    { label: ui.nav.projects, to: ui.routes.projects },
    { label: ui.nav.about, to: ui.routes.about },
    { label: ui.nav.contact, to: ui.routes.contact },
  ];

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <NavLink
            to="/"
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-white/6"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/6 ring-1 ring-white/10">
              <span className="absolute inset-0 rounded-full opacity-0 blur-lg transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,225,0,.28),transparent_60%)]" />
              <span className="relative text-sm font-black tracking-tight text-[var(--em-accent)]">
                EM
              </span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold tracking-tight">{content.name}</span>
              <span className="text-[11px] font-semibold text-zinc-300/70">
                {content.region}
              </span>
            </span>
          </NavLink>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <NavItems nav={nav} />
          <LangSwitcher />
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/8"
            aria-label={ui.header.toggleTheme}
          >
            {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <Button href={telHref} variant="secondary" className="pl-4 pr-5">
            <Phone size={16} />
            {ui.header.call}
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <LangSwitcher />
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/8"
            aria-label={ui.header.toggleTheme}
          >
            {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/8"
            aria-label={open ? ui.header.closeMenu : ui.header.openMenu}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black/40 px-4 py-4 backdrop-blur-xl sm:hidden">
          <div className="mx-auto w-full max-w-[1100px] px-2">
            <NavItems nav={nav} onNavigate={() => setOpen(false)} />
            <div className="mt-3 grid grid-cols-1 gap-2">
              <Button href={telHref} variant="secondary">
                <Phone size={16} />
                {content.contact.phone}
              </Button>
              <Button to={ui.routes.contact}>{ui.header.quoteCta}</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
