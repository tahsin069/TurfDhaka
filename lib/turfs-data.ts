export type ZoneId =
  | 'bashundhara'
  | 'badda-madani'
  | 'tejgaon-central'
  | 'dhanmondi-mohammadpur'
  | 'mirpur-shewrapara'
  | 'uttara-diyabari'
  | 'manikdiya-mugda';

export interface ZoneInfo {
  id: ZoneId;
  index: number;
  name: string;
  shortName: string;
  corridorLabel: string;
  venueCount: number;
  summary: string;
  bookingInsight: string;
  figureCaption: string;
}

export type PitchArchitecture =
  | 'floodlit-complex'
  | 'rooftop-cage'
  | 'full-stadium-11v11'
  | 'urban-24h-cage'
  | 'twin-hub-arena'
  | 'academy-training'
  | 'metro-pavilion';

export interface TurfVenue {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  zoneId: ZoneId;
  zoneName: string;
  corridor: string;
  description: string;
  phones: string[];
  primaryPhoneDisplay: string;
  hasDirectPhone: boolean;
  contactNote?: string;
  website?: string;
  websiteUrl?: string;
  socialBooking?: string;
  socialBookingUrl?: string;
  email?: string;
  address: string;
  postalCode?: string;
  hours: string;
  is24Hours: boolean;
  isLateNight: boolean; // Open until 1:00 AM - 3:30 AM or 24h
  isDaytimeOnly: boolean;
  hasOnlinePortal: boolean;
  pitchFormats: string[];
  surfaceSpec: string;
  footwearRule: string;
  estimatedRates: {
    offPeak: string;
    primeFloodlit: string;
    lateNight: string;
  };
  architectureType: PitchArchitecture;
  highlights: string[];
  bookingTip: string;
}

export const DHAKA_ZONES: ZoneInfo[] = [
  {
    id: 'bashundhara',
    index: 1,
    name: 'Bashundhara Residential Area',
    shortName: 'Bashundhara R/A',
    corridorLabel: 'North-East Corridor',
    venueCount: 5,
    summary:
      'Dhaka’s premier north-east football cluster featuring multi-sport tournament complexes, Block N stadium-grade turf, Main Gate futsal cafes, and structured coaching academies.',
    bookingInsight:
      'NDE Sports Facility (ndesports.com), JAFF Arena (jaff.com.bd), and ABG Sports City (bsc-bd.com) provide direct web portals and phone hotlines. Level Up Football Academy on 7th Avenue handles slot inquiries directly on-site.',
    figureCaption:
      'Floodlit turf arenas across Road 5, Main Gate, Road 9, Block N, and 7th Avenue in Bashundhara R/A.',
  },
  {
    id: 'badda-madani',
    index: 2,
    name: 'Badda & Madani Avenue (100 Feet)',
    shortName: 'Badda (100 Feet)',
    corridorLabel: 'East-Central Link',
    venueCount: 2,
    summary:
      'Round-the-clock dual-pitch complex along Madani Avenue (100 Feet Road) in Baganbari, Boro Badda, connecting Gulshan, Baridhara, and East Dhaka players.',
    bookingInsight:
      'Both the TSI Sports Complex cages and the dedicated Turf Football Ground operate 24 hours daily and share central management via 01898-207864 and facebook.com/tsisportscomplex.',
    figureCaption:
      '24-hour dual-pitch complex on Madani Avenue (100 Feet Road) in Baganbari, Boro Badda.',
  },
  {
    id: 'tejgaon-central',
    index: 3,
    name: 'Tejgaon, Motijheel & Central Dhaka',
    shortName: 'Tejgaon & Central',
    corridorLabel: 'Commercial Core',
    venueCount: 3,
    summary:
      'Central Dhaka’s commercial corridor combining Tejgaon’s multi-surface online booking hub, Motijheel’s official 11v11 Federation pitch, and 24-hour central rooftop cages.',
    bookingInsight:
      'Teams booking corporate evening slots in Tejgaon can reserve directly through turfnationbd.com. For daytime institutional matches at Motijheel’s BFF Artificial Turf, advance formal clearance via the BFF office (02-9556072) is required as play concludes at 7:00 PM.',
    figureCaption:
      'Central Dhaka stadium pitches at BFF House (11v11), Turf Nation Tejgaon, and Sky Turf 24/7 rooftop arena.',
  },
  {
    id: 'dhanmondi-mohammadpur',
    index: 4,
    name: 'Dhanmondi, Mohammadpur & Zigatola',
    shortName: 'Dhanmondi & Mohd.',
    corridorLabel: 'West-Central Zone',
    venueCount: 4,
    summary:
      'Historic west-central sporting corridor spanning Zigatola’s 24/7 urban turf, Iqbal Road’s neighborhood cage, Chandrima Model Town’s arena, and Dhanmondi’s daytime club ground.',
    bookingInsight:
      'While Dacca Turf (01333-370951) and ALPHA Sports (01783-149600) accept direct telephone reservations, slots for Mohammadpur Striker’s Field on Iqbal Road are managed directly at the venue desk or through aggregator platforms like Samm Sports. Dhanmondi Club Limited concludes field operations by 5:30 PM.',
    figureCaption:
      'Zigatola and Mohammadpur 24-hour urban cages, ALPHA Sports Chandrima arena, and Dhanmondi Club daytime grounds.',
  },
  {
    id: 'mirpur-shewrapara',
    index: 5,
    name: 'Mirpur & Shewrapara',
    shortName: 'Mirpur & Shewrapara',
    corridorLabel: 'North-West Hub',
    venueCount: 5,
    summary:
      'North-West Dhaka’s high-energy late-night football hub boasting 3:30 AM floodlit arenas in Kalshi and Pallabi, the Block B twin complex, and East Shewrapara’s Metro rooftop cage.',
    bookingInsight:
      'Mirpur boasts the longest late-night operating hours in North-West Dhaka, with Offside-Mirpur, Kick-Zone, and The Sports Arena all open until 3:00 AM–3:30 AM. Because DBox Sports Complex and The Sports Arena share the Plot 217, Block B, Road 3 address, teams can easily check both venues when prime evening slots fill up.',
    figureCaption:
      'Mirpur Block B Road 3 twin complex, Kalshi and Pallabi 3:30 AM arenas, and East Shewrapara rooftop pitch.',
  },
  {
    id: 'uttara-diyabari',
    index: 6,
    name: 'Uttara & Diyabari',
    shortName: 'Uttara & Diyabari',
    corridorLabel: 'Northern Hub',
    venueCount: 3,
    summary:
      'Northern Dhaka’s turf network spanning Sector 4’s central neighborhood ground, Road 32’s daytime training facility, and Diyabari’s expansive 24-hour Metro Pillar 5 pavilion.',
    bookingInsight:
      'Galacticos Sports Pavilion (GSP) next to Metro Rail Pillar No. 5 operates 24 hours daily with online booking at galacticosbd.com, while North Arena (Road 32) specializes in daytime sessions from 9:00 AM to 5:00 PM.',
    figureCaption:
      'Diyabari Metro Pillar 5 Galacticos Pavilion, Uttara Sector 4 neighborhood pitch, and Road 32 North Arena.',
  },
  {
    id: 'manikdiya-mugda',
    index: 7,
    name: 'Manikdiya, Mugda & East Dhaka',
    shortName: 'Manikdiya & Mugda',
    corridorLabel: 'Eastern Belt',
    venueCount: 4,
    summary:
      'East Dhaka’s thriving 24-hour futsal and tournament corridor stretching across Manikdiya, Dharmikpara, Mugda, Basabo, and Khilgaon.',
    bookingInsight:
      'For late-night bookings in East Dhaka, call Team Ground Sports Arena (01724-039205, teamgroundbd.com), The Playmakers Arena (01788-895556), 90 minutes sports arena (01897-710828), or Active Ground in Mugda (01352-287234).',
    figureCaption:
      'Manikdiya FIFA-standard futsal corridor (Team Ground, Playmakers, 90 Minutes Arena) and Mugda’s 24/7 Active Ground.',
  },
];

export const TURF_VENUES: TurfVenue[] = [
  // ZONE 1: Bashundhara Residential Area (5 Venues)
  {
    id: 1,
    slug: 'nde-sports-facility',
    name: 'NDE Sports Facility',
    tagline: 'Multi-Sport & Tournament Complex',
    zoneId: 'bashundhara',
    zoneName: 'Bashundhara Residential Area',
    corridor: 'North-East Corridor',
    description:
      'A premier multi-sport artificial turf venue in Bashundhara widely used for competitive matches, corporate tournaments, and floodlit evening sessions.',
    phones: ['01701-205310'],
    primaryPhoneDisplay: '01701-205310',
    hasDirectPhone: true,
    website: 'ndesports.com',
    websiteUrl: 'https://ndesports.com',
    address: 'Road 5, Bashundhara R/A, Dhaka 1229',
    postalCode: '1229',
    hours: 'Mon–Sat: 8:30 AM – 10:00 PM; Sun: 9:00 AM – 10:00 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['6v6 Futsal', '7v7 Turf', 'Corporate Tournament'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs, AG Boots, or Indoor Flats (No Metal Studs)',
    estimatedRates: {
      offPeak: 'BDT 2,200 – 2,800 / hr',
      primeFloodlit: 'BDT 3,500 – 4,500 / hr',
      lateNight: 'Closes at 10:00 PM',
    },
    architectureType: 'floodlit-complex',
    highlights: [
      'Competitive tournament-ready floodlit turf',
      'Online booking portal via ndesports.com',
      'Prime Road 5 Bashundhara R/A access',
    ],
    bookingTip:
      'Reserve Thursday, Friday, and Saturday evening slots 3 to 5 days in advance via ndesports.com or direct phone call.',
  },
  {
    id: 2,
    slug: 'jaff-arena-and-academy',
    name: 'JAFF Arena & Academy',
    tagline: 'Futsal Turf, Academy & Cafe',
    zoneId: 'bashundhara',
    zoneName: 'Bashundhara Residential Area',
    corridor: 'North-East Corridor',
    description:
      'Popular futsal and football turf destination right beside the Bashundhara Main Gate, equipped with dedicated changing rooms, youth coaching programs, and a merchandise and cafe corner.',
    phones: ['01920-297556', '01628-513319'],
    primaryPhoneDisplay: '01920-297556, 01628-513319',
    hasDirectPhone: true,
    website: 'jaff.com.bd',
    websiteUrl: 'https://jaff.com.bd',
    address: 'Bashundhara Main Gate, Dhaka 1229',
    postalCode: '1229',
    hours: 'Daily: 6:30 AM – 11:00 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['5v5 Futsal', '6v6 Cage', 'Youth Academy'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Flat Futsal Trainers',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,200 – 4,200 / hr',
      lateNight: 'Closes at 11:00 PM',
    },
    architectureType: 'academy-training',
    highlights: [
      'Located right beside Bashundhara Main Gate',
      'Dedicated changing rooms, cafe corner & merchandise shop',
      'Dual phone hotlines and online booking at jaff.com.bd',
    ],
    bookingTip:
      'Ideal for quick post-work or student matches due to immediate Bashundhara Main Gate access; 50% advance deposit locks prime slots.',
  },
  {
    id: 3,
    slug: 'sports-grill',
    name: 'Sports Grill',
    tagline: 'Small-Sided Evening Pitch',
    zoneId: 'bashundhara',
    zoneName: 'Bashundhara Residential Area',
    corridor: 'North-East Corridor',
    description:
      'Convenient neighborhood turf ground situated on Road 9, tailored for casual evening games, student matches, and small-sided 5v5 or 6v6 football sessions.',
    phones: ['01749-993503'],
    primaryPhoneDisplay: '01749-993503',
    hasDirectPhone: true,
    address: 'Plot 17/L, Plot 17/K, Road No. 9, Bashundhara R/A, Dhaka 1229',
    postalCode: '1229',
    hours: 'Daily: 6:30 AM – 10:00 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Cage', '6v6 Small-Sided'],
    surfaceSpec: '3G/4G Synthetic Polyethylene Turf',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,500 / hr',
      primeFloodlit: 'BDT 3,000 – 3,800 / hr',
      lateNight: 'Closes at 10:00 PM',
    },
    architectureType: 'rooftop-cage',
    highlights: [
      'Compact urban cage tailored for high-tempo 5v5 and 6v6',
      'Situated on Road No. 9 (Plot 17/L & 17/K) in Bashundhara R/A',
      'Direct phone booking via 01749-993503',
    ],
    bookingTip:
      'Call 01749-993503 directly to check early evening student slots between 4:30 PM and 8:30 PM.',
  },
  {
    id: 4,
    slug: 'abg-sports-city',
    name: 'ABG Sports City',
    tagline: 'Large-Scale Block N Complex',
    zoneId: 'bashundhara',
    zoneName: 'Bashundhara Residential Area',
    corridor: 'North-East Corridor',
    description:
      'Expansive, modern sports complex environment in Block N featuring high-grade artificial turf, spectator seating, and full-facility floodlighting.',
    phones: ['01969-900666'],
    primaryPhoneDisplay: '01969-900666',
    hasDirectPhone: true,
    website: 'bsc-bd.com',
    websiteUrl: 'https://bsc-bd.com',
    address: 'Plot 01, Block N, Bashundhara R/A, Dhaka 1229',
    postalCode: '1229',
    hours: 'Daily: 8:00 AM – 11:00 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['7v7 Turf', '9v9 Format', '11v11 Full Session'],
    surfaceSpec: '4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or AG Artificial Grass Boots',
    estimatedRates: {
      offPeak: 'BDT 2,500 – 3,200 / hr',
      primeFloodlit: 'BDT 3,800 – 4,500 / hr',
      lateNight: 'Closes at 11:00 PM',
    },
    architectureType: 'full-stadium-11v11',
    highlights: [
      'Expansive Block N complex supporting 7v7, 9v9, and 11v11 sessions',
      'Dedicated spectator seating & full-facility stadium floodlighting',
      'Web reservation portal at bsc-bd.com',
    ],
    bookingTip:
      'Best choice in Bashundhara for larger 7v7 or 9v9 league fixtures requiring spectator gallery seating.',
  },
  {
    id: 5,
    slug: 'level-up-football-academy',
    name: 'Level Up Football Academy',
    tagline: 'Academy & Training Pitch',
    zoneId: 'bashundhara',
    zoneName: 'Bashundhara Residential Area',
    corridor: 'North-East Corridor',
    description:
      'Dedicated training ground and artificial turf facility located along 7th Avenue in Bashundhara, focused on structured coaching clinics and local slot rentals.',
    phones: [],
    primaryPhoneDisplay: 'On-site booking at 7th Avenue desk',
    hasDirectPhone: false,
    contactNote:
      'Direct phone unlisted; bookings & inquiries handled on-site at 7th Avenue, Bashundhara R/A.',
    address: '7th Avenue, Bashundhara R/A, Dhaka',
    postalCode: '1229',
    hours: 'Daily: Coaching & Local Slot Windows (Inquire On-Site)',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Training', '7v7 Academy Pitch'],
    surfaceSpec: '3G/4G Training Grade Synthetic Turf',
    footwearRule: 'TF (Turf) Studs or Training Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,000 – 3,800 / hr',
      lateNight: 'Check on-site schedule',
    },
    architectureType: 'academy-training',
    highlights: [
      'Structured youth coaching clinics and academy drills',
      'Located along 7th Avenue inside Bashundhara R/A',
      'Walk-in on-site slot reservations for neighborhood residents',
    ],
    bookingTip:
      'Visit the 7th Avenue venue desk directly during afternoon coaching hours to reserve recurring weekly team slots.',
  },

  // ZONE 2: Badda & Madani Avenue (100 Feet) (2 Venues)
  {
    id: 6,
    slug: 'tsi-sports-complex',
    name: 'TSI SPORTS COMPLEX',
    tagline: '24-Hour Floodlit Complex',
    zoneId: 'badda-madani',
    zoneName: 'Badda & Madani Avenue (100 Feet)',
    corridor: 'East-Central Link',
    description:
      'An all-hours turf complex along Madani Avenue (100 Feet Road) featuring floodlit cages, parking access, and late-night match availability.',
    phones: ['01898-207864'],
    primaryPhoneDisplay: '01898-207864',
    hasDirectPhone: true,
    socialBooking: 'facebook.com/tsisportscomplex',
    socialBookingUrl: 'https://facebook.com/tsisportscomplex',
    address: 'Baganbari, Madani Avenue (100 Feet Road), Dhaka',
    postalCode: '1212',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['5v5 Cage', '6v6 Cage', '7v7 Dual Pitch'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,200 – 4,200 / hr',
      lateNight: 'BDT 2,800 – 3,500 / hr (24/7 Open)',
    },
    architectureType: 'twin-hub-arena',
    highlights: [
      'Open 24 hours daily along 100 Feet Madani Avenue',
      'On-site parking access and high-intensity floodlit cages',
      'Fast booking via 01898-207864 or Facebook page',
    ],
    bookingTip:
      'Popular for midnight and Suhoor/late-night tournaments along 100 Feet Road; message facebook.com/tsisportscomplex or call 01898-207864.',
  },
  {
    id: 7,
    slug: 'turf-football-ground-tsi-sports',
    name: 'Turf Football Ground (TSI Sports)',
    tagline: 'Dedicated 100 Feet Pitch',
    zoneId: 'badda-madani',
    zoneName: 'Badda & Madani Avenue (100 Feet)',
    corridor: 'East-Central Link',
    description:
      'The dedicated football pitch section of the TSI complex situated at Baganbari in Boro Badda, accommodating small-sided and medium-format team bookings.',
    phones: ['01898-207864'],
    primaryPhoneDisplay: '01898-207864 (Managed via TSI Sports Complex)',
    hasDirectPhone: true,
    socialBooking: 'facebook.com/tsisportscomplex',
    socialBookingUrl: 'https://facebook.com/tsisportscomplex',
    address: '100 Feet Road, Baganbari, Boro Badda, Madani Avenue, Dhaka 1212',
    postalCode: '1212',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['6v6 Small-Sided', '7v7 Medium Format'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,200 – 4,200 / hr',
      lateNight: 'BDT 2,800 – 3,500 / hr (24/7 Open)',
    },
    architectureType: 'twin-hub-arena',
    highlights: [
      'Dedicated football pitch wing inside Baganbari Boro Badda complex',
      '24/7 round-the-clock slot availability',
      'Centralized reservation line via TSI Sports (01898-207864)',
    ],
    bookingTip:
      'When ordering rides or directing teammates, specify Baganbari on 100 Feet Madani Avenue, Dhaka 1212.',
  },

  // ZONE 3: Tejgaon, Motijheel & Central Dhaka (3 Venues)
  {
    id: 8,
    slug: 'turf-nation-tejgaon',
    name: 'Turf Nation',
    tagline: 'Multi-Surface Floodlit Hub (Tejgaon)',
    zoneId: 'tejgaon-central',
    zoneName: 'Tejgaon, Motijheel & Central Dhaka',
    corridor: 'Commercial Core',
    description:
      'Major floodlit football and cricket turf hub in Tejgaon featuring multiple playing surfaces and automated online slot booking. Hourly slots typically range from BDT 2,000 to BDT 4,500 depending on pitch size and peak hours.',
    phones: ['01814-460000'],
    primaryPhoneDisplay: '01814-460000',
    hasDirectPhone: true,
    email: 'info.turfnationbd@gmail.com',
    website: 'turfnationbd.com',
    websiteUrl: 'https://turfnationbd.com',
    address: 'A, 115, 116 Bir Uttam Mir Shawkat Sarak, Tejgaon, Dhaka 1208',
    postalCode: '1208',
    hours: 'Daily: 7:00 AM – 1:00 AM',
    is24Hours: false,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['5v5 / 6v6 Turf', '7v7 / 9v9 Combined Pitch'],
    surfaceSpec: '3G/4G Multi-Surface FIFA-Grade Polyethylene',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,800 / hr',
      primeFloodlit: 'BDT 3,200 – 4,500 / hr',
      lateNight: 'Open until 1:00 AM',
    },
    architectureType: 'floodlit-complex',
    highlights: [
      'Automated online slot booking via turfnationbd.com',
      'Published hourly rates from BDT 2,000 to BDT 4,500',
      'Prime central Tejgaon location on Bir Uttam Mir Shawkat Sarak',
    ],
    bookingTip:
      'Corporate teams in Tejgaon and Gulshan Link Road should book Thursday evening slots online at turfnationbd.com at least 4 days ahead.',
  },
  {
    id: 9,
    slug: 'bff-artificial-turf-motijheel',
    name: 'BFF Artificial Turf',
    tagline: 'Official Federation 11v11 Pitch (Motijheel)',
    zoneId: 'tejgaon-central',
    zoneName: 'Tejgaon, Motijheel & Central Dhaka',
    corridor: 'Commercial Core',
    description:
      'The official Bangladesh Football Federation artificial pitch in Motijheel, geared toward full-sized 11v11 training, club practices, and official daytime fixtures.',
    phones: ['02-9556072'],
    primaryPhoneDisplay: '02-9556072',
    hasDirectPhone: true,
    website: 'bff.com.bd',
    websiteUrl: 'https://bff.com.bd',
    address:
      'BFF House, Mohammedan Sporting Club, Toyenbee Circular Road, Motijheel, Dhaka 1000',
    postalCode: '1000',
    hours: 'Daily: 5:30 AM – 7:00 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: true,
    hasOnlinePortal: true,
    pitchFormats: ['11v11 Official Full Pitch', 'Club & Institutional Fixtures'],
    surfaceSpec: 'FIFA Quality Pro 11v11 Artificial Turf',
    footwearRule: 'AG (Artificial Grass) or TF (Turf) Boots — No Metal Studs',
    estimatedRates: {
      offPeak: 'Institutional / Federation Rate (Inquire at BFF Office)',
      primeFloodlit: 'Daytime Play Only (Closes at 7:00 PM)',
      lateNight: 'Closed after 7:00 PM',
    },
    architectureType: 'full-stadium-11v11',
    highlights: [
      'Official Bangladesh Football Federation full-size 11v11 pitch',
      'Adjacent to BFF House and Mohammedan Sporting Club in Motijheel',
      'Early morning 5:30 AM kickoffs through 7:00 PM',
    ],
    bookingTip:
      'Advance formal clearance via the BFF office (02-9556072) is required for daytime institutional matches as play concludes at 7:00 PM.',
  },
  {
    id: 10,
    slug: 'sky-turf-central-dhaka',
    name: 'Sky Turf',
    tagline: '24-Hour Rooftop & Enclosed Arena',
    zoneId: 'tejgaon-central',
    zoneName: 'Tejgaon, Motijheel & Central Dhaka',
    corridor: 'Commercial Core',
    description:
      'Operates round-the-clock for quick, small-sided rooftop and enclosed turf matches in central Dhaka.',
    phones: ['01766-556206'],
    primaryPhoneDisplay: '01766-556206',
    hasDirectPhone: true,
    address: 'Central Dhaka',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Rooftop Cage', '6v6 Enclosed Futsal'],
    surfaceSpec: 'High-Density Enclosed Rooftop Synthetic Turf',
    footwearRule: 'TF (Turf) Studs or Flat Futsal Trainers',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,200 – 4,000 / hr',
      lateNight: 'BDT 2,600 – 3,400 / hr (24/7 Open)',
    },
    architectureType: 'rooftop-cage',
    highlights: [
      '24-hour rooftop & enclosed small-sided arena in Central Dhaka',
      'Tailored for high-tempo 5v5 and 6v6 futsal sessions',
      'Direct phone reservation line at 01766-556206',
    ],
    bookingTip:
      'Call 01766-556206 directly for late-night and post-midnight rooftop futsal slots in Central Dhaka.',
  },

  // ZONE 4: Dhanmondi, Mohammadpur & Zigatola (4 Venues)
  {
    id: 11,
    slug: 'dacca-turf-zigatola',
    name: 'Dacca Turf',
    tagline: '24-Hour Zigatola / Dhanmondi Arena',
    zoneId: 'dhanmondi-mohammadpur',
    zoneName: 'Dhanmondi, Mohammadpur & Zigatola',
    corridor: 'West-Central Zone',
    description:
      'A round-the-clock artificial turf ground in the Dhanmondi and Zigatola residential corridor, accommodating early-morning fitness games, evening leagues, and midnight football slots.',
    phones: ['01333-370951'],
    primaryPhoneDisplay: '01333-370951',
    hasDirectPhone: true,
    address: '6/4/F, Zigatola / Dhanmondi, Dhaka 1209',
    postalCode: '1209',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Urban Cage', '6v6 Floodlit Arena'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,200 – 4,200 / hr',
      lateNight: 'BDT 2,800 – 3,500 / hr (24/7 Open)',
    },
    architectureType: 'urban-24h-cage',
    highlights: [
      'Round-the-clock 24-hour operation in Zigatola / Dhanmondi (1209)',
      'Direct telephone reservations via 01333-370951',
      'Popular for early-morning fitness games and midnight slots',
    ],
    bookingTip:
      'Dacca Turf accepts direct telephone bookings at 01333-370951; lock in Thursday/Friday night slots early with a 50% bKash deposit.',
  },
  {
    id: 12,
    slug: 'alpha-sports-mohammadpur',
    name: 'ALPHA Sports - Mohammadpur',
    tagline: 'Chandrima Model Town Turf',
    zoneId: 'dhanmondi-mohammadpur',
    zoneName: 'Dhanmondi, Mohammadpur & Zigatola',
    corridor: 'West-Central Zone',
    description:
      'Well-maintained community and competitive turf pitch located inside Chandrima Model Town, serving teams from Mohammadpur, Bosila, and Dhaka Uddan.',
    phones: ['01783-149600'],
    primaryPhoneDisplay: '01783-149600',
    hasDirectPhone: true,
    address:
      'Plot 21, Road 09, Block B, Chandrima Model Town, Dhaka Uddan, Dhaka 1207',
    postalCode: '1207',
    hours: 'Daily: 6:00 AM – 10:30 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['6v6 Turf', '7v7 Competitive Pitch'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or AG Boots',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,500 / hr',
      primeFloodlit: 'BDT 3,000 – 3,800 / hr',
      lateNight: 'Closes at 10:30 PM',
    },
    architectureType: 'floodlit-complex',
    highlights: [
      'Spacious pitch in Chandrima Model Town (Block B, Road 09)',
      'Serves Mohammadpur, Bosila, and Dhaka Uddan football communities',
      'Direct reservation hotline at 01783-149600',
    ],
    bookingTip:
      'Call 01783-149600 for evening floodlit sessions between 6:00 PM and 10:30 PM.',
  },
  {
    id: 13,
    slug: 'mohammadpur-strikers-field',
    name: "Mohammadpur Striker's Field",
    tagline: '24-Hour Iqbal Road Neighborhood Pitch',
    zoneId: 'dhanmondi-mohammadpur',
    zoneName: 'Dhanmondi, Mohammadpur & Zigatola',
    corridor: 'West-Central Zone',
    description:
      'High-demand 24-hour neighborhood turf spot centrally positioned on Iqbal Road, popular with school, college, and local club sides.',
    phones: [],
    primaryPhoneDisplay: 'On-site desk or via Samm Sports app',
    hasDirectPhone: false,
    contactNote:
      'Direct phone unlisted; book on-site at Iqbal Road venue desk or via third-party turf booking apps such as Samm Sports.',
    address: 'Iqbal Road, Mohammadpur, Dhaka 1207',
    postalCode: '1207',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Cage', '6v6 Neighborhood Pitch'],
    surfaceSpec: '3G/4G Synthetic Urban Cage Turf',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,200 – 4,000 / hr',
      lateNight: 'BDT 2,600 – 3,200 / hr (24/7 Open)',
    },
    architectureType: 'urban-24h-cage',
    highlights: [
      'Prime central Iqbal Road location in Mohammadpur (1207)',
      'Operates 24 hours daily for afternoon and midnight matches',
      'Managed on-site at the venue desk or via Samm Sports aggregator',
    ],
    bookingTip:
      'Reserve through the Samm Sports platform or drop by the Iqbal Road desk in person to lock prime evening slots.',
  },
  {
    id: 14,
    slug: 'dhanmondi-club-limited',
    name: 'Dhanmondi Club Limited',
    tagline: 'Daytime Sporting Ground',
    zoneId: 'dhanmondi-mohammadpur',
    zoneName: 'Dhanmondi, Mohammadpur & Zigatola',
    corridor: 'West-Central Zone',
    description:
      'Historic club sporting ground and recreational facility in the heart of Dhanmondi along Mirpur Road, operating strictly during daytime hours.',
    phones: ['01715-180923', '+88029661111'],
    primaryPhoneDisplay: '01715-180923 / +880 2-9661111',
    hasDirectPhone: true,
    address: 'Road No. 8, Mirpur Road, Dhanmondi, Dhaka 1205',
    postalCode: '1205',
    hours: 'Mon, Wed, Sun: 9:00 AM – 5:00 PM; Tue, Thu–Sat: 7:30 AM – 5:30 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: true,
    hasOnlinePortal: false,
    pitchFormats: ['7v7 Daytime Ground', 'Academy & Recreational Sessions'],
    surfaceSpec: 'Daytime Club Sporting Ground Surface',
    footwearRule: 'TF (Turf) Studs or Training Footwear',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,800 / hr (Daytime Only)',
      primeFloodlit: 'Closes at 5:00 PM / 5:30 PM',
      lateNight: 'Closed in Evenings',
    },
    architectureType: 'academy-training',
    highlights: [
      'Historic Dhanmondi Road No. 8 sporting ground along Mirpur Road',
      'Dual contact lines: 01715-180923 and landline +880 2-9661111',
      'Dedicated daytime schedule (closes at 5:00 PM / 5:30 PM)',
    ],
    bookingTip:
      'Strictly for daytime fixtures and morning/afternoon practices; for after-work floodlit play in Dhanmondi, choose Dacca Turf or ALPHA Sports.',
  },

  // ZONE 5: Mirpur & Shewrapara (5 Venues)
  {
    id: 15,
    slug: 'offside-mirpur-kalshi',
    name: 'Offside-Mirpur',
    tagline: 'Kalshi Late-Night Turf Arena',
    zoneId: 'mirpur-shewrapara',
    zoneName: 'Mirpur & Shewrapara',
    corridor: 'North-West Hub',
    description:
      'A well-maintained enclosed turf arena situated inside Article Condominium City on Kalshi Road, operating from early morning until 3:30 AM for night-owl football groups.',
    phones: ['01755-355150'],
    primaryPhoneDisplay: '01755-355150',
    hasDirectPhone: true,
    address: 'Article Condominium City, 1 Kalshi Road, Mirpur, Dhaka 1216',
    postalCode: '1216',
    hours: 'Daily: 6:30 AM – 3:30 AM',
    is24Hours: false,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Enclosed Cage', '6v6 Late-Night Turf'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,200 – 4,000 / hr',
      lateNight: 'BDT 2,600 – 3,400 / hr (Until 3:30 AM)',
    },
    architectureType: 'urban-24h-cage',
    highlights: [
      'Extended late-night floodlit play until 3:30 AM daily',
      'Inside Article Condominium City, 1 Kalshi Road, Mirpur 1216',
      'Direct reservation hotline: 01755-355150',
    ],
    bookingTip:
      'One of North-West Dhaka’s top post-midnight arenas; call 01755-355150 for 11:00 PM to 3:30 AM slots.',
  },
  {
    id: 16,
    slug: 'kick-zone-pallabi',
    name: 'Kick-Zone',
    tagline: 'Pallabi & Eastern Housing Turf',
    zoneId: 'mirpur-shewrapara',
    zoneName: 'Mirpur & Shewrapara',
    corridor: 'North-West Hub',
    description:
      'Caters to players across Pallabi and the Eastern Housing main corridor in Mirpur with high-intensity floodlighting and extended late-night hours until 3:30 AM.',
    phones: ['01973-613818'],
    primaryPhoneDisplay: '01973-613818',
    hasDirectPhone: true,
    address: 'Phase-2, Plot-7, Eastern Housing Main Road, Mirpur, Dhaka 1216',
    postalCode: '1216',
    hours: 'Daily: 6:00 AM – 3:30 AM',
    is24Hours: false,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Turf', '6v6 Floodlit Pitch'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,500 / hr',
      primeFloodlit: 'BDT 3,000 – 3,800 / hr',
      lateNight: 'BDT 2,500 – 3,200 / hr (Until 3:30 AM)',
    },
    architectureType: 'urban-24h-cage',
    highlights: [
      'Open daily from 6:00 AM until 3:30 AM in Pallabi / Eastern Housing',
      'High-intensity LED floodlighting for night matches',
      'Direct phone booking via 01973-613818',
    ],
    bookingTip:
      'If Offside-Mirpur is booked out for late-night slots, Kick-Zone in Pallabi (01973-613818) offers the same 3:30 AM operating window.',
  },
  {
    id: 17,
    slug: 'dbox-sports-complex-mirpur',
    name: 'DBox Sports Complex',
    tagline: 'Multi-Sport Hub with Online Booking',
    zoneId: 'mirpur-shewrapara',
    zoneName: 'Mirpur & Shewrapara',
    corridor: 'North-West Hub',
    description:
      'Popular multi-sport turf venue in Mirpur Block B offering dedicated web portal slot reservations, well-kept synthetic grass, and prime floodlit evening matches.',
    phones: ['01918-979999'],
    primaryPhoneDisplay: '01918-979999',
    hasDirectPhone: true,
    website: 'dboxsports.com',
    websiteUrl: 'https://dboxsports.com',
    address: 'Plot No. 217, Block B, Road No. 3, Mirpur, Dhaka 1216',
    postalCode: '1216',
    hours: 'Daily: 6:00 AM – 12:00 AM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['6v6 Multi-Sport Turf', '7v7 Floodlit Pitch'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,800 / hr',
      primeFloodlit: 'BDT 3,200 – 4,200 / hr',
      lateNight: 'Closes at 12:00 AM Midnight',
    },
    architectureType: 'twin-hub-arena',
    highlights: [
      'Automated web portal booking via dboxsports.com',
      'Part of the Plot 217, Block B, Road 3 Mirpur Twin Hub',
      'Direct phone support at 01918-979999',
    ],
    bookingTip:
      'Shares the Plot 217, Block B, Road 3 address with The Sports Arena—check both venues if prime evening slots fill up.',
  },
  {
    id: 18,
    slug: 'the-sports-arena-mirpur',
    name: 'The Sports Arena',
    tagline: 'Block B Late-Night Futsal Pitch',
    zoneId: 'mirpur-shewrapara',
    zoneName: 'Mirpur & Shewrapara',
    corridor: 'North-West Hub',
    description:
      'Located at the Plot 217 Block B sports zone in Mirpur, providing a reliable alternative pitch that stays open until 3:00 AM for late-night futsal games.',
    phones: ['01970-491731'],
    primaryPhoneDisplay: '01970-491731',
    hasDirectPhone: true,
    address: 'Plot No. 217, Block B, Road No. 3, Mirpur, Dhaka 1216',
    postalCode: '1216',
    hours: 'Daily: 6:00 AM – 3:00 AM',
    is24Hours: false,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Futsal', '6v6 Late-Night Cage'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Flat Futsal Trainers',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,000 – 3,800 / hr',
      lateNight: 'BDT 2,500 – 3,200 / hr (Until 3:00 AM)',
    },
    architectureType: 'twin-hub-arena',
    highlights: [
      'Open until 3:00 AM daily at Plot 217, Block B, Road 3, Mirpur',
      'Twin-hub neighbor to DBox Sports Complex for overflow bookings',
      'Direct reservation hotline at 01970-491731',
    ],
    bookingTip:
      'When DBox Sports Complex closes at midnight, The Sports Arena at the exact same Plot 217 address continues operating until 3:00 AM.',
  },
  {
    id: 19,
    slug: 'altitude-arena-shewrapara',
    name: 'Altitude Arena',
    tagline: 'East Shewrapara Rooftop Turf',
    zoneId: 'mirpur-shewrapara',
    zoneName: 'Mirpur & Shewrapara',
    corridor: 'North-West Hub',
    description:
      'Elevated rooftop football cage conveniently located in East Shewrapara near the Metro corridor, ideal for fast-paced 5-a-side or 6-a-side matches.',
    phones: ['01540-762655'],
    primaryPhoneDisplay: '01540-762655',
    hasDirectPhone: true,
    address:
      '888, Hazi Ashraf Ali Super Market, 1 East Shewrapara, Mirpur, Dhaka 1216',
    postalCode: '1216',
    hours: 'Daily: 7:00 AM – 12:00 AM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Rooftop Cage', '6v6 Fast-Paced Futsal'],
    surfaceSpec: 'Rooftop Enclosed Synthetic Futsal Turf',
    footwearRule: 'TF (Turf) Studs or Flat Futsal Trainers',
    estimatedRates: {
      offPeak: 'BDT 1,800 – 2,400 / hr',
      primeFloodlit: 'BDT 2,800 – 3,600 / hr',
      lateNight: 'Closes at 12:00 AM Midnight',
    },
    architectureType: 'rooftop-cage',
    highlights: [
      'Elevated rooftop cage atop Hazi Ashraf Ali Super Market',
      'Steps away from the East Shewrapara Metro Rail corridor',
      'Direct phone booking via 01540-762655',
    ],
    bookingTip:
      'Easy Metro Rail access makes Altitude Arena ideal for teammates commuting from Uttara, Pallabi, Agargaon, or Farmgate.',
  },

  // ZONE 6: Uttara & Diyabari (3 Venues)
  {
    id: 20,
    slug: 'uttara-sector-4-turf-ground',
    name: 'Uttara Sector 4 Turf Ground',
    tagline: 'Central Sector Neighborhood Pitch',
    zoneId: 'uttara-diyabari',
    zoneName: 'Uttara & Diyabari',
    corridor: 'Northern Hub',
    description:
      'Offers an accessible, centrally located neighborhood artificial pitch for teams and residents across the main sectors of Uttara.',
    phones: ['01711-375161'],
    primaryPhoneDisplay: '01711-375161',
    hasDirectPhone: true,
    address: 'Road 6A, Sector 4, Uttara, Dhaka 1230',
    postalCode: '1230',
    hours: 'Daily: Standard Morning & Floodlit Evening Slots (Call to Confirm)',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Neighborhood Pitch', '6v6 Small-Sided'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,600 / hr',
      primeFloodlit: 'BDT 3,000 – 4,000 / hr',
      lateNight: 'Call 01711-375161 for late slot window',
    },
    architectureType: 'floodlit-complex',
    highlights: [
      'Central Road 6A, Sector 4 location in the heart of Uttara',
      'Quick access from Airport Road and Azampur',
      'Direct telephone booking via 01711-375161',
    ],
    bookingTip:
      'Call 01711-375161 directly to check weekend afternoon and evening availability in Uttara Sector 4.',
  },
  {
    id: 21,
    slug: 'north-arena-uttara',
    name: 'North Arena',
    tagline: 'Daytime Training & Match Facility',
    zoneId: 'uttara-diyabari',
    zoneName: 'Uttara & Diyabari',
    corridor: 'Northern Hub',
    description:
      'Dedicated turf facility in Uttara geared toward daytime matches, school tournaments, and structured football training sessions.',
    phones: ['01996-404873'],
    primaryPhoneDisplay: '01996-404873',
    hasDirectPhone: true,
    address: 'Road 32, Uttara, Dhaka 1230',
    postalCode: '1230',
    hours: 'Daily: 9:00 AM – 5:00 PM',
    is24Hours: false,
    isLateNight: false,
    isDaytimeOnly: true,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 / 6v6 Training', 'School & Youth Tournament Pitch'],
    surfaceSpec: '3G/4G Synthetic Training & Match Turf',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,800 / hr (Daytime Window)',
      primeFloodlit: 'Closes at 5:00 PM',
      lateNight: 'Closed in Evenings',
    },
    architectureType: 'academy-training',
    highlights: [
      'Focused daytime operating window (9:00 AM – 5:00 PM daily)',
      'Tailored for Uttara school tournaments and coaching clinics',
      'Direct phone booking at 01996-404873',
    ],
    bookingTip:
      'Best suited for school fixtures, university day matches, and morning academy blocks in Uttara.',
  },
  {
    id: 22,
    slug: 'galacticos-sports-pavilion-gsp',
    name: 'Galacticos Sports Pavilion - GSP',
    tagline: '24-Hour Diyabari Metro Complex',
    zoneId: 'uttara-diyabari',
    zoneName: 'Uttara & Diyabari',
    corridor: 'Northern Hub',
    description:
      'Expansive 24-hour turf complex in Diyabari, easily reachable right next to Metro Rail Pillar No. 5 with online slot booking support.',
    phones: ['01727-437077'],
    primaryPhoneDisplay: '01727-437077',
    hasDirectPhone: true,
    website: 'galacticosbd.com',
    websiteUrl: 'https://galacticosbd.com',
    address: 'Diyabari Mor, West of Metro Rail Pillar No. 5, Uttara, Dhaka 1230',
    postalCode: '1230',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['6v6 Turf', '7v7 / 9v9 Expansive Complex'],
    surfaceSpec: '4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or AG Artificial Grass Boots',
    estimatedRates: {
      offPeak: 'BDT 2,200 – 2,800 / hr',
      primeFloodlit: 'BDT 3,500 – 4,500 / hr',
      lateNight: 'BDT 2,800 – 3,600 / hr (24/7 Open)',
    },
    architectureType: 'metro-pavilion',
    highlights: [
      'Open 24 hours daily right beside Metro Rail Pillar No. 5 in Diyabari',
      'Online slot booking portal at galacticosbd.com',
      'Expansive pitch geometry supporting larger 7v7 and 9v9 sessions',
    ],
    bookingTip:
      'Reserve online at galacticosbd.com or call 01727-437077; landmark is West of Metro Rail Pillar No. 5 at Diyabari Mor.',
  },

  // ZONE 7: Manikdiya, Mugda & East Dhaka (4 Venues)
  {
    id: 23,
    slug: 'team-ground-sports-arena',
    name: 'Team Ground Sports Arena',
    tagline: 'FIFA-Standard Futsal Pitch',
    zoneId: 'manikdiya-mugda',
    zoneName: 'Manikdiya, Mugda & East Dhaka',
    corridor: 'Eastern Belt',
    description:
      'Features a FIFA-standard futsal artificial pitch in the Manikdiya area with full floodlighting and online booking support.',
    phones: ['01724-039205'],
    primaryPhoneDisplay: '01724-039205',
    hasDirectPhone: true,
    website: 'teamgroundbd.com',
    websiteUrl: 'https://teamgroundbd.com',
    address: 'Motaleb Khan Chattar Road, Manikdiya, Dhaka 1362',
    postalCode: '1362',
    hours: 'Daily: Morning, Prime Floodlit & Late-Night Slots',
    is24Hours: false,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['5v5 FIFA-Standard Futsal', '6v6 Match Pitch'],
    surfaceSpec: 'FIFA-Standard 3G/4G Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Flat Futsal Trainers',
    estimatedRates: {
      offPeak: 'BDT 2,000 – 2,500 / hr',
      primeFloodlit: 'BDT 3,000 – 3,800 / hr',
      lateNight: 'BDT 2,500 – 3,200 / hr',
    },
    architectureType: 'floodlit-complex',
    highlights: [
      'FIFA-standard futsal artificial turf on Motaleb Khan Chattar Road',
      'Dedicated online booking support at teamgroundbd.com',
      'Direct East Dhaka hotline at 01724-039205',
    ],
    bookingTip:
      'Book directly through teamgroundbd.com or call 01724-039205 for Manikdiya evening and late-night games.',
  },
  {
    id: 24,
    slug: 'the-playmakers-arena-manikdiya',
    name: 'The Playmakers Arena',
    tagline: '24-Hour Manikdiya Tournament Ground',
    zoneId: 'manikdiya-mugda',
    zoneName: 'Manikdiya, Mugda & East Dhaka',
    corridor: 'Eastern Belt',
    description:
      'Round-the-clock football turf venue on Manikdiya Road catering to both casual night games and organized local tournaments.',
    phones: ['01788-895556'],
    primaryPhoneDisplay: '01788-895556',
    hasDirectPhone: true,
    socialBooking: 'facebook.com/theplaymakersarena',
    socialBookingUrl: 'https://facebook.com/theplaymakersarena',
    address: 'Manikdiya Road, Dharmikpara, Dhaka',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: true,
    pitchFormats: ['5v5 / 6v6 Turf', '7v7 Tournament Ground'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 1,800 – 2,400 / hr',
      primeFloodlit: 'BDT 2,800 – 3,600 / hr',
      lateNight: 'BDT 2,400 – 3,000 / hr (24/7 Open)',
    },
    architectureType: 'urban-24h-cage',
    highlights: [
      'Open 24 hours daily along Manikdiya Road, Dharmikpara',
      'Hosts regular East Dhaka night tournaments and casual games',
      'Reservations via 01788-895556 or facebook.com/theplaymakersarena',
    ],
    bookingTip:
      'Reach out on Facebook or dial 01788-895556 to reserve weekend tournament blocks along the Manikdiya corridor.',
  },
  {
    id: 25,
    slug: '90-minutes-sports-arena',
    name: '90 minutes sports arena',
    tagline: '24-Hour Dharmikpara Pitch',
    zoneId: 'manikdiya-mugda',
    zoneName: 'Manikdiya, Mugda & East Dhaka',
    corridor: 'Eastern Belt',
    description:
      'Provides an additional round-the-clock floodlit turf option along the active Manikdiya and Dharmikpara football corridor.',
    phones: ['01897-710828'],
    primaryPhoneDisplay: '01897-710828',
    hasDirectPhone: true,
    address: 'Manikdiya Road, Dharmikpara, Dhaka 1360',
    postalCode: '1360',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Cage', '6v6 Floodlit Turf'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 1,800 – 2,400 / hr',
      primeFloodlit: 'BDT 2,800 – 3,600 / hr',
      lateNight: 'BDT 2,400 – 3,000 / hr (24/7 Open)',
    },
    architectureType: 'urban-24h-cage',
    highlights: [
      '24-hour floodlit turf operation in Dharmikpara (Dhaka 1360)',
      'Located right along the Manikdiya football corridor',
      'Direct phone booking via 01897-710828',
    ],
    bookingTip:
      'Paired with Team Ground and The Playmakers Arena, 90 minutes sports arena ensures 24/7 slot availability on Manikdiya Road.',
  },
  {
    id: 26,
    slug: 'active-ground-mugda',
    name: 'Active Ground',
    tagline: '24-Hour Mugda & Basabo Turf',
    zoneId: 'manikdiya-mugda',
    zoneName: 'Manikdiya, Mugda & East Dhaka',
    corridor: 'Eastern Belt',
    description:
      'Dedicated 24-hour artificial turf pitch serving football groups across the Mugda, Basabo, and Khilgaon neighborhoods.',
    phones: ['01352-287234'],
    primaryPhoneDisplay: '01352-287234',
    hasDirectPhone: true,
    address: 'Hafiz Uddin Master Road, Mugda, Dhaka 1214',
    postalCode: '1214',
    hours: 'Open 24 hours daily',
    is24Hours: true,
    isLateNight: true,
    isDaytimeOnly: false,
    hasOnlinePortal: false,
    pitchFormats: ['5v5 Turf', '6v6 Neighborhood Arena'],
    surfaceSpec: '3G/4G FIFA-Grade Polyethylene + Rubber Infill',
    footwearRule: 'TF (Turf) Studs or Indoor Flats',
    estimatedRates: {
      offPeak: 'BDT 1,800 – 2,400 / hr',
      primeFloodlit: 'BDT 2,800 – 3,600 / hr',
      lateNight: 'BDT 2,400 – 3,000 / hr (24/7 Open)',
    },
    architectureType: 'urban-24h-cage',
    highlights: [
      'Dedicated 24/7 artificial turf on Hafiz Uddin Master Road, Mugda',
      'Serves players from Mugda, Basabo, and Khilgaon (Dhaka 1214)',
      'Direct phone hotline at 01352-287234',
    ],
    bookingTip:
      'Call 01352-287234 directly for prime evening and late-night matches serving Mugda, Basabo, and Khilgaon.',
  },
];

export interface QuickDialRow {
  venueName: string;
  slug: string;
  zoneLabel: string;
  directPhone: string;
  portalLabel: string;
  portalUrl?: string;
  operatingWindow: string;
}

export const QUICK_DIAL_MATRIX: QuickDialRow[] = [
  {
    venueName: 'NDE Sports Facility',
    slug: 'nde-sports-facility',
    zoneLabel: 'Bashundhara R/A',
    directPhone: '01701-205310',
    portalLabel: 'ndesports.com',
    portalUrl: 'https://ndesports.com',
    operatingWindow: '8:30 AM – 10:00 PM',
  },
  {
    venueName: 'JAFF Arena & Academy',
    slug: 'jaff-arena-and-academy',
    zoneLabel: 'Bashundhara Gate',
    directPhone: '01920-297556',
    portalLabel: 'jaff.com.bd',
    portalUrl: 'https://jaff.com.bd',
    operatingWindow: '6:30 AM – 11:00 PM',
  },
  {
    venueName: 'ABG Sports City',
    slug: 'abg-sports-city',
    zoneLabel: 'Bashundhara Blk N',
    directPhone: '01969-900666',
    portalLabel: 'bsc-bd.com',
    portalUrl: 'https://bsc-bd.com',
    operatingWindow: '8:00 AM – 11:00 PM',
  },
  {
    venueName: 'TSI SPORTS COMPLEX',
    slug: 'tsi-sports-complex',
    zoneLabel: 'Madani Ave (100 Ft)',
    directPhone: '01898-207864',
    portalLabel: 'fb.com/tsisportscomplex',
    portalUrl: 'https://facebook.com/tsisportscomplex',
    operatingWindow: 'Open 24 Hours',
  },
  {
    venueName: 'Turf Nation',
    slug: 'turf-nation-tejgaon',
    zoneLabel: 'Tejgaon',
    directPhone: '01814-460000',
    portalLabel: 'turfnationbd.com',
    portalUrl: 'https://turfnationbd.com',
    operatingWindow: '7:00 AM – 1:00 AM',
  },
  {
    venueName: 'BFF Artificial Turf',
    slug: 'bff-artificial-turf-motijheel',
    zoneLabel: 'Motijheel',
    directPhone: '02-9556072',
    portalLabel: 'bff.com.bd',
    portalUrl: 'https://bff.com.bd',
    operatingWindow: '5:30 AM – 7:00 PM',
  },
  {
    venueName: 'Dacca Turf / Sky Turf',
    slug: 'dacca-turf-zigatola',
    zoneLabel: 'Zigatola / Central',
    directPhone: '01333-370951',
    portalLabel: '01766-556206 (Sky Turf)',
    operatingWindow: 'Open 24 Hours',
  },
  {
    venueName: 'DBox Sports Complex',
    slug: 'dbox-sports-complex-mirpur',
    zoneLabel: 'Mirpur Block B',
    directPhone: '01918-979999',
    portalLabel: 'dboxsports.com',
    portalUrl: 'https://dboxsports.com',
    operatingWindow: '6:00 AM – 12:00 AM',
  },
  {
    venueName: 'Offside / Kick-Zone',
    slug: 'offside-mirpur-kalshi',
    zoneLabel: 'Kalshi / Pallabi',
    directPhone: '01755-355150',
    portalLabel: '01973-613818 (Kick-Zone)',
    operatingWindow: 'Until 3:30 AM Daily',
  },
  {
    venueName: 'Galacticos Pavilion (GSP)',
    slug: 'galacticos-sports-pavilion-gsp',
    zoneLabel: 'Uttara Diyabari',
    directPhone: '01727-437077',
    portalLabel: 'galacticosbd.com',
    portalUrl: 'https://galacticosbd.com',
    operatingWindow: 'Open 24 Hours',
  },
];

export const MATCH_PREPARATION_GUIDE = [
  {
    index: '01',
    title: 'Selecting the Right Pitch Format',
    body: 'Rooftop and compact urban cages (such as Altitude Arena in Shewrapara, Sky Turf, and Sports Grill) are tailored for high-tempo 5v5 and 6v6 futsal, while expansive complexes (ABG Sports City, NDE Sports Facility, Turf Nation, Galacticos GSP, and BFF Artificial Turf) support larger 7v7, 9v9, or full 11v11 sessions.',
  },
  {
    index: '02',
    title: 'Advance Slot Reservations & 50% Deposit',
    body: 'Prime floodlit slots on Thursday, Friday, and Saturday evenings (6:00 PM – 11:00 PM) typically book out 3 to 5 days in advance. Most Dhaka arenas require a 50% advance deposit via bKash, Nagad, or web checkout to lock in a confirmed slot.',
  },
  {
    index: '03',
    title: 'Round-the-Clock & Midnight Options',
    body: "Eleven venues across the city operate 24 hours or past 3:00 AM—including TSI Sports Complex, Sky Turf, Dacca Turf, Mohammadpur Striker's Field, Galacticos GSP, The Playmakers Arena, 90 minutes sports arena, Active Ground, Offside-Mirpur, Kick-Zone, and The Sports Arena.",
  },
  {
    index: '04',
    title: 'Footwear & Surface Care Rules',
    body: 'Metal studs are strictly prohibited on Dhaka synthetic turfs. Players should wear multi-studded rubber turf shoes (TF), artificial grass boots (AG), or flat futsal trainers to protect knee joints and 3G/4G polyethylene synthetic infill.',
  },
];

export function getTurfBySlug(slug: string): TurfVenue | undefined {
  return TURF_VENUES.find((t) => t.slug === slug);
}

export function getTurfsByZone(zoneId: ZoneId): TurfVenue[] {
  return TURF_VENUES.filter((t) => t.zoneId === zoneId);
}

export function getZoneById(zoneId: ZoneId): ZoneInfo | undefined {
  return DHAKA_ZONES.find((z) => z.id === zoneId);
}
