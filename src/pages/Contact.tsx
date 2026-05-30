import { useMemo, useState } from "react";
import { ArrowRight, Copy, Mail, Phone, Send, Share2 } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { useI18n } from "@/hooks/useI18n";
import { cn } from "@/lib/utils";

// Formspree form ID — get it from https://formspree.io → New Form → email: info@maxelektro.be
const FORMSPREE_ID = "YOUR_FORM_ID";

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
  copyLabel,
  copiedLabel,
}: {
  label: string;
  value: string;
  href: string;
  copyLabel: string;
  copiedLabel: string;
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
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const { content, ui, locale } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    subject: ui.contactPage.subjectOptions[0] ?? "",
    message: "",
  });

  const telHref = useMemo(
    () => `tel:${content.contact.phone.replace(/\s+/g, "")}`,
    [content.contact.phone],
  );
  const mailHref = useMemo(() => `mailto:${content.contact.email}`, [content.contact.email]);

  const mailDraftHref = useMemo(() => {
    const subject = encodeURIComponent(`${content.name} – ${form.subject}`);
    const nameLabel = locale === "nl" ? "Naam" : "İsim";
    const contactLabel = locale === "nl" ? "Contact" : "İletişim";
    const body = encodeURIComponent(
      [
        `${nameLabel}: ${form.name || "-"}`,
        `${contactLabel}: ${form.contact || "-"}`,
        "",
        form.message || "",
      ].join("\n"),
    );
    return `mailto:${content.contact.email}?subject=${subject}&body=${body}`;
  }, [content.contact.email, content.name, form, locale]);

  return (
    <Layout
      title={ui.meta.contactTitle}
      description={ui.meta.contactDescription}
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-black tracking-tight md:text-4xl">{ui.contactPage.title}</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-200/75">
          {content.contactPage.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[.95fr_.55fr]">
        <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
          <h2 className="text-lg font-extrabold tracking-tight md:text-xl">{ui.contactPage.sendMessage}</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-200/75">{content.contactPage.formHelp}</p>

          <form
            className="mt-6 grid gap-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);

              const msg = form.message.trim();
              if (msg.length < 10) {
                setError(ui.contactPage.errorMessage);
                return;
              }

              setStatus("sending");
              try {
                const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json", Accept: "application/json" },
                  body: JSON.stringify({
                    name: form.name,
                    contact: form.contact,
                    subject: form.subject,
                    message: form.message,
                    _locale: locale,
                  }),
                });
                if (res.ok) {
                  setStatus("sent");
                } else {
                  throw new Error("Network response was not ok");
                }
              } catch {
                setStatus("idle");
                setError(ui.contactPage.errorMessage);
              }
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-zinc-200/70">{ui.contactPage.name}</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  className="h-11 rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-zinc-100 outline-none transition focus:border-white/25"
                  placeholder={ui.contactPage.placeholderName}
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-semibold text-zinc-200/70">{ui.contactPage.contact}</span>
                <input
                  value={form.contact}
                  onChange={(e) => setForm((s) => ({ ...s, contact: e.target.value }))}
                  className="h-11 rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-zinc-100 outline-none transition focus:border-white/25"
                  placeholder={ui.contactPage.placeholderContact}
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-xs font-semibold text-zinc-200/70">{ui.contactPage.subject}</span>
              <select
                value={form.subject}
                onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                className="h-11 rounded-2xl border border-white/10 bg-black/35 px-4 text-sm text-zinc-100 outline-none transition focus:border-white/25"
              >
                {ui.contactPage.subjectOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-xs font-semibold text-zinc-200/70">{ui.contactPage.message}</span>
              <textarea
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                className="min-h-32 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-white/25"
                placeholder={ui.contactPage.placeholderMessage}
              />
            </label>

            {error ? <div className="text-sm font-semibold text-red-200/90">{error}</div> : null}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" className="sm:w-auto">
                {status === "sending" ? ui.contactPage.sending : status === "sent" ? ui.contactPage.sent : ui.contactPage.send}
                <Send size={16} />
              </Button>
              <Button href={mailDraftHref} variant="secondary" className="sm:w-auto">
                {ui.contactPage.sendByEmail}
                <ArrowRight size={16} />
              </Button>
            </div>

            {status === "sent" ? (
              <div className="rounded-2xl border border-[var(--em-accent)]/30 bg-[rgba(255,225,0,.08)] p-4 text-sm text-zinc-100/90">
                {ui.contactPage.success}
              </div>
            ) : null}
          </form>
        </section>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-lg font-extrabold tracking-tight md:text-xl">{ui.common.quickContact}</h2>
            <div className="mt-4 grid gap-3">
              <ContactRow label={ui.contactPage.contact} value={content.contact.phone} href={telHref} copyLabel={ui.contactPage.copy} copiedLabel={ui.contactPage.copied} />
              <ContactRow label={ui.footer.email} value={content.contact.email} href={mailHref} copyLabel={ui.contactPage.copy} copiedLabel={ui.contactPage.copied} />
            </div>

            <div className="mt-5 grid gap-2">
              <Button href={telHref} variant="secondary">
                <Phone size={16} />
                {ui.header.call}
              </Button>
              <Button href={mailHref} variant="secondary">
                <Mail size={16} />
                {ui.contactPage.mail}
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-extrabold tracking-tight">{ui.contactPage.social}</div>
                <div className="mt-2 text-sm text-zinc-200/75">Instagram & X: {content.socials[0].handle}</div>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-black/30 text-[var(--em-accent)]">
                <Share2 size={16} />
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              {content.socials.map((s) => (
                <Button key={s.label} href={s.url} variant="secondary">
                  {s.label} @{s.handle}
                  <ArrowRight size={16} />
                </Button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <div className="text-xs font-semibold text-zinc-200/65">{ui.contactPage.zone}</div>
            <div className="mt-2 text-sm font-semibold text-zinc-100">{content.region}</div>
            <div className="mt-3 text-sm text-zinc-200/75">{content.contactPage.closing}</div>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
