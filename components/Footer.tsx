import React from 'react';
import Link from 'next/link';
import { DHAKA_ZONES } from '@/lib/turfs-data';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          <div className="md:col-span-5 space-y-3">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-tight text-slate-900 inline-block"
            >
              TurfDhaka
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Complete directory of 26 artificial football and futsal pitches
              across 7 zones in Dhaka Metropolitan Area with direct phone
              hotlines, booking portals, addresses, and operating hours.
            </p>
            <div className="pt-2">
              <a
                href="/assets/aistudio/Dhaka_Football_Turf___Arena_Directory_a38bdeb3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0F5132] hover:underline underline-offset-4"
              >
                Download Official Dhaka Turf Directory Guide (PDF)
              </a>
            </div>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold text-slate-900">
              Dhaka Turf Zones (7 Corridors)
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {DHAKA_ZONES.map((zone) => (
                <li key={zone.id}>
                  <Link
                    href={`/?zone=${zone.id}#zone-explorer`}
                    className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors"
                  >
                    {zone.name} · {zone.venueCount} Venues
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-900">
              24-Hour & Midnight Hotlines
            </h3>
            <ul className="space-y-2 text-xs font-mono text-slate-600 tabular-nums">
              <li>TSI Sports (100 Ft): 01898-207864</li>
              <li>Dacca Turf (Zigatola): 01333-370951</li>
              <li>Sky Turf (Central): 01766-556206</li>
              <li>Galacticos GSP (Uttara): 01727-437077</li>
              <li>Offside-Mirpur (Kalshi): 01755-355150</li>
              <li>Active Ground (Mugda): 01352-287234</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Dhaka Metropolitan Sports Infrastructure Guide · 26 Verified Venues
            Across 7 Zones
          </p>
          <p>
            Recommended Footwear: TF (Turf) Studs, AG Boots, or Indoor Flats ·
            No Metal Studs
          </p>
        </div>
      </div>
    </footer>
  );
}
