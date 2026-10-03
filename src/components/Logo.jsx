import { cn } from "@/lib/utils";

// Vectorversie van het Elektromax-merkteken (schild + bliksem).
export function LogoMark({ className, boltClassName = "fill-white" }) {
  return (
    <svg viewBox="0 0 48 56" className={cn("h-9 w-auto", className)} aria-hidden="true">
      <path
        className="fill-navy"
        d="M24 2c12.5 0 22 6.6 22 18.6 0 13.8-11.4 27.3-19.6 33.4a3.9 3.9 0 0 1-4.8 0C13.4 47.9 2 34.4 2 20.6 2 8.6 11.5 2 24 2Z"
      />
      <path className={boltClassName} d="M28.5 6 15 31.5h8.6L19.4 51 35 23.6h-8.9L31.8 6h-3.3Z" />
    </svg>
  );
}

export function Logo({ className, inverted = false }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className={cn("grid place-items-center rounded-xl", inverted && "bg-white p-1")}>
        <LogoMark className="h-8" boltClassName="fill-volt" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-heading text-[1.35rem] font-extrabold tracking-tight",
            inverted ? "text-white" : "text-navy",
          )}
        >
          Elektro<span className="text-volt-deep">max</span>
        </span>
        <span
          className={cn(
            "mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
            inverted ? "text-white/55" : "text-muted-foreground",
          )}
        >
          Elektricien · Antwerpen
        </span>
      </span>
    </span>
  );
}
