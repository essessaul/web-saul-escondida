# Playa Escondida Vacation Homes — Clean Production Version

This is the fully cleaned production version with better structure and cleaner routes.

## Included
- Vacation Rentals section
- For Sale section
- Owner Services section
- Sales CRM page
- Owner revenue dashboard page
- WhatsApp booking automation page
- Clickable cards that open detail pages
- Dedicated calendar on rental and sale detail pages
- Booking draft flow
- Admin dashboard
- Branded logo integration
- Supabase scaffold
- Stripe scaffold
- SQL schema

## Run on Mac
```bash
npm install
npm run dev
```

Then open:
```bash
http://localhost:5173
```

## Deploy
Build command:
```bash
npm run build
```

Output directory:
```bash
dist
```

## Environment
Copy `.env.example` to `.env` and add:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY
- VITE_STRIPE_PUBLISHABLE_KEY


## Design updates in this version
- No navy theme
- Homepage focused on Vacation Rentals with search
- Only visible top tabs: Vacation Rentals, Sales, Admin Login
- Cartoon area prepared on the homepage


## Added in this version
- Homepage search by date and guest count
- Listings page filters by date availability and guests
- VIP Listings and Other Listings sections on the homepage
- Widescreen centered beach billboard-style section in the middle of the homepage

## Asset note
- I kept your logo in place.
- The exact previous billboard image and the actual cartoon file were not available as separate image assets in the files I could access here, so:
  - the billboard was rebuilt as a widescreen beach showcase section
  - the cartoon area remains a prepared placeholder until you upload the actual cartoon image


## Style adjustment in this version
- homepage restyled to match your provided reference more closely
- same warm beach palette direction
- stronger orange accents
- dark blue typography
- beach image presentation on homepage
- homepage search uses check-in, check-out, and guests
- homepage includes VIP listings and other listings

## Reference asset note
- I used your provided reference image as the homepage visual direction and hero background source.
- If you want the exact cutout of you from that image separated and placed independently, upload a transparent PNG of you or I can prepare an edited image version next.


## Luxury polish update
- refined spacing and typography
- upgraded card styling and shadows
- improved hero, listings, and section headings
- more premium orange gradient buttons
- cleaner listing cards with VIP badges


Hero image updated to Playa Escondida aerial beach photo.


## Premium hero upgrade
- improved hero crop behavior for widescreen composition
- stronger gradient overlay for better text readability
- animated homepage search entrance
- VIP listings upgraded into a horizontal featured carousel

Search updated: destination/property field is optional; users can search using only dates and guest count.


Date range selection updated: the same check-in / check-out behavior is now used consistently across homepage search, listings filters, booking, and listing pages. Listing calendars now let users select a start date and an end date directly.


## Mascot integration
- added Saul Playa mascot asset to the platform
- large mascot presentation on homepage
- medium mascot cards across internal pages
- small floating mascot visible sitewide


Added in this version: more rental listings, full STR-style summary info on cards and detail pages, improved date range selection consistency, and cleaner mascot placement.


Booking cost calculator added: calendars now select a start date on first click and an end date on second click, highlight the full range, calculate nights and total rate, and support optional items like insurance and cleaning fee that only appear when selected.
