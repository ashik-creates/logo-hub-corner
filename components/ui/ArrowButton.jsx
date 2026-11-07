const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const sizes = {
  sm: "h-10 px-5",
  md: "h-11 px-6",
  lg: "h-12 px-7",
};

const variants = {
  solid: "bg-cream text-ink hover:bg-[#e2e2d4] hover:shadow-[0_8px_30px_-12px_rgba(239,239,227,0.45)]",
  outline:
    "border border-cream/25 text-cream hover:border-cream/60 hover:bg-cream/[0.06]",
  dark: "bg-ink text-cream hover:bg-ink-raised",
};

export default function ArrowButton({
  children,
  icon,
  href,
  onClick,
  type = "button",
  variant = "solid",
  size = "md",
  className = "",
  ...props
}) {
  const classes = `${base} ${sizes[size] ?? sizes.md} ${variants[variant] ?? variants.solid} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span
          className="flex transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
