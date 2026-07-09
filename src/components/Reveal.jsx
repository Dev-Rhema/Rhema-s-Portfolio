import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
}) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

export function InkUnderline({ children, color, delay = 300 }) {
  const [ref, visible] = useReveal(0.6);

  return (
    <span ref={ref} className="relative inline-block">
      {children}
      <svg
        className="absolute left-0 -bottom-1 sm:-bottom-2 w-full"
        height="10"
        viewBox="0 0 200 10"
        preserveAspectRatio="none"
      >
        <path
          d="M2 6.5C40 3 90 8 130 5.5C150 4 175 6 198 4"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            strokeDasharray: 260,
            strokeDashoffset: visible ? 0 : 260,
            transition: `stroke-dashoffset 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          }}
        />
      </svg>
    </span>
  );
}
