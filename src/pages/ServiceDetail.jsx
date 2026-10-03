import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";

import Layout from "@/components/Layout";
import { cta } from "@/components/cta";
import { Reveal } from "@/components/motion";
import { CtaBand, FaqSection, PageHero } from "@/components/sections";
import { serviceImages } from "@/content/media";
import { resolveServiceSlug, useContactLinks, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import NotFound from "@/pages/NotFound";

// Zoekwoordenblokken van de vorige site worden niet meer zichtbaar getoond.
const HIDDEN_HEADINGS = ["Zoekwoorden", "Keywords", "Anahtar aramalar"];

export default function ServiceDetail() {
  const { slug } = useParams();
  const { ui, content, x, servicePath } = useI18n();
  const links = useContactLinks();
  const internal = resolveServiceSlug(slug);
  const service = content.services.find((s) => s.slug === internal);

  if (!service) return <NotFound />;

  const blocks = service.blocks.filter((b) => !HIDDEN_HEADINGS.includes(b.heading));
  const others = content.services.filter((s) => s.slug !== service.slug);

  return (
    <Layout title={service.seoTitle} description={service.seoDescription}>
      <PageHero kicker={service.badge ?? ui.nav.services} title={service.title} lead={service.intro} image={serviceImages[service.slug]}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to={service.cta.primaryTo === "/contact" ? ui.routes.contact : service.cta.primaryTo} className={cta({ size: "lg" })}>
            {service.cta.primaryLabel} <ArrowRight className="transition group-hover:translate-x-1" />
          </Link>
          <a href={links.tel} className={cta({ variant: "ghostDark", size: "lg" })}>
            <Phone /> {content.contact.phone}
          </a>
        </div>
      </PageHero>

      <section className="container-x grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <Reveal className="overflow-hidden rounded-[2rem]">
            <img src={serviceImages[service.slug]} alt={service.title} className="aspect-[16/9] w-full object-cover" />
          </Reveal>
          {blocks.map((b, i) => (
            <Reveal key={b.heading} delay={i * 0.04} className="rounded-3xl border border-border bg-white p-7 sm:p-9">
              <h2 className="flex items-center gap-3 text-2xl font-extrabold text-navy">
                <span className="font-heading text-sm font-extrabold text-volt-deep">{String(i + 1).padStart(2, "0")}</span>
                {b.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {b.body.map((part, j) =>
                  part.type === "p" ? (
                    <p key={j} className="leading-relaxed text-muted-foreground">{part.text}</p>
                  ) : (
                    <ul key={j} className="grid gap-2.5 sm:grid-cols-2">
                      {part.items.map((it) => (
                        <li key={it} className="flex gap-2.5 rounded-xl bg-paper p-3 text-sm text-foreground/85">
                          <Check className="mt-0.5 size-4 shrink-0 text-volt-deep" /> {it}
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Reveal className="overflow-hidden rounded-3xl bg-ink p-7 text-white">
            <h3 className="text-xl font-bold">{service.cta.title}</h3>
            <p className="mt-2 text-sm text-white/65">{service.cta.subtitle}</p>
            <div className="mt-6 grid gap-2">
              <a href={links.tel} className={cta()}>
                <Phone /> {content.contact.phone}
              </a>
              <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer" className={cta({ variant: "whatsapp" })}>
                {x.whatsapp}
              </a>
              <a href={links.mail} className={cta({ variant: "ghostDark" })}>
                <Mail /> {content.contact.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-border bg-white p-7">
            <h3 className="font-heading text-lg font-bold text-navy">{x.otherServices}</h3>
            <ul className="mt-4 space-y-1">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={servicePath(s.slug)}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground/80 transition hover:bg-paper hover:text-navy",
                    )}
                  >
                    {s.title}
                    <ArrowRight className="size-4 text-volt-deep transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </section>

      {service.slug === "keuring-arei" ? <FaqSection /> : null}
      <CtaBand title={service.cta.title} lead={service.cta.subtitle} />
    </Layout>
  );
}
