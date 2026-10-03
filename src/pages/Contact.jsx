import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";

import Layout from "@/components/Layout";
import { cta } from "@/components/cta";
import { Reveal } from "@/components/motion";
import { FaqSection, PageHero } from "@/components/sections";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { img } from "@/content/media";
import { useContactLinks, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function CopyRow({ icon: Icon, label, value, href, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-volt text-ink">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-white/50">{label}</div>
        <a href={href} className="block truncate font-semibold text-white transition hover:text-volt">
          {value}
        </a>
      </div>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1400);
          } catch {
            setCopied(false);
          }
        }}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/75 transition hover:border-volt hover:text-volt"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}

export default function Contact() {
  const { ui, content, x } = useI18n();
  const links = useContactLinks();
  const c = ui.contactPage;
  const [form, setForm] = useState({ name: "", contact: "", subject: c.subjectOptions[0], message: "" });
  const [error, setError] = useState(null);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  // Er is geen backend: het formulier stelt een e-mail of WhatsApp-bericht op.
  const composed = [
    `${c.name}: ${form.name || "-"}`,
    `${c.contact}: ${form.contact || "-"}`,
    `${c.subject}: ${form.subject}`,
    "",
    form.message,
  ].join("\n");

  const validate = () => {
    if (form.message.trim().length < 10) {
      setError(c.errorMessage);
      return false;
    }
    setError(null);
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`${content.name} – ${form.subject}`);
    window.location.href = `mailto:${content.contact.email}?subject=${subject}&body=${encodeURIComponent(composed)}`;
  };

  const onWhatsapp = () => {
    if (!validate()) return;
    window.open(links.whatsapp(composed), "_blank", "noopener,noreferrer");
  };

  return (
    <Layout title={ui.meta.contactTitle} description={ui.meta.contactDescription}>
      <PageHero kicker={x.contactKicker} title={c.title} lead={content.contactPage.intro} image={img.kabels} />

      <section className="container-x grid gap-8 py-20 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="rounded-[2rem] border border-border bg-white p-7 sm:p-10">
          <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{c.sendMessage}</h2>
          <p className="mt-3 text-muted-foreground">{content.contactPage.formHelp}</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">{c.name}</Label>
                <Input id="name" autoComplete="name" value={form.name} onChange={set("name")} placeholder={c.placeholderName} className="h-12 rounded-xl" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="contact">{c.contact}</Label>
                <Input id="contact" value={form.contact} onChange={set("contact")} placeholder={c.placeholderContact} className="h-12 rounded-xl" />
              </div>
            </div>

            <fieldset className="grid gap-2">
              <legend className="mb-2 text-sm font-medium">{c.subject}</legend>
              <div className="flex flex-wrap gap-2">
                {c.subjectOptions.map((o) => (
                  <label
                    key={o}
                    className={cn(
                      "cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition has-focus-visible:ring-3 has-focus-visible:ring-volt/50",
                      form.subject === o ? "border-navy bg-navy text-white" : "border-border text-foreground/75 hover:border-navy/40",
                    )}
                  >
                    <input type="radio" name="subject" value={o} checked={form.subject === o} onChange={set("subject")} className="sr-only" />
                    {o}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-2">
              <Label htmlFor="message">{c.message}</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={set("message")}
                placeholder={c.placeholderMessage}
                aria-invalid={Boolean(error)}
                className="min-h-36 rounded-xl"
              />
            </div>

            {error ? (
              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-destructive">
                {error}
              </motion.p>
            ) : null}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className={cta({ variant: "navy", size: "lg" })}>
                <Send /> {c.sendByEmail}
              </button>
              <button type="button" onClick={onWhatsapp} className={cta({ variant: "whatsapp", size: "lg" })}>
                {x.sendWhatsapp}
              </button>
            </div>
            <p className="text-xs text-muted-foreground">{x.formNote}</p>
          </form>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={0.1} className="relative overflow-hidden rounded-[2rem] bg-ink p-7 text-white sm:p-8">
            <div className="blueprint absolute inset-0" aria-hidden="true" />
            <div className="relative space-y-3">
              <h2 className="mb-5 text-xl font-bold">{ui.common.quickContact}</h2>
              <CopyRow icon={Phone} label={ui.footer.call} value={content.contact.phone} href={links.tel} copyLabel={c.copy} copiedLabel={c.copied} />
              <CopyRow icon={Mail} label={ui.footer.email} value={content.contact.email} href={links.mail} copyLabel={c.copy} copiedLabel={c.copied} />
              <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer" className={cn(cta({ variant: "whatsapp", size: "lg" }), "mt-2 w-full")}>
                {x.whatsapp}
              </a>
              <div className="flex flex-wrap gap-2 pt-3">
                {content.socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/75 transition hover:border-volt hover:text-volt">
                    {s.label} @{s.handle}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="overflow-hidden rounded-[2rem] border border-border bg-white">
            <iframe
              title={x.mapTitle}
              src="https://www.google.com/maps?q=Antwerpen,+Belgi%C3%AB&z=11&output=embed"
              className="h-64 w-full border-0 grayscale-[30%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center gap-3 p-5">
              <MapPin className="size-5 text-volt-deep" />
              <div>
                <div className="text-xs text-muted-foreground">{c.zone}</div>
                <div className="font-semibold text-navy">{content.region} · {content.contact.addressLine}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="rounded-[2rem] bg-paper p-7 text-sm leading-relaxed whitespace-pre-line text-foreground/75">
            {content.contactPage.closing}
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </Layout>
  );
}
