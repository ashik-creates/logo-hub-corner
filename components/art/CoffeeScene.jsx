export default function CoffeeScene({ className = "" }) {
  return (
    <svg
      viewBox="0 0 900 500"
      className={className}
      role="img"
      aria-labelledby="coffee-title coffee-desc"
      preserveAspectRatio="xMidYMid slice"
    >
      <title id="coffee-title">Coffee on a warm wooden studio desk</title>
      <desc id="coffee-desc">
        A cinematic still life with a monogrammed coffee cup, rising steam,
        plants and a warm wooden desk.
      </desc>

      <defs>
        <linearGradient id="cs-bg" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#061B0F" />
          <stop offset="0.55" stopColor="#03130A" />
          <stop offset="1" stopColor="#010803" />
        </linearGradient>

        <radialGradient id="cs-glow" cx="0.7" cy="0.32" r="0.58">
          <stop offset="0" stopColor="#F0C97E" stopOpacity="0.22" />
          <stop offset="0.55" stopColor="#C8A96E" stopOpacity="0.07" />
          <stop offset="1" stopColor="#C8A96E" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="cs-wood" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#4A301B" />
          <stop offset="0.32" stopColor="#382314" />
          <stop offset="1" stopColor="#140C07" />
        </linearGradient>

        <linearGradient id="cs-wood-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6A4726" />
          <stop offset="1" stopColor="#2A1A0E" />
        </linearGradient>

        <linearGradient id="cs-cup" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#F4EEDD" />
          <stop offset="0.55" stopColor="#E4DAC3" />
          <stop offset="1" stopColor="#BEB29A" />
        </linearGradient>

        <linearGradient id="cs-saucer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EFE7D3" />
          <stop offset="1" stopColor="#B3A78F" />
        </linearGradient>

        <linearGradient id="cs-steam" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#EFEFE3" stopOpacity="0.28" />
          <stop offset="0.55" stopColor="#EFEFE3" stopOpacity="0.14" />
          <stop offset="1" stopColor="#EFEFE3" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="cs-vignette" cx="0.55" cy="0.45" r="0.78">
          <stop offset="0.5" stopColor="#000C02" stopOpacity="0" />
          <stop offset="1" stopColor="#000C02" stopOpacity="0.9" />
        </radialGradient>

        <radialGradient id="cs-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#070403" stopOpacity="0.75" />
          <stop offset="1" stopColor="#070403" stopOpacity="0" />
        </radialGradient>

        <filter id="cs-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="16" />
        </filter>

        <filter id="cs-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="900" height="500" fill="url(#cs-bg)" />
      <rect width="900" height="500" fill="url(#cs-glow)" />

      {/* Wall panel seams */}
      <path d="M104 0v276M312 0v282M690 0v270M788 0v266" stroke="#EFEFE3" strokeOpacity="0.035" />
      <path d="M0 212h900" stroke="#EFEFE3" strokeOpacity="0.03" />

      {/* Light shaft */}
      <path d="M612 0h210L742 290H488Z" fill="#F4DDA6" fillOpacity="0.025" />

      {/* Hanging plant on the right */}
      <g opacity="0.85">
        <path d="M824 0c-10 34-26 58-48 74" stroke="#1A3B22" strokeWidth="2" fill="none" />
        <path d="M818 42c-16 8-24 24-22 44 18-8 27-25 22-44Z" fill="#12301C" />
        <path d="M806 76c-20 2-33 14-39 34 20-1 34-14 39-34Z" fill="#0E2817" />
        <path d="M792 112c-18-4-34 2-46 18 20 5 36-1 46-18Z" fill="#173A22" />
        <path d="M792 112c4-18 18-29 38-32-5 19-19 30-38 32Z" fill="#0C2314" />
      </g>

      {/* Warm bokeh */}
      <circle cx="806" cy="176" r="24" fill="#F0C97E" fillOpacity="0.06" filter="url(#cs-soft)" />
      <circle cx="754" cy="130" r="12" fill="#F0C97E" fillOpacity="0.08" filter="url(#cs-soft)" />
      <circle cx="854" cy="222" r="9" fill="#F0C97E" fillOpacity="0.1" filter="url(#cs-soft)" />

      {/* Desk */}
      <path d="M0 298 900 262v238H0Z" fill="url(#cs-wood)" />
      <path d="M0 298 900 262v12L0 310Z" fill="url(#cs-wood-edge)" />
      <path d="M0 310 900 274" stroke="#EFEFE3" strokeOpacity="0.11" />
      <path d="M0 340 900 304M0 396 900 360M0 458 900 422" stroke="#0A0603" strokeOpacity="0.33" />
      <path
        d="M20 332c150-6 260-10 380-8M480 318c120-6 230-10 400-12M60 374c120-4 230-8 330-6M500 358c140-6 250-8 380-8M30 448c190-10 330-14 470-10M560 430c110-4 210-6 320-8"
        stroke="#EFEFE3"
        strokeOpacity="0.035"
        fill="none"
      />
      <path
        d="M96 322c50-4 100-4 150 0M610 312c40-3 90-4 140-5M210 410c70-4 140-4 200 0M640 392c40-2 80-2 120-3"
        stroke="#000C02"
        strokeOpacity="0.22"
        fill="none"
      />

      {/* Cup shadow */}
      <ellipse cx="688" cy="402" rx="132" ry="34" fill="url(#cs-shadow)" filter="url(#cs-soft)" />

      {/* Saucer */}
      <ellipse cx="686" cy="390" rx="118" ry="31" fill="#16100A" fillOpacity="0.55" />
      <ellipse cx="686" cy="382" rx="114" ry="29" fill="url(#cs-saucer)" />
      <ellipse cx="686" cy="377" rx="96" ry="21" fill="#D8CDB5" />
      <path d="M590 376c16-12 52-18 96-18s80 6 96 18" fill="none" stroke="#F8F3E7" strokeOpacity="0.55" strokeWidth="2" />
      <path d="M604 390c22 9 50 13 82 13s60-4 82-13" fill="none" stroke="#7D725E" strokeOpacity="0.45" />

      {/* Spoon */}
      <g transform="rotate(-14 792 386)">
        <ellipse cx="792" cy="386" rx="13" ry="7" fill="#C7BCA6" />
        <ellipse cx="792" cy="385" rx="8" ry="4" fill="#9A8F7A" />
        <rect x="804" y="384" width="38" height="4" rx="2" fill="#C7BCA6" />
      </g>

      {/* Cup body */}
      <path
        d="M632 312h108l-9 62c-2 14-20 24-45 24s-43-10-45-24Z"
        fill="url(#cs-cup)"
      />
      <path d="M632 312h108l-2 13H634Z" fill="#FBF7EC" fillOpacity="0.7" />
      <path
        d="M740 322c25-3 36 10 35 27-1 18-14 29-36 27"
        fill="none"
        stroke="#D8CDB5"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M740 323c22-2 31 8 31 25-1 15-11 24-30 23"
        fill="none"
        stroke="#F7F1E3"
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Coffee surface */}
      <ellipse cx="686" cy="313" rx="53" ry="14" fill="#2B170D" />
      <ellipse cx="686" cy="312" rx="44" ry="10" fill="#3B2112" />
      <ellipse cx="674" cy="310" rx="18" ry="5" fill="#7A4C2A" fillOpacity="0.5" />

      {/* Monogram on cup */}
      <circle cx="686" cy="352" r="18" fill="none" stroke="#000C02" strokeOpacity="0.45" />
      <path d="M680 343v18h10" fill="none" stroke="#000C02" strokeOpacity="0.55" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M687 343v9h7" fill="none" stroke="#000C02" strokeOpacity="0.55" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="697" cy="344" r="1.4" fill="#C8A96E" />
      <text x="686" y="380" textAnchor="middle" fill="#000C02" fillOpacity="0.4" fontFamily="Georgia, serif" fontSize="5.5" letterSpacing="2.4">
        LOGO HUB CORNER
      </text>

      {/* Steam */}
      <g fill="none" stroke="url(#cs-steam)" strokeWidth="3.2" strokeLinecap="round">
        <path d="M664 300c-10-18 8-30 0-50s10-32 2-54">
          <animate attributeName="opacity" values="0.45;0.8;0.45" dur="6s" repeatCount="indefinite" />
        </path>
        <path d="M686 296c-9-17 9-28 2-46s8-28 4-46">
          <animate attributeName="opacity" values="0.6;0.95;0.6" dur="5s" repeatCount="indefinite" begin="0.8s" />
        </path>
        <path d="M708 300c-8-16 8-30 1-48s9-24 3-42">
          <animate attributeName="opacity" values="0.35;0.7;0.35" dur="7s" repeatCount="indefinite" begin="1.4s" />
        </path>
      </g>

      {/* Coffee beans */}
      <g fill="#1A0F08">
        <ellipse cx="806" cy="424" rx="10" ry="6.5" transform="rotate(28 806 424)" />
        <path d="M800 421c4-1 8 0 11 3" stroke="#3A2414" strokeWidth="1.2" fill="none" />
        <ellipse cx="826" cy="412" rx="9" ry="6" transform="rotate(-20 826 412)" />
        <path d="M820 414c4-2 8-1 11 1" stroke="#3A2414" strokeWidth="1.2" fill="none" />
        <ellipse cx="790" cy="442" rx="8.5" ry="5.5" transform="rotate(48 790 442)" />
      </g>

      {/* Notebook and pen */}
      <g transform="rotate(-4 220 396)">
        <rect x="124" y="356" width="196" height="76" rx="5" fill="#092013" stroke="#EFEFE3" strokeOpacity="0.08" />
        <rect x="124" y="356" width="9" height="76" rx="3" fill="#C8A96E" fillOpacity="0.3" />
        <path d="M158 380h110M158 394h84M158 408h120" stroke="#EFEFE3" strokeOpacity="0.16" strokeLinecap="round" />
      </g>
      <rect x="336" y="416" width="120" height="8" rx="4" fill="#C8A96E" fillOpacity="0.75" transform="rotate(-8 396 420)" />
      <path d="M456 418l16 1-15 5Z" fill="#F2E7D0" transform="rotate(-8 396 420)" />

      {/* Plant leaves, foreground right */}
      <g>
        <path d="M858 500c-14-50-4-100 28-132 10 44 0 96-28 132Z" fill="#0C2414" />
        <path d="M858 500c22-40 58-60 98-58-24 30-58 50-98 58Z" fill="#12301B" />
        <path d="M858 500c-26-30-58-42-92-36 22 24 54 37 92 36Z" fill="#0A2112" />
        <path d="M860 496c2-42 10-78 26-108M860 496c22-26 48-38 84-36" stroke="#2A4A2F" strokeOpacity="0.55" fill="none" />
      </g>

      {/* Foreground left leaf, low */}
      <path d="M0 500c22-56 60-88 112-94-14 42-48 76-92 94Z" fill="#0A2012" />
      <path d="M0 500c40-38 86-54 134-48-30 26-72 42-112 48Z" fill="#0C2414" />

      <rect width="900" height="500" filter="url(#cs-grain)" opacity="0.05" style={{ mixBlendMode: "overlay" }} />
      <rect width="900" height="500" fill="url(#cs-vignette)" />
    </svg>
  );
}
