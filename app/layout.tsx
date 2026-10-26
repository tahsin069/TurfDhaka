import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'TurfDhaka — Dhaka Football Turf & Arena Directory',
  description:
    'Discover, compare, and book all 26 artificial football and futsal turfs across 7 zones in Dhaka with direct contact numbers, operating hours, and zone-wise filtering.',
  openGraph: {
    title: 'TurfDhaka — Dhaka Football Turf & Arena Directory',
    description:
      'Complete directory of 26 artificial football & futsal pitches across 7 zones in Dhaka with phone numbers, booking links, addresses, and operating hours.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TurfDhaka — Dhaka Football Turf & Arena Directory',
    description:
      'Complete directory of 26 artificial football & futsal pitches across 7 zones in Dhaka with phone numbers, booking links, addresses, and operating hours.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body
        className="bg-[#F8FAF8] text-slate-900 font-sans antialiased selection:bg-emerald-800 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
