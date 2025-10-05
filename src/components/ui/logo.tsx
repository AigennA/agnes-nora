"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <div className="inline-flex items-center gap-4 sm:gap-5 ml-2 sm:ml-0">
      {/* Logo ikonu */}
      <Link href="/" aria-label="Go to homepage" className="inline-flex items-center">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Amiral logo"
          focusable="false"
        >
          <defs>
            <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#111111" />
              <stop offset="45%" stopColor="#F48FB1" />
              <stop offset="75%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                floodColor="#E91E63"
                floodOpacity="0.5"
              />
            </filter>
          </defs>

          {/* Basit bir amiral simgesi, örneğin bir dümen simgesi */}
          <circle cx="30" cy="30" r="25" fill="url(#pinkGradient)" filter="url(#shadow)" />
          <path
            d="M30 10 L30 50 M10 30 L50 30"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Marka İsmi */}
        <span
          className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-black to-pink-500"
          style={{ WebkitBackgroundClip: "text", color: "transparent" }}
        >
     CottoN
        </span>
      </Link>
    </div>
  );
}
