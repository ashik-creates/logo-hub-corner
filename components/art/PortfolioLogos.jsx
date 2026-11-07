const baseProps = {
  viewBox: "0 0 64 64",
  fill: "none",
  "aria-hidden": true,
};

function Horizon() {
  return (
    <>
      <circle cx="32" cy="32" r="26" stroke="currentColor" strokeOpacity="0.32" />
      <path d="M18 38a14 14 0 0 1 28 0Z" fill="currentColor" />
      <path d="M14 38h36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M19 45h26M25 51h14" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="50" cy="18" r="2.2" fill="#C8A96E" />
    </>
  );
}

function EverPeak() {
  return (
    <>
      <path d="M9 46 24 25l9 12 7-9 15 18Z" fill="currentColor" fillOpacity="0.92" />
      <path d="M24 25l4 5.4-3 3.6 4 4-2.8 3" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 46h46" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="48" cy="18" r="4" stroke="currentColor" strokeOpacity="0.55" />
      <path d="M14 51h26" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.4" strokeLinecap="round" />
    </>
  );
}

function NovaPlay() {
  return (
    <>
      <path
        d="M32 7 37 27 57 32 37 37 32 57 27 37 7 32 27 27Z"
        fill="currentColor"
        fillOpacity="0.13"
        stroke="currentColor"
        strokeOpacity="0.42"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M28 22.5 45 32 28 41.5Z" fill="currentColor" />
      <circle cx="49" cy="15" r="2" fill="#C8A96E" />
    </>
  );
}

function GreenLeaf() {
  return (
    <>
      <path
        d="M32 8c17 9 21 29 3 48C17 41 15 21 32 8Z"
        fill="currentColor"
        fillOpacity="0.1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M32 15v34" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M32 26c-5-3-8-7-9-12M32 34c-6-3-10-7-12-13M32 36c6-4 10-9 12-15M32 44c5-3 8-7 9-12" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="48" cy="48" r="2.2" fill="#C8A96E" />
    </>
  );
}

function Skyward() {
  return (
    <>
      <path
        d="M52 17c-18 3-31 10-40 25 13-4 25-11 34-22-5 12-13 21-25 27 16-2 29-11 36-26Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <path d="M16 49c12-6 24-10 36-12" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M25 25h9M20 32h8" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="50" cy="17" r="2.2" fill="#C8A96E" />
    </>
  );
}

function PixelForge() {
  const filled = new Set(["0-0", "0-1", "0-2", "1-0", "2-0", "1-1"]);
  const cells = [];

  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      const key = `${row}-${col}`;
      const isFilled = filled.has(key);
      const isGold = key === "2-2";
      cells.push(
        <rect
          key={key}
          x={13 + col * 14}
          y={13 + row * 14}
          width="10"
          height="10"
          rx="2"
          fill={isGold ? "#C8A96E" : isFilled ? "currentColor" : "none"}
          stroke={isFilled || isGold ? "none" : "currentColor"}
          strokeOpacity={isFilled || isGold ? 0 : 0.28}
          strokeWidth="1.2"
        />,
      );
    }
  }

  return <>{cells}</>;
}

const marks = {
  horizon: Horizon,
  everpeak: EverPeak,
  novaplay: NovaPlay,
  greenleaf: GreenLeaf,
  skyward: Skyward,
  pixelforge: PixelForge,
};

export default function PortfolioLogo({ mark, className = "size-16" }) {
  const Mark = marks[mark];
  if (!Mark) return null;

  return (
    <svg {...baseProps} className={className}>
      <Mark />
    </svg>
  );
}
