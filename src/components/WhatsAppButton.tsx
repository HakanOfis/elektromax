import { useMemo } from "react";
import { useI18n } from "@/hooks/useI18n";

const WA_PARTS = ["32", "4857", "72630"];

const waMessages: Record<string, string> = {
  nl: "Hallo, ik neem contact op via de website van Elektromax.",
  en: "Hello, I am contacting you via the Elektromax website.",
  tr: "Merhaba, Elektromax web sitesi üzerinden ulaşıyorum.",
};

export default function WhatsAppButton() {
  const { locale } = useI18n();

  const waHref = useMemo(() => {
    const number = WA_PARTS.join("");
    const message = encodeURIComponent(waMessages[locale] ?? waMessages.nl);
    return `https://wa.me/${number}?text=${message}`;
  }, [locale]);

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition hover:scale-105 hover:bg-[#20BD5A] focus:outline-none"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.695-1.82A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.87-.53-5.51-1.51l-.39-.23-4.57 1.08 1.1-4.45-.25-.4A9.97 9.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
