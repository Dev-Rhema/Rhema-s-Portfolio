import { useReveal } from "./Reveal";

export default function VoltmeterGauge({ skill, palette, delay }) {
  const [ref, visible] = useReveal(0.3);
  const { name, value, note } = skill;
  const angle = -90 + (value / 100) * 180;
  const needleAngle = visible ? angle : -90;
  const ticks = Array.from({ length: 11 }, (_, i) => -90 + i * 18);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 px-3 py-5 border"
      style={{
        borderColor: palette.line,
        backgroundColor: palette.card,
        transitionProperty: "opacity, transform",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(14px) scale(0.97)",
      }}
    >
      <svg
        width="116"
        height="76"
        viewBox="0 0 118 78"
        className="overflow-visible"
      >
        <path
          d="M 9 69 A 50 50 0 0 1 109 69"
          fill="none"
          stroke={palette.ochre}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M 13 69 A 46 46 0 0 1 105 69"
          fill="none"
          stroke={palette.line}
          strokeWidth="5"
          style={{ stroke: palette.inkMuted, opacity: 0.25 }}
        />
        <path
          d="M 13 69 A 46 46 0 0 1 105 69"
          fill="none"
          stroke={palette.olive}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={`${(visible ? value : 0) * 1.445} 1000`}
          style={{
            transitionProperty: "stroke-dasharray",
            transitionDuration: "1100ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: `${delay + 120}ms`,
          }}
        />
        {ticks.map((t, i) => {
          const rad = (t * Math.PI) / 180;
          const x1 = 59 + 41 * Math.sin(rad);
          const y1 = 69 - 41 * Math.cos(rad);
          const x2 = 59 + 46 * Math.sin(rad);
          const y2 = 69 - 46 * Math.cos(rad);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={palette.ink}
              strokeWidth={i % 5 === 0 ? 1.4 : 0.7}
              opacity={i % 5 === 0 ? 0.5 : 0.25}
            />
          );
        })}
        <g
          style={{
            transformOrigin: "59px 69px",
            transform: `rotate(${needleAngle}deg)`,
            transitionProperty: "transform",
            transitionDuration: "1300ms",
            transitionTimingFunction: "cubic-bezier(0.34, 1.2, 0.3, 1)",
            transitionDelay: `${delay + 150}ms`,
          }}
        >
          <line
            x1="59"
            y1="69"
            x2="59"
            y2="28"
            stroke={palette.accent}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <circle cx="59" cy="69" r="4.5" fill={palette.ochre} />
        <circle cx="59" cy="69" r="2" fill={palette.bg} />
      </svg>

      <div className="text-center -mt-1">
        <div
          className="font-mono text-[11px] tabular-nums"
          style={{ color: palette.accent }}
        >
          {visible ? value : 0}%
        </div>
        <div
          className="font-display text-[13px] sm:text-sm leading-tight mt-1"
          style={{ color: palette.ink, fontWeight: 700 }}
        >
          {name}
        </div>
        <div
          className="font-mono text-[9px] uppercase tracking-[0.08em] mt-1.5 opacity-60"
          style={{ color: palette.ink }}
        >
          {note}
        </div>
      </div>
    </div>
  );
}
