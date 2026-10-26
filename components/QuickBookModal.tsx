'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Phone, Copy, Check, ExternalLink, Calendar, Clock } from 'lucide-react';
import { TURF_VENUES, DHAKA_ZONES, ZoneId } from '@/lib/turfs-data';

interface QuickBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialZoneId?: ZoneId | 'all';
}

export function QuickBookModal({
  isOpen,
  onClose,
  initialZoneId = 'all',
}: QuickBookModalProps) {
  const [selectedZone, setSelectedZone] = useState<ZoneId | 'all'>(initialZoneId);
  const [selectedTurfSlug, setSelectedTurfSlug] = useState<string>(
    TURF_VENUES[0].slug
  );
  const [matchDate, setMatchDate] = useState<string>('2026-10-29');
  const [slotWindow, setSlotWindow] = useState<string>(
    'Prime Floodlit (17:00 – 23:00)'
  );
  const [pitchFormat, setPitchFormat] = useState<string>('6v6 Small-Sided');
  const [teamName, setTeamName] = useState<string>('');
  const [captainPhone, setCaptainPhone] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  if (!isOpen) return null;

  const filteredVenues =
    selectedZone === 'all'
      ? TURF_VENUES
      : TURF_VENUES.filter((v) => v.zoneId === selectedZone);

  const activeTurf =
    filteredVenues.find((v) => v.slug === selectedTurfSlug) ||
    filteredVenues[0] ||
    TURF_VENUES[0];

  const handleZoneChange = (newZone: ZoneId | 'all') => {
    setSelectedZone(newZone);
    const list =
      newZone === 'all'
        ? TURF_VENUES
        : TURF_VENUES.filter((v) => v.zoneId === newZone);
    if (list.length > 0) {
      setSelectedTurfSlug(list[0].slug);
    }
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedPhone = captainPhone.trim();
    if (!teamName.trim()) {
      setErrorMessage('Please enter your team or group name.');
      return;
    }
    if (!/^[0-9+\-\s]{8,15}$/.test(cleanedPhone)) {
      setErrorMessage(
        'Please enter a valid Bangladesh mobile number (e.g., 017XX-XXXXXX).'
      );
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  const inquiryText = `Hello ${activeTurf.name}, we would like to book a slot:\n• Team: ${
    teamName || 'Local Match Group'
  }\n• Date: ${matchDate}\n• Window: ${slotWindow}\n• Format: ${pitchFormat}\n• Captain Contact: ${captainPhone}\nPlease let us know available slots and the bKash/Nagad number for the 50% advance deposit.`;

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(inquiryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-book-title"
    >
      <div className="bg-white border border-slate-200 rounded-xl max-w-2xl w-full overflow-hidden shadow-xl my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h2
              id="quick-book-title"
              className="font-display text-lg font-bold text-slate-900"
            >
              Dhaka Turf Slot Reservation & Quick-Dial Builder
            </h2>
            <p className="text-xs text-slate-600">
              Select a zone and venue to prepare your slot inquiry or connect
              directly with the arena desk.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  1. Filter by Dhaka Zone
                </label>
                <select
                  value={selectedZone}
                  onChange={(e) =>
                    handleZoneChange(e.target.value as ZoneId | 'all')
                  }
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                >
                  <option value="all">All 7 Dhaka Zones (26 Turfs)</option>
                  {DHAKA_ZONES.map((z) => (
                    <option key={z.id} value={z.id}>
                      {z.name} ({z.venueCount})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  2. Select Turf / Arena
                </label>
                <select
                  value={activeTurf.slug}
                  onChange={(e) => {
                    setSelectedTurfSlug(e.target.value);
                    setSubmitted(false);
                  }}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                >
                  {filteredVenues.map((v) => (
                    <option key={v.slug} value={v.slug}>
                      #{String(v.id).padStart(2, '0')} {v.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Turf Instant Contact Bar */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-slate-900">
                  {activeTurf.name}
                </span>
                <span className="text-xs font-mono text-slate-600 tabular-nums">
                  {activeTurf.hours}
                </span>
              </div>
              <p className="text-xs text-slate-600">{activeTurf.address}</p>
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono tabular-nums">
                <span className="text-[#0F5132] font-semibold">
                  Phone: {activeTurf.primaryPhoneDisplay}
                </span>
                {(activeTurf.website || activeTurf.socialBooking) && (
                  <span className="text-slate-700">
                    Web: {activeTurf.website || activeTurf.socialBooking}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                  Match Date
                </label>
                <input
                  type="date"
                  value={matchDate}
                  onChange={(e) => setMatchDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm font-mono bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  <Clock className="w-3.5 h-3.5 inline mr-1 text-slate-400" />
                  Slot Window
                </label>
                <select
                  value={slotWindow}
                  onChange={(e) => setSlotWindow(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
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
                  value={pitchFormat}
                  onChange={(e) => setPitchFormat(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                >
                  <option value="5v5 Futsal Cage">5v5 Futsal Cage</option>
                  <option value="6v6 Small-Sided">6v6 Small-Sided</option>
                  <option value="7v7 Medium Format">7v7 Medium Format</option>
                  <option value="9v9 / 11v11 Full Turf">
                    9v9 / 11v11 Full Turf
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Team or Group Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Gulshan Strikers FC"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Captain Mobile Number (BD)
                </label>
                <input
                  type="tel"
                  placeholder="e.g., 01711-XXXXXX"
                  value={captainPhone}
                  onChange={(e) => setCaptainPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm font-mono bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F5132]"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Link
                href={`/turfs/${activeTurf.slug}`}
                onClick={onClose}
                className="text-xs font-semibold text-[#0F5132] hover:underline underline-offset-4"
              >
                Open Dedicated Page for {activeTurf.name} →
              </Link>

              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-lg transition-colors cursor-pointer"
              >
                Generate Booking Request
              </button>
            </div>
          </form>

          {submitted && (
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-emerald-950">
                  Booking Sheet Ready for {activeTurf.name}
                </span>
                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-white border border-emerald-300 text-emerald-900 rounded hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copied Message</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Inquiry Text</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-xs font-mono text-slate-800 whitespace-pre-wrap bg-white p-3 rounded border border-emerald-200/80">
                {inquiryText}
              </pre>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                {activeTurf.hasDirectPhone && activeTurf.phones.length > 0 && (
                  <a
                    href={`tel:${activeTurf.phones[0].replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Dial {activeTurf.phones[0]} Now</span>
                  </a>
                )}

                {(activeTurf.websiteUrl || activeTurf.socialBookingUrl) && (
                  <a
                    href={activeTurf.websiteUrl || activeTurf.socialBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <span>
                      Open {activeTurf.website || activeTurf.socialBooking}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
