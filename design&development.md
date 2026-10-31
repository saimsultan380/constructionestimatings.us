# MASTER PROMPT — Construction Estimatings Homepage

> Paste or attach this file to Cursor. Read it fully before writing any code. Build the homepage section by section, in the order given in Part 8. Do not skip the rules in Part 1 and Part 2.

---

## 0. Role and Goal

You are a senior front-end engineer and UI designer who has shipped US service-business websites (contractors, B2B services, professional services). You are building the **homepage** of **Construction Estimatings**, a nationwide construction estimating company in the USA.

**Business in one line:** Contractors upload their plans (PDF, DWG, images) and get a bid-ready takeoff and construction estimate in 24 to 48 hours. Free quote before work starts.

**Primary goal of the site:** get visitors to **Upload Plans** or **Get a Free Quote**. Every section supports that one action.

**Audience:** general contractors, subcontractors, home builders, developers, architects, engineers, owners in the USA. They are busy, working against bid deadlines, and judge a company in about five seconds. The site must feel precise, trustworthy, and fast.

**Deliverable:** a production-quality, fully responsive, accessible homepage. Only the homepage for now. More pages will be added later, so build a clean layout, header, footer, and design system that new pages can reuse.

---

## 1. Non-Negotiables (hard rules)

These five rules override everything else. Check every section against them before moving on.

1. **No AI-looking website.** It must look like a custom design made by a human designer for a construction industry business. See Part 2.5 for what "AI look" means here.
2. **No gradients, anywhere.** No gradient backgrounds, buttons, text, borders, overlays, or shadows that read as gradients. Use **flat solid colors only**. Tints are solid hex values (given in Part 3), not gradient fades. No image overlays that fade from dark to transparent.
3. **No AI icons.** No sparkles, magic wands, robots, brains, chips, glowing orbs, "AI" badges, or generic Lucide/Heroicons filler dropped on every card. Icons are only used where they carry meaning, from **one single consistent icon set**, and construction-relevant ones are preferred (see Part 6).
4. **No random images.** Every image has a specific slot, a specific subject, and a reason to be there (see the Image Slot Map in Part 7). If the real photo is not available yet, render a clearly labeled neutral placeholder. **Never fill a slot with an unrelated stock photo.**
5. **No dark theme.** The site is light only. Do not add a dark mode toggle, `prefers-color-scheme: dark` styles, or full-width dark sections. `#303030` is used for **text, thin lines, and small solid accents only**.

If any instruction below seems to conflict with these five rules, the five rules win.

---

## 2. Design Direction

### 2.1 Overall feel

Clean, clear, engineered, and credible. Think of a well-made US professional services website: strong grid, generous white space, confident typography, real photography, and diagrams that explain the service. The page should be **understandable from the visuals alone**, even before a visitor reads the text.

### 2.2 Visual language: "the plan sheet"

The service is about drawings and measurements, so the graphic language comes from construction documents:

- Thin dimension lines with end ticks, used as small section dividers and eyebrow decorations
- Corner crop marks on image frames (small L-shaped marks in the corners)
- A very light blueprint grid pattern (1px lines, `#E3EBF4` on white, flat, low contrast) used only behind the hero graphic and one or two other panels
- Color-coded markup overlays on plan images (blue for counted items, yellow for flagged items), because the deliverable literally includes "marked-up plans: color-coded to show what was counted"
- Sheet-style numbering (01, 02, 03) on lists

Use this language **consistently but sparingly**. It is a seasoning, not a theme park. Do not put dimension lines on every element.

### 2.3 Layout variety (important)

The client does not want one card layout repeated down the page. **Each major section has its own purpose-built layout**, specified in Part 8. Do not default to "three icon cards in a row" or "centered heading + grid of identical cards". Adjacent sections must not share the same layout pattern.

### 2.4 Graphical representation

The client wants visitors to understand the business through graphics. Use:

- Real construction and plan-review photography (Part 7)
- Custom inline SVG diagrams that explain concepts (Part 6.2)
- A real US map for coverage
- A mocked estimate document and marked-up plan sheet as UI graphics
- A stage timeline and a process flow

Every section should have **at least one visual that explains or proves something**, not just decoration.

### 2.5 What "AI look" means (avoid all of these)

- Purple/indigo/neon accents, glowing blobs, mesh backgrounds, glassmorphism, frosted cards
- Everything centered, everything in rounded-3xl cards, everything with a soft drop shadow
- A hero with a floating 3D blob or abstract shapes
- Sparkle icons, emoji, "✨", gradient text, animated gradient borders
- Identical icon + heading + two-line-text cards repeated across sections
- Vague stock imagery (handshakes, glowing globes, random laptops)
- Excessive micro-animations, parallax, cursor effects, marquee overload
- Generic filler copy. Use the provided content file only.

Instead: left-aligned text, a strict 8px grid, small border radius (4 to 8px), 1px hairline borders, flat color blocks, tabular numerals, real photos, and diagrams.

---

## 3. Design Tokens

The client's palette (from Color Hunt). It may change later, so **define every color as a CSS variable / Tailwind theme token** and never hard-code hex values in components.

| Token                    | Hex       | Usage                                                                                   |
| ------------------------ | --------- | --------------------------------------------------------------------------------------- |
| `--brand` (primary blue) | `#387ABC` | Primary buttons, links on large text, key graphics, section accents                     |
| `--brand-strong`         | `#2C6AA8` | Hover/pressed state, and **blue text on white at small sizes** (needed for AA contrast) |
| `--accent` (yellow)      | `#FFC20E` | Primary CTA fill, highlights, markup flags, one solid band                              |
| `--accent-strong`        | `#E6AC00` | Yellow hover state                                                                      |
| `--ink`                  | `#303030` | Body text, headings, text on yellow buttons                                             |
| `--ink-soft`             | `#5A5F66` | Secondary text                                                                          |
| `--surface`              | `#FFFFFF` | Main background                                                                         |
| `--surface-tint`         | `#F4F7FB` | Alternating section background (flat)                                                   |
| `--brand-tint`           | `#E8F0F9` | Light blue panels, chip backgrounds (flat)                                              |
| `--line`                 | `#D9E0E8` | 1px borders and dividers                                                                |
| `--success`              | `#2E7D4F` | Form success only                                                                       |
| `--danger`               | `#B3261E` | Form errors only                                                                        |

**Contrast rules**

- Never place `#FFC20E` text on white. Yellow is a **fill color**; text on yellow is always `#303030`.
- White text on `#387ABC` is allowed only for **bold text 16px and above** or large text. For small text on blue, use `--brand-strong`.
- Blue text links on white use `--brand-strong`.
- Target WCAG 2.1 AA for everything.

**Typography** (use `next/font`, self-hosted, no layout shift)

- Headings: **Archivo** (600/700). Engineered, sturdy, suits construction.
- Body and UI: **Inter** (400/500/600).
- Use `font-variant-numeric: tabular-nums` for numbers, stats, and the pricing table.
- Scale (desktop / mobile): H1 56/36, H2 40/28, H3 24/20, body 17/16, small 14. Line height 1.15 for headings, 1.6 for body. Max line length about 68 characters.

**Spacing and shape**

- 8px grid. Section vertical padding: 96px desktop, 72px tablet, 56px mobile.
- Container max width 1240px, side padding 24px (16px under 480px).
- Radius: 6px for buttons and inputs, 8px for cards and images. No pill shapes except small status chips.
- Shadows: rare and subtle (`0 1px 2px rgba(48,48,48,0.06)`), used only on the sticky header and floating UI cards. Never colored shadows.
- Borders: 1px `--line`.

**Buttons**

- Primary: yellow fill, `#303030` bold text, 6px radius, 48px height, hover to `--accent-strong`. Used for **Upload Your Plans / Get a Free Quote**.
- Secondary: white fill, 1.5px `--brand` border, `--brand-strong` text, hover to `--brand-tint` fill.
- On blue or yellow bands, adapt: on blue use yellow fill button; on yellow use a `#303030` fill button with white text.
- Visible focus ring on every interactive element: 3px `--brand` outline with 2px offset.

---

## 4. Tech Stack and Project Setup

- **Next.js (App Router) + TypeScript + Tailwind CSS**
- `next/image` for all images (AVIF/WebP, correct `sizes`, `priority` only on the hero image)
- `next/font` for Archivo and Inter
- Icons: **Phosphor Icons (regular weight)** via `@phosphor-icons/react`, one family only. Do not mix icon libraries. Do not use duotone/fill variants for decoration.
- Motion: **Framer Motion**, minimal (Part 9). Must respect `prefers-reduced-motion`.
- Accordion, tabs, dialog: **Radix UI primitives** (accessible), styled by hand to match this design. **Do not ship default shadcn styling.**
- Form: `react-hook-form` + `zod`
- US map: `react-simple-maps` with a local `us-atlas` TopoJSON file in `/public/data/` (no CDN fetch at runtime)
- No UI kit that imposes its own look.

**Suggested structure**

```
/app
  layout.tsx            # fonts, metadata, header, footer
  page.tsx              # homepage, composes sections
  api/quote/route.ts    # form handler (stub, Part 10)
/components
  layout/   Header, TopBar, Footer, MobileStickyBar
  ui/       Button, Chip, Eyebrow, SectionHeader, DimensionLine, FramedImage, PlaceholderImage
  sections/ Hero, Intro, BidFailures, Services, Mep, TradeIndex, EstimateAnatomy,
            ProjectStages, Methods, SoftwareQuality, ProcessUpload, Deliverables,
            WhoWeServe, WhyChoose, Pricing, UsaCoverage, Faq, FinalCta
  graphics/ (inline SVG components, Part 6.2)
/content
  homepage.md           # the client's content file (source of truth)
  homepage.ts           # typed content object parsed from the copy
/public/images/<section>/...   # photos named by slot ID (Part 7)
/public/data/us-states-10m.json
/styles/tokens.css      # CSS variables from Part 3
```

Also create a `.cursor/rules` file summarizing Part 1 so the five hard rules persist across prompts.

---

## 5. Content Rules

- **The source of truth is `/content/homepage.md`** (the client's content file attached with this prompt). Save it there first.
- Use the copy **exactly as written**: headings, button labels, FAQ questions and answers, list items. Do not rewrite, shorten, or add marketing text. Do not invent statistics, testimonials, logos, certifications, or case studies. If something is missing, leave a clearly marked `TODO` instead of making it up.
- Move all copy into `/content/homepage.ts` as a typed object. Components read from it. No copy hard-coded in JSX.
- Placeholders in the copy:
  - Phone number: `(+1 )` and `[your phone number]` are placeholders. Read from `NEXT_PUBLIC_PHONE` (render `tel:` links) and show a visible TODO if empty.
  - Logo: build a simple text wordmark "Construction Estimatings" plus a simple geometric SVG mark (a square plan-sheet outline with one dimension line). Easy to swap for the client's logo later. Keep it in one `Logo` component.
- Underscore lines (`_____`) in the content file are section dividers for the source document only. Do not render them.
- Use one `<h1>` (the hero heading). Use `<h2>` for section headings and `<h3>` for items, in the exact wording of the content file.
- Section eyebrows (small labels above headings) may be added only if they are derived from existing copy (for example "MEP Estimating" or "Pricing"). Keep them short.

---

## 6. Graphics and Icons

### 6.1 Icons

- One family: Phosphor (regular).
- Use icons only where they help scanning: checkmarks in lists, arrows in links, phone/mail/upload in contact UI, and the six deliverables if needed. **Do not put an icon above every heading.**
- Preferred meaningful metaphors: ruler, blueprint/file, clipboard-check, calendar, map-pin, shield-check (for NDA), file-xls/file-pdf, upload-simple.
- Forbidden: sparkle, magic wand, robot, brain, lightning "AI", atom, glowing anything.

### 6.2 Custom SVG graphics (build as React components in `/components/graphics`)

All flat, two to three brand colors, 2px stroke, no gradients, no filters, crisp at all sizes, `role="img"` with an `aria-label`.

| Component             | Used in              | What it shows                                                                                                                                                                                                                                |
| --------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PlanMarkupSheet`     | Hero, Deliverables   | A floor-plan sheet drawn in thin lines with blue-highlighted counted areas, yellow flagged items, small dimension lines and a legend ("Counted", "Flagged")                                                                                  |
| `EstimateSheet`       | Estimate Anatomy     | A document-style estimate table with six labeled rows (Scope, Quantities, Labor, Materials, Equipment, Subcontractor costs) and an "Overhead and profit" line shown separately. Use skeleton bars for values. **No made-up dollar amounts.** |
| `FailureDiagrams` (3) | Bid Failures         | (1) Stack of plan sheets with a clock, for rushed takeoffs. (2) A price tag with a calendar page, for stale pricing. (3) A plan sheet with a **revision cloud** and a delta triangle, for missed addenda                                     |
| `StageBuilding`       | Project Stages       | A line drawing of a building that builds up across five stages (site outline, sketch, full drawing, construction frame, revision mark)                                                                                                       |
| `MethodDiagrams` (4)  | Methods              | Bottom-up: stacked measured items summing to a total. Unit cost: quantity x unit price equation. Assembly: a layered wall section. Parametric: a building outline with a cost-per-square-foot dimension                                      |
| `QualityCheckFlow`    | Software and Quality | Two-step flow: takeoff in software, then second-estimator check, ending in Excel and PDF file tiles                                                                                                                                          |
| `UsMap`               | USA Coverage         | Real US states map (react-simple-maps), all 50 states in `--brand-tint` with `--brand` borders, subtle hover state, no tooltips required                                                                                                     |

### 6.3 Photography treatment

- Natural color, no filters, no duotone, no tint, no overlay fade.
- Frame: 8px radius, optional corner crop marks. Consistent aspect ratios per layout.
- Subjects are limited to: plan review, takeoff on screen, job sites, specific trades, building types. No people shaking hands, no staged office stock.

---

## 7. Image Slot Map

Every image has an ID. File path: `/public/images/<section>/<slot-id>.webp`. If the file does not exist, render `PlaceholderImage`: a flat `--surface-tint` box with a 1px `--line` border, the slot ID, aspect ratio, and the subject brief. **Never auto-fetch or randomly pick a stock image.** The brief tells the designer or client what to supply.

| Slot ID            | Section              | Subject brief                                                                                                  | Ratio  |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------- | ------ |
| `hero-main`        | Hero                 | Estimator at a desk reviewing large-format plans with a takeoff on a monitor, realistic office or site trailer | 4:3    |
| `intro-main`       | Intro                | Close-up of hands marking a printed plan set with a scale ruler                                                | 4:5    |
| `solution-main`    | Bid Failures         | Estimator checking a revised sheet against the takeoff on two screens                                          | 4:3    |
| `svc-cost`         | Services             | Itemized cost estimate document beside plans                                                                   | wide   |
| `svc-design`       | Services             | Architect and engineer drawings under revision at a table                                                      | tall   |
| `svc-takeoff`      | Services             | Plan set on screen with highlighted measurements                                                               | wide   |
| `svc-commercial`   | Services             | Commercial building under construction (office or retail frame)                                                | wide   |
| `svc-industrial`   | Services             | Warehouse or industrial plant shell                                                                            | wide   |
| `svc-residential`  | Services             | Custom home framing in progress                                                                                | tall   |
| `svc-freelance`    | Services             | Single estimator at a laptop with plans                                                                        | square |
| `svc-bid`          | Services             | Bid documents and a binder on a table                                                                          | square |
| `svc-change`       | Services             | Marked-up change order drawing                                                                                 | wide   |
| `mep-hvac`         | MEP                  | Ductwork and HVAC equipment on a mechanical room or rooftop                                                    | 4:3    |
| `mep-electrical`   | MEP                  | Electrical panel and conduit run                                                                               | 4:3    |
| `mep-plumbing`     | MEP                  | Copper or PEX piping run and fixtures rough-in                                                                 | 4:3    |
| `mep-fire`         | MEP                  | Fire sprinkler piping and heads overhead                                                                       | 4:3    |
| `trade-concrete`   | Trades               | Concrete slab pour or formwork with rebar                                                                      | 4:3    |
| `trade-masonry`    | Trades               | Brick or CMU wall being laid                                                                                   | 4:3    |
| `trade-drywall`    | Trades               | Drywall board hanging on metal framing                                                                         | 4:3    |
| `trade-painting`   | Trades               | Interior wall being painted with a roller                                                                      | 4:3    |
| `trade-steel`      | Trades               | Structural steel beams and columns erected                                                                     | 4:3    |
| `trade-lumber`     | Trades               | Wood framing and trusses                                                                                       | 4:3    |
| `trade-millwork`   | Trades               | Built-in cabinetry and casework                                                                                | 4:3    |
| `trade-sitework`   | Trades               | Excavator doing grading or earthwork                                                                           | 4:3    |
| `trade-roofing`    | Trades               | Roof membrane or shingle installation                                                                          | 4:3    |
| `trade-demolition` | Trades               | Selective interior demolition                                                                                  | 4:3    |
| `trade-solar`      | Trades               | Rooftop solar panel array install                                                                              | 4:3    |
| `trade-flooring`   | Trades               | Tile or hardwood flooring being installed                                                                      | 4:3    |
| `software-main`    | Software and Quality | Dual-monitor takeoff software view over plans                                                                  | 4:3    |
| `serve-main`       | Who We Serve         | Site meeting with hard hats over plans (contractor and architect)                                              | 4:3    |
| `faq-side`         | FAQ                  | Estimator on a call with plans in front of them                                                                | 4:5    |

The `PlanMarkupSheet` and `EstimateSheet` graphics replace photos in the Hero overlay, Estimate Anatomy, and Deliverables sections.

---

## 8. Homepage Sections (build in this order)

Header and footer are shared. Section backgrounds alternate between `--surface` (white) and `--surface-tint` for rhythm. There is **one solid yellow band** and **one solid blue band** on the page (both flat). No dark sections.

### 8.0 TopBar and Header (sticky)

- TopBar (desktop only, 40px, `--brand-tint` flat): "NDA on request", "Free quote before any work starts", phone link on the right.
- Header (72px, white, 1px bottom border, small shadow when scrolled): Logo left. Nav: Home, Services, Trades, Pricing, About, Contact. Right: phone link and yellow **Get a Free Quote** button.
- Services and Trades have a clean mega-menu panel (two to three columns of text links, no images, no gradients), populated from the service and trade names in the content file. For now, links anchor to their homepage sections. Pages that do not exist yet link to `#` with a `TODO` comment.
- Mobile: hamburger opens a full-height white drawer with large tap targets. Include a visible phone link and the yellow CTA inside.
- Mobile only: **sticky bottom bar** with two buttons, "Upload Your Plans" (yellow) and "Call" (white, blue border). Hide it while the upload form is in view.

### 8.1 Hero

- **Layout:** two columns, 55/45. Text left, visual right. On mobile, text first, then the visual.
- **Left:** H1 "Construction Estimating Services With Bid-Ready Estimates in 24 to 48 Hours" (use exact content). Subhead from the content ("Every Bid You Skip Is a Job Your Competitor Wins. Stop Losing Bids. Start Winning Them"). Paragraph from the content. Buttons: **Upload Your Plans** (yellow primary), **Get a Free Quote** (secondary), plus the phone number as a text link. Under the buttons: "Free quote before any work starts."
- **Trust row** under the CTA: three compact items with a thin vertical divider between them: "24 to 48-hour turnaround", "All 50 states", "NDA on request". Small meaningful icons (calendar, map-pin, shield-check) only.
- **Right visual:** the `hero-main` photo in an 8px frame with crop marks, sitting on a flat blueprint-grid panel. Overlapping its lower-left corner: a crisp white card containing a small `PlanMarkupSheet` with a legend. Overlapping its upper-right: a small white "Delivered as Excel + PDF" file-tile card. Cards have 1px borders and one subtle shadow, no blur, no glass.
- Background: white with the grid pattern only behind the visual. No gradient, no blobs.

### 8.2 Intro: "Professional Construction Estimating Services That Turn Plans Into Winning Bids"

- **Layout:** image left (`intro-main`, 4:5, crop marks), content right. H2 plus the two paragraphs.
- **Directly below (full-width solid yellow band):** "Bid due this week? Send your plans and get a free quote before work starts." with a `#303030` button **Upload Your Plans**. Text `#303030`. Flat yellow, no pattern.

### 8.3 Bid Failures: "Why Bids Fail Before Bid Day"

- **Layout:** section intro left-aligned, then a **three-column row** of problem panels (Rushed takeoffs, Stale pricing, Missed addenda). Each panel is a white card with a 1px border, the matching `FailureDiagrams` SVG on top, the bold title, and the sentence of copy. The three panels have a numbered tag (01, 02, 03) in the corner.
- **Below, a split block** on `--brand-tint`: left text "We built our process to fix all three:" plus the paragraph and the **Request a Free Estimate** button. Right: the `solution-main` photo.

### 8.4 Services: "Our Construction Estimating Services" (key section, unique layout)

This is the most important design section. The client specifically asked for unique design with images here.

- **Layout: a bento/mosaic grid, not equal cards.** Nine tiles of **different sizes** in a 12-column desktop grid, each with a real photo (`svc-*` slots) filling the tile, and the service name and one-line description in a **flat white label panel** anchored to the bottom-left of the tile (solid white, no overlay fade, no gradient).
  - Row 1: Cost Estimating (span 5), Construction Material Takeoff (span 4), Design Estimating (span 3, tall, spans 2 rows).
  - Row 2: Commercial (span 4), Residential (span 3, tall), Industrial (span 5)... adjust so the 12-column rows add up correctly with the tall tiles.
  - Row 3: Freelance (span 4), Construction Bid Estimating (span 4), Preliminary and Change Order (span 4).
  - Aim for an asymmetric but balanced mosaic. Use the exact titles and descriptions from the content file.
- Each tile has a small blue index number (01 to 09) and an arrow link at the bottom right. Hover: image zooms 1.03, label panel border turns `--brand`. No other effects.
- **Tablet:** two-column mosaic. **Mobile:** single column, each tile as image on top (16:10) with its label below, no overlap.
- Do not render these as an identical card grid.

### 8.5 MEP: "MEP Estimating Services"

- **Layout:** interactive **selector split**. Left: a vertical list of four trades (HVAC and Mechanical, Electrical, Plumbing, Fire Sprinkler and Fire Protection) as large tabs, each showing its short description when active. Right: the matching photo (`mep-*`) in a framed 4:3 panel with a small corner label of the trade. Active tab: white background, 4px left border `--brand`. Inactive: transparent.
- Section intro sentence above: "Our MEP estimators price mechanical, electrical, and plumbing scopes from one plan set, so your trades stay aligned."
- Radix Tabs for accessibility. Mobile: tabs become a horizontal scroll list above the image.

### 8.6 Trade Index: "Construction Takeoff Services by Trade"

- **Layout:** a "spec index". Two columns on desktop. Left (about 60%): the 12 trades as a numbered list (01 to 12), each row with the trade name, its one-sentence description, and a thin bottom rule. Right (about 40%): a **sticky** framed image panel that changes to the photo of the trade being hovered or focused (default: first). The photo cross-fades (150ms).
- Mobile: a two-column grid of compact tiles with a 4:3 thumbnail on top and the name and description under it. No sticky panel on mobile.
- Keyboard accessible: rows are focusable and update the image on focus.

### 8.7 Estimate Anatomy: "What Goes Into a Construction Cost Estimate"

- **Layout:** left is a **sticky `EstimateSheet` graphic** (a document mock with six labeled rows). Right is the six components (Scope, Quantities, Labor, Materials, Equipment, Subcontractor costs) as a numbered vertical list with the copy. When a component is hovered or in view, the matching row in the sheet highlights with a flat yellow marker.
- Mobile: sheet on top (non-sticky), list below.

### 8.8 Project Stages: "Construction Cost Estimating Services for Every Project Stage"

- **Layout:** a **horizontal timeline** with five nodes (Concept, Design, Bid, Construction, Change orders) on a 2px line, with the `StageBuilding` drawing progressing above the nodes. Each node has the title and the copy underneath. The current hover/focus node is filled `--brand`; others outlined.
- Mobile: becomes a vertical timeline with the line on the left.

### 8.9 Methods: "Construction Estimating Methods We Use"

- **Layout:** 2x2 grid of larger panels. Each panel: title, copy, and its `MethodDiagrams` SVG on one side. Alternate the diagram side per row (left/right) so it doesn't feel templated. Panels use `--surface-tint` fill with a 1px border.

### 8.10 Software and Quality Checks: "Estimating Software and Quality Checks Behind Every Estimate"

- **Layout:** image one side (`software-main`) and content on the other. Content: the paragraphs from the content file. Below them, the software list rendered as **plain text name chips** (Bluebeam, PlanSwift, On-Screen Takeoff, STACK, Xactimate, Trimble, Quest Estimating, FastDUCT, FastPIPE, RSMeans data). **Do not use brand logos** unless the client supplies licensed assets.
- Below the split, a full-width `QualityCheckFlow` graphic: Takeoff software, Second estimator check, Excel and PDF delivery.

### 8.11 Process and Upload: "Our Technical Estimating Process, From Upload to Delivery"

- **Layout:** two columns. Left: the four steps (Digital plan uploads, Takeoff software tools, Location-based pricing, Second-estimator review) as a vertical stepper with a connecting line and numbered circles. Right: a **sticky Upload Plans form card** (white, 1px border, 8px radius).
- Form fields exactly: Full name, Email, Phone, ZIP code, Your message, **Upload Files** (drag and drop zone plus button; accept `.pdf,.dwg,.png,.jpg,.jpeg,.zip`; multiple files; show file list with remove buttons). Optional "Bid due date" date field is allowed because the content mentions bid date in the process text. Submit button: yellow **Get a Free Quote**. Under the form: "Prefer an online construction estimate? Share your plans, and we quote first. NDA on request."
- Validation with zod, inline errors, clear success state. Spam protection: hidden honeypot field plus a minimum-time check (no math captchas).

### 8.12 Deliverables: "What You Receive With Every Estimate"

- **Layout:** image one side and content on the other, content on the left this time (to alternate). Right visual: a stack of three overlapping document graphics (marked-up plan using `PlanMarkupSheet`, an Excel tile, a PDF tile) built from SVG/HTML, **not a photo**.
- Content: the six deliverables as a two-column checklist with checkmark icons.

### 8.13 Who We Serve: "Who We Serve in the USA"

- **Layout:** image one side (`serve-main`), content the other. Nine audience chips (General Contractors, Subcontractors, Home Builders, Developers, Architects, Designers, Engineers, Vendors and Suppliers, Owners) in a wrapped grid of `--brand-tint` chips with 1px borders.

### 8.14 Why Choose: "Why Contractors Choose Construction Estimatings"

- **Layout:** the paragraph on the left (about 40%) and the seven benefits on the right as a **dense two-column checklist** with thin separators (24 to 48 Hour Turnaround, Free Quote First, ZIP-Code Local Pricing, Written Assumptions and Exclusions, Excel and PDF Formats, NDA on Request, Nationwide Remote Service). One benefit spans two columns at the end if the count is odd.

### 8.15 Pricing and Turnaround: "Construction Estimating Pricing and Turnaround"

- **Layout:** left, the intro and CTA ("Send your plans, get your price...", **Request My Free Quote**). Right: a real styled **table** with two columns (What affects your quote / Why it matters) and four rows, using sticky first column on narrow screens, zebra rows in `--surface-tint`, 1px lines. Real `<table>` markup.

### 8.16 USA Coverage: "Construction Estimating Services Near Me: We Cover the USA"

- **Layout:** large `UsMap` on the right (about 60%), text on the left with the sentence and the "All 50 states" fact. Map is flat and clean. Do not invent state-level claims or office locations.

### 8.17 FAQ: "Construction Estimating FAQs"

- **Layout:** left column sticky with the heading, a short line, and the `faq-side` photo plus a small card with the phone and **Upload Your Plans**. Right: the 11 Q&As as a Radix Accordion. First item open by default. Plus/minus indicator in `--brand`.
- Add `FAQPage` JSON-LD from the same data.

### 8.18 Final CTA: "Get the Best Estimate for Your Next Bid"

- **Layout:** full-width **solid `--brand` band**, white text, left-aligned, with the two buttons (yellow **Get a Free Quote**, white-outline **Upload Your Plans**) and the trust line "Free quote first | 24 to 48 hour turnaround | NDA on request | All 50 states" as four items separated by thin vertical lines. A faint blueprint-grid pattern in a slightly lighter solid blue is allowed (pattern, not gradient). Phone shown as a link.

### 8.19 Footer (light)

- Light footer on `--surface-tint` with a 1px top border (no dark footer). Logo, short description from the content, quick links, Services list, Trades list, contact (phone, email placeholders, "All 50 states"), copyright. No credits to the developer.

---

## 9. Motion

- Entrance: elements fade up 12px over 300ms once, on first scroll into view. Stagger at most 60ms. No repeating animations.
- Hover: buttons darken one step, tiles zoom the image 1.03, links underline.
- No parallax, no cursor effects, no auto-playing carousels, no marquee.
- Wrap everything with a `prefers-reduced-motion` guard that disables movement.

---

## 10. Backend Stubs and Integrations

- `POST /api/quote` validates with zod, accepts `multipart/form-data`, rejects files over 25 MB each (50 MB total), returns JSON. Leave a clearly marked `TODO` for delivery (email via Resend and/or Supabase Storage plus a table). Do not hard-code secrets. Provide `.env.example` with `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_SITE_URL`, `QUOTE_TO_EMAIL`, `RESEND_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.
- No analytics until the client approves. Leave a `TODO` for GA4 or GTM.

---

## 11. SEO and Performance

- Title: "Construction Estimating Services | Bid-Ready Estimates in 24 to 48 Hours". Meta description from the intro copy, 150 to 160 characters.
- One H1. Logical heading order. Descriptive alt text on every image (from the slot brief, not "image of").
- JSON-LD: `Organization` and `FAQPage`. `ProfessionalService` with `areaServed: "US"`.
- Open Graph and Twitter card tags (image `TODO`).
- `sitemap.xml`, `robots.txt`, favicon placeholder.
- Targets: Lighthouse 90+ on Performance, Accessibility, Best Practices, SEO on mobile. LCP image prioritized, no layout shift, lazy-load everything below the fold.

---

## 12. Responsive and Accessibility Requirements

- Mobile-first. Build and test at **360, 390, 768, 1024, 1280, 1440, 1920** px widths. No horizontal scrolling at any width.
- Touch targets 44px minimum. Body text never below 16px on mobile.
- Tables, the map, and wide graphics scroll or reflow gracefully, never overflow the page.
- Full keyboard navigation, visible focus, logical tab order, skip-to-content link, correct ARIA on tabs, accordion, drawer, and form errors.
- Alt text on photos, `aria-label` on informative SVGs, `aria-hidden` on purely decorative ones.
- Color is never the only way information is conveyed.

---

## 13. Working Method for Cursor

1. Set up the project, tokens, fonts, Tailwind theme, `.cursor/rules`, and `/content/homepage.ts` first.
2. Build shared UI primitives and the five graphics needed first (`PlanMarkupSheet`, `EstimateSheet`, `FailureDiagrams`, `StageBuilding`, `MethodDiagrams`).
3. Build sections in the Part 8 order. After each section, check it against Part 1, then at 390px and 1440px widths, before continuing.
4. Do not use placeholder lorem ipsum. Do not invent content.
5. When something in this prompt is ambiguous, choose the simpler, cleaner option and leave a `TODO` comment, rather than adding decoration.
6. Keep code typed, componentized, and readable. No giant files, no duplicated markup.

---

## 14. Final Acceptance Checklist

- [ ] No gradient anywhere (search the codebase for `gradient` and for any `linear-gradient`)
- [ ] No dark theme or dark full-width section; footer is light
- [ ] No sparkle/AI-style icons; a single icon family is used
- [ ] No random stock images; every image maps to a slot ID or shows a labeled placeholder
- [ ] Looks custom-designed, not like a template or an AI default
- [ ] Every section has its own distinct layout; services section is a unique mosaic with images
- [ ] Small-content sections use image on one side and content on the other, alternating sides
- [ ] Copy matches the content file exactly; no invented stats or testimonials
- [ ] Color tokens only (changing the palette in one file re-themes the whole site)
- [ ] Upload form works with validation, file list, success and error states
- [ ] Responsive at all listed widths with no horizontal scroll
- [ ] Accessibility checks pass (focus, contrast, keyboard, ARIA)
- [ ] Lighthouse 90+ on mobile across all four categories
