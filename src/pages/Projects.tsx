import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useI18n } from "@/hooks/useI18n";

export default function Projects() {
  const { content, ui } = useI18n();
  return (
    <Layout
      title={ui.meta.projectsTitle}
      description={ui.meta.projectsDescription}
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">{ui.projectsPage.title}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          {ui.projectsPage.lead}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {content.projects.map((p) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(700px_circle_at_20%_10%,rgba(255,225,0,.08),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div className="text-base font-extrabold tracking-tight">{p.title}</div>
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30 text-[var(--em-accent)]">
                  <Sparkles size={16} />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200/75">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-100/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">{ui.projectsPage.ctaTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          {ui.projectsPage.ctaLead}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/iletisim">
            {ui.header.quoteCta}
            <ArrowRight size={16} />
          </Button>
          <Button to="/hizmetler" variant="secondary">
            {ui.projectsPage.servicesCta}
          </Button>
        </div>
      </section>
    </Layout>
  );
}
