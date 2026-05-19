import { ArrowRight, Bolt, Cable, Cctv, CheckCircle2, PlugZap, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import type { ComponentType } from "react";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import { elektromax } from "@/content/elektromax";
import { cn } from "@/lib/utils";

function GlowCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: ComponentType<{ size?: number | string; className?: string }>;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_30px_90px_-70px_rgba(0,0,0,1)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(700px_circle_at_20%_10%,rgba(255,225,0,.14),transparent_60%)]" />
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--em-accent)]">
          <Icon size={18} />
        </div>
        <div className="space-y-1">
          <div className="text-sm font-extrabold tracking-tight">{title}</div>
          <div className="text-sm leading-relaxed text-zinc-200/72">{text}</div>
        </div>
      </div>
    </div>
  );
}

const serviceIcons = {
  "genel-elektrik": Cable,
  "keuring-arei": ShieldCheck,
  "yeni-bina-santiye": Bolt,
  "ev-laadpalen": PlugZap,
  "kamera-interkom": Cctv,
} as const;

export default function Home() {
  return (
    <Layout
      title="Elektromax | Elektricien Antwerpen – Regio Antwerpen Elektrik Hizmetleri"
      description="Regio Antwerpen’de genel elektrik işleri, keuring/AREI hazırlığı, yeni bina & şantiye tesisatı, EV laadpalen, kamera ve interkom sistemleri."
      className="pt-12"
    >
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 shadow-[0_80px_160px_-140px_rgba(0,0,0,1)] md:px-10 md:py-14">
        <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,225,0,.30),transparent_60%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-36 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(8,255,168,.14),transparent_62%)] blur-2xl" />
        <div className="grid gap-10 md:grid-cols-[1.25fr_.75fr] md:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold text-zinc-200/75">
              <span className="h-2 w-2 rounded-full bg-[var(--em-accent)] shadow-[0_0_0_3px_rgba(255,225,0,.12)]" />
              {elektromax.region} • {elektromax.sector}
            </div>
            <h1 className="text-balance text-3xl font-black tracking-tight md:text-5xl">
              {elektromax.home.headline}
            </h1>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-zinc-200/80 md:text-lg">
              {elektromax.home.intro}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to={elektromax.home.ctas[0].to}>
                {elektromax.home.ctas[0].label}
                <ArrowRight size={16} />
              </Button>
              <Button to={elektromax.home.ctas[1].to} variant="secondary">
                {elektromax.home.ctas[1].label}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-zinc-200/65">
              {["Ev", "Apartman", "İşyeri", "Şantiye"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-xs font-semibold text-zinc-200/70">Hızlı İletişim</div>
              <div className="mt-3 space-y-3">
                <a
                  href={`tel:${elektromax.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/8"
                >
                  <span>{elektromax.contact.phone}</span>
                  <span className="text-zinc-200/70">Ara</span>
                </a>
                <a
                  href={`mailto:${elektromax.contact.email}`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:bg-white/8"
                >
                  <span className="truncate">{elektromax.contact.email}</span>
                  <span className="text-zinc-200/70">Mail</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-xs font-semibold text-zinc-200/70">Hizmet Özeti</div>
              <div className="mt-3 space-y-2 text-sm text-zinc-200/75">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-[var(--em-accent)]" />
                  Keuring/AREI öncesi düzeltme ve hazırlık
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-[var(--em-accent)]" />
                  Algemene elektriciteitswerken (genel elektrik işleri)
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-[var(--em-accent)]" />
                  Yeni bina & şantiye tesisatı
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 text-[var(--em-accent)]" />
                  EV laadpalen, kamera ve interkom
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">Hizmetler</h2>
          <p className="max-w-2xl text-sm text-zinc-200/70">
            Her işte amaç: güvenli altyapı, düzenli pano, net süreç. İhtiyacınıza en yakın hizmeti seçin.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {elektromax.services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Link
                key={s.slug}
                to={`/hizmetler/${s.slug}`}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]",
                )}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(700px_circle_at_20%_10%,rgba(255,225,0,.14),transparent_62%)]" />
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

        <div className="pt-2">
          <Button to="/hizmetler" variant="secondary">
            Tüm hizmetleri görüntüleyin
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <section className="mt-14 grid gap-4 md:grid-cols-2">
        {elektromax.home.trust.map((t, idx) => (
          <GlowCard
            key={t.title}
            title={t.title}
            text={t.text}
            icon={[ShieldCheck, Cable, Bolt, CheckCircle2][idx] ?? ShieldCheck}
          />
        ))}
      </section>

      <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
          Ev sahipleri, syndicus ve işletmeler için net faydalar
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-200/75">
          {elektromax.home.audience}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/iletisim">
            Teklif / randevu isteyin
            <ArrowRight size={16} />
          </Button>
          <Button to="/projeler" variant="secondary">
            Örnek proje tiplerini inceleyin
          </Button>
        </div>
      </section>
    </Layout>
  );
}
