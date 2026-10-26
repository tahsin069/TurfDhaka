import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8]">
      <Header />
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-24 flex flex-col items-center justify-center text-center space-y-5">
        <div className="text-xs font-mono text-[#0F5132]">
          404 · Venue or Page Not Found
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
          This Turf Page Could Not Be Found
        </h1>
        <p className="text-sm text-slate-600 max-w-md leading-relaxed">
          Explore all 26 verified football and futsal turfs across 7 zones in
          Dhaka from the main directory.
        </p>
        <Link
          href="/"
          className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0F5132] hover:bg-[#0B3D25] rounded-lg transition-colors"
        >
          Back to Dhaka Turf Directory
        </Link>
      </main>
      <Footer />
    </div>
  );
}
