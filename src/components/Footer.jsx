import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/Logo";
import { useContactLinks, useI18n } from "@/lib/i18n";

export default function Footer() {
  const { ui, content, servicePath } = useI18n();
  const links = useContactLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink pb-24 text-white/70 md:pb-0">
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo inverted />
          <p className="max-w-sm text-sm leading-relaxed">{ui.footer.shortDesc}</p>
          <div className="flex gap-2">
            {content.socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-volt hover:text-volt"
              >
                {s.label} <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">{ui.nav.services}</h3>
          <ul className="space-y-2.5 text-sm">
            {content.services.map((s) => (
              <li key={s.slug}>
                <Link to={servicePath(s.slug)} className="transition hover:text-volt">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">{ui.footer.pages}</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="transition hover:text-volt">{ui.nav.home}</Link></li>
            <li><Link to={ui.routes.services} className="transition hover:text-volt">{ui.nav.services}</Link></li>
            <li><Link to={ui.routes.projects} className="transition hover:text-volt">{ui.nav.projects}</Link></li>
            <li><Link to={ui.routes.about} className="transition hover:text-volt">{ui.nav.about}</Link></li>
            <li><Link to={ui.routes.contact} className="transition hover:text-volt">{ui.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">{ui.footer.contact}</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={links.tel} className="inline-flex items-center gap-2 transition hover:text-volt">
                <Phone className="size-4 text-volt" /> {content.contact.phone}
              </a>
            </li>
            <li>
              <a href={links.mail} className="inline-flex items-center gap-2 break-all transition hover:text-volt">
                <Mail className="size-4 shrink-0 text-volt" /> {content.contact.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-volt" /> {content.contact.addressLine}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {content.name}. {ui.footer.rights}
          </span>
          <span>www.maxelektro.be</span>
        </div>
      </div>
    </footer>
  );
}
