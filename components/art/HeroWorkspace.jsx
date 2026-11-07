export default function HeroWorkspace({ className = "" }) {
  return (
    <svg
      viewBox="0 0 760 660"
      className={className}
      role="img"
      aria-labelledby="hero-workspace-title hero-workspace-desc"
    >
      <title id="hero-workspace-title">
        A logo designer working late at a warm, plant-filled studio desk
      </title>
      <desc id="hero-workspace-desc">
        A cinematic illustration of a designer at a desk, with a glowing
        monitor showing the Logo Hub Corner logo, a warm desk lamp, plants and
        creative tools.
      </desc>

      <defs>
        <linearGradient id="hw-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#071B0F" />
          <stop offset="0.62" stopColor="#03130A" />
          <stop offset="1" stopColor="#010903" />
        </linearGradient>

        <radialGradient id="hw-glow" cx="0.62" cy="0.52" r="0.52">
          <stop offset="0" stopColor="#E9B96F" stopOpacity="0.24" />
          <stop offset="0.55" stopColor="#C8A96E" stopOpacity="0.08" />
          <stop offset="1" stopColor="#C8A96E" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="hw-screen-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F3E6C7" stopOpacity="0.4" />
          <stop offset="1" stopColor="#F3E6C7" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="hw-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6EFDC" />
          <stop offset="0.58" stopColor="#EDE2C7" />
          <stop offset="1" stopColor="#D8C7A1" />
        </linearGradient>

        <linearGradient id="hw-desk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A2615" />
          <stop offset="0.35" stopColor="#24170D" />
          <stop offset="1" stopColor="#0C0704" />
        </linearGradient>

        <linearGradient id="hw-desk-edge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4B321C" />
          <stop offset="1" stopColor="#180F08" />
        </linearGradient>

        <linearGradient id="hw-figure" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0A2012" />
          <stop offset="0.6" stopColor="#04130A" />
          <stop offset="1" stopColor="#010803" />
        </linearGradient>

        <linearGradient id="hw-face" x1="0" y1="0" x2="1" y2="0.7">
          <stop offset="0" stopColor="#6A4B32" />
          <stop offset="0.55" stopColor="#9A7450" />
          <stop offset="1" stopColor="#C49A6C" />
        </linearGradient>

        <linearGradient id="hw-rim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#C8A96E" stopOpacity="0" />
          <stop offset="0.55" stopColor="#E6C98E" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F4E4BE" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="hw-beam" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#F0C97E" stopOpacity="0.26" />
          <stop offset="0.55" stopColor="#E9B96F" stopOpacity="0.09" />
          <stop offset="1" stopColor="#E9B96F" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="hw-pool" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#F0C97E" stopOpacity="0.18" />
          <stop offset="1" stopColor="#F0C97E" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="hw-vignette" cx="0.5" cy="0.47" r="0.74">
          <stop offset="0.58" stopColor="#000C02" stopOpacity="0" />
          <stop offset="0.86" stopColor="#000C02" stopOpacity="0.6" />
          <stop offset="1" stopColor="#000C02" stopOpacity="1" />
        </radialGradient>

        <filter id="hw-soft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="18" />
        </filter>

        <filter id="hw-bloom" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>

        <filter id="hw-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="760" height="660" fill="url(#hw-wall)" />
      <rect width="760" height="660" fill="url(#hw-glow)" />

      {/* Arched studio window */}
      <path
        d="M82 356V182c0-59 47-106 106-106s106 47 106 106v174Z"
        fill="#020C06"
        stroke="#EFEFE3"
        strokeOpacity="0.06"
      />
      <path
        d="M96 344V184c0-51 41-92 92-92s92 41 92 92v160Z"
        fill="#03100A"
      />
      <circle cx="168" cy="176" r="30" fill="#EFEFE3" fillOpacity="0.035" />
      <path d="M188 356V126" stroke="#EFEFE3" strokeOpacity="0.045" />
      <path d="M96 246h184" stroke="#EFEFE3" strokeOpacity="0.045" />
      <path
        d="M118 344c22-30 44-42 70-38 20 3 32 18 44 38"
        fill="#010803"
        fillOpacity="0.9"
      />

      {/* Wall shelf and objects */}
      <path d="M548 154h150" stroke="#EFEFE3" strokeOpacity="0.08" />
      <rect x="566" y="118" width="13" height="36" rx="2" fill="#0A2415" />
      <rect x="583" y="126" width="10" height="28" rx="2" fill="#C8A96E" fillOpacity="0.24" />
      <rect x="597" y="121" width="15" height="33" rx="2" fill="#12301D" />
      <path
        d="M636 154v-20c0-9 7-16 16-16s16 7 16 16v20Z"
        fill="#0B2114"
        stroke="#EFEFE3"
        strokeOpacity="0.07"
      />
      <path d="M652 118c-6-10-2-20 4-26M652 118c7-7 14-8 19-6" stroke="#2C4A2F" strokeWidth="1.5" fill="none" />

      {/* Framed abstract print */}
      <g transform="rotate(-2 586 302)">
        <rect
          x="544"
          y="236"
          width="86"
          height="112"
          rx="3"
          fill="#04140B"
          stroke="#EFEFE3"
          strokeOpacity="0.08"
        />
        <path d="M560 322c10-30 24-48 48-56" fill="none" stroke="#C8A96E" strokeOpacity="0.42" />
        <circle cx="570" cy="266" r="10" fill="none" stroke="#EFEFE3" strokeOpacity="0.18" />
        <path d="M600 316v-30" stroke="#EFEFE3" strokeOpacity="0.14" />
      </g>

      {/* Pinned swatches */}
      <g transform="rotate(6 656 208)">
        <rect x="640" y="188" width="34" height="42" rx="2" fill="#EFEFE3" fillOpacity="0.9" />
        <rect x="646" y="194" width="22" height="12" rx="1" fill="#C8A96E" />
      </g>
      <g transform="rotate(-5 690 214)">
        <rect x="678" y="196" width="30" height="38" rx="2" fill="#C8A96E" fillOpacity="0.75" />
        <rect x="684" y="202" width="18" height="10" rx="1" fill="#000C02" fillOpacity="0.55" />
      </g>

      {/* Ambient screen bloom */}
      <ellipse cx="548" cy="352" rx="240" ry="160" fill="url(#hw-screen-glow)" filter="url(#hw-soft)" />

      {/* Chair */}
      <rect x="212" y="330" width="176" height="260" rx="54" fill="#020B05" stroke="#EFEFE3" strokeOpacity="0.05" />
      <path d="M236 390h128" stroke="#EFEFE3" strokeOpacity="0.04" />
      <path d="M236 440h128" stroke="#EFEFE3" strokeOpacity="0.04" />

      {/* Designer */}
      <g>
        {/* Torso */}
        <path
          d="M256 566c0-62 12-112 38-140 18-20 44-31 74-31 40 0 68 22 82 60 9 24 13 60 13 111Z"
          fill="url(#hw-figure)"
          stroke="#EFEFE3"
          strokeOpacity="0.05"
        />
        {/* Shirt collar */}
        <path
          d="M322 414c11 16 25 24 43 24 16 0 30-8 40-23l16 17-18 39-39 15-38-14-18-40Z"
          fill="#0B2113"
          stroke="#EFEFE3"
          strokeOpacity="0.06"
        />
        {/* Neck */}
        <path d="M335 373h39l4 40-24 15-23-15Z" fill="#7A5739" />
        {/* Head shape, three-quarter profile */}
        <path
          d="M309 322c0-38 22-63 52-63 30 0 49 23 49 58 0 15-2 28-7 38-7 15-20 25-37 26l-18 1c-21-1-36-17-38-39Z"
          fill="url(#hw-face)"
        />
        {/* Ear */}
        <path d="M316 327c-9-3-13 3-11 12 2 10 8 15 15 12" fill="#7B583A" />
        {/* Hair */}
        <path
          d="M306 330c-6-38 10-70 47-76 38-6 61 17 61 51 0 12-3 22-8 29-4-22-18-38-42-40-28-3-44 12-47 39l-6 5Z"
          fill="#050D07"
        />
        <circle cx="307" cy="301" r="18" fill="#050D07" />
        <path d="M291 294c-8 4-12 12-11 21" stroke="#0A1A0D" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* Beard */}
        <path
          d="M316 358c4 16 16 27 34 29 17 2 32-5 42-20-2 23-14 39-38 43-25 4-42-13-46-38Z"
          fill="#0A0C06"
        />
        <path d="M337 375c11 6 25 7 38 1" stroke="#1B160C" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Glasses */}
        <circle cx="378" cy="324" r="13" fill="none" stroke="#D6B77A" strokeOpacity="0.72" strokeWidth="1.4" />
        <path d="M391 322l15-4" stroke="#D6B77A" strokeOpacity="0.45" strokeWidth="1.2" />
        <path d="M347 358c9 4 18 4 26 0" stroke="#3B2415" strokeOpacity="0.7" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* Rim light along face and shoulder */}
        <path
          d="M400 340c6 10 8 20 8 30-3 13-12 22-24 24"
          fill="none"
          stroke="#F0D8A8"
          strokeOpacity="0.5"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M414 447c18 20 26 55 29 105"
          fill="none"
          stroke="#E8C98F"
          strokeOpacity="0.35"
          strokeWidth="1.6"
        />
        {/* Arm reaching to keyboard */}
        <path
          d="M404 456c26 12 55 24 84 38"
          fill="none"
          stroke="#0A2113"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <path
          d="M404 452c26 12 55 24 84 38"
          fill="none"
          stroke="#E8C98F"
          strokeOpacity="0.16"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M482 494c11 3 19 8 22 14-7 8-18 8-29 1Z" fill="#6F4F33" />
      </g>

      {/* Desk */}
      <path d="M0 536 760 512v28L760 660H0Z" fill="url(#hw-desk)" />
      <path d="M0 536 760 512v10L0 546Z" fill="url(#hw-desk-edge)" />
      <path d="M0 546 760 522" stroke="#EFEFE3" strokeOpacity="0.08" />
      <path d="M0 600 760 574" stroke="#000C02" strokeOpacity="0.4" />
      <path d="M34 626c90-14 170-20 240-18M430 610c80-10 170-16 300-20" stroke="#EFEFE3" strokeOpacity="0.025" />
      <ellipse cx="612" cy="558" rx="150" ry="46" fill="url(#hw-pool)" />

      {/* Papers and pencil */}
      <g transform="rotate(-5 245 570)">
        <rect x="174" y="548" width="118" height="52" rx="3" fill="#EFEFE3" fillOpacity="0.07" stroke="#EFEFE3" strokeOpacity="0.08" />
        <path d="M188 564h52M188 574h72M188 584h38" stroke="#EFEFE3" strokeOpacity="0.16" />
      </g>
      <rect x="300" y="550" width="72" height="82" rx="4" fill="#06170D" stroke="#EFEFE3" strokeOpacity="0.09" transform="rotate(8 336 591)" />
      <rect x="312" y="564" width="44" height="30" rx="2" fill="#C8A96E" fillOpacity="0.35" transform="rotate(8 336 591)" />
      <rect x="229" y="604" width="86" height="9" rx="4.5" fill="#C8A96E" fillOpacity="0.65" transform="rotate(-3 272 608)" />

      {/* Monitor */}
      <rect x="442" y="284" width="222" height="158" rx="10" fill="#010704" stroke="#EFEFE3" strokeOpacity="0.14" />
      <rect x="450" y="292" width="206" height="142" rx="6" fill="url(#hw-screen)" />
      {/* Screen interface */}
      <rect x="475" y="330" width="156" height="66" rx="13" fill="#000C02" />
      <svg
        x="487"
        y="337"
        width="132"
        height="52"
        viewBox="1648 2912 4896 2368"
        preserveAspectRatio="xMidYMid meet"
      >
        <image href="/images/logo.png" width="8193" height="8192" />
      </svg>
      <text
        x="553"
        y="414"
        textAnchor="middle"
        fill="#000C02"
        fillOpacity="0.55"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="7"
        letterSpacing="2.6"
      >
        LOGO HUB CORNER
      </text>
      <path d="M469 307h20M469 313h10" stroke="#000C02" strokeOpacity="0.24" strokeLinecap="round" />
      <rect x="622" y="302" width="21" height="21" rx="2" fill="none" stroke="#000C02" strokeOpacity="0.18" />
      <path d="M626 310h13M626 315h9" stroke="#000C02" strokeOpacity="0.2" strokeWidth="1.4" />
      <rect x="468" y="392" width="46" height="27" rx="2" fill="none" stroke="#000C02" strokeOpacity="0.14" />
      <path d="M475 401h30M475 407h22" stroke="#000C02" strokeOpacity="0.18" />
      <circle cx="641" cy="405" r="12" fill="none" stroke="#000C02" strokeOpacity="0.16" />
      <path d="M634 405h14M641 398v14" stroke="#000C02" strokeOpacity="0.18" />

      {/* Stand */}
      <path d="M535 442h42l7 60h-56Z" fill="#04110A" stroke="#EFEFE3" strokeOpacity="0.08" />
      <path d="M505 502h106v9H505Z" fill="#04110A" stroke="#EFEFE3" strokeOpacity="0.09" />
      <path d="M447 442h212" stroke="#EFEFE3" strokeOpacity="0.1" />

      {/* Screen glow reflection */}
      <path d="M474 562h164l44 34H414Z" fill="#F0DDB4" fillOpacity="0.035" />

      {/* Keyboard */}
      <path d="M462 542h118l20 42H438Z" fill="#03100A" stroke="#EFEFE3" strokeOpacity="0.1" />
      <path d="M470 550h100M465 559h110M459 568h118" stroke="#EFEFE3" strokeOpacity="0.11" strokeDasharray="10 10" />
      <path d="M446 578h122" stroke="#EFEFE3" strokeOpacity="0.09" strokeDasharray="10 10" />

      {/* Mouse */}
      <ellipse cx="628" cy="576" rx="15" ry="22" fill="#04130B" stroke="#EFEFE3" strokeOpacity="0.1" transform="rotate(14 628 576)" />
      <path d="M628 560v12" stroke="#EFEFE3" strokeOpacity="0.16" />

      {/* Coffee cup */}
      <ellipse cx="712" cy="547" rx="34" ry="9" fill="#020A04" fillOpacity="0.7" />
      <path d="M690 512h38l-4 34c-1 7-7 11-15 11s-14-4-15-11Z" fill="#DFD6BE" />
      <path d="M690 512h38l-1 7h-36Z" fill="#F2EBD8" />
      <path d="M728 518c12-2 16 5 15 13-1 9-7 13-16 12" fill="none" stroke="#DFD6BE" strokeWidth="5" />
      <circle cx="709" cy="527" r="7.5" fill="none" stroke="#000C02" strokeOpacity="0.55" />
      <text x="709" y="530" textAnchor="middle" fill="#000C02" fillOpacity="0.7" fontFamily="Georgia, serif" fontSize="5.4">
        LHC
      </text>
      <path d="M699 501c-5-8 5-11 1-18M711 500c-5-7 5-11 1-17" stroke="#EFEFE3" strokeOpacity="0.22" strokeLinecap="round" fill="none" />

      {/* Desk plant */}
      <path d="M662 488c-2-20 0-38 6-54l24 2c4 18 4 35 1 52Z" fill="#0B2415" stroke="#EFEFE3" strokeOpacity="0.07" />
      <path d="M680 488c-12-22-12-46 0-62 11 17 11 40 0 62Z" fill="#173A22" />
      <path d="M680 486c-16-9-24-24-24-42 16 5 26 19 30 36ZM680 486c14-10 20-26 18-44-15 7-23 22-26 39Z" fill="#12301C" />
      <path d="M680 428v58" stroke="#2C4A2F" strokeOpacity="0.7" />

      {/* Desk lamp */}
      <ellipse cx="618" cy="540" rx="34" ry="8" fill="#1A1108" />
      <path d="M618 540V398" stroke="#2A1E11" strokeWidth="6" strokeLinecap="round" />
      <path d="M618 398l-46 18" stroke="#2A1E11" strokeWidth="5" strokeLinecap="round" />
      <path d="M574 412c-9 0-16 7-19 18h56c-3-12-11-18-21-18Z" fill="#2C1F10" stroke="#C8A96E" strokeOpacity="0.5" />
      <path d="M555 430h56" stroke="#F0C97E" strokeOpacity="0.65" strokeWidth="1.4" />
      <ellipse cx="583" cy="428" rx="12" ry="5" fill="#F5D79A" />
      <path d="M552 431 500 558h170L611 431Z" fill="url(#hw-beam)" filter="url(#hw-bloom)" />
      <ellipse cx="585" cy="558" rx="78" ry="24" fill="#F0C97E" fillOpacity="0.09" filter="url(#hw-soft)" />

      {/* Foreground plant */}
      <path d="M28 572c0-16 13-29 29-29s29 13 29 29v88H28Z" fill="#0A1D11" stroke="#EFEFE3" strokeOpacity="0.06" />
      <path d="M57 572c-26-20-34-52-22-88 24 16 34 48 30 84Z" fill="#0C2414" />
      <path d="M58 570c-2-38 10-69 34-84 4 35-8 66-28 88Z" fill="#12301B" />
      <path d="M55 572c-20-10-34-30-40-58 22 2 39 20 48 50Z" fill="#0E2716" />
      <path d="M59 574c20-14 30-36 30-64 18 14 20 41 4 64Z" fill="#173A22" />
      <path d="M42 506c8 20 12 40 12 60M72 500c-6 24-10 44-10 66M38 536c10 8 18 20 22 34M87 532c-8 10-14 22-18 38" stroke="#2A4A2F" strokeOpacity="0.65" fill="none" />
      <path d="M57 556v58" stroke="#2C4A2F" strokeOpacity="0.5" />

      {/* Floating dust in the light */}
      <circle cx="512" cy="432" r="1.6" fill="#F3E2B8" fillOpacity="0.55" />
      <circle cx="548" cy="478" r="1.2" fill="#F3E2B8" fillOpacity="0.4" />
      <circle cx="590" cy="462" r="1.8" fill="#F3E2B8" fillOpacity="0.45" />
      <circle cx="620" cy="490" r="1.1" fill="#F3E2B8" fillOpacity="0.36" />
      <circle cx="471" cy="451" r="1.3" fill="#F3E2B8" fillOpacity="0.38" />
      <circle cx="646" cy="376" r="1.4" fill="#F3E2B8" fillOpacity="0.42" />

      {/* Grain and vignette */}
      <rect width="760" height="660" filter="url(#hw-grain)" opacity="0.035" style={{ mixBlendMode: "overlay" }} />
      <rect width="760" height="660" fill="url(#hw-vignette)" />
    </svg>
  );
}
