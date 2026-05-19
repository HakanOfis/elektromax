import { ArrowRight, Cable, Cctv, PlugZap, ShieldCheck, Bolt } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { elektromax } from "@/content/elektromax";
import { cn } from "@/lib/utils";

const iconBySlug = {
  "genel-elektrik": Cable,
  "keuring-arei": ShieldCheck,
  "yeni-bina-santiye": Bolt,
  "ev-laadpalen": PlugZap,
  "kamera-interkom": Cctv,
} as const;

export default function Services() {
  return (
    <Layout
      title="Hizmetler | Elektromax – Regio Antwerpen"
      description="Genel elektrik işleri (algemene elektriciteitswerken), keuring/AREI hazırlığı, yeni bina & şantiye tesisatı, EV laadpalen, kamera ve interkom sistemleri."
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">Hizmetler</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          Konut, apartman ve işyerlerinde genel elektrik işleri; keuring/AREI hazırlığı; yeni bina ve
          şantiye projeleri; EV şarj istasyonu ve güvenlik sistemleri.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {elektromax.services.map((s) => {
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
                    Detaylar
                    <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">Hızlı iletişim</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          Keuring öncesi hazırlık, yeni tesisat veya elektrikle ilgili sorularınız için bize ulaşın.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/iletisim">
            Teklif / randevu isteyin
            <ArrowRight size={16} />
          </Button>
          <Button
            href={`tel:${elektromax.contact.phone.replace(/\s+/g, "")}`}
            variant="secondary"
          >
            Ara: {elektromax.contact.phone}
          </Button>
        </div>
      </section>
    </Layout>
  );
}

