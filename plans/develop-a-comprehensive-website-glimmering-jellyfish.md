# GAF Roofing Website — Implementation Plan

## Context
Build a comprehensive multi-page React SPA replicating the structure, navigation hierarchy, and design language of gaf.com — North America's largest roofing manufacturer. The deliverable is a fully navigable website with realistic placeholder content across all major pages.

**Environment notes:**
- react-router v7 already installed (import from `react-router`, not `react-router-dom`)
- Full shadcn/ui library already exists at `src/components/ui/`
- `@radix-ui/react-navigation-menu` available for mega-menu
- Tailwind v4 with `@theme inline` token syntax

---

## Design Tokens (`src/styles/theme.css`)

Remap existing token variables to the GAF palette. Do not add new token names — only update values:

```css
:root {
  --background:           oklch(100% 0 0);          /* white */
  --foreground:           oklch(15% 0 0);            /* near-black #1A1A1A */
  --primary:              oklch(40% 0.22 27);        /* GAF red ~#CC0000 */
  --primary-foreground:   oklch(100% 0 0);
  --secondary:            oklch(96% 0 0);            /* light gray #F2F2F2 */
  --secondary-foreground: oklch(15% 0 0);
  --muted:                oklch(94% 0 0);
  --muted-foreground:     oklch(45% 0 0);            /* mid gray */
  --accent:               oklch(40% 0.22 27);        /* same red */
  --accent-foreground:    oklch(100% 0 0);
  --card:                 oklch(100% 0 0);
  --card-foreground:      oklch(15% 0 0);
  --border:               oklch(88% 0 0);
  --radius:               0.25rem;                   /* GAF uses tight corners */
}
```

Also add CSS custom props outside the token contract for repeated use:
```css
:root {
  --gaf-red:        #CC0000;
  --gaf-red-dark:   #A30000;
  --gaf-near-black: #1A1A1A;
  --gaf-gold:       #C8973A;    /* Master Elite badge accent */
}
```

---

## Fonts (`src/styles/fonts.css`)

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
```

In `theme.css` `@layer base`: set `font-family: 'Inter', system-ui, sans-serif` on `body`; set `font-family: 'Roboto Slab', Georgia, serif` on all heading elements.

---

## File Structure

```
src/app/
  App.tsx                          ← router + RouterProvider
  data/
    navigation.ts                  ← NAV_ITEMS driving Header + MobileNav
    products.ts                    ← RESIDENTIAL_PRODUCTS, COMMERCIAL_PRODUCTS
    contractors.ts                 ← CONTRACTORS mock data (12 records)
    articles.ts                    ← ARTICLES mock data (18 records)
  components/
    layout/
      PageLayout.tsx               ← Header + <Outlet> + Footer
      Header.tsx                   ← sticky two-row header with mega-menu
      Footer.tsx                   ← dark 5-column footer
      MobileNav.tsx                ← Sheet + Accordion mobile nav
    shared/
      HeroBanner.tsx               ← full-width hero, props: title/subtitle/ctas/height
      ProductCard.tsx              ← image gradient + name + warranty badge + CTA
      CTABanner.tsx                ← full-width red or dark CTA strip
      StatBar.tsx                  ← row of 4 large numeric stats
      ArticleCard.tsx              ← category badge + title + excerpt + date
      ContractorCard.tsx           ← name + cert badge + phone + "Get a Quote"
      FilterBar.tsx                ← product filter row (tabs + checkboxes)
      SearchBar.tsx                ← ZIP input + button, calls onSearch callback
      SectionHeading.tsx           ← eyebrow + h2 + optional subtext
  pages/
    HomePage.tsx
    residential/
      ResidentialProductsPage.tsx
      ProductDetailPage.tsx
    commercial/
      CommercialProductsPage.tsx
    homeowners/
      FindContractorPage.tsx
      DesignYourRoofPage.tsx
      LearnAboutRoofingPage.tsx
      WarrantyPage.tsx
    contractors/
      ContractorProgramPage.tsx
      TrainingPage.tsx
      ContractorResourcesPage.tsx
    resources/
      LearningCenterPage.tsx
      ArticleDetailPage.tsx
    about/
      AboutPage.tsx
      SustainabilityPage.tsx
      NewsPage.tsx
      CareersPage.tsx
```

---

## Routing (`App.tsx`)

Use `createBrowserRouter` + `RouterProvider`. All page routes nested under `PageLayout` (which renders Header, `<Outlet />`, Footer):

| Path | Component |
|------|-----------|
| `/` | HomePage |
| `/products/residential` | ResidentialProductsPage |
| `/products/residential/:slug` | ProductDetailPage |
| `/products/commercial` | CommercialProductsPage |
| `/homeowners/find-a-contractor` | FindContractorPage |
| `/homeowners/design-your-roof` | DesignYourRoofPage |
| `/homeowners/learn` | LearnAboutRoofingPage |
| `/homeowners/warranty` | WarrantyPage |
| `/contractors` | ContractorProgramPage |
| `/contractors/training` | TrainingPage |
| `/contractors/resources` | ContractorResourcesPage |
| `/resources` | LearningCenterPage |
| `/resources/:slug` | ArticleDetailPage |
| `/about` | AboutPage |
| `/about/sustainability` | SustainabilityPage |
| `/about/news` | NewsPage |
| `/about/careers` | CareersPage |

---

## Navigation Data (`data/navigation.ts`)

Export `NAV_ITEMS` — array of top-level items, each with `label`, optional `href`, and optional `megaMenu: { heading, links: {label, href}[] }[]`. Used by both desktop Header and mobile Sheet nav.

Top-level items: **Products**, **For Homeowners**, **For Contractors**, **Resources**, **About GAF**

---

## Header (`components/layout/Header.tsx`)

Two rows, sticky (`position: sticky; top: 0; z-index: 50`):

1. **Utility bar** — dark background, white text, small font: phone number left, "Find a Contractor" + "Login" links right. Hidden on mobile (`hidden md:flex`).
2. **Main nav bar** — white background with bottom border: GAF logo (SVG wordmark) left, `@radix-ui/react-navigation-menu` items center, red "Get a Free Estimate" button right, hamburger (Sheet trigger) visible only on mobile.

Mega-menu panels: `NavigationMenu.Content` rendered as full-width absolute panel below the nav bar. White background, shadow, CSS grid columns matching the megaMenu data. Animate with `motion.div` (opacity + translateY).

---

## Footer (`components/layout/Footer.tsx`)

Dark background (`bg-[var(--gaf-near-black)]`), white text. 5-column grid (1→3→5 cols responsive):

1. Logo + tagline + social icons (lucide-react: Twitter, Facebook, Linkedin, Youtube, Instagram)
2. Products links
3. For Homeowners links
4. For Contractors links
5. Company / About links

Bottom bar: copyright, Privacy Policy, Terms of Use. Red hover on all links (`hover:text-[var(--gaf-red)]`).

---

## Page Sections

### HomePage
1. **Hero** — full-viewport, dark overlay gradient, "America's #1 Roofing Brand" headline, two CTAs (red "Find a Contractor", white outline "Explore Products"), motion stagger on text
2. **ProductHighlights** — 3 ProductCards for Timberline HDZ, Timberline CS, Royal Sovereign
3. **StatBar** — red background strip: "130+ Years", "3,000+ Master Elite Contractors", "50M Squares Annually", "#1 Manufacturer"
4. **ContractorFinder CTA** — split layout: left dark with ZIP SearchBar, right red angled panel
5. **FeaturedProducts** — Tabs (Residential | Commercial), 4-card grid per tab
6. **Testimonials** — light gray bg, 3 TestimonialCards with star ratings
7. **NewsSection** — 3 ArticleCards, "From the GAF Blog" heading
8. **TrustBar** — "Featured in" strip with text badges

### ResidentialProductsPage
1. Short hero (40vh), breadcrumb
2. FilterBar — Style tabs (3-tab + All), Fire/Wind Rating checkboxes
3. ProductGrid — 12 products: Timberline HDZ, Timberline CS, Timberline UHDZ, Royal Sovereign, Marquis WeatherMax, Woodland, Camelot II, Grand Sequoia, Grand Canyon, Country Mansion, Slateline, Nassau
4. CTABanner — "Use our Roof Design Tool"

### CommercialProductsPage
1. Hero, 4-tab category layout (TPO | EPDM | Modified Bitumen | Built-Up), advantages section, CTABanner

### FindContractorPage
1. Hero, ZIP+radius SearchBar (`useState`), results grid (ContractorCard ×8-12), Master Elite info section

### DesignYourRoofPage
1. Hero, house silhouette image area + color swatch picker (useState for selectedColor, simulates roof tint via CSS filter/opacity overlay), product line selector, Save/Share buttons with sonner toast

### WarrantyPage
1. Hero, 3-tier warranty cards (System Plus, Silver Pledge, Golden Pledge), registration form (shadcn Form), FAQ Accordion (10 items)

### ContractorProgramPage
1. Hero, 3 program tier cards (Certified / Factory-Certified / Master Elite), benefits icon grid (6), contractor testimonials, application CTABanner

### LearningCenterPage
1. Hero with search input, category Tabs, 3-col ArticleCard grid (18 articles), Pagination

### AboutPage
1. Hero, mission/vision split, vertical timeline (8 milestones 1886→present), leadership 4-col grid, awards strip

### SustainabilityPage
1. Hero with green tint, 3 pillars (Climate / Communities / Circularity), metrics with large callout numbers, program cards (Timberline Solar, Cool Roof, Recycling), report download CTA

### Remaining pages (lighter weight):
- **NewsPage** — article grid + featured story
- **CareersPage** — open roles table + culture section
- **TrainingPage** — course catalog cards + enrollment CTA
- **ContractorResourcesPage** — document download grid + links
- **LearnAboutRoofingPage** — educational article grid
- **ArticleDetailPage** — single article layout with sidebar

---

## Implementation Order

1. `theme.css` + `fonts.css` (tokens + fonts)
2. `data/` files (navigation, products, contractors, articles)
3. Shared components (HeroBanner, ProductCard, CTABanner, StatBar, SectionHeading, ArticleCard, ContractorCard, SearchBar, FilterBar)
4. `PageLayout.tsx` (shell with Header/Footer stubs, Outlet)
5. `App.tsx` with all routes
6. `Footer.tsx` (complete)
7. `Header.tsx` + `MobileNav.tsx` (mega-menu, mobile sheet)
8. `HomePage.tsx` (all 8 sections)
9. `ResidentialProductsPage.tsx`
10. `FindContractorPage.tsx`
11. `CommercialProductsPage.tsx`
12. `ContractorProgramPage.tsx`
13. `LearningCenterPage.tsx`
14. `AboutPage.tsx`
15. Remaining pages in bulk: WarrantyPage, DesignYourRoofPage, SustainabilityPage, ProductDetailPage, NewsPage, CareersPage, TrainingPage, ContractorResourcesPage, LearnAboutRoofingPage, ArticleDetailPage

---

## Verification

1. Run dev server (`npm run dev`) and navigate to each route via the mega-menu
2. Verify mega-menu opens/closes correctly on desktop, hamburger works on mobile
3. Verify all 18 routes render without errors
4. Test FindContractorPage ZIP search state (submit triggers result display)
5. Test DesignYourRoofPage swatch selection updates visual
6. Confirm Tailwind token classes compile (`bg-primary`, `text-foreground`, `border-border`)
7. Check responsive layout at 375px, 768px, 1280px viewports
