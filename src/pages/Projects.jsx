import { motion } from "motion/react";

import Layout from "@/components/Layout";
import { Stagger, staggerItem } from "@/components/motion";
import { CtaBand, PageHero } from "@/components/sections";
import { img, projectImages } from "@/content/media";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function Projects() {
  const { ui, content, x } = useI18n();

  return (
    <Layout title={ui.meta.projectsTitle} description={ui.meta.projectsDescription}>
      <PageHero kicker={x.projectsLeadKicker} title={ui.projectsPage.title} lead={ui.projectsPage.lead} image={img.nieuwbouw} />

      <section className="container-x space-y-8 py-20 sm:py-28">
        {content.projects.map((p, i) => (
          <Stagger key={p.title}>
            <motion.article
              variants={staggerItem}
              className="group grid items-stretch overflow-hidden rounded-[2rem] border border-border bg-white lg:grid-cols-[1.2fr_1fr]"
            >
              <div className={cn("relative min-h-72 overflow-hidden", i % 2 === 1 && "lg:order-2")}>
                <img
                  src={projectImages[i]}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="font-heading text-5xl font-black text-volt">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-2xl font-extrabold text-navy sm:text-3xl">{p.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-navy">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Stagger>
        ))}
      </section>

      <CtaBand title={ui.projectsPage.ctaTitle} lead={ui.projectsPage.ctaLead} />
    </Layout>
  );
}
