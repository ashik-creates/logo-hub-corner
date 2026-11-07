export default function Monogram({
  className = "size-10",
  filled = true,
  title,
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="13"
        fill={filled ? "#EFEFE3" : "transparent"}
        stroke={filled ? "transparent" : "rgba(239,239,227,0.4)"}
        strokeWidth="1.5"
      />
      <path
        d="M15.5 12.5v23h13"
        fill="none"
        stroke={filled ? "#000C02" : "#EFEFE3"}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 12.5v12h9"
        fill="none"
        stroke={filled ? "#000C02" : "#EFEFE3"}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35" cy="13.5" r="2.1" fill="#C8A96E" />
    </svg>
  );
}
