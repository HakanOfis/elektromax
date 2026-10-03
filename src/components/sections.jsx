import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import {
  AlarmSmoke,
  ArrowDownToLine,
  ArrowRight,
  BatteryCharging,
  Cable,
  Cctv,
  Cpu,
  Factory,
  FileText,
  Flame,
  Gauge,
  Lightbulb,
  MapPin,
  Phone,
  PlugZap,
  ShieldCheck,
  Siren,
  Sun,
  ToggleRight,
  Video,
  Zap,
} from "lucide-react";

import CircuitBackground from "@/components/CircuitBackground";
import { cta } from "@/components/cta";
import { Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useContactLinks, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/* ── Kop voor binnenpagina's ── */
export function PageHero({ kicker, title, lead, image, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink text-white">
      {image ? (
        <motion.img
          src={image}
          alt=""
          style={{ y }}
          className="absolute inset-0 h-[125%] w-full object-cover opacity-30"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <CircuitBackground className="opacity-50" />
      <div className="container-x relative py-20 sm:py-28">
        <Reveal className="max-w-3xl">
          {kicker ? (
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-volt">
              <span className="h-px w-6 bg-current" /> {kicker}
            </div>
          ) : null}
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{title}</h1>
          {lead ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{lead}</p> : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

const WORK_ICONS = {
  AlarmSmoke, ArrowDownToLine, BatteryCharging, Cable, Cctv, Cpu, Factory, FileText, Flame,
  Gauge, Lightbulb, PlugZap, ShieldCheck, Siren, Sun, ToggleRight, Video, Zap,
};

/* ── Volledige werkenlijst (uit elektromax-info.txt) ── */
export function AllWorks({ className }) {
  const { x } = useI18n();
  return (
    <section className={cn("bg-paper py-20 sm:py-28", className)}>
      <div className="container-x">
        <SectionHeading kicker={x.allWorksKicker} title={x.allWorksTitle} lead={x.allWorksLead} />
        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" gap={0.04}>
          {x.works.map((w) => {
            const Icon = WORK_ICONS[w.icon] ?? Zap;
            return (
              <motion.div
                key={w.label}
                variants={staggerItem}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-volt hover:shadow-[0_12px_30px_-16px_rgba(11,42,91,0.35)]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-volt transition duration-300 group-hover:bg-volt group-hover:text-ink">
                  <Icon className="size-5" />
                </span>
                <span className="text-[0.95rem] font-semibold text-navy">{w.label}</span>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ── Werkwijze met "stroomdraad" die zich vult bij het scrollen ── */
export function ProcessSection() {
  const { x } = useI18n();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading kicker={x.processKicker} title={x.processTitle} align="center" />
        <div className="relative mt-16">
          <div className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-border lg:block" aria-hidden="true">
            <motion.div style={{ scaleX }} className="h-full origin-left bg-gradient-to-r from-volt to-volt-deep" />
          </div>
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" gap={0.15}>
            {x.process.map((p, i) => (
              <motion.div key={p.title} variants={staggerItem} className="relative text-center">
                <div className="relative mx-auto grid size-14 place-items-center rounded-full border-2 border-volt bg-white font-heading text-lg font-extrabold text-navy shadow-[0_0_0_8px_white]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{p.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ── Werkgebied met radar-animatie ── */
export function AreaSection() {
  const { x } = useI18n();
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="blueprint absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading kicker={x.areaKicker} title={x.areaTitle} lead={x.areaLead} dark />
          <Stagger className="mt-8 flex flex-wrap gap-2" gap={0.03}>
            {x.towns.map((t) => (
              <motion.span
                key={t}
                variants={staggerItem}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/85"
              >
                <MapPin className="size-3.5 text-volt" /> {t}
              </motion.span>
            ))}
            <motion.span variants={staggerItem} className="px-2 py-1.5 text-sm text-white/50">
              {x.areaMore}
            </motion.span>
          </Stagger>
        </div>

        <Reveal className="relative mx-auto aspect-square w-full max-w-md">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-volt/25"
              style={{ inset: `${i * 12}%` }}
              aria-hidden="true"
            />
          ))}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "conic-gradient(from 0deg, rgba(255,198,26,0.35), transparent 22%)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
          {[
            [28, 30], [70, 24], [78, 62], [22, 70], [56, 82], [40, 18], [84, 42],
          ].map(([l, t], i) => (
            <motion.span
              key={i}
              className="absolute size-2.5 -translate-1/2 rounded-full bg-volt"
              style={{ left: `${l}%`, top: `${t}%` }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35 }}
              aria-hidden="true"
            />
          ))}
          <div className="absolute top-1/2 left-1/2 grid -translate-1/2 place-items-center">
            <span className="grid size-20 place-items-center rounded-full bg-volt text-ink shadow-[0_0_60px_rgba(255,198,26,0.6)]">
              <MapPin className="size-8" />
            </span>
            <span className="mt-3 font-heading text-xl font-extrabold">Antwerpen</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Veelgestelde vragen ── */
export function FaqSection() {
  const { x } = useI18n();
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading kicker={x.faqKicker} title={x.faqTitle} />
        <Reveal>
          <Accordion className="rounded-3xl border border-border bg-white p-2 sm:p-4">
            {x.faq.map((f, i) => (
              <AccordionItem key={f.q} value={i} className="border-border px-3 sm:px-4">
                <AccordionTrigger className="py-5 font-heading text-base font-bold text-navy hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Afsluitende call-to-action ── */
export function CtaBand({ title, lead }) {
  const { ui, content, x } = useI18n();
  const links = useContactLinks();
  return (
    <section className="container-x pb-20 sm:pb-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-volt px-6 py-14 sm:px-14 sm:py-16">
        <svg
          viewBox="0 0 48 56"
          className="absolute -right-10 -bottom-16 h-[22rem] w-auto fill-ink/[0.07] sm:right-6"
          aria-hidden="true"
        >
          <path d="M28.5 6 15 31.5h8.6L19.4 51 35 23.6h-8.9L31.8 6h-3.3Z" />
        </svg>
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-extrabold text-ink sm:text-5xl">{title ?? x.ctaTitle}</h2>
          <p className="mt-4 text-lg text-ink/75">{lead ?? x.ctaLead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={ui.routes.contact} className={cta({ variant: "navy", size: "lg" })}>
              {x.freeQuote} <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <a href={links.tel} className={cn(cta({ variant: "outline", size: "lg" }), "border-ink/20 bg-transparent text-ink")}>
              <Phone /> {content.contact.phone}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
