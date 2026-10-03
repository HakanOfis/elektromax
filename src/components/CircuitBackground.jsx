import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

// Gegenereerde printplaat-illustratie: sporen tekenen zichzelf en er "loopt stroom" door.
const TRACES = [
  "M0 120 H180 L230 170 H420 L470 120 H640",
  "M0 300 H90 L140 250 H330 L380 300 H520 L570 350 H800",
  "M120 0 V80 L170 130 V260 L220 310 V520",
  "M640 0 V60 L590 110 V230 L640 280 V420 L690 470 V600",
  "M800 180 H700 L650 230 H560",
  "M0 460 H240 L290 410 H460 L510 460 H800",
  "M360 600 V520 L410 470 V380",
];

const NODES = [
  [180, 120], [420, 170], [640, 120], [330, 250], [520, 300], [170, 130], [220, 310],
  [590, 110], [640, 280], [560, 230], [240, 460], [460, 410], [410, 470],
];

export default function CircuitBackground({ className }) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="trace" x1="0" x2="1">
          <stop offset="0" stopColor="#ffc61a" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffc61a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#ffc61a" stopOpacity="0" />
        </linearGradient>
      </defs>
      {TRACES.map((d, i) => (
        <g key={d}>
          <motion.path
            d={d}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 0.2 + i * 0.15, ease: "easeInOut" }}
          />
          {!reduce && (
            <path
              d={d}
              fill="none"
              stroke="#ffc61a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 34"
              className="animate-flow"
              style={{ animationDuration: `${2 + (i % 3) * 0.7}s`, opacity: 0.55 }}
            />
          )}
        </g>
      ))}
      {NODES.map(([cx, cy], i) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="4"
          fill="#06173a"
          stroke="#ffc61a"
          strokeWidth="1.5"
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ delay: 1.2 + i * 0.06, duration: 0.4 }}
        />
      ))}
    </svg>
  );
}
