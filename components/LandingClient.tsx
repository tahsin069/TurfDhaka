'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Phone,
  ArrowUpRight,
  ExternalLink,
  Copy,
  Check,
  FileText,
  SlidersHorizontal,
} from 'lucide-react';
import {
  DHAKA_ZONES,
  TURF_VENUES,
  QUICK_DIAL_MATRIX,
  MATCH_PREPARATION_GUIDE,
  ZoneId,
} from '@/lib/turfs-data';
import { Header } from './Header';
import { Footer } from './Footer';
import { TurfCard } from './TurfCard';
import { TurfVisual } from './TurfVisual';
import { QuickBookModal } from './QuickBookModal';

type OperatingFilter = 'all' | '24h' | 'latenight' | 'online';

export function LandingClient() {
  // Zone-wise category toggle state (defaults to Bashundhara R/A or URL query param)
  const [activeZoneToggle, setActiveZoneToggle] = useState<ZoneId>('bashundhara');

  // Full directory search & operating filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDirectoryZone, setSelectedDirectoryZone] = useState<ZoneId | 'all'>('all');
  const [operatingFilter, setOperatingFilter] = useState<OperatingFilter>('all');

  // Quick Book Modal state
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [modalInitialZone, setModalInitialZone] = useState<ZoneId | 'all'>('all');

  // Quick-Dial Matrix phone copy state
  const [copiedMatrixPhone, setCopiedMatrixPhone] = useState<string | null>(null);

  // Sync zone toggle if URL has ?zone=...
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const zoneParam = params.get('zone') as ZoneId | null;
      if (zoneParam && DHAKA_ZONES.some((z) => z.id === zoneParam)) {
        setActiveZoneToggle(zoneParam);
      }
    }
  }, []);

  const currentZoneInfo =
    DHAKA_ZONES.find((z) => z.id === activeZoneToggle) || DHAKA_ZONES[0];
  const zoneToggleTurfs = TURF_VENUES.filter(
    (t) => t.zoneId === activeZoneToggle
  );

  // Filtered turfs for the All 26 Turfs search section
  const filteredDirectoryTurfs = TURF_VENUES.filter((turf) => {
    const matchesZone =
      selectedDirectoryZone === 'all' || turf.zoneId === selectedDirectoryZone;

    const matchesOperating =
      operatingFilter === 'all'
        ? true
        : operatingFilter === '24h'
        ? turf.is24Hours
        : operatingFilter === 'latenight'
        ? turf.is24Hours || turf.isLateNight
        : turf.hasOnlinePortal;

    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      turf.name.toLowerCase().includes(q) ||
      turf.address.toLowerCase().includes(q) ||
      turf.zoneName.toLowerCase().includes(q) ||
      turf.tagline.toLowerCase().includes(q) ||
      turf.primaryPhoneDisplay.toLowerCase().includes(q);

    return matchesZone && matchesOperating && matchesSearch;
  });

  const handleCopyMatrixPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedMatrixPhone(phone);
    setTimeout(() => setCopiedMatrixPhone(null), 1800);
  };

  const openBookModalForZone = (zoneId: ZoneId | 'all') => {
    setModalInitialZone(zoneId);
    setIsBookModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8]">
      <Header onOpenQuickBook={() => openBookModalForZone('all')} />

      <main className="flex-1">
        {/* SECTION 1: HERO & PROPOSITION */}
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 py-12 lg:py-16 space-y-10">
            {/* 2-Column Split Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column (7 cols): Typographic Statement & Instant Search */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#0F5132] tabular-nums">
                    <span>Dhaka Metropolitan Sports Infrastructure Guide</span>
                    <span aria-hidden="true">·</span>
                    <span>26 Turfs Across 7 Zones</span>
                  </div>

                  <h1
                    className="font-display font-bold text-slate-950 tracking-tight leading-[1.06]"
                    style={{
                      fontSize: 'clamp(2.35rem, 4.2vw, 3.75rem)',
                      textWrap: 'balance',
                    }}
                  >
                    Book Dhaka’s Premier Football & Futsal Turfs in Seconds.
                  </h1>

                  <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                    Every artificial football and futsal arena across Bashundhara,
                    Mirpur, Dhanmondi, Mohammadpur, Tejgaon, Motijheel, Uttara,
                    Badda, and Manikdiya—complete with direct phone hotlines,
                    web portals, operating windows, and dedicated venue pages.
                  </p>
                </div>

                {/* Instant Turf Search & Primary Action Bar */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by turf name, road, or area (e.g., Bashundhara, Kalshi, 100 Feet)..."
                        className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:bg-white focus:border-[#0F5132] transition-colors"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => openBookModalForZone('all')}
                      className="px-5 py-3 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Book a Turf Slot
                    </button>
                  </div>

                  {/* Quick Jump Links by Zone */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600">
                    <span className="font-semibold text-slate-900">
                      Jump to Zone:
                    </span>
                    {DHAKA_ZONES.map((z, idx) => (
                      <React.Fragment key={z.id}>
                        <a
                          href="#zone-explorer"
                          onClick={() => setActiveZoneToggle(z.id)}
                          className="hover:text-[#0F5132] hover:underline underline-offset-4 transition-colors"
                        >
                          {z.shortName} ({z.venueCount})
                        </a>
                        {idx < DHAKA_ZONES.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Featured Architectural Arena Showcase & Zone Distribution */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#081610] text-white rounded-xl p-5 sm:p-6 border border-emerald-950 space-y-5">
                <TurfVisual
                  architecture="floodlit-complex"
                  venueName="Dhaka Floodlit Synthetic Turf Network"
                  zoneShort="7 Metropolitan Zones"
                  formatLabel="5v5 Cage · 7v7 Turf · 11v11 Pitch"
                  hoursLabel="3G/4G FIFA-Grade"
                  variant="hero"
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-emerald-300/90 font-mono tabular-nums">
                    <span>Turf Distribution by Zone</span>
                    <span>26 Total Venues</span>
                  </div>

                  <div className="space-y-2">
                    {DHAKA_ZONES.map((zone) => {
                      const widthPercent = Math.round((zone.venueCount / 5) * 100);
                      return (
                        <button
                          key={zone.id}
                          type="button"
                          onClick={() => {
                            setActiveZoneToggle(zone.id);
                            document
                              .getElementById('zone-explorer')
                              ?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full group flex items-center justify-between gap-3 text-left text-xs hover:text-emerald-300 transition-colors cursor-pointer"
                        >
                          <span className="w-36 truncate text-slate-200 group-hover:text-white">
                            {zone.shortName}
                          </span>
                          <div className="flex-1 h-2 bg-emerald-950 rounded-sm overflow-hidden">
                            <div
                              className="h-full bg-emerald-500 group-hover:bg-emerald-400 transition-all"
                              style={{ width: `${widthPercent}%` }}
                            />
                          </div>
                          <span className="w-6 text-right font-mono text-emerald-300 tabular-nums">
                            {zone.venueCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Slot Window & Rate Benchmark Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="p-4 bg-[#F8FAF8] border border-slate-200/90 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  Daylight Off-Peak (06:00 – 16:00)
                </div>
                <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                  BDT 2,000 – 2,800/hr
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Academy, Schools & Morning Fitness
                </div>
              </div>

              <div className="p-4 bg-[#F8FAF8] border border-slate-200/90 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  Prime Floodlit (17:00 – 23:00)
                </div>
                <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                  BDT 3,200 – 4,500/hr
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Book 3–5 Days Ahead · 50% bKash Deposit
                </div>
              </div>

              <div className="p-4 bg-[#F8FAF8] border border-slate-200/90 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  Late-Night / 24-Hr (23:00 – 03:30+)
                </div>
                <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                  11 Dhaka Venues
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Round-the-Clock & Post-Midnight Cages
                </div>
              </div>

              <div className="p-4 bg-[#F8FAF8] border border-slate-200/90 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  Surface & Footwear Standard
                </div>
                <div className="font-mono text-lg font-bold text-slate-900 tabular-nums">
                  3G/4G FIFA-Grade
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  TF Studs, AG Boots, or Flats · No Metal
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ZONE-WISE TURF EXPLORER WITH CATEGORY TOGGLE */}
        <section
          id="zone-explorer"
          className="max-w-[1280px] mx-auto px-6 py-16 space-y-8 scroll-mt-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#0F5132]">
                01. Zone-Wise Turf Category Toggle
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-950 tracking-tight">
                Browse Turfs by Dhaka Zone
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Switch between Dhaka’s 7 metropolitan football corridors below to
                inspect every turf in that zone, compare operating hours, and
                open each venue’s dedicated contact page.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openBookModalForZone(activeZoneToggle)}
              className="px-4 py-2.5 text-xs font-semibold text-[#0F5132] bg-white border border-slate-300 hover:border-[#0F5132] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
            >
              Reserve in {currentZoneInfo.shortName} →
            </button>
          </div>

          {/* Interactive Category Toggle Bar (Functional Segmented Buttons) */}
          <div
            className="flex items-center gap-1.5 p-1.5 bg-slate-200/75 rounded-xl overflow-x-auto"
            role="tablist"
            aria-label="Dhaka Turf Zones"
          >
            {DHAKA_ZONES.map((zone) => {
              const isSelected = activeZoneToggle === zone.id;
              return (
                <button
                  key={zone.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveZoneToggle(zone.id)}
                  className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0F5132] text-white shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {zone.index}. {zone.shortName} ({zone.venueCount})
                </button>
              );
            })}
          </div>

          {/* Selected Zone Corridor Header & Booking Insight */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#0F5132] tabular-nums">
                  <span>Zone 0{currentZoneInfo.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentZoneInfo.corridorLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{currentZoneInfo.venueCount} Verified Venues</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {currentZoneInfo.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentZoneInfo.summary}
                </p>
              </div>

              <div className="lg:col-span-5 p-4 bg-[#F8FAF8] border border-slate-200 rounded-lg space-y-1.5">
                <div className="text-xs font-semibold text-slate-900">
                  {currentZoneInfo.shortName} Access & Booking Note
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentZoneInfo.bookingInsight}
                </p>
              </div>
            </div>
          </div>

          {/* Compiled Turf Cards for Selected Zone */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zoneToggleTurfs.map((turf) => (
              <TurfCard key={turf.slug} turf={turf} />
            ))}
          </div>
        </section>

        {/* SECTION 3: ALL 26 TURFS COMPLETE DIRECTORY & INSTANT FILTER */}
        <section
          id="all-turfs"
          className="bg-white border-y border-slate-200 py-16 scroll-mt-16"
        >
          <div className="max-w-[1280px] mx-auto px-6 space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#0F5132]">
                  02. Complete 26-Venue Citywide Index
                </div>
                <h2 className="font-display text-3xl font-bold text-slate-950 tracking-tight">
                  All Available Football Turfs in Dhaka
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl">
                  Filter all 26 turfs by operating window (24-hour arenas,
                  3:30 AM late-night pitches, or online booking portals) or click
                  any venue to open its dedicated page.
                </p>
              </div>

              {/* Operating Window Segmented Filter */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-lg self-start lg:self-auto">
                <button
                  type="button"
                  onClick={() => setOperatingFilter('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    operatingFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Venues (26)
                </button>
                <button
                  type="button"
                  onClick={() => setOperatingFilter('24h')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    operatingFilter === '24h'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Open 24 Hours (9)
                </button>
                <button
                  type="button"
                  onClick={() => setOperatingFilter('latenight')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    operatingFilter === 'latenight'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Late-Night / 3:30 AM (13)
                </button>
                <button
                  type="button"
                  onClick={() => setOperatingFilter('online')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    operatingFilter === 'online'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Web Portal / Social (11)
                </button>
              </div>
            </div>

            {/* Search & Zone Dropdown Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-[#F8FAF8] border border-slate-200 rounded-xl">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by venue name, road, postal code, or phone number..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                />
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <SlidersHorizontal className="w-4 h-4 text-slate-500 hidden sm:block" />
                <select
                  value={selectedDirectoryZone}
                  onChange={(e) =>
                    setSelectedDirectoryZone(e.target.value as ZoneId | 'all')
                  }
                  className="px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                >
                  <option value="all">All 7 Zones (26 Turfs)</option>
                  {DHAKA_ZONES.map((z) => (
                    <option key={z.id} value={z.id}>
                      {z.name} ({z.venueCount})
                    </option>
                  ))}
                </select>

                {(searchQuery ||
                  selectedDirectoryZone !== 'all' ||
                  operatingFilter !== 'all') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedDirectoryZone('all');
                      setOperatingFilter('all');
                    }}
                    className="px-3 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Directory Grid */}
            {filteredDirectoryTurfs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDirectoryTurfs.map((turf) => (
                  <TurfCard key={turf.slug} turf={turf} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-[#F8FAF8] border border-slate-200 rounded-xl space-y-3">
                <p className="text-base font-semibold text-slate-900">
                  No Dhaka turfs match your current filter criteria.
                </p>
                <p className="text-xs text-slate-600">
                  Try clearing your search query or switching back to All 7
                  Zones.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDirectoryZone('all');
                    setOperatingFilter('all');
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0F5132] rounded-lg cursor-pointer"
                >
                  Show All 26 Turfs
                </button>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 4: WEB-ENABLED & 24-HOUR QUICK-DIAL MATRIX */}
        <section
          id="quick-dial"
          className="max-w-[1280px] mx-auto px-6 py-16 space-y-8 scroll-mt-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#0F5132]">
                03. Top Booking Channels · Instant Hotline Matrix
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-950 tracking-tight">
                Web-Enabled & 24-Hour Quick-Dial Matrix
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl">
                Direct phone numbers, web booking portals, and operating windows
                for Dhaka’s primary online-enabled and round-the-clock arenas.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0F5132] text-white text-xs font-semibold">
                    <th className="py-3.5 px-5">Turf / Arena Name</th>
                    <th className="py-3.5 px-5">Zone</th>
                    <th className="py-3.5 px-5">Direct Phone</th>
                    <th className="py-3.5 px-5">Web / Booking Portal</th>
                    <th className="py-3.5 px-5">Operating Window</th>
                    <th className="py-3.5 px-5 text-right">Venue Page</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  {QUICK_DIAL_MATRIX.map((row) => (
                    <tr
                      key={row.venueName}
                      className="hover:bg-slate-50/90 transition-colors"
                    >
                      <td className="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">
                        <Link
                          href={`/turfs/${row.slug}`}
                          className="hover:text-[#0F5132] hover:underline underline-offset-4"
                        >
                          {row.venueName}
                        </Link>
                      </td>
                      <td className="py-3.5 px-5 text-slate-600 whitespace-nowrap">
                        {row.zoneLabel}
                      </td>
                      <td className="py-3.5 px-5 font-mono text-slate-900 tabular-nums whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:${row.directPhone.replace(/[^0-9+]/g, '')}`}
                            className="hover:text-[#0F5132] font-medium"
                          >
                            {row.directPhone}
                          </a>
                          <button
                            type="button"
                            onClick={() => handleCopyMatrixPhone(row.directPhone)}
                            className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
                            title="Copy phone number"
                          >
                            {copiedMatrixPhone === row.directPhone ? (
                              <Check className="w-3.5 h-3.5 text-emerald-700" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 font-mono text-xs text-slate-700 tabular-nums whitespace-nowrap">
                        {row.portalUrl ? (
                          <a
                            href={row.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[#0F5132] hover:underline"
                          >
                            <span>{row.portalLabel}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span>{row.portalLabel}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-5 font-mono text-xs text-slate-700 tabular-nums whitespace-nowrap">
                        {row.operatingWindow}
                      </td>
                      <td className="py-3.5 px-5 text-right whitespace-nowrap">
                        <Link
                          href={`/turfs/${row.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F5132] hover:underline"
                        >
                          <span>Open Page</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: DHAKA TURF BOOKING & MATCH PREPARATION GUIDE */}
        <section
          id="match-guide"
          className="max-w-[1280px] mx-auto px-6 py-12 space-y-8 scroll-mt-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#0F5132]">
                04. Player Checklist & Match Preparation Guide
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-950 tracking-tight">
                Dhaka Turf Booking & Surface Guidelines
              </h2>
            </div>

            <a
              href="/assets/aistudio/Dhaka_Football_Turf___Arena_Directory_a38bdeb3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:border-slate-900 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <FileText className="w-4 h-4 text-[#0F5132]" />
              <span>View Original Directory PDF (6 Pages)</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MATCH_PREPARATION_GUIDE.map((item) => (
              <div
                key={item.index}
                className="p-6 bg-white border border-slate-200 rounded-xl space-y-2.5"
              >
                <div className="text-xs font-mono font-semibold text-[#0F5132]">
                  {item.index}. Player Guideline
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Complete 26-Turf Direct Index Footer Directory */}
          <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Direct Links to All 26 Dedicated Turf Pages
                </h3>
                <p className="text-xs text-slate-600">
                  Click any venue below to open its standalone page with full
                  contact numbers, map directions, and booking sheet builder.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                26 / 26 Venues Indexed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2.5 text-xs">
              {TURF_VENUES.map((venue) => (
                <Link
                  key={venue.slug}
                  href={`/turfs/${venue.slug}`}
                  className="flex items-center justify-between gap-2 py-1.5 text-slate-700 hover:text-[#0F5132] hover:underline underline-offset-4 transition-colors group"
                >
                  <span className="truncate">
                    <span className="font-mono text-slate-400 mr-1.5 tabular-nums">
                      {String(venue.id).padStart(2, '0')}.
                    </span>
                    {venue.name}
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-[#0F5132] shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <QuickBookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        initialZoneId={modalInitialZone}
      />
    </div>
  );
}
