import { ArrowRight, Search } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useI18n } from "@/hooks/useI18n";

export default function NotFound() {
  const { ui } = useI18n();
  return (
    <Layout title={ui.meta.notFoundTitle} description={ui.meta.notFoundDescription}>
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-black/30 text-[var(--em-accent)]">
          <Search size={20} />
        </div>
        <h1 className="mt-6 text-2xl font-black tracking-tight md:text-3xl">{ui.notFound.title}</h1>
        <p className="mt-3 text-sm leading-relaxed text-zinc-200/75">
          {ui.notFound.lead}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">
            {ui.notFound.homeCta}
            <ArrowRight size={16} />
          </Button>
          <Button to={ui.routes.services} variant="secondary">
            {ui.notFound.servicesCta}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
