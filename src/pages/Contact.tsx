import { useMemo, useState } from "react";
import { ArrowRight, Copy, Mail, Phone, Send, Share2 } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { elektromax } from "@/content/elektromax";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  contact: string;
  subject: string;
  message: string;
};

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-xs font-semibold text-zinc-200/65">{label}</div>
      <div className="mt-2 flex items-center justify-between gap-3">
        <a className="truncate text-sm font-semibold hover:text-zinc-100" href={href}>
          {value}
        </a>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200/80 transition hover:bg-white/8",
            copied && "border-[var(--em-accent)]/30 text-zinc-100",
          )}
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(value);
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1200);
            } catch {
              setCopied(false);
            }
          }}
        >
          <Copy size={14} />
          {copied ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    subject: "Keuring / AREI hazırlığı",
    message: "",
  });

  const telHref = useMemo(
    () => `tel:${elektromax.contact.phone.replace(/\s+/g, "")}`,
    [],
  );
  const mailHref = useMemo(() => `mailto:${elektromax.contact.email}`, []);

  const mailDraftHref = useMemo(() => {
    const subject = encodeURIComponent(`Elektromax – ${form.subject}`);
    const body = encodeURIComponent(
      [
        `İsim: ${form.name || "-"}`,
        `İletişim: ${form.contact || "-"}`,
        "",
        form.message || "",
      ].join("\n"),
    );
    return `mailto:${elektromax.contact.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <Layout
      title="İletişim | Elektromax – Regio Antwerpen"
      description="Keuring/AREI hazırlığı, genel elektrik işleri, yeni tesisat veya EV laadpalen için Elektromax ile iletişime geçin."
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">İletişim</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          {elektromax.contactPage.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[.95fr_.55fr]">
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
          <h2 className="text-lg font-extrabold tracking-tight md:text-xl">Mesaj gönderin</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-200/75">{elektromax.contactPage.formHelp}</p>

          <form
            className="mt-6 grid gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);

              const msg = form.message.trim();
              if (msg.length < 10) {
                setError("Mesaj alanına talebinizi biraz daha detaylı yazın.");
                return;
              }

              setStatus("sending");
              await new Promise((r) => window.setTimeout(r, 850));
              setStatus("sent");
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-zinc-200/70">Ad Soyad</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  className="h-11 rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-zinc-100 outline-none transition focus:border-white/25"
                  placeholder="Adınız"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-zinc-200/70">Telefon veya e-posta</span>
                <input
                  value={form.contact}
                  onChange={(e) => setForm((s) => ({ ...s, contact: e.target.value }))}
                  className="h-11 rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-zinc-100 outline-none transition focus:border-white/25"
                  placeholder="+32… veya email"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-xs font-semibold text-zinc-200/70">Konu</span>
              <select
                value={form.subject}
                onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                className="h-11 rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-zinc-100 outline-none transition focus:border-white/25"
              >
                <option>Keuring / AREI hazırlığı</option>
                <option>Genel elektrik işleri</option>
                <option>Yeni bina & şantiye tesisatı</option>
                <option>EV şarj istasyonu (laadpalen)</option>
                <option>Kamera / interkom sistemleri</option>
                <option>Diğer</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold text-zinc-200/70">Mesaj</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                className="min-h-32 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-white/25"
                placeholder="Mekan tipi, bölge, ihtiyacınız ve zaman tercihinizi yazın."
              />
            </label>

            {error ? <div className="text-sm font-semibold text-red-200/90">{error}</div> : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" className="sm:w-auto">
                {status === "sending" ? "Gönderiliyor…" : status === "sent" ? "Gönderildi" : "Gönder"}
                <Send size={16} />
              </Button>
              <Button href={mailDraftHref} variant="secondary" className="sm:w-auto">
                E-posta ile gönder
                <ArrowRight size={16} />
              </Button>
            </div>

            {status === "sent" ? (
              <div className="rounded-2xl border border-[var(--em-accent)]/30 bg-[rgba(255,225,0,.08)] p-4 text-sm text-zinc-100/90">
                Mesajınız alındı. En kısa sürede dönüş yapacağız. Daha hızlı iletişim için arayabilirsiniz.
              </div>
            ) : null}
          </form>
        </section>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-lg font-extrabold tracking-tight md:text-xl">Hızlı iletişim</h2>
            <div className="mt-4 grid gap-3">
              <ContactRow label="Telefon" value={elektromax.contact.phone} href={telHref} />
              <ContactRow label="E-posta" value={elektromax.contact.email} href={mailHref} />
            </div>

            <div className="mt-5 grid gap-2">
              <Button href={telHref} variant="secondary">
                <Phone size={16} />
                Ara
              </Button>
              <Button href={mailHref} variant="secondary">
                <Mail size={16} />
                Mail at
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-extrabold tracking-tight">Sosyal medya</div>
                <div className="mt-2 text-sm text-zinc-200/75">Instagram & X: {elektromax.socials[0].handle}</div>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30 text-[var(--em-accent)]">
                <Share2 size={16} />
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              {elektromax.socials.map((s) => (
                <Button key={s.label} href={s.url} variant="secondary">
                  {s.label} @{s.handle}
                  <ArrowRight size={16} />
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-xs font-semibold text-zinc-200/65">Bölge</div>
            <div className="mt-2 text-sm font-semibold text-zinc-100">{elektromax.region}</div>
            <div className="mt-3 text-sm text-zinc-200/75">{elektromax.contactPage.closing}</div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}

