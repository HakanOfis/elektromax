import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { elektromax, type ServiceSlug, getService } from "@/content/elektromax";
import { cn } from "@/lib/utils";

type Props = {
  slug: ServiceSlug;
};

function SideNav({ active }: { active: ServiceSlug }) {
  return (
    <nav className="space-y-2">
      <div className="text-xs font-semibold text-zinc-200/65">Hizmetler</div>
      <div className="flex flex-col gap-1">
        {elektromax.services.map((s) => (
          <Link
            key={s.slug}
            to={`/hizmetler/${s.slug}`}
            className={cn(
              "rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-semibold text-zinc-200/80 transition hover:bg-white/[0.05] hover:text-zinc-100",
              s.slug === active && "bg-white/[0.06] text-zinc-100",
            )}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span>{s.title}</span>
              {s.badge ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-100/70">
                  {s.badge}
                </span>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}

function Block({
  heading,
  body,
}: {
  heading: string;
  body: Array<{ type: "p"; text: string } | { type: "list"; items: string[] }>;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
      <h2 className="text-lg font-extrabold tracking-tight md:text-xl">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-200/75">
        {body.map((part, idx) =>
          part.type === "p" ? (
            <p key={idx}>{part.text}</p>
          ) : (
            <ul key={idx} className="list-disc space-y-2 pl-5">
              {part.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          ),
        )}
      </div>
    </section>
  );
}

export default function ServiceDetail({ slug }: Props) {
  const service = getService(slug);

  return (
    <Layout title={service.seoTitle} description={service.seoDescription}>
      <div className="flex items-center gap-2 text-xs font-semibold text-zinc-200/65">
        <Link className="hover:text-zinc-100" to="/">
          Ana Sayfa
        </Link>
        <ChevronRight size={14} />
        <Link className="hover:text-zinc-100" to="/hizmetler">
          Hizmetler
        </Link>
        <ChevronRight size={14} />
        <span className="text-zinc-100">{service.title}</span>
      </div>

      <div className="mt-6 grid gap-10 lg:grid-cols-[.95fr_.45fr]">
        <div>
          <div className="space-y-4">
            <h1 className="text-3xl font-black tracking-tight md:text-4xl">{service.title}</h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-200/75">{service.intro}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to={service.cta.primaryTo}>
                {service.cta.primaryLabel}
                <ArrowRight size={16} />
              </Button>
              {service.cta.secondaryLabel && service.cta.secondaryTo ? (
                <Button to={service.cta.secondaryTo} variant="secondary">
                  {service.cta.secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>

          <div className="mt-10 grid gap-4">
            {service.blocks.map((b) => (
              <Block key={b.heading} heading={b.heading} body={b.body} />
            ))}
          </div>

          <section className="mt-10 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,225,0,.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.02))] p-8">
            <div className="flex flex-col gap-2">
              <div className="text-lg font-extrabold tracking-tight">{service.cta.title}</div>
              <div className="text-sm text-zinc-200/75">{service.cta.subtitle}</div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button to={service.cta.primaryTo}>
                {service.cta.primaryLabel}
                <ArrowRight size={16} />
              </Button>
              <Button to="/iletisim" variant="secondary">
                İletişim sayfasına git
              </Button>
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <SideNav active={slug} />
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs font-semibold text-zinc-200/65">Regio</div>
            <div className="mt-2 text-sm font-semibold text-zinc-100">{elektromax.region}</div>
            <div className="mt-3 text-sm text-zinc-200/75">
              Hızlı iletişim için arayın veya mesaj bırakın.
            </div>
            <div className="mt-5 grid gap-2">
              <Button href={`tel:${elektromax.contact.phone.replace(/\s+/g, "")}`} variant="secondary">
                Ara: {elektromax.contact.phone}
              </Button>
              <Button to="/iletisim" variant="secondary">
                Formu aç
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

