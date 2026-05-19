import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Menu, Phone, X, Moon, SunMedium } from "lucide-react";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { elektromax } from "@/content/elektromax";
import { useTheme } from "@/hooks/useTheme";

type NavItem = { label: string; to: string };

const nav: NavItem[] = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Hizmetler", to: "/hizmetler" },
  { label: "Projeler", to: "/projeler" },
  { label: "Hakkımızda", to: "/hakkimizda" },
  { label: "İletişim", to: "/iletisim" },
];

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
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

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const telHref = useMemo(
    () => `tel:${elektromax.contact.phone.replace(/\s+/g, "")}`,
    [],
  );

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
              <span className="text-sm font-extrabold tracking-tight">{elektromax.name}</span>
              <span className="text-[11px] font-semibold text-zinc-300/70">
                {elektromax.region}
              </span>
            </span>
          </NavLink>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <NavItems />
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/8"
            aria-label="Tema değiştir"
          >
            {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <Button href={telHref} variant="secondary" className="pl-4 pr-5">
            <Phone size={16} />
            Ara
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/8"
            aria-label="Tema değiştir"
          >
            {theme === "dark" ? <SunMedium size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/8"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-black/40 px-4 py-4 backdrop-blur-xl sm:hidden">
          <div className="mx-auto w-full max-w-[1100px] px-2">
            <NavItems onNavigate={() => setOpen(false)} />
            <div className="mt-3 grid grid-cols-1 gap-2">
              <Button href={telHref} variant="secondary">
                <Phone size={16} />
                {elektromax.contact.phone}
              </Button>
              <Button to="/iletisim">Teklif / randevu isteyin</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

