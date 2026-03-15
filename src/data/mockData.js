export const rentalListings = [
  {
    id:"PEVH-101",
    slug:"ocean-view-condo-101",
    name:"Ocean View Condo 101",
    category:"Condo",
    vip:false,
    location:"Playa Escondida Resort & Marina",
    rate:235,
    cleaning_fee:85,
    bedrooms:2,
    bathrooms:2,
    guests:6,
    sqm:118,
    sqft:1270,
    rating:4.9,
    status:"Available",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    amenities:["Pool access","Fast Wi‑Fi","Full kitchen","Private balcony","Parking"],
    description:"Bright beachfront residence with resort access, ideal for weekend escapes and mid-length stays.",
    blockedRanges:[["2026-03-20","2026-03-24"],["2026-04-04","2026-04-08"]]
  },
  {
    id:"PEVH-204",
    slug:"beach-tower-suite-204",
    name:"Beach Tower Suite 204",
    category:"Suite",
    vip:true,
    location:"Playa Escondida Resort & Marina",
    rate:310,
    cleaning_fee:95,
    bedrooms:3,
    bathrooms:3,
    guests:8,
    sqm:168,
    sqft:1808,
    rating:4.8,
    status:"Available",
    image:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    amenities:["Oceanfront terrace","Smart TV","Washer/Dryer","Resort pool","Concierge-ready"],
    description:"Spacious premium suite with generous social areas, ideal for families and executive stays.",
    blockedRanges:[["2026-03-17","2026-03-22"],["2026-04-11","2026-04-16"]]
  },
  {
    id:"PEVH-PH3",
    slug:"marina-penthouse-ph-3",
    name:"Marina Penthouse PH-3",
    category:"Penthouse",
    vip:true,
    location:"Playa Escondida Resort & Marina",
    rate:590,
    cleaning_fee:120,
    bedrooms:4,
    bathrooms:4,
    guests:10,
    sqm:286,
    sqft:3078,
    rating:5.0,
    status:"Limited Availability",
    image:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    amenities:["Private terrace","Premium kitchen","VIP arrival","Large social area","Marina views"],
    description:"Top-tier penthouse with panoramic views, premium finishes, and a high-end guest experience.",
    blockedRanges:[["2026-03-15","2026-03-28"],["2026-04-18","2026-04-25"]]
  },
  {
    id:"PEVH-308",
    slug:"family-beach-suite-308",
    name:"Family Beach Suite 308",
    category:"Family Suite",
    vip:false,
    location:"Playa Escondida Resort & Marina",
    rate:275,
    cleaning_fee:90,
    bedrooms:3,
    bathrooms:2,
    guests:7,
    sqm:152,
    sqft:1636,
    rating:4.7,
    status:"Available",
    image:"https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    amenities:["Beach access","Dining table","Fast Wi‑Fi","Resort entry","Parking"],
    description:"Comfortable family-oriented suite with practical layout and resort-side convenience.",
    blockedRanges:[["2026-04-01","2026-04-05"],["2026-04-20","2026-04-23"]]
  },
  {
    id:"PEVH-412",
    slug:"sunset-terrace-412",
    name:"Sunset Terrace 412",
    category:"Terrace Apartment",
    vip:false,
    location:"Playa Escondida Resort & Marina",
    rate:330,
    cleaning_fee:95,
    bedrooms:2,
    bathrooms:2,
    guests:5,
    sqm:132,
    sqft:1420,
    rating:4.8,
    status:"Available",
    image:"https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    amenities:["Large terrace","Sunset views","Kitchen","Pool access","Washer"],
    description:"Elegant short-term rental with a large terrace and beautiful sunset-facing orientation.",
    blockedRanges:[["2026-03-26","2026-03-30"],["2026-04-10","2026-04-13"]]
  },
  {
    id:"PEVH-119",
    slug:"studio-del-mar-119",
    name:"Studio del Mar 119",
    category:"Studio",
    vip:false,
    location:"Playa Escondida Resort & Marina",
    rate:185,
    cleaning_fee:70,
    bedrooms:1,
    bathrooms:1,
    guests:2,
    sqm:62,
    sqft:667,
    rating:4.6,
    status:"Available",
    image:"https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    amenities:["Compact kitchen","Wi‑Fi","Walk to beach","Queen bed","Coffee station"],
    description:"Smart and efficient studio for couples or solo travelers wanting a beachfront base.",
    blockedRanges:[["2026-03-19","2026-03-21"],["2026-04-14","2026-04-16"]]
  }
];

export const saleListings = [
  {
    slug:"unit-ap-801",
    id:"SALE-AP801",
    name:"Unit AP-801",
    category:"Beachfront Apartment",
    price:"$450,000",
    location:"Playa Escondida Resort & Marina",
    image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:"Premium beachfront unit with strong lifestyle appeal and attractive long-term value.",
    details:"Excellent option for buyers seeking beachfront ownership, lifestyle use, and future appreciation within Playa Escondida."
  },
  {
    slug:"villa-12",
    id:"SALE-VILLA12",
    name:"Villa 12",
    category:"Luxury Villa",
    price:"$895,000",
    location:"Playa Escondida Resort & Marina",
    image:"https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    description:"Spacious villa concept for buyers seeking ownership, privacy, and resort access.",
    details:"Large-format villa opportunity designed for high-end family use, entertaining, and longer-stay ownership."
  }
];

export const reservations = [
  { guest:"M. Gonzalez", property:"Ocean View Condo 101", dates:"Mar 15 – Mar 19", source:"Airbnb", total:"$940", status:"Confirmed" },
  { guest:"A. Levy", property:"Beach Tower Suite 204", dates:"Mar 18 – Mar 24", source:"Direct", total:"$1,860", status:"Paid" }
];

export const ownerStats = [
  { label:"Gross Revenue", value:"$42,860" },
  { label:"Occupancy", value:"74%" },
  { label:"Owner Payouts", value:"$26,300" },
  { label:"Open Tasks", value:"8" }
];

export const salesLeads = [
  { name:"Carlos Méndez", interest:"Unit AP-801", source:"Website", budget:"$450k", status:"New" },
  { name:"Ana Levy", interest:"Villa 12", source:"WhatsApp", budget:"$900k", status:"Follow Up" },
  { name:"David Cohen", interest:"PH-3", source:"Referral", budget:"$1.2M", status:"Visit Scheduled" }
];
