export default function SectionLabel({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-cream/55 ${className}`}
    >
      <span className="h-px w-7 bg-gold/80" aria-hidden="true" />
      {children}
    </span>
  );
}
