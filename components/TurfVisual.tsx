import React from 'react';
import { PitchArchitecture } from '@/lib/turfs-data';

interface TurfVisualProps {
  architecture: PitchArchitecture;
  venueName: string;
  zoneShort: string;
  formatLabel: string;
  hoursLabel: string;
  variant?: 'card' | 'hero' | 'detail';
}

export function TurfVisual({
  architecture,
  venueName,
  zoneShort,
  formatLabel,
  hoursLabel,
  variant = 'card',
}: TurfVisualProps) {
  const isDetail = variant === 'detail';
  const isHero = variant === 'hero';

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0B1D14] select-none ${
        isHero
          ? 'aspect-[16/9] rounded-xl border border-emerald-900/50'
          : isDetail
          ? 'aspect-[16/9] rounded-xl border border-slate-200'
          : 'aspect-[4/3] border-b border-slate-200/80'
      }`}
    >
      {/* Architectural Floodlight & Night Sky Atmosphere */}
      <svg
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        role="img"
        aria-label={`${venueName} architectural pitch illustration`}
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07130E" />
            <stop offset="55%" stopColor="#0D261B" />
            <stop offset="100%" stopColor="#091C14" />
          </linearGradient>

          <linearGradient id="turfSurface" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14532D" />
            <stop offset="50%" stopColor="#166534" />
            <stop offset="100%" stopColor="#114224" />
          </linearGradient>

          <linearGradient id="turfStripe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#15803D" stopOpacity="0.32" />
            <stop offset="50%" stopColor="#166534" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#15803D" stopOpacity="0.32" />
          </linearGradient>

          <radialGradient id="beamLeft" cx="0.2" cy="0.1" r="0.75">
            <stop offset="0%" stopColor="#ECFDF5" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#34D399" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#07130E" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="beamRight" cx="0.8" cy="0.1" r="0.75">
            <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.26" />
            <stop offset="45%" stopColor="#10B981" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#07130E" stopOpacity="0" />
          </radialGradient>

          <pattern
            id="cageMesh"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="#34D399"
              strokeWidth="0.6"
              strokeOpacity="0.12"
            />
          </pattern>
        </defs>

        {/* Background Sky */}
        <rect width="800" height="500" fill="url(#skyGrad)" />

        {/* Subtle Architectural Grid / Cage Mesh */}
        <rect width="800" height="320" fill="url(#cageMesh)" />

        {/* Floodlight Cones */}
        <rect width="800" height="500" fill="url(#beamLeft)" />
        <rect width="800" height="500" fill="url(#beamRight)" />

        {/* Architecture-Specific Structural Backdrop */}
        {architecture === 'rooftop-cage' && (
          <g opacity="0.85">
            {/* Urban Skyline Silhouette & Rooftop Steel Truss */}
            <rect x="40" y="90" width="90" height="160" fill="#0B1F17" />
            <rect x="660" y="105" width="100" height="145" fill="#0B1F17" />
            <path
              d="M90 60 L710 60 L750 240 L50 240 Z"
              stroke="#34D399"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <line
              x1="90"
              y1="60"
              x2="710"
              y2="60"
              stroke="#6EE7B7"
              strokeOpacity="0.45"
              strokeWidth="3"
            />
          </g>
        )}

        {architecture === 'metro-pavilion' && (
          <g opacity="0.85">
            {/* Diyabari Metro Viaduct & Pillar 5 Silhouette */}
            <line
              x1="0"
              y1="105"
              x2="800"
              y2="105"
              stroke="#34D399"
              strokeOpacity="0.35"
              strokeWidth="6"
            />
            <line
              x1="0"
              y1="97"
              x2="800"
              y2="97"
              stroke="#A7F3D0"
              strokeOpacity="0.25"
              strokeWidth="2"
            />
            <rect
              x="375"
              y="105"
              width="50"
              height="120"
              fill="#0F291E"
              stroke="#34D399"
              strokeOpacity="0.3"
            />
          </g>
        )}

        {/* Floodlight Pylons */}
        <g>
          {/* Left Pylon */}
          <line
            x1="135"
            y1="48"
            x2="135"
            y2="230"
            stroke="#475569"
            strokeWidth="3"
          />
          <rect
            x="110"
            y="36"
            width="52"
            height="16"
            rx="3"
            fill="#1E293B"
            stroke="#94A3B8"
            strokeWidth="1.2"
          />
          <circle cx="122" cy="44" r="4" fill="#FEF9C3" />
          <circle cx="136" cy="44" r="4" fill="#FEF9C3" />
          <circle cx="150" cy="44" r="4" fill="#FEF9C3" />

          {/* Right Pylon */}
          <line
            x1="665"
            y1="48"
            x2="665"
            y2="230"
            stroke="#475569"
            strokeWidth="3"
          />
          <rect
            x="638"
            y="36"
            width="52"
            height="16"
            rx="3"
            fill="#1E293B"
            stroke="#94A3B8"
            strokeWidth="1.2"
          />
          <circle cx="650" cy="44" r="4" fill="#FEF9C3" />
          <circle cx="664" cy="44" r="4" fill="#FEF9C3" />
          <circle cx="678" cy="44" r="4" fill="#FEF9C3" />
        </g>

        {/* Perspective 3G/4G Pitch Base */}
        <polygon
          points="120,175 680,175 760,445 40,445"
          fill="url(#turfSurface)"
          stroke="#34D399"
          strokeOpacity="0.5"
          strokeWidth="2"
        />

        {/* Mowing Turf Stripes */}
        <polygon
          points="190,175 270,175 230,445 120,445"
          fill="url(#turfStripe)"
        />
        <polygon
          points="350,175 450,175 465,445 335,445"
          fill="url(#turfStripe)"
        />
        <polygon
          points="530,175 610,175 680,445 570,445"
          fill="url(#turfStripe)"
        />

        {/* Pitch Geometry: Twin-Hub Dual Pitch vs Single / 11v11 Pitch */}
        {architecture === 'twin-hub-arena' ? (
          <g stroke="#ECFDF5" strokeOpacity="0.82" strokeWidth="2">
            {/* Divider between Twin Pitches */}
            <line x1="400" y1="175" x2="400" y2="445" strokeDasharray="8 6" />
            {/* Left Pitch Center Line & Circle */}
            <line x1="250" y1="175" x2="215" y2="445" strokeOpacity="0.6" />
            <ellipse
              cx="235"
              cy="305"
              rx="42"
              ry="24"
              fill="none"
              strokeOpacity="0.75"
            />
            {/* Right Pitch Center Line & Circle */}
            <line x1="550" y1="175" x2="585" y2="445" strokeOpacity="0.6" />
            <ellipse
              cx="565"
              cy="305"
              rx="42"
              ry="24"
              fill="none"
              strokeOpacity="0.75"
            />
          </g>
        ) : (
          <g stroke="#ECFDF5" strokeOpacity="0.85" strokeWidth="2.2">
            {/* Halfway Line */}
            <line x1="400" y1="175" x2="400" y2="445" />
            {/* Center Circle in Perspective */}
            <ellipse cx="400" cy="305" rx="76" ry="42" fill="none" />
            <circle cx="400" cy="305" r="4" fill="#ECFDF5" />

            {/* Left Penalty Area */}
            <polygon
              points="120,230 225,230 200,385 68,385"
              fill="none"
              strokeOpacity="0.8"
            />
            {/* Right Penalty Area */}
            <polygon
              points="680,230 575,230 600,385 732,385"
              fill="none"
              strokeOpacity="0.8"
            />

            {/* Left Goal Frame */}
            <polyline
              points="85,265 65,265 52,340 72,340"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
            {/* Right Goal Frame */}
            <polyline
              points="715,265 735,265 748,340 728,340"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
          </g>
        )}

        {/* Subtle Bottom Contrast Scrim for Text Overlay */}
        <rect
          x="0"
          y="310"
          width="800"
          height="190"
          fill="url(#skyGrad)"
          opacity="0.78"
        />
      </svg>

      {/* Architectural Spec Overlay — Clean Unboxed Typography (Zero-Pill Rule) */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[#06120C] via-[#06120C]/80 to-transparent flex flex-col justify-end">
        <div className="flex items-center justify-between gap-4 text-[11px] font-mono tracking-normal text-emerald-300/90 tabular-nums">
          <span className="truncate">
            {zoneShort} · {formatLabel}
          </span>
          <span className="shrink-0 text-emerald-200">{hoursLabel}</span>
        </div>
      </div>
    </div>
  );
}
