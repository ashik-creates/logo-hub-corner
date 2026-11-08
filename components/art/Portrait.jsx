export default function Portrait({ className = "" }) {
  return (
    <svg
      viewBox="0 0 480 600"
      className={className}
      role="img"
      aria-labelledby="portrait-title portrait-desc"
    >
      <title id="portrait-title">Portrait of Asik Hasan</title>
      <desc id="portrait-desc">
        An editorial portrait illustration of Logo Hub Corner founder Asik
        Hasan in a dark green studio.
      </desc>

      <defs>
        <linearGradient id="pt-bg" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#082013" />
          <stop offset="0.55" stopColor="#03130A" />
          <stop offset="1" stopColor="#010803" />
        </linearGradient>

        <radialGradient id="pt-glow" cx="0.72" cy="0.26" r="0.62">
          <stop offset="0" stopColor="#D8B879" stopOpacity="0.16" />
          <stop offset="1" stopColor="#D8B879" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="pt-skin" x1="0.15" y1="0.05" x2="0.85" y2="0.95">
          <stop offset="0" stopColor="#7C5739" />
          <stop offset="0.4" stopColor="#A4774F" />
          <stop offset="0.75" stopColor="#C79A6D" />
          <stop offset="1" stopColor="#DDB180" />
        </linearGradient>

        <linearGradient id="pt-neck" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7D5739" />
          <stop offset="1" stopColor="#5A3C27" />
        </linearGradient>

        <linearGradient id="pt-jacket" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#0A2415" />
          <stop offset="0.55" stopColor="#06180D" />
          <stop offset="1" stopColor="#020B05" />
        </linearGradient>

        <linearGradient id="pt-shirt" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#F2EFE3" />
          <stop offset="0.7" stopColor="#DCD6C3" />
          <stop offset="1" stopColor="#B9B3A0" />
        </linearGradient>

        <linearGradient id="pt-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10130B" />
          <stop offset="1" stopColor="#030503" />
        </linearGradient>

        <radialGradient id="pt-vignette" cx="0.5" cy="0.42" r="0.75">
          <stop offset="0.55" stopColor="#000C02" stopOpacity="0" />
          <stop offset="1" stopColor="#000C02" stopOpacity="0.85" />
        </radialGradient>

        <filter id="pt-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>

        <filter id="pt-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="480" height="600" fill="url(#pt-bg)" />
      <rect width="480" height="600" fill="url(#pt-glow)" />

      {/* Studio arch */}
      <path
        d="M64 600V250c0-101 79-183 176-183s176 82 176 183v350Z"
        fill="#071B10"
        stroke="#EFEFE3"
        strokeOpacity="0.07"
      />
      <path
        d="M88 600V252c0-89 68-161 152-161s152 72 152 161v348Z"
        fill="none"
        stroke="#EFEFE3"
        strokeOpacity="0.04"
      />

      {/* Soft foliage */}
      <g opacity="0.5">
        <path d="M52 560c34-40 36-102 8-146 40 27 50 94 24 146Z" fill="#0A2113" />
        <path d="M78 560c-6-50 12-88 44-108-2 44-18 82-30 108Z" fill="#0C2716" />
        <path d="M30 560c4-44-2-78-18-102 26 18 38 58 34 102Z" fill="#0A2113" />
      </g>
      <g opacity="0.4">
        <path d="M438 556c-18-34-14-78 10-104-2 38 0 74-4 104Z" fill="#0E2716" />
        <path d="M438 556c14-24 34-38 52-40-8 22-26 36-46 44Z" fill="#0C2314" />
      </g>

      {/* Figure */}
      <g>
        {/* Shoulders and jacket */}
        <path
          d="M88 600v-54c0-75 65-137 152-137s152 62 152 137v54Z"
          fill="url(#pt-jacket)"
        />
        <path
          d="M222 405c5 21 10 35 18 40 8-5 13-19 18-40l30 14-11 50-37 24-37-24-11-50Z"
          fill="url(#pt-shirt)"
        />
        <path
          d="M158 466c18-25 44-45 80-57l-10 50-70 96Z"
          fill="#092113"
          stroke="#EFEFE3"
          strokeOpacity="0.05"
        />
        <path
          d="M322 466c-18-25-44-45-80-57l10 50 70 96Z"
          fill="#0B2716"
          stroke="#EFEFE3"
          strokeOpacity="0.05"
        />
        <path d="M231 461l9-11 10 11-10 26Z" fill="#EFEFE3" fillOpacity="0.85" />
        {/* Jacket seams */}
        <path d="M168 480c-4 38-4 78 2 120M312 480c4 38 4 78-2 120" stroke="#EFEFE3" strokeOpacity="0.05" fill="none" />
        <path d="M240 556v44" stroke="#EFEFE3" strokeOpacity="0.06" />
        {/* Monogram pin */}
        <circle cx="174" cy="528" r="14" fill="none" stroke="#C8A96E" strokeOpacity="0.6" />
        <path d="M169 521v13h8" fill="none" stroke="#C8A96E" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="178" cy="521" r="1.2" fill="#C8A96E" />

        {/* Neck */}
        <path d="M219 323h43v73l-22 17-22-17Z" fill="url(#pt-neck)" />
        <path d="M219 350c13 8 30 8 43 0v15c-13 9-30 9-43 0Z" fill="#4E3422" fillOpacity="0.65" />

        {/* Ears */}
        <ellipse cx="195" cy="252" rx="11" ry="20" fill="#8C6443" />
        <ellipse cx="300" cy="252" rx="11" ry="20" fill="#A87B52" />
        <path d="M192 245c3 6 3 13 0 19M302 245c-3 6-3 13 0 19" stroke="#65462F" strokeOpacity="0.55" fill="none" />

        {/* Face */}
        <path
          d="M196 241c0-47 19-77 50-79 33-2 53 25 55 70 1 27-2 50-10 69-11 25-28 40-51 41-24 1-39-17-44-43-4-18-4-38 0-58Z"
          fill="url(#pt-skin)"
        />
        {/* Face shading */}
        <path
          d="M207 288c3 27 16 45 38 50 17 4 33-2 45-17-8 26-24 41-47 42-23 1-38-17-42-45Z"
          fill="#6F4C31"
          fillOpacity="0.55"
        />
        <path d="M283 205c13 13 19 34 18 61-1 25-6 45-16 60 12-8 20-24 23-48 3-27-4-54-25-73Z" fill="#F0C997" fillOpacity="0.2" />

        {/* Hair */}
        <path
          d="M191 240c-6-45 12-79 48-86 36-7 62 12 70 43 4 16 3 31-1 43-4 11-8 14-11 15-1-28-13-47-33-54-24-8-46-1-58 19-5 9-8 20-8 32-4 0-6-5-7-12Z"
          fill="url(#pt-hair)"
        />
        <path
          d="M196 209c6-20 19-36 37-44 18-8 37-8 53 0-9-1-18 1-27 5 11 0 20 3 28 8-18-2-38 2-52 12-12 8-20 20-23 34-4-9-8-14-16-15Z"
          fill="#151A10"
        />
        <path
          d="M206 191c-9 8-15 20-17 33M224 172c-8 5-14 12-18 20M273 166c8 2 14 6 19 11M292 183c5 6 8 13 9 21"
          stroke="#23251A"
          strokeOpacity="0.8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Brows */}
        <path d="M208 241c8-7 18-9 27-5" stroke="#241A10" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M265 236c9-4 19-2 26 4" stroke="#241A10" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Eyes */}
        <path d="M211 253c6-5 14-5 20 0-6 5-14 5-20 0Z" fill="#F0E7D6" />
        <circle cx="221" cy="253" r="4.1" fill="#3E2A17" />
        <circle cx="222" cy="252" r="1.6" fill="#0A0A05" />
        <path d="M211 253c6 4 14 4 20 0" stroke="#3B2918" strokeOpacity="0.5" fill="none" />
        <path d="M268 253c6-5 14-5 20 0-6 5-14 5-20 0Z" fill="#F0E7D6" />
        <circle cx="278" cy="253" r="4.1" fill="#3E2A17" />
        <circle cx="279" cy="252" r="1.6" fill="#0A0A05" />
        <path d="M268 253c6 4 14 4 20 0" stroke="#3B2918" strokeOpacity="0.5" fill="none" />

        {/* Glasses */}
        <rect x="204" y="239" width="35" height="27" rx="12" fill="none" stroke="#D6B77A" strokeOpacity="0.75" strokeWidth="1.6" />
        <rect x="261" y="239" width="35" height="27" rx="12" fill="none" stroke="#D6B77A" strokeOpacity="0.75" strokeWidth="1.6" />
        <path d="M239 250v5M296 249h7M204 249h-7" stroke="#D6B77A" strokeOpacity="0.55" strokeWidth="1.3" />

        {/* Nose */}
        <path d="M248 253c-2 12-5 20-7 27 4 3 9 3 13 0" fill="none" stroke="#7A5538" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M240 280c5 3 10 3 15 1" stroke="#5B3D28" strokeOpacity="0.6" strokeWidth="1.6" fill="none" />

        {/* Lips */}
        <path d="M230 299c8-4 21-4 29 0-8 8-21 9-29 0Z" fill="#7F4C3A" />
        <path d="M232 300c8 2 16 2 24 0" stroke="#D39A80" strokeOpacity="0.45" fill="none" strokeWidth="1.3" />

        {/* Beard */}
        <path
          d="M200 283c1 28 13 52 33 60 24 9 45-1 55-30 1 30-13 53-42 58-31 5-50-17-51-57Z"
          fill="#0C0E08"
        />
        <path d="M212 310c9 19 22 30 38 33M266 328c8-6 14-15 17-27" stroke="#202216" strokeOpacity="0.7" strokeWidth="1.4" fill="none" />
        <path d="M226 294c9-3 19-3 28 0-6 5-20 5-28 0Z" fill="#0C0E08" />

        {/* Rim light */}
        <path
          d="M300 244c2 19 0 39-6 55-7 17-19 28-33 33"
          fill="none"
          stroke="#F4DDAE"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M310 471c13 13 20 42 20 84"
          fill="none"
          stroke="#E8CA92"
          strokeOpacity="0.35"
          strokeWidth="2"
        />
        <path
          d="M200 471c-13 13-19 42-19 84"
          fill="none"
          stroke="#EFEFE3"
          strokeOpacity="0.08"
          strokeWidth="1.5"
        />
      </g>

      <rect width="480" height="600" filter="url(#pt-grain)" opacity="0.04" style={{ mixBlendMode: "overlay" }} />
      <rect width="480" height="600" fill="url(#pt-vignette)" />
    </svg>
  );
}
