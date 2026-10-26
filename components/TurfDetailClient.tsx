'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Copy,
  Check,
  Globe,
  MapPin,
  Clock,
  Mail,
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Calendar,
} from 'lucide-react';
import {
  TurfVenue,
  ZoneInfo,
} from '@/lib/turfs-data';
import { Header } from './Header';
import { Footer } from './Footer';
import { TurfVisual } from './TurfVisual';
import { TurfCard } from './TurfCard';
import { QuickBookModal } from './QuickBookModal';

interface TurfDetailClientProps {
  turf: TurfVenue;
  zone: ZoneInfo;
  sameZoneTurfs: TurfVenue[];
  prevTurf: TurfVenue;
  nextTurf: TurfVenue;
}

export function TurfDetailClient({
  turf,
  zone,
  sameZoneTurfs,
  prevTurf,
  nextTurf,
}: TurfDetailClientProps) {
  const [copiedPhoneIdx, setCopiedPhoneIdx] = useState<number | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // On-page slot reservation form state
  const [matchDate, setMatchDate] = useState('2026-10-30');
  const [slotWindow, setSlotWindow] = useState(
    turf.isDaytimeOnly
      ? 'Daylight Off-Peak (06:00 – 16:00)'
      : 'Prime Floodlit (17:00 – 23:00)'
  );
  const [selectedFormat, setSelectedFormat] = useState(
    turf.pitchFormats[0] || '6v6 Small-Sided'
  );
  const [teamName, setTeamName] = useState('');
  const [captainPhone, setCaptainPhone] = useState('');
  const [paymentChannel, setPaymentChannel] = useState(
    'bKash 50% Advance Deposit'
  );
  const [formError, setFormError] = useState('');
  const [reservationCreated, setReservationCreated] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleCopyPhone = (phone: string, index: number) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhoneIdx(index);
    setTimeout(() => setCopiedPhoneIdx(null), 1800);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${turf.name}, ${turf.address}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 1800);
  };

  const handleCreateReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim()) {
      setFormError('Please enter your team or group name.');
      return;
    }
    if (!/^[0-9+\-\s]{8,15}$/.test(captainPhone.trim())) {
      setFormError(
        'Please enter a valid Bangladesh contact number (e.g., 017XX-XXXXXX).'
      );
      return;
    }
    setFormError('');
    setReservationCreated(true);
  };

  const reservationSheet = `SLOT BOOKING INQUIRY — ${turf.name.toUpperCase()}
Venue Address: ${turf.address}
Team Name: ${teamName || 'Dhaka Match Squad'}
Captain Phone: ${captainPhone}
Requested Date: ${matchDate}
Time Window: ${slotWindow}
Pitch Format: ${selectedFormat}
Deposit Preference: ${paymentChannel}

Please confirm if this slot is available and share the merchant number for the 50% advance deposit.`;

  const handleCopyReservation = () => {
    navigator.clipboard.writeText(reservationSheet);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${turf.name} ${turf.address}`
  )}`;

  const hoursShort = turf.is24Hours
    ? 'Open 24 Hours Daily'
    : turf.isLateNight
    ? 'Extended Late-Night Arena'
    : turf.isDaytimeOnly
    ? 'Daytime Sporting Ground'
    : 'Floodlit Match Complex';

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8]">
      <Header onOpenQuickBook={() => setIsModalOpen(true)} />

      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-10 space-y-14">
        {/* Top Breadcrumb & Directory Index Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-900 hover:text-[#0F5132] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Dhaka Turfs</span>
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/?zone=${zone.id}#zone-explorer`}
              className="hover:text-slate-900 hover:underline underline-offset-4"
            >
              {zone.name}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-900 font-medium">{turf.name}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 tabular-nums">
            <span>
              Venue #{String(turf.id).padStart(2, '0')} of 26
            </span>
            <span aria-hidden="true">·</span>
            <Link
              href={`/turfs/${prevTurf.slug}`}
              className="hover:text-slate-900 hover:underline underline-offset-4"
            >
              ← Prev
            </Link>
            <Link
              href={`/turfs/${nextTurf.slug}`}
              className="hover:text-slate-900 hover:underline underline-offset-4"
            >
              Next →
            </Link>
          </div>
        </div>

        {/* Primary 2-Column Venue Hero & Direct Contact Hub */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column (7 cols): Venue Profile & Architectural Pitch Showcase */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Unboxed Metadata Line */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-mono font-semibold text-[#0F5132] tabular-nums">
                  Venue #{String(turf.id).padStart(2, '0')}
                </span>
                <span aria-hidden="true">·</span>
                <span>{zone.name}</span>
                <span aria-hidden="true">·</span>
                <span>{turf.corridor}</span>
                <span aria-hidden="true">·</span>
                <span>{turf.tagline}</span>
              </div>

              <h1
                className="font-display font-bold text-slate-950 tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.35rem)', textWrap: 'balance' }}
              >
                {turf.name}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {turf.description}
              </p>
            </div>

            {/* Architectural Pitch Illustration */}
            <TurfVisual
              architecture={turf.architectureType}
              venueName={turf.name}
              zoneShort={zone.shortName}
              formatLabel={turf.pitchFormats.join(' / ')}
              hoursLabel={hoursShort}
              variant="detail"
            />

            {/* Pitch Specifications & Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white border border-slate-200 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">Pitch Formats</div>
                <div className="text-sm font-semibold text-slate-900">
                  {turf.pitchFormats.join(' · ')}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">Turf Surface</div>
                <div className="text-sm font-semibold text-slate-900">
                  {turf.surfaceSpec}
                </div>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-xl">
                <div className="text-xs text-slate-500 mb-1">
                  Recommended Footwear
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  {turf.footwearRule}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Direct Contact & Instant Get-in-Touch Hub */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 sm:p-7 space-y-6">
            <div className="space-y-5">
              <div className="pb-4 border-b border-slate-200">
                <div className="text-xs text-slate-500 mb-1">
                  Official Venue Contact & Booking Channels
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  Get in Touch & Reserve
                </h2>
              </div>

              {/* 1. Direct Phone Numbers */}
              <div className="space-y-2.5">
                <div className="text-xs font-semibold text-slate-700">
                  Direct Phone Hotline(s)
                </div>

                {turf.hasDirectPhone && turf.phones.length > 0 ? (
                  <div className="space-y-2">
                    {turf.phones.map((phone, idx) => (
                      <div
                        key={phone}
                        className="flex items-center justify-between gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-lg"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Phone className="w-4 h-4 text-[#0F5132] shrink-0" />
                          <span className="font-mono text-base font-bold text-slate-900 tabular-nums truncate">
                            {phone}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleCopyPhone(phone, idx)}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                          >
                            {copiedPhoneIdx === idx ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-700" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>

                          <a
                            href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-md transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call Now</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs text-amber-950 leading-relaxed">
                    <span className="font-semibold block mb-0.5">
                      On-Site / App Managed Venue:
                    </span>
                    {turf.contactNote || turf.primaryPhoneDisplay}
                  </div>
                )}
              </div>

              {/* 2. Web Portal / Social Booking / Email */}
              {(turf.website || turf.socialBooking || turf.email) && (
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold text-slate-700">
                    Online Portal & Digital Channels
                  </div>

                  {turf.website && (
                    <div className="flex items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Globe className="w-4 h-4 text-[#0F5132] shrink-0" />
                        <span className="font-mono text-xs font-semibold text-slate-900 truncate">
                          {turf.website}
                        </span>
                      </div>
                      <a
                        href={turf.websiteUrl || `https://${turf.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F5132] hover:underline shrink-0"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {turf.socialBooking && (
                    <div className="flex items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Globe className="w-4 h-4 text-[#0F5132] shrink-0" />
                        <span className="font-mono text-xs font-semibold text-slate-900 truncate">
                          {turf.socialBooking}
                        </span>
                      </div>
                      <a
                        href={
                          turf.socialBookingUrl ||
                          `https://${turf.socialBooking}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F5132] hover:underline shrink-0"
                      >
                        <span>Open Page</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  {turf.email && (
                    <div className="flex items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Mail className="w-4 h-4 text-[#0F5132] shrink-0" />
                        <span className="font-mono text-xs text-slate-900 truncate">
                          {turf.email}
                        </span>
                      </div>
                      <a
                        href={`mailto:${turf.email}`}
                        className="text-xs font-semibold text-[#0F5132] hover:underline shrink-0"
                      >
                        Email Desk
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Full Dhaka Street Address & Google Maps Link */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold text-slate-700">
                  Venue Street Address & Directions
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0F5132] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-800 leading-snug">
                      {turf.address}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-100 rounded-md transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 4. Operating Window & Typical Slot Rates */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-semibold text-slate-700">
                  Operating Hours & Typical Slot Window Rates
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 font-mono font-semibold text-slate-900 tabular-nums pb-2 border-b border-slate-200/80">
                    <Clock className="w-3.5 h-3.5 text-[#0F5132] shrink-0" />
                    <span>{turf.hours}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-slate-600">
                    <span>Daylight Off-Peak (06:00–16:00)</span>
                    <span className="font-mono font-medium text-slate-900 tabular-nums">
                      {turf.estimatedRates.offPeak}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-slate-600">
                    <span>Prime Floodlit (17:00–23:00)</span>
                    <span className="font-mono font-medium text-slate-900 tabular-nums">
                      {turf.estimatedRates.primeFloodlit}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-slate-600">
                    <span>Late-Night / 24-Hr (23:00–03:30+)</span>
                    <span className="font-mono font-medium text-slate-900 tabular-nums">
                      {turf.estimatedRates.lateNight}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Booking Tip */}
            <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-900">
                Venue Booking Note:{' '}
              </span>
              {turf.bookingTip}
            </div>
          </div>
        </section>

        {/* Interactive Slot Inquiry & Reservation Builder for This Turf */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono text-[#0F5132]">
                01. Direct Slot Inquiry Builder
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Prepare a Booking Request for {turf.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prime floodlit slots on Thursday, Friday, and Saturday evenings
                (6:00 PM – 11:00 PM) typically book out 3 to 5 days in advance.
                Fill out your preferred match window below to generate a
                ready-to-send reservation sheet for the venue desk.
              </p>

              <div className="pt-3 space-y-2 text-xs text-slate-600">
                <div className="font-semibold text-slate-900">
                  Key Highlights at {turf.name}:
                </div>
                <ul className="space-y-1.5">
                  {turf.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#0F5132] font-bold">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <form onSubmit={handleCreateReservation} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      <Calendar className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={matchDate}
                      onChange={(e) => setMatchDate(e.target.value)}
                      className="w-full px-3 py-2 text-sm font-mono bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Slot Window
                    </label>
                    <select
                      value={slotWindow}
                      onChange={(e) => setSlotWindow(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                    >
                      <option value="Daylight Off-Peak (06:00 – 16:00)">
                        Daylight Off-Peak (06:00 – 16:00)
                      </option>
                      <option value="Prime Floodlit (17:00 – 23:00)">
                        Prime Floodlit (17:00 – 23:00)
                      </option>
                      <option value="Late-Night / 24-Hr (23:00 – 03:30+)">
                        Late-Night / 24-Hr (23:00 – 03:30+)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Pitch Format
                    </label>
                    <select
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                    >
                      {turf.pitchFormats.map((fmt) => (
                        <option key={fmt} value={fmt}>
                          {fmt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Team / Squad Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Bashundhara Rovers"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Captain Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g., 01711-XXXXXX"
                      value={captainPhone}
                      onChange={(e) => setCaptainPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm font-mono bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Advance Deposit Method
                    </label>
                    <select
                      value={paymentChannel}
                      onChange={(e) => setPaymentChannel(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                    >
                      <option value="bKash 50% Advance Deposit">
                        bKash 50% Advance
                      </option>
                      <option value="Nagad 50% Advance Deposit">
                        Nagad 50% Advance
                      </option>
                      <option value="Online Web Portal Checkout">
                        Web Portal Checkout
                      </option>
                      <option value="On-Site Cash at Venue Desk">
                        On-Site Venue Desk
                      </option>
                    </select>
                  </div>
                </div>

                {formError && (
                  <p className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                    {formError}
                  </p>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-lg transition-colors cursor-pointer"
                  >
                    Create Slot Reservation Sheet
                  </button>
                </div>
              </form>

              {reservationCreated && (
                <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-emerald-950">
                      Ready-to-Send Reservation Details
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyReservation}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-emerald-300 text-emerald-900 rounded-md hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      {copiedMessage ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Booking Sheet</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="text-xs font-mono text-slate-800 whitespace-pre-wrap bg-white p-3.5 rounded-lg border border-emerald-200/80">
                    {reservationSheet}
                  </pre>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    {turf.hasDirectPhone && turf.phones.length > 0 && (
                      <a
                        href={`tel:${turf.phones[0].replace(/[^0-9+]/g, '')}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-lg transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call {turf.phones[0]} to Confirm Slot</span>
                      </a>
                    )}
                    {(turf.websiteUrl || turf.socialBookingUrl) && (
                      <a
                        href={turf.websiteUrl || turf.socialBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <span>
                          Book via {turf.website || turf.socialBooking}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Other Turfs in the Same Dhaka Zone */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono text-[#0F5132] mb-1">
                02. Same-Zone Alternatives · {zone.corridorLabel}
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Other Turfs in {zone.name}
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                {zone.bookingInsight}
              </p>
            </div>

            <Link
              href={`/?zone=${zone.id}#zone-explorer`}
              className="text-xs font-semibold text-[#0F5132] hover:underline underline-offset-4 whitespace-nowrap shrink-0"
            >
              View All {zone.venueCount} Venues in {zone.shortName} →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sameZoneTurfs.map((neighbor) => (
              <TurfCard key={neighbor.slug} turf={neighbor} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <QuickBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialZoneId={zone.id}
      />
    </div>
  );
}
