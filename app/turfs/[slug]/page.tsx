import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  TURF_VENUES,
  getTurfBySlug,
  getZoneById,
  getTurfsByZone,
} from '@/lib/turfs-data';
import { TurfDetailClient } from '@/components/TurfDetailClient';

export function generateStaticParams() {
  return TURF_VENUES.map((turf) => ({
    slug: turf.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const turf = getTurfBySlug(slug);
  if (!turf) {
    return {
      title: 'Turf Not Found — TurfDhaka',
    };
  }

  return {
    title: `${turf.name} (${turf.zoneName}) — Contact, Hours & Booking | TurfDhaka`,
    description: `${turf.description} Direct phone: ${turf.primaryPhoneDisplay}. Address: ${turf.address}. Operating hours: ${turf.hours}.`,
  };
}

export default async function TurfDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const turf = getTurfBySlug(slug);

  if (!turf) {
    notFound();
  }

  const zone = getZoneById(turf.zoneId)!;
  const sameZoneTurfs = getTurfsByZone(turf.zoneId).filter(
    (t) => t.slug !== turf.slug
  );

  const currentIndex = TURF_VENUES.findIndex((t) => t.slug === turf.slug);
  const prevTurf =
    TURF_VENUES[(currentIndex - 1 + TURF_VENUES.length) % TURF_VENUES.length];
  const nextTurf = TURF_VENUES[(currentIndex + 1) % TURF_VENUES.length];

  return (
    <TurfDetailClient
      turf={turf}
      zone={zone}
      sameZoneTurfs={sameZoneTurfs}
      prevTurf={prevTurf}
      nextTurf={nextTurf}
    />
  );
}
