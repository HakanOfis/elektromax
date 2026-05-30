import { getContent } from "@/content";
import { ui } from "@/content/ui";
import { useLocale } from "@/hooks/useLocale";

export function useI18n() {
  const locale = useLocale((s) => s.locale);
  const setLocale = useLocale((s) => s.setLocale);
  const toggleLocale = useLocale((s) => s.toggleLocale);
  const content = getContent(locale);

  return {
    locale,
    setLocale,
    toggleLocale,
    ui: ui[locale],
    content,
    isNl: locale === "nl",
  };
}

