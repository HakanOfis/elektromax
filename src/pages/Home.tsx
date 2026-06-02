import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Bolt, Cable, Cctv, CheckCircle2, Mail, MessageCircle, Phone, PlugZap, ShieldCheck, X, Zap, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/Button";
import Layout from "@/components/Layout";
import { useI18n } from "@/hooks/useI18n";
import { useScrollReveal, useCounter } from "@/hooks/useScrollReveal";

/* ── Unsplash image map per service (AI-style electrical photos) ── */
const SERVICE_IMAGES: Record<string, string> = {
  "genel-elektrik":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
  "keuring-arei":
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",
  "yeni-bina-santiye":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
  "ev-laadpalen":
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=700&q=80",
  "kamera-interkom":
    "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=700&q=80",
};

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "genel-elektrik": Cable,
  "keuring-arei": ShieldCheck,
  "yeni-bina-santiye": Bolt,
  "ev-laadpalen": PlugZap,
  "kamera-interkom": Cctv,
};

/* ── Stat counter block ── */
function StatItem({ value, suffix, label, visible }: { value: number; suffix: string; label: string; visible: boolean }) {
  const count = useCounter(value, visible);
  return (
    <div className="text-center">
      <div className="text-3xl font-black tracking-tight md:text-4xl" style={{ color: "var(--em-accent)" }}>
        {count}{suffix}
      </div>
      <div className="mt-1 text-xs font-semibold text-zinc-400 uppercase tracking-widest">{label}</div>
    </div>
  );
}

/* ── Service card with image ── */
function ServiceCard({ slug, title, badge, intro, detailLabel, to }: {
  slug: string; title: string; badge?: string; intro: string; detailLabel: string; to: string;
}) {
  const img = SERVICE_IMAGES[slug];
  const Icon = (SERVICE_ICONS[slug] ?? Zap) as LucideIcon;
  return (
    <Link
      to={to}
      className="img-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e0f14] transition-all duration-300 hover:border-orange-500/30 hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.25)]"
    >
      {/* image */}
      <div className="relative h-44 w-full overflow-hidden bg-black/40">
        {img ? (
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-85"
          />
        ) : (
          <div className="h-full w-full circuit-bg" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-[#0e0f14]/40 to-transparent" />
        <div className="absolute bottom-3 left-4 grid h-10 w-10 place-items-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400">
          <Icon size={18} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-extrabold tracking-tight text-zinc-100">{title}</span>
          {badge && (
            <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-orange-400">
              {badge}
            </span>
          )}
        </div>
        <p className="flex-1 text-xs leading-relaxed text-zinc-400">{intro}</p>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 transition group-hover:gap-2.5">
          {detailLabel}
          <ArrowRight size={13} />
        </div>
      </div>
    </Link>
  );
}

/* ── Main page ── */
export default function Home() {
  const { content, ui, locale } = useI18n();
  const [offerOpen, setOfferOpen] = useState(false);
  const [heroRef, heroVisible] = useScrollReveal(0.05);
  const [statsRef, statsVisible] = useScrollReveal();
  const [servRef, servVisible] = useScrollReveal();
  const [trustRef, trustVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const telHref = `tel:${content.contact.phone.replace(/\s+/g, "")}`;
  const mailHref = `mailto:${content.contact.email}`;

  const offerText =
    "GRATIS offerte!\n" +
    "-regio Antwerpen\n" +
    "-in orde brengen van afgekeurde installaties\n" +
    "-35jaar ervaring,\n" +
    "\n" +
    "-voor een geldig keuringsattest huis,dit attest is geldig voor 25jaar geldig.\n" +
    "-winkeling attest 5jaar geldig\n" +
    "\n" +
    "-tekenen situatie en eendraadsschema's\n" +
    "-parlefonie biticino\n" +
    "-videofonie biticino\n" +
    "-zekeringkast vernieuwen maken\n" +
    "-aanleggen van een aarding\n" +
    "-Nieuwbouw en renovatie\n" +
    "-storing of een kortsluiting in order maken\n" +
    "-Laadpale&walbox\n" +
    "-industriële projecten";

  const waHref = useMemo(() => {
    const number = content.contact.phone.replace(/\D/g, "");
    const message =
      locale === "nl"
        ? "Hallo, ik wil graag een gratis offerte."
        : locale === "en"
        ? "Hello, I would like a free quote."
        : "Merhaba, ücretsiz teklif almak istiyorum.";
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }, [content.contact.phone, locale]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const key = "elektromax.offer.popup.v1";
    if (window.sessionStorage.getItem(key) === "1") return;
    setOfferOpen(true);
    window.sessionStorage.setItem(key, "1");
  }, []);

  useEffect(() => {
    if (!offerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOfferOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [offerOpen]);

  const tags = locale === "nl"
    ? ["Woning", "Appartement", "Handelspand", "Werf"]
    : locale === "en"
    ? ["Residential", "Apartment", "Commercial", "Construction"]
    : ["Ev", "Apartman", "İşyeri", "Şantiye"];

  return (
    <Layout title={ui.meta.homeTitle} description={ui.meta.homeDescription} className="!pt-0 !px-0 !max-w-none">
      {offerOpen ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-6 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOfferOpen(false);
          }}
        >
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0e0f14] shadow-[0_0_60px_-18px_rgba(0,0,0,.85)]">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
                  {locale === "nl" ? "GRATIS offerte" : locale === "en" ? "Free quote" : "Ücretsiz teklif"}
                </div>
                <div className="mt-3 text-xl font-black tracking-tight text-zinc-100">
                  {locale === "nl" ? "Interesse?" : locale === "en" ? "Interested?" : "İlgileniyor musunuz?"}
                </div>
              </div>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/8"
                onClick={() => setOfferOpen(false)}
                aria-label={locale === "nl" ? "Sluiten" : locale === "en" ? "Close" : "Kapat"}
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="whitespace-pre-line text-sm leading-relaxed text-zinc-200/75">{offerText}</div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Button href={waHref} className="w-full">
                  <MessageCircle size={16} />
                  WhatsApp
                </Button>
                <Button
                  href={`${mailHref}?subject=${encodeURIComponent("GRATIS offerte")}&body=${encodeURIComponent(offerText)}`}
                  variant="secondary"
                  className="w-full"
                >
                  <Mail size={16} />
                  {locale === "nl" ? "E-mail" : locale === "en" ? "Email" : "E-posta"}
                </Button>
              </div>

              <div className="mt-3 flex justify-center">
                <button
                  type="button"
                  className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-300/80 transition hover:bg-white/5 hover:text-zinc-200"
                  onClick={() => setOfferOpen(false)}
                >
                  {locale === "nl" ? "Niet geïnteresseerd" : locale === "en" ? "Not interested" : "İlgilenmiyorum"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* ══ HERO ══ */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative min-h-[88vh] overflow-hidden flex items-center"
      >
        {/* Background */}
        <div className="absolute inset-0 circuit-bg opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-orange-600/10 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-[1100px] px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
            {/* Left */}
            <div className={`min-w-0 space-y-7 reveal reveal-left ${heroVisible ? "visible" : ""}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold text-orange-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                {content.region} · {content.sector}
              </div>

              <h1 className="break-words hyphens-auto text-4xl font-black leading-[1.08] tracking-tight text-zinc-50 md:text-6xl">
                {content.home.headline}
              </h1>

              <p className="max-w-xl break-words text-base leading-relaxed text-zinc-400 md:text-lg">
                {content.home.intro}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={telHref}
                  className="btn-glow inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400"
                >
                  <Phone size={16} />
                  {content.contact.phone}
                </a>
                <Button to={ui.routes.contact} variant="secondary">
                  {content.home.ctas[1].label}
                  <ArrowRight size={16} />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — quick contact + checklist */}
            <div className={`min-w-0 space-y-3 reveal reveal-right delay-200 ${heroVisible ? "visible" : ""}`}>
              <div className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-sm">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">{ui.home.quickContactTitle}</div>
                <a href={telHref} className="flex items-center justify-between rounded-xl border border-orange-500/20 bg-orange-500/8 px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:border-orange-500/40">
                  <span>{content.contact.phone}</span>
                  <Phone size={14} className="text-orange-400" />
                </a>
                <a href={mailHref} className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8">
                  <span className="truncate">{content.contact.email}</span>
                  <span className="ml-2 shrink-0 text-xs text-zinc-500">{ui.home.mail}</span>
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">{ui.home.summaryTitle}</div>
                <ul className="space-y-2">
                  {content.services.map((s) => (
                    <li key={s.slug} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 size={15} className="shrink-0 text-orange-400" />
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--em-bg)] to-transparent" />
      </section>

      {/* ══ STATS ══ */}
      <section ref={statsRef as React.RefObject<HTMLElement>} className="border-y border-white/8 bg-black/30">
        <div className={`mx-auto grid max-w-[1100px] grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4 reveal ${statsVisible ? "visible" : ""}`}>
          <StatItem value={30} suffix="+" label={locale === "nl" ? "Jaar ervaring" : locale === "en" ? "Years exp." : "Yıl deneyim"} visible={statsVisible} />
          <StatItem value={200} suffix="+" label={locale === "nl" ? "Projecten" : locale === "en" ? "Projects" : "Proje"} visible={statsVisible} />
          <StatItem value={5} suffix="" label={locale === "nl" ? "Diensten" : locale === "en" ? "Services" : "Hizmet"} visible={statsVisible} />
          <StatItem value={100} suffix="%" label="AREI" visible={statsVisible} />
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section ref={servRef as React.RefObject<HTMLElement>} className="mx-auto max-w-[1100px] px-6 py-20">
        <div className={`mb-10 reveal ${servVisible ? "visible" : ""}`}>
          <div className="accent-line" />
          <h2 className="text-2xl font-black tracking-tight text-zinc-50 md:text-3xl">{ui.home.servicesTitle}</h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">{ui.home.servicesLead}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((s, i) => (
            <div
              key={s.slug}
              className={`reveal ${servVisible ? "visible" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <ServiceCard
                slug={s.slug}
                title={s.title}
                badge={s.badge}
                intro={s.intro}
                detailLabel={ui.common.details}
                to={`${ui.routes.services}/${s.slug}`}
              />
            </div>
          ))}
        </div>

        <div className={`mt-8 reveal delay-500 ${servVisible ? "visible" : ""}`}>
          <Button to={ui.routes.services} variant="secondary">
            {ui.common.viewAllServices}
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* ══ TRUST CARDS ══ */}
      <section ref={trustRef as React.RefObject<HTMLElement>} className="border-y border-white/8 bg-black/20">
        <div className="mx-auto max-w-[1100px] px-6 py-16">
          <div className={`mb-8 reveal ${trustVisible ? "visible" : ""}`}>
            <div className="accent-line" />
            <h2 className="text-xl font-black tracking-tight text-zinc-50 md:text-2xl">{ui.home.audienceTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {content.home.trust.map((t, i) => (
              <div
                key={t.title}
                className={`reveal rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-orange-500/30 hover:bg-orange-500/5 ${trustVisible ? "visible" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-2 h-1 w-8 rounded-full bg-orange-500/60" />
                <div className="text-sm font-extrabold text-zinc-100">{t.title}</div>
                <div className="mt-1.5 text-sm leading-relaxed text-zinc-400">{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} className="relative overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent" />
        <div className={`relative mx-auto max-w-[1100px] px-6 py-20 reveal ${ctaVisible ? "visible" : ""}`}>
          <div className="max-w-2xl">
            <div className="accent-line" />
            <h2 className="text-2xl font-black tracking-tight text-zinc-50 md:text-4xl">
              {content.home.audience.split(".")[0]}.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
              {content.contactPage.closing}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={telHref}
                className="btn-glow inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-400"
              >
                <Phone size={16} />
                {ui.header.call}
              </a>
              <Button to={ui.routes.projects} variant="secondary">
                {ui.home.projectsCta}
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
