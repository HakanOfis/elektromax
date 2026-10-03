import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ArrowUpRight, BadgeCheck, Bolt, Cable, Cctv, Check, Phone, PlugZap, ShieldCheck, Zap } from "lucide-react";

import CircuitBackground from "@/components/CircuitBackground";
import Layout from "@/components/Layout";
import { cta } from "@/components/cta";
import { CountUp, Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion";
import { AllWorks, AreaSection, CtaBand, FaqSection, ProcessSection } from "@/components/sections";
import { img, projectImages, serviceImages } from "@/content/media";
import { useContactLinks, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const SERVICE_ICONS = {
  "genel-elektrik": Cable,
  "keuring-arei": ShieldCheck,
  "yeni-bina-santiye": Bolt,
  "ev-laadpalen": PlugZap,
  "kamera-interkom": Cctv,
};

const EASE = [0.22, 1, 0.36, 1];

function Hero() {
  const { ui, content, x } = useI18n();
  const links = useContactLinks();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink text-white">
      <div className="blueprint absolute inset-0" aria-hidden="true" />
      <CircuitBackground className="opacity-70" />
      <div className="absolute -top-40 -left-40 size-[36rem] rounded-full bg-volt/10 blur-[140px]" aria-hidden="true" />
      <div className="absolute right-0 -bottom-40 size-[30rem] rounded-full bg-[#1d4ed8]/20 blur-[140px]" aria-hidden="true" />

      <div className="container-x relative grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:pb-28">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/10 px-4 py-1.5 text-xs font-bold tracking-wide text-volt"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-volt opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-volt" />
            </span>
            {x.heroBadge}
          </motion.div>

          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-extrabold sm:text-6xl lg:text-7xl">
            {x.heroTitle.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={cn("block", i === 1 && "text-volt-gradient")}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-4 font-heading text-xl font-semibold text-white/90 sm:text-2xl"
          >
            {x.heroAccent}
          </motion.p>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            {content.home.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link to={ui.routes.contact} className={cta({ size: "lg" })}>
              {x.freeQuote} <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <a href={links.tel} className={cta({ variant: "ghostDark", size: "lg" })}>
              <Phone /> {content.contact.phone}
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } } }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            {x.heroChecks.map((c) => (
              <motion.li key={c} variants={staggerItem} className="inline-flex items-center gap-2 text-sm text-white/80">
                <span className="grid size-5 place-items-center rounded-full bg-volt text-ink">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {c}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Beeldcompositie */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            style={{ y: imgY }}
            initial={reduce ? false : { opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <img src={img.elektricienKast} alt="Elektricien aan het werk in een zekeringkast" className="h-full w-full object-cover" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            style={{ y: cardY }}
            initial={reduce ? false : { opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
            className="absolute bottom-10 left-0 w-[46%] overflow-hidden rounded-2xl border-4 border-ink shadow-2xl"
          >
            <img src={img.laadpaal} alt="Laadpaal voor een elektrische wagen" className="aspect-[4/3] w-full object-cover" />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 1 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
            className="absolute top-8 left-2 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 text-ink shadow-xl sm:left-4"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-emerald-500/15 text-emerald-600">
              <BadgeCheck className="size-6" />
            </span>
            <span>
              <span className="block text-sm font-bold">{x.floatingOk}</span>
              <span className="block text-xs text-muted-foreground">{x.floatingOkSub}</span>
            </span>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 1.2 }}
            className="absolute -right-2 bottom-24 grid size-28 place-items-center rounded-full bg-volt text-center text-ink shadow-[0_0_50px_rgba(255,198,26,0.5)] sm:-right-4"
          >
            <span>
              <span className="block font-heading text-4xl leading-none font-black">35</span>
              <span className="mt-1 block px-3 text-[0.6rem] leading-tight font-bold uppercase">{x.floatingYears}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WorksMarquee() {
  const { x } = useI18n();
  const items = x.works.map((w) => w.label);
  return (
    <div className="relative overflow-hidden border-y border-ink/10 bg-volt py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-4 font-heading text-lg font-bold whitespace-nowrap text-ink">
            {t}
            <Zap className="size-4 fill-ink" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const { x } = useI18n();
  return (
    <section className="container-x py-16">
      <Stagger className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {x.stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={staggerItem}
            className={cn("px-4 text-center lg:border-l lg:border-border", i === 0 && "lg:border-l-0")}
          >
            <div className="font-heading text-4xl font-black text-navy sm:text-5xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}

function ServicesGrid() {
  const { ui, content, x, servicePath } = useI18n();
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading kicker={x.servicesKicker} title={ui.home.servicesTitle} lead={ui.home.servicesLead} />
          <Reveal>
            <Link to={ui.routes.services} className={cta({ variant: "outline" })}>
              {ui.common.viewAllServices} <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6" gap={0.1}>
          {content.services.map((s, i) => {
            const Icon = SERVICE_ICONS[s.slug] ?? Zap;
            const big = i < 2;
            return (
              <motion.div key={s.slug} variants={staggerItem} className={cn(big ? "lg:col-span-3" : "lg:col-span-2")}>
                <Link
                  to={servicePath(s.slug)}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,42,91,0.45)]"
                >
                  <div className={cn("relative overflow-hidden", big ? "aspect-[16/9]" : "aspect-[4/3]")}>
                    <img
                      src={serviceImages[s.slug]}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <span className="absolute top-4 left-4 font-heading text-sm font-extrabold text-white/85">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition duration-300 group-hover:rotate-45 group-hover:bg-volt group-hover:text-ink">
                      <ArrowUpRight className="size-5" />
                    </span>
                    <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-2xl bg-volt text-ink">
                      <Icon className="size-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {s.badge ? (
                      <span className="mb-2 text-xs font-bold tracking-wider text-volt-deep uppercase">{s.badge}</span>
                    ) : null}
                    <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-navy">
                      {ui.common.details}
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function KeuringSection() {
  const { x, servicePath } = useI18n();
  const k = x.keuring;
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="blueprint absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={img.zekeringkast} alt="Geordende zekeringkast" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 to-transparent" />
            {/* Scanlijn die over de kast "controleert" */}
            <motion.div
              className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-volt/35 to-transparent"
              animate={{ top: ["-20%", "100%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
              aria-hidden="true"
            />
          </div>
          <div className="absolute -bottom-6 left-6 grid grid-cols-2 gap-3 sm:left-auto sm:-right-6">
            {k.facts.map((f) => (
              <div key={f.label} className="rounded-2xl bg-volt p-4 text-ink shadow-xl">
                <div className="font-heading text-2xl font-black">{f.value}</div>
                <div className="mt-1 max-w-[9rem] text-xs leading-snug font-semibold">{f.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading kicker={k.kicker} title={k.title} lead={k.lead} dark />
          <Stagger className="mt-8 space-y-3" gap={0.08}>
            {k.points.map((p) => (
              <motion.div key={p} variants={staggerItem} className="flex items-center gap-3 text-white/85">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-volt/40 text-volt">
                  <Check className="size-4" />
                </span>
                {p}
              </motion.div>
            ))}
          </Stagger>
          <Reveal delay={0.2} className="mt-10">
            <Link to={servicePath("keuring-arei")} className={cta({ size: "lg" })}>
              {k.cta} <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const { ui, content } = useI18n();
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={img.elektricienWerf} alt="Elektricien bij een zekeringkast op de werf" loading="lazy" className="aspect-[5/4] w-full object-cover" />
          </div>
          <div className="absolute -top-5 -left-5 -z-0 size-24 rounded-3xl bg-volt" aria-hidden="true" />
        </Reveal>
        <div>
          <SectionHeading title={ui.home.audienceTitle} lead={content.home.audience} />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" gap={0.08}>
            {content.home.trust.map((t) => (
              <motion.div
                key={t.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-white p-5 transition hover:border-volt"
              >
                <div className="flex items-center gap-2 font-heading font-bold text-navy">
                  <ShieldCheck className="size-5 text-volt-deep" /> {t.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const { ui, content, x } = useI18n();
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading kicker={x.projectsKicker} title={ui.projectsPage.title} />
          <Reveal>
            <Link to={ui.routes.projects} className={cta({ variant: "outline" })}>
              {ui.home.projectsCta} <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2" gap={0.1}>
          {content.projects.map((p, i) => (
            <motion.article
              key={p.title}
              variants={staggerItem}
              className="group relative min-h-[22rem] overflow-hidden rounded-3xl bg-ink"
            >
              <img
                src={projectImages[i]}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 text-white">
                <div className="mb-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/70 transition-all duration-500 group-hover:line-clamp-none">
                  {p.description}
                </p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default function Home() {
  const { ui } = useI18n();
  return (
    <Layout title={ui.meta.homeTitle} description={ui.meta.homeDescription}>
      <Hero />
      <WorksMarquee />
      <Stats />
      <ServicesGrid />
      <KeuringSection />
      <AllWorks />
      <ProcessSection />
      <TrustSection />
      <ProjectsPreview />
      <AreaSection />
      <FaqSection />
      <CtaBand />
    </Layout>
  );
}
