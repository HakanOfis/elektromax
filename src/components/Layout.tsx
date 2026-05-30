import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Layout({ title, description, children, className }: Props) {
  const location = useLocation();

  useEffect(() => {
    if (title) document.title = title;
  }, [title, location.pathname]);

  useEffect(() => {
    if (!description) return;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", description);
  }, [description, location.pathname]);

  return (
    <div
      className="min-h-dvh text-zinc-100"
      style={{ backgroundColor: "var(--em-bg)", backgroundImage: "var(--em-page-bg)" }}
    >
      <div className="pointer-events-none fixed inset-0 opacity-[0.22] mix-blend-overlay [background-image:var(--em-noise)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.08),transparent_44%)]" />
      <Header />
      <main className={cn("mx-auto w-full max-w-[1100px] px-6 pb-16 pt-10", className)}>
        {children}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
