import { useEffect, useState } from "react";
import { Check, Mail, Zap } from "lucide-react";

import { cta } from "@/components/cta";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useContactLinks, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const KEY = "elektromax.offer.popup.v2";

// "GRATIS offerte"-popup van de vorige site: nu pas na enkele seconden en één keer per sessie.
export default function OfferDialog() {
  const { x, content } = useI18n();
  const links = useContactLinks();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    const t = window.setTimeout(() => {
      setOpen(true);
      try {
        window.sessionStorage.setItem(KEY, "1");
      } catch {
        // negeren
      }
    }, 9000);
    return () => window.clearTimeout(t);
  }, []);

  const mailBody = [x.offer.badge, "", ...x.offer.lines.map((l) => `- ${l}`)].join("\n");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 sm:max-w-md">
        <div className="relative bg-ink p-6 pb-5 text-white">
          <div className="blueprint absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-volt px-3 py-1 text-xs font-bold text-ink">
              <Zap className="size-3.5" /> {x.offer.badge}
            </span>
            <DialogTitle className="mt-3 font-heading text-2xl font-extrabold text-white">{x.offer.title}</DialogTitle>
          </div>
        </div>
        <div className="p-6 pt-4">
          <DialogDescription className="sr-only">{x.offer.badge}</DialogDescription>
          <ul className="space-y-2">
            {x.offer.lines.map((l) => (
              <li key={l} className="flex gap-2.5 text-sm text-foreground/85">
                <Check className="mt-0.5 size-4 shrink-0 text-volt-deep" /> {l}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            <a href={links.whatsapp(x.offer.waMessage)} target="_blank" rel="noopener noreferrer" className={cta({ variant: "whatsapp" })}>
              {x.whatsapp}
            </a>
            <a
              href={`mailto:${content.contact.email}?subject=${encodeURIComponent(x.offer.badge)}&body=${encodeURIComponent(mailBody)}`}
              className={cta({ variant: "navy" })}
            >
              <Mail /> {x.offer.email}
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className={cn("mt-3 w-full rounded-full py-2 text-sm font-medium text-muted-foreground transition hover:text-navy")}
          >
            {x.offer.dismiss}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
