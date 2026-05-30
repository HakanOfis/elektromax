import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { useI18n } from "@/hooks/useI18n";

export default function SiteFooter() {
  const { content, ui } = useI18n();
  const telHref = `tel:${content.contact.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${content.contact.email}`;

  return (
    <footer className="border-t border-white/10 bg-black/25">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-10">
        <div className="grid gap-8 md:grid-cols-[1.25fr_.9fr_.9fr]">
          <div className="space-y-3">
            <div className="text-lg font-extrabold tracking-tight">{content.name}</div>
            <p className="max-w-md text-sm text-zinc-200/75">
              {ui.footer.shortDesc}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Button href={telHref} variant="secondary">
                <Phone size={16} />
                {ui.footer.call}
              </Button>
              <Button href={mailHref} variant="secondary">
                <Mail size={16} />
                {ui.footer.email}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-zinc-100">{ui.footer.pages}</div>
            <div className="flex flex-col gap-1 text-sm text-zinc-200/75">
              <Link className="hover:text-zinc-100" to={ui.routes.services}>
                {ui.nav.services}
              </Link>
              <Link className="hover:text-zinc-100" to={ui.routes.projects}>
                {ui.nav.projects}
              </Link>
              <Link className="hover:text-zinc-100" to={ui.routes.about}>
                {ui.nav.about}
              </Link>
              <Link className="hover:text-zinc-100" to={ui.routes.contact}>
                {ui.nav.contact}
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-zinc-100">{ui.footer.contact}</div>
            <div className="flex flex-col gap-2 text-sm text-zinc-200/75">
              <a className="inline-flex items-center gap-2 hover:text-zinc-100" href={telHref}>
                <Phone size={16} />
                {content.contact.phone}
              </a>
              <a className="inline-flex items-center gap-2 hover:text-zinc-100" href={mailHref}>
                <Mail size={16} />
                {content.contact.email}
              </a>
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {content.contact.addressLine}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-200/60 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {content.name}. {ui.footer.rights}
          </div>
          <div className="text-zinc-200/55">{content.sector}</div>
        </div>
      </div>
    </footer>
  );
}
