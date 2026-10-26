'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Copy, Check, ArrowUpRight, MapPin, Clock, Globe } from 'lucide-react';
import { TurfVenue, DHAKA_ZONES } from '@/lib/turfs-data';
import { TurfVisual } from './TurfVisual';

interface TurfCardProps {
  turf: TurfVenue;
}

export function TurfCard({ turf }: TurfCardProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const zoneObj = DHAKA_ZONES.find((z) => z.id === turf.zoneId);
  const shortZone = zoneObj ? zoneObj.shortName : turf.zoneName;

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!turf.hasDirectPhone || turf.phones.length === 0) return;
    navigator.clipboard.writeText(turf.phones[0]);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 1800);
  };

  const hoursShort = turf.is24Hours
    ? 'Open 24 Hours'
    : turf.isLateNight
    ? 'Open Late (1–3:30 AM)'
    : turf.isDaytimeOnly
    ? 'Daytime Only'
    : 'Floodlit Evening';

  return (
    <article className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5">
      <div>
        {/* Visual Header */}
        <Link href={`/turfs/${turf.slug}`} className="block overflow-hidden">
          <TurfVisual
            architecture={turf.architectureType}
            venueName={turf.name}
            zoneShort={shortZone}
            formatLabel={turf.pitchFormats[0] || '5v5 / 7v7 Turf'}
            hoursLabel={hoursShort}
            variant="card"
          />
        </Link>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mb-2">
            <span className="font-mono text-slate-700 tabular-nums">
              #{String(turf.id).padStart(2, '0')}
            </span>
            <span aria-hidden="true">·</span>
            <span>{shortZone}</span>
            <span aria-hidden="true">·</span>
            <span>{turf.tagline}</span>
          </div>

          {/* Primary Venue Name */}
          <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight mb-2">
            <Link
              href={`/turfs/${turf.slug}`}
              className="hover:text-[#0F5132] transition-colors"
            >
              {turf.name}
            </Link>
          </h3>

          {/* Concise Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-2">
            {turf.description}
          </p>

          {/* Essential Contact & Location Details */}
          <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-700">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span className="text-slate-600 leading-snug">{turf.address}</span>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
              <span className="font-mono text-slate-700 tabular-nums leading-snug">
                {turf.hours}
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 pt-0.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-3.5 h-3.5 text-[#0F5132] shrink-0" />
                <span className="font-mono font-medium text-slate-900 tabular-nums truncate">
                  {turf.primaryPhoneDisplay}
                </span>
              </div>

              {turf.hasDirectPhone && turf.phones.length > 0 && (
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/70 rounded transition-colors shrink-0 cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-700" />
                      <span className="text-emerald-800">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {(turf.website || turf.socialBooking) && (
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="font-mono text-slate-600 truncate">
                  {turf.website || turf.socialBooking}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-200/80 flex items-center justify-between gap-3">
        {turf.hasDirectPhone && turf.phones.length > 0 ? (
          <a
            href={`tel:${turf.phones[0].replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#0F5132]" />
            <span>Call Direct</span>
          </a>
        ) : (
          <span className="text-xs text-slate-500 truncate">
            Walk-in / App Booking
          </span>
        )}

        <Link
          href={`/turfs/${turf.slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-lg transition-colors whitespace-nowrap shrink-0"
        >
          <span>Turf Details & Book</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
