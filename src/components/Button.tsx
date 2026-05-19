import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles: Record<Variant, string> = {
  primary:
    "relative inline-flex items-center justify-center gap-2 rounded-full bg-[var(--em-accent)] px-5 py-3 text-sm font-semibold text-zinc-950 shadow-[0_12px_30px_-18px_rgba(0,0,0,.75)] transition hover:brightness-110 active:translate-y-px",
  secondary:
    "relative inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/8 active:translate-y-px",
  ghost:
    "relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-zinc-100/85 transition hover:text-zinc-100 hover:bg-white/5 active:translate-y-px",
};

function Inner({
  variant = "primary",
  className,
  children,
}: Pick<Props, "variant" | "className" | "children">) {
  return (
    <span className={cn(styles[variant], "group", className)}>
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.18),transparent_60%)]" />
      <span className="relative">{children}</span>
    </span>
  );
}

export default function Button({
  to,
  href,
  onClick,
  children,
  className,
  variant,
  type,
  ...props
}: Props) {
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cn("inline-flex", className)}>
        <Inner variant={variant} className="w-full">
          {children}
        </Inner>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={cn("inline-flex", className)}
        target="_blank"
        rel="noreferrer"
      >
        <Inner variant={variant} className="w-full">
          {children}
        </Inner>
      </a>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className={cn(styles[variant ?? "primary"], className)}
      {...props}
    >
      {children}
    </button>
  );
}
