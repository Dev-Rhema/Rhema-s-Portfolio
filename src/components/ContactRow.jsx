export default function ContactRow({ icon, label, value, href, palette }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-9 h-9 rounded-full border flex items-center justify-center shrink-0"
        style={{ borderColor: palette.line, color: palette.accent }}
      >
        {icon}
      </div>
      <div>
        <div
          className="font-mono text-[9px] uppercase tracking-wide"
          style={{ color: palette.inkMuted }}
        >
          {label}
        </div>
        <div
          className="font-serif text-sm sm:text-base"
          style={{ color: palette.ink }}
        >
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 hover:underline"
              style={{ color: palette.ink }}
            >
              {value}
            </a>
          ) : (
            value
          )}
        </div>
      </div>
    </div>
  );
}
