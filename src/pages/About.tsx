import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { elektromax } from "@/content/elektromax";

export default function About() {
  return (
    <Layout
      title="Hakkımızda | Elektromax – Regio Antwerpen"
      description="Elektromax: güvenlik, kalite ve dürüstlük odaklı yerel elektrik hizmeti. Antwerpen ve çevresinde AREI uyumlu çözümler."
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">{elektromax.about.title}</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-200/75">{elektromax.about.intro}</p>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-lg font-extrabold tracking-tight md:text-xl">Çalışma tarzımız</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-200/75">
            {elektromax.about.workingStyle.map((t) => (
              <div key={t} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 text-[var(--em-accent)]" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-lg font-extrabold tracking-tight md:text-xl">Değerler</h2>
          <div className="mt-4 grid gap-3">
            {elektromax.about.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-sm font-extrabold tracking-tight">{v.title}</div>
                <div className="mt-2 text-sm text-zinc-200/75">{v.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">Yerel bölge odağı</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-200/75">
          {elektromax.about.localFocus}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/iletisim">
            İletişime geçin
            <ArrowRight size={16} />
          </Button>
          <Button to="/hizmetler" variant="secondary">
            Hizmetleri inceleyin
          </Button>
        </div>
      </section>
    </Layout>
  );
}

