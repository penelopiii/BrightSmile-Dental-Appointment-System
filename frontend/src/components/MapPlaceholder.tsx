import React from 'react';

export const MapPlaceholder: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-[#f4f3f0] select-none group">
      {/* SVG Map Illustration matching the layout in screenshot */}
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background land */}
        <rect width="1000" height="500" fill="#f2efe9" />

        {/* Green park areas */}
        <path
          d="M 450 120 Q 480 80 540 100 Q 560 130 530 160 Q 470 170 450 120 Z"
          fill="#cbe3b9"
        />
        <text x="500" y="115" fontSize="10" fill="#587d46" textAnchor="middle" fontWeight="600">
          Tivoli Lakes
        </text>
        <text x="500" y="128" fontSize="9" fill="#587d46" textAnchor="middle">
          Wildlife Park
        </text>

        {/* Washington Park area */}
        <path
          d="M 410 240 Q 470 230 460 270 Q 430 280 400 270 Z"
          fill="#cbe3b9"
        />
        <text x="435" y="260" fontSize="9" fill="#587d46" textAnchor="middle" fontWeight="500">
          PARK SOUTH
        </text>

        {/* Lincoln Park */}
        <path
          d="M 440 370 Q 510 360 515 395 Q 460 410 435 390 Z"
          fill="#cbe3b9"
        />
        <text x="475" y="385" fontSize="9" fill="#587d46" textAnchor="middle">
          LINCOLN
        </text>
        <text x="475" y="396" fontSize="9" fill="#587d46" textAnchor="middle">
          PARK
        </text>

        {/* West Hill Greenery */}
        <path
          d="M 280 180 Q 320 160 350 200 Q 300 220 270 200 Z"
          fill="#dcedce"
        />
        <text x="305" y="195" fontSize="9" fill="#587d46" textAnchor="middle">
          PINE HILLS
        </text>

        {/* Left Park Green */}
        <path
          d="M 0 350 Q 80 400 130 480 L 0 500 Z"
          fill="#a4cf96"
        />
        <path
          d="M 0 450 Q 70 460 100 500 L 0 500 Z"
          fill="#78ab67"
        />

        {/* Hudson River (blue waterway on the right) */}
        <path
          d="M 830 0 Q 750 90 730 180 Q 700 250 630 320 Q 580 370 575 500 L 640 500 Q 660 380 720 310 Q 780 230 810 160 Q 850 80 940 0 Z"
          fill="#a8cde5"
        />
        <text
          x="680"
          y="310"
          transform="rotate(62, 680, 310)"
          fontSize="11"
          fill="#5a86a6"
          fontWeight="bold"
          letterSpacing="2"
        >
          HUDSON RIVER
        </text>

        {/* Secondary streets grid (grey/white lines) */}
        <g stroke="#ffffff" strokeWidth="3" fill="none">
          {/* Horizontal / diagonal grid streets */}
          <line x1="50" y1="90" x2="600" y2="90" />
          <line x1="40" y1="140" x2="650" y2="140" />
          <line x1="30" y1="200" x2="680" y2="200" />
          <line x1="50" y1="250" x2="620" y2="250" />
          <line x1="50" y1="310" x2="590" y2="310" />
          <line x1="80" y1="360" x2="570" y2="360" />
          <line x1="120" y1="420" x2="560" y2="420" />

          {/* Vertical streets */}
          <line x1="140" y1="50" x2="180" y2="450" />
          <line x1="220" y1="50" x2="250" y2="460" />
          <line x1="300" y1="40" x2="330" y2="460" />
          <line x1="390" y1="30" x2="410" y2="470" />
          <line x1="470" y1="40" x2="485" y2="470" />
          <line x1="530" y1="50" x2="540" y2="470" />
        </g>

        {/* Major Avenues (yellow/beige tinted) */}
        <g stroke="#fce4a6" strokeWidth="5" fill="none" strokeLinecap="round">
          {/* Western Ave */}
          <path d="M 50 70 Q 200 120 450 170" />
          {/* Central Ave */}
          <path d="M 180 50 Q 300 110 500 150" />
          {/* Washington Ave */}
          <path d="M 80 220 Q 280 230 490 230" />
          {/* Madison Ave */}
          <path d="M 90 290 Q 290 295 520 290" />
          {/* Delaware Ave */}
          <path d="M 160 450 Q 350 420 500 370" />
        </g>

        {/* Highway / Expressway (Red/orange Interstate routes 90 & 787) */}
        {/* I-90 spanning across the river */}
        <path
          d="M 50 70 Q 300 130 500 170 Q 640 180 730 130 Q 770 100 840 0"
          stroke="#cb5a3d"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 50 70 Q 300 130 500 170 Q 640 180 730 130 Q 770 100 840 0"
          stroke="#f89369"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* I-787 running along the Hudson River */}
        <path
          d="M 830 0 Q 760 90 730 180 Q 690 280 620 370 Q 580 430 570 500"
          stroke="#cb5a3d"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 830 0 Q 760 90 730 180 Q 690 280 620 370 Q 580 430 570 500"
          stroke="#f89369"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Diagonal highway on right (Rensselaer side) */}
        <path
          d="M 640 370 Q 750 330 940 450"
          stroke="#cb5a3d"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M 640 370 Q 750 330 940 450"
          stroke="#f89369"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Highway shield badges */}
        {/* I-90 shield badge */}
        <g transform="translate(850, 200)">
          <rect x="0" y="0" width="26" height="24" rx="4" fill="#1d4ed8" />
          <path d="M 0 0 L 26 0 L 26 7 L 0 7 Z" fill="#dc2626" />
          <text x="13" y="19" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">
            90
          </text>
        </g>

        {/* I-787 shield badge */}
        <g transform="translate(590, 365)">
          <rect x="0" y="0" width="30" height="24" rx="4" fill="#1d4ed8" />
          <path d="M 0 0 L 30 0 L 30 7 L 0 7 Z" fill="#dc2626" />
          <text x="15" y="19" fontSize="10" fill="white" fontWeight="bold" textAnchor="middle">
            787
          </text>
        </g>

        {/* Route 20 marker */}
        <g transform="translate(240, 115)">
          <rect x="0" y="0" width="24" height="20" rx="3" fill="#ffffff" stroke="#64748b" strokeWidth="1" />
          <text x="12" y="15" fontSize="10" fill="#1e293b" fontWeight="bold" textAnchor="middle">
            20
          </text>
        </g>

        {/* Route 9 marker */}
        <g transform="translate(630, 85)">
          <rect x="0" y="0" width="20" height="18" rx="3" fill="#ffffff" stroke="#64748b" strokeWidth="1" />
          <text x="10" y="13" fontSize="9" fill="#1e293b" fontWeight="bold" textAnchor="middle">
            9
          </text>
        </g>

        {/* Route 87 marker */}
        <g transform="translate(235, 430)">
          <rect x="0" y="0" width="24" height="20" rx="3" fill="#1d4ed8" />
          <path d="M 0 0 L 24 0 L 24 6 L 0 6 Z" fill="#dc2626" />
          <text x="12" y="15" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">
            87
          </text>
        </g>

        {/* Street / Area Text Labels */}
        <text x="100" y="80" fontSize="9" fill="#64748b" fontWeight="600">
          WESTERN AVE
        </text>
        <text x="210" y="80" fontSize="8" fill="#64748b" fontWeight="500">
          MELROSE
        </text>
        <text x="240" y="95" fontSize="8" fill="#64748b">
          MANNING
        </text>
        <text x="240" y="105" fontSize="8" fill="#64748b">
          BOULEVARD
        </text>
        <text x="355" y="115" fontSize="8" fill="#64748b">
          BEVERWYCK
        </text>
        <text x="460" y="125" fontSize="8" fill="#64748b">
          WEST
        </text>
        <text x="460" y="135" fontSize="8" fill="#64748b">
          HILL
        </text>
        <text x="580" y="175" fontSize="8" fill="#64748b">
          ARBOR
        </text>
        <text x="580" y="185" fontSize="8" fill="#64748b">
          HILL
        </text>
        <text x="535" y="295" fontSize="14" fill="#52525b" fontWeight="bold">
          Albany
        </text>
        <text x="555" y="325" fontSize="8" fill="#64748b" fontWeight="600">
          DOWNTOWN
        </text>
        <text x="630" y="405" fontSize="13" fill="#52525b" fontWeight="bold">
          Rensselaer
        </text>

        {/* MAIN CLINIC LOCATION PIN (Bright green & blue pulse marker at Center Square) */}
        <g transform="translate(500, 240)">
          {/* Animated pulse circle */}
          <circle cx="0" cy="0" r="14" fill="#0ea5e9" opacity="0.3" className="animate-ping" />
          {/* Outer circle */}
          <circle cx="0" cy="0" r="9" fill="#0ea5e9" stroke="#ffffff" strokeWidth="2.5" />
          {/* Inner center dot */}
          <circle cx="0" cy="0" r="4.5" fill="#10b981" />

          {/* Location Pin Badge */}
          <g transform="translate(14, -14)">
            <rect
              x="0"
              y="0"
              width="95"
              height="28"
              rx="6"
              fill="#102a45"
              filter="drop-shadow(0 2px 5px rgba(0,0,0,0.15))"
            />
            <text x="8" y="18" fontSize="11" fill="white" fontWeight="bold">
              BrightSmile
            </text>
            <circle cx="83" cy="14" r="3.5" fill="#22c55e" />
          </g>

          <text x="0" y="24" fontSize="9" fill="#1e293b" fontWeight="bold" textAnchor="middle">
            CENTER SQUARE
          </text>
        </g>
      </svg>

      {/* Interactive / Map Control Placeholder overlay */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200/80 p-1 flex flex-col gap-1 text-slate-700">
        <button
          type="button"
          aria-label="Zoom in"
          className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-base font-bold transition-colors"
        >
          +
        </button>
        <div className="h-px bg-slate-200" />
        <button
          type="button"
          aria-label="Zoom out"
          className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-base font-bold transition-colors"
        >
          −
        </button>
      </div>

      {/* Google Maps placeholder watermark / tag */}
      <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-xs font-semibold text-slate-600 shadow-sm border border-slate-200/80 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Google Maps Placeholder</span>
      </div>
    </div>
  );
};

export default MapPlaceholder;

