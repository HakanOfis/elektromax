import { ArrowRight, Cable, Cctv, PlugZap, ShieldCheck, Bolt } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useI18n } from "@/hooks/useI18n";
import { cn } from "@/lib/utils";

const iconBySlug = {
  "genel-elektrik": Cable,
  "keuring-arei": ShieldCheck,
  "yeni-bina-santiye": Bolt,
  "ev-laadpalen": PlugZap,
  "kamera-interkom": Cctv,
} as const;

export default function Services() {
  const { content, ui } = useI18n();
  return (
    <Layout
      title={ui.meta.servicesTitle}
      description={ui.meta.servicesDescription}
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">{ui.servicesPage.title}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          {ui.servicesPage.lead}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {content.services.map((s) => {
          const Icon = iconBySlug[s.slug];
          return (
            <Link
              key={s.slug}
              to={`/hizmetler/${s.slug}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]",
              )}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(700px_circle_at_10%_20%,rgba(255,225,0,.12),transparent_62%)]" />
              <div className="relative flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-black/30 text-[var(--em-accent)]">
                  <Icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="text-base font-extrabold tracking-tight">{s.title}</div>
                    {s.badge ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-100/75">
                        {s.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-200/72">{s.intro}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-100">
                    {ui.common.details}
                    <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">{ui.common.quickContact}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          {ui.servicesPage.contactLead}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/iletisim">
            {ui.header.quoteCta}
            <ArrowRight size={16} />
          </Button>
          <Button
            href={`tel:${content.contact.phone.replace(/\s+/g, "")}`}
            variant="secondary"
          >
            {ui.common.callPrefix} {content.contact.phone}
          </Button>
        </div>
      </section>
    </Layout>
  );
}
