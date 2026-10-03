import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

import Layout from "@/components/Layout";
import { cta } from "@/components/cta";
import { Stagger, staggerItem } from "@/components/motion";
import { AllWorks, CtaBand, PageHero, ProcessSection } from "@/components/sections";
import { img, serviceImages } from "@/content/media";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Services() {
  const { ui, content, x, servicePath } = useI18n();

  return (
    <Layout title={ui.meta.servicesTitle} description={ui.meta.servicesDescription}>
      <PageHero kicker={x.servicesKicker} title={ui.servicesPage.title} lead={ui.servicesPage.lead} image={img.bekabelingKast} />

      <section className="container-x space-y-6 py-20 sm:py-28">
        {content.services.map((s, i) => {
          const firstList = s.blocks.flatMap((b) => b.body).find((part) => part.type === "list");
          return (
            <Stagger key={s.slug}>
              <motion.article
                variants={staggerItem}
                className="group grid overflow-hidden rounded-[2rem] border border-border bg-white md:grid-cols-2"
              >
                <div className={cn("relative min-h-64 overflow-hidden", i % 2 === 1 && "md:order-2")}>
                  <img
                    src={serviceImages[s.slug]}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-5 left-5 rounded-full bg-ink/70 px-3 py-1 font-heading text-sm font-extrabold text-volt backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  {s.badge ? (
                    <span className="mb-3 text-xs font-bold tracking-wider text-volt-deep uppercase">{s.badge}</span>
                  ) : null}
                  <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{s.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.intro}</p>
                  {firstList ? (
                    <ul className="mt-6 grid gap-2">
                      {firstList.items.slice(0, 4).map((it) => (
                        <li key={it} className="flex gap-2.5 text-sm text-foreground/80">
                          <Check className="mt-0.5 size-4 shrink-0 text-volt-deep" /> {it}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-8">
                    <Link to={servicePath(s.slug)} className={cta({ variant: "navy" })}>
                      {ui.common.details} <ArrowRight className="transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </Stagger>
          );
        })}
      </section>

      <AllWorks />
      <ProcessSection />
      <CtaBand lead={ui.servicesPage.contactLead} />
    </Layout>
  );
}
