import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useI18n } from "@/hooks/useI18n";

export default function About() {
  const { content, ui } = useI18n();
  return (
    <Layout
      title={ui.meta.aboutTitle}
      description={ui.meta.aboutDescription}
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">{content.about.title}</h1>
        <p className="max-w-3xl whitespace-pre-line text-sm leading-relaxed text-zinc-200/75">{content.about.intro}</p>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-lg font-extrabold tracking-tight md:text-xl">{ui.aboutPage.workingStyle}</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-200/75">
            {content.about.workingStyle.map((t) => (
              <div key={t} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-[var(--em-accent)]" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-lg font-extrabold tracking-tight md:text-xl">{ui.aboutPage.values}</h2>
          <div className="mt-4 grid gap-3">
            {content.about.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-sm font-extrabold tracking-tight">{v.title}</div>
                <div className="mt-2 whitespace-pre-line text-sm text-zinc-200/75">{v.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">{ui.aboutPage.localFocus}</h2>
        <p className="mt-4 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-zinc-200/75">
          {content.about.localFocus}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to={ui.routes.contact}>
            {ui.aboutPage.contactCta}
            <ArrowRight size={16} />
          </Button>
          <Button to={ui.routes.services} variant="secondary">
            {ui.aboutPage.servicesCta}
          </Button>
        </div>
      </section>
    </Layout>
  );
}
