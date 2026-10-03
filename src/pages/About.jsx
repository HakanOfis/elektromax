import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import Layout from "@/components/Layout";
import { cta } from "@/components/cta";
import { CountUp, Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion";
import { AllWorks, AreaSection, CtaBand, PageHero } from "@/components/sections";
import { img } from "@/content/media";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { ui, content, x } = useI18n();
  const about = content.about;
  // De volledige dienstenlijst staat nu in <AllWorks />; enkel de echte waarden tonen.
  const values = about.values.filter((v) => !v.text.includes("◦"));

  return (
    <Layout title={ui.meta.aboutTitle} description={ui.meta.aboutDescription}>
      <PageHero kicker={x.aboutKicker} title={about.title} image={img.woningAvond} />

      <section className="container-x grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={img.elektricienMeting} alt="Elektricien meet een installatie door" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="absolute -right-4 -bottom-8 rounded-3xl bg-navy p-6 text-white shadow-2xl sm:-right-8">
            <div className="font-heading text-5xl font-black text-volt">
              <CountUp to={35} suffix="+" />
            </div>
            <div className="mt-1 text-sm font-semibold text-white/75">{x.stats[0].label}</div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              {about.intro.split("\n").filter(Boolean).map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Reveal>
          <Stagger className="mt-8 grid gap-3" gap={0.08}>
            {about.workingStyle.map((w) => (
              <motion.div key={w} variants={staggerItem} className="flex gap-3 rounded-2xl bg-paper p-4 text-sm text-foreground/85">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-volt text-ink">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {w}
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {values.length ? (
        <section className="container-x pb-20 sm:pb-28">
          <SectionHeading title={ui.aboutPage.values} />
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="group rounded-3xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-volt"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-navy text-volt transition group-hover:bg-volt group-hover:text-ink">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </motion.div>
            ))}
          </Stagger>
        </section>
      ) : null}

      <AllWorks />

      <section className="container-x py-20 sm:py-28">
        <Reveal className="grid items-center gap-8 rounded-[2rem] border border-border bg-white p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{ui.aboutPage.localFocus}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{about.localFocus}</p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link to={ui.routes.contact} className={cta({ size: "lg" })}>
              {ui.aboutPage.contactCta} <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <Link to={ui.routes.services} className={cta({ variant: "outline", size: "lg" })}>
              {ui.aboutPage.servicesCta}
            </Link>
          </div>
        </Reveal>
      </section>

      <AreaSection />
      <div className="pt-20 sm:pt-28">
        <CtaBand />
      </div>
    </Layout>
  );
}
