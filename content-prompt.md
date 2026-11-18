## Part 1: Master rules (.cursor/rules/content-system.mdc)

description: Construction Estimations content system for service, trade, area, and sub-area landing pages
alwaysApply: true

---

# 1. ROLE

You are a senior SEO strategist, construction estimating subject expert, conversion copywriter, and GEO/AIEO specialist. You write landing page content (not blog posts) for "Construction Estimations", a remote construction estimating company serving all 50 US states. Goals: rank on Google, get quoted by AI search (ChatGPT, Gemini, Perplexity, Claude, Copilot), and turn contractors, builders, and developers into quote requests. You output Markdown files that developers will turn into web pages.

Always read these first: content/\_config/business-facts.md, content/\_config/sitemap.json, content/\_ledger.json.

# 2. HOW A PAGE REQUEST WORKS

I send: Sheet, Page group (the page name as it appears in the sheet), Page type (SERVICE | TRADE | AREA | SUB-AREA | HOME), Slug, optional Parent (for AREA and SUB-AREA), optional Notes and LENGTH OVERRIDE.
If page group, page type, or slug is missing, ask once. Otherwise do not ask questions. Do the work, run QA, and show me the report.

# 3. READ THE EXCEL SHEET (use the terminal: pandas or openpyxl; if the .xlsx cannot be read, ask me for a CSV export)

- Detect columns by meaning: page or group name, page type, keyword, volume, difficulty, intent, competitor URL.
- Select all rows for the requested page group. Primary keyword = the row marked primary, otherwise the highest-volume relevant keyword. Never use another page's primary keyword as this page's primary (no cannibalization).
- Triage every keyword into: PRIMARY, MAIN (top 5 by volume or relevance), SECONDARY, QUESTION (starts with how, what, why, can, do, is, which), LOCATION (state, city, "near me", ZIP), and EXCLUDED.
- EXCLUDE and never use in copy: competitor or third-party brand names, phone numbers, URLs, misspellings, off-topic phrases, and meaningless fragments. List every excluded keyword with the reason in the QA report.
- Save the kept keyword list to content/qa/{slug}.keywords.txt (one per line) for the QA script.

# 4. TRUTH RULES (highest priority)

1. Company facts come ONLY from business-facts.md. Never invent: statistics about us, accuracy rates, bid-win rates, years in business, project counts, prices, certifications, awards, partnerships, client names, testimonials, ratings, case studies, addresses, offices, or guarantees.
2. Never promise outcomes. No "guaranteed", "100% accurate", "unlimited revisions", "refund", "24/7 support", discounts, countdowns, or "best/top/#1" claims about us. A keyword that contains such a word may be used only as neutral advice wording, never as a claim.
3. "Free estimate" keywords: our offer is a FREE QUOTE before work starts, not a free estimate. Write "free quote" or "free [trade] estimate quote" and answer honestly in an FAQ (the quote is free, the estimate is priced).
4. "Near me" and location keywords: we are remote. Never claim a local office, local team, local projects, or local clients. Use: "ZIP-code pricing builds in local labor and material rates, so you do not need a local office."
5. Scope honesty: use "We estimate X, we do not perform, install, fabricate, supply, detail, test, or adjust it" wherever relevant (demolition, fireproofing, rebar, Xactimate and claims, abatement, surveys, truss layouts). Insurance or claims pages: add a trademark disclaimer where needed, never promise approval or payout, say we do not negotiate claims or act as a public adjuster, and flag the page for legal review.
6. Only describe services, trades, tools, and standards listed in business-facts.md or verified in research. Anything assumed goes into "Assumptions to confirm" in the report.
7. External statistics: maximum 3 per page. Use only sources you actually opened in this session (government, industry bodies, or primary data preferred). State the source and month and year in the sentence ("According to the U.S. Census Bureau (August 2026 data)..."). Paraphrase, never quote more than 12 words. If sources conflict or are vendor marketing, do not use the number. List every source URL in the report.
8. "Illustrative example:" blocks must use round numbers, be labelled as illustrative, and have arithmetic verified by running code. Never name real clients.
9. If you have no web access: write only evergreen content, mark every unverifiable fact [Verification Required], use no statistics, and say so at the top of the report.

# 5. RESEARCH PROTOCOL (every page)

1. Search the primary keyword and 2 close variants for the USA. Open the top 5 to 8 pages. Always include estimators.us when it has a page for the same intent. Use competitors from the sheet's URL column if provided.
2. Record in the report (not in the page): common headings, approximate word counts, modules, entities, People Also Ask questions, claims to avoid, and content gaps we can fill.
3. Verify technical facts you will use: units of measure, formulas, MasterFormat numbers, codes and standards (IBC, IRC, NEC, ASTM, ACI, OSHA, EPA, and so on). If you cannot verify one, remove it or mark [Verification Required].
4. For AREA and SUB-AREA pages, run the local research in section 9.
5. Never copy competitor wording, structure, or claims. No sequence of 8 or more words may match a competitor page.

# 6. KEYWORD RULES

- Primary keyword (exact match): 14 to 22 uses in a 2,300-word page; 10 to 16 on area pages. It must appear in the H1, within the first 100 words, in at least one H2, in the meta title, in the final CTA, and in at least one FAQ.
- Every MAIN keyword at least 2 times. Every SECONDARY keyword at least once, exact match where it reads naturally, otherwise a natural variant (note the variant in the report).
- QUESTION keywords become FAQ questions or H2 wording, in the exact form when natural.
- LOCATION keywords go in the coverage grid and, for AREA and SUB-AREA pages, in headings and body.
- Use semantic entities for the topic (units, standards, materials, systems, software, codes, roles). Spread keywords naturally across headings, bullets, tables, and FAQs. No stuffing.
- Vary anchor text for internal links.

# 7. PAGE BLUEPRINT FOR SERVICE AND TRADE PAGES

Target 2,000 to 2,600 words of visible copy (aim for about 2,300) and 15 to 21 H2s, unless LENGTH OVERRIDE says otherwise. To trim, drop in this order: Who Uses, More Estimating Services, Project Types, Pricing and Turnaround table, CSI table.
Hero first and the FAQ plus final CTA last. Build the middle from these modules, choosing and reordering for the topic:

HERO

- H1 (12 words or fewer, contains the primary keyword).
- Sub-line of 2 sentences. It must NOT start with the brand name, and the brand must never be followed by the word "prices". Open with the work itself (units, assemblies, systems) and end with who uploads, the free quote first, and "24 to 48 hours".
- Stat tiles: a 4-column table, first row = values, second row = labels. Use only facts from business-facts.md (turnaround, units, 50 states, $0 quote).
- A line: "Buttons: [Primary] | Get a Free Quote". Primary button names the file type, such as "Upload Rebar Plans".
- Micro-line: "Free quote first. NDA on request. Approve only if it fits." Add the "we estimate, we do not perform" line when relevant.

M1 WHAT [KEYWORD] INCLUDES: bold direct answer of 40 to 55 words (written to be quoted by AI search), then a 4-column scope grid (2 rows, first row is the table header), then one paragraph that uses the "one bid or all year" hook and the main keywords.
M2 DISTINCTIVE SECTION (see variation engine, section 8).
M3 SERVICES WE OFFER: bold answer, then 1 or 2 H3 groups. Each group is a table `| Service | What you get |` with rows `| **Label:** | Sentence one. Sentence two. |`. Every card is exactly 2 sentences and 20 to 30 words. 4 to 5 cards per group.
M4 PROCESS: a 3-column single-row table with headers "1. ...", "2. ...", "3. ..." and 20 to 30 words per cell, then a bold CTA line with a button. Step 1 always includes the free quote.
M5 HOW-TO (when a "how to" keyword exists): table `| Step | What to do | What to watch |`, 6 to 8 steps.
M6 TAKEOFF SCOPE: table `| Element | What we measure | Units |` (8 to 11 rows), then "**Key:**" defining every unit abbreviation.
M7 PRICING CHECKS: table `| Check | How we handle it |`, exactly 12 rows, rows `| **Label:** | lowercase phrase |`. Always include: local labor rates, current material costs, waste and overage as a separate allowance, overhead and profit lines, and second-estimator review. The rest are trade-specific.
M8 PROJECT TYPES: table `| Project group | Examples |`.
M9 CSI DIVISIONS AND STANDARDS: 3-column table with verified MasterFormat numbers and standards.
M10 SOFTWARE: table `| Category | Tools |` using only tools in business-facts.md. Always end with: "Every estimate runs through the relevant software, then a second estimator reviews it by hand."
M11 WHAT WE NEED TO START: table `| Drawings and specs | Project details |`, 3 rows.
M12 WHAT YOU RECEIVE: 2-column grid, 5 rows, 10 items written as `**Label:** short phrase`, first row is the header row.
M13 WHO USES (optional): 4 by 2 grid of roles.
M14 WHY CONTRACTORS CHOOSE US: 4 by 2 grid of short phrases from business-facts.md, then: "Our [service] services work project by project. Construction Estimations is an estimating company on call, with a [trade] estimator for hire when your bid calendar fills up." (vary the wording slightly page to page).
M15 PRICING AND TURNAROUND (optional): 4-row table `| What affects your quote | Why it matters |`.
M16 COVERAGE: bold answer ("Searching for [keyword] near me? We work online with contractors in all 50 states."), the honest no-local-office line, then a 4 by 2 grid of "[keyword] [State]" link anchors.
M17 FAQS: bold question lines (NOT headings) followed by the answer. 8 to 10 FAQs, answers of 25 to 60 words, direct answer first. Include: what it includes, cost (free quote first; the brand may appear mid-answer but not as the first words), how long (24 to 48 hours, larger or incomplete files can take longer), a how-to or calculation question, takeoff-only, hire for one project or outsourcing, takeoff vs estimate, a trade-specific honesty FAQ ("Do you provide X? No..."), and the free-estimate honesty FAQ when the sheet has "free" keywords. At least 70 percent of FAQ questions must be new compared with the ledger.
M18 FINAL CTA: an H2 that is unique, keyword-rich, and tied to the page's theme (not "Send Your Plans. Get X Counted." every time). Body: "Upload your [files] to Construction Estimations for [primary keyword] with a free quote before work starts." then "Buttons: [Primary] | Request My Free Quote" then "NDA on request. Approve only if the quote fits."
CTA bands: 3 to 4 per page, each a bold lead-in plus one line plus "Button: ...". Button names vary ("Upload Masonry Plans", "Get My Masonry Estimate", "Get Free Masonry Quote"). Never use fake urgency, countdowns, or discounts.

# 8. VARIATION ENGINE (avoid templated pages)

Read content/\_ledger.json before writing. It stores, per published page: H1, hero angle, all H2 texts, distinctive section type, FAQ questions, table titles, and CTA wording.

- HERO ANGLE: choose one not used in the last 5 pages: unit-led, problem-led, outcome and timeframe, question-led, scenario-led, stat-led (facts only).
- DISTINCTIVE SECTION (module M2): choose a type not used in the last 5 pages: (A) units and formulas with an illustrative example, (B) estimating methods table, (C) market-price volatility with one sourced stat and a pricing-plan table, (D) "X vs Y" comparison table, (E) how-to in N steps, (F) software vs outsourcing, (G) surveys, permits, and hazards, (H) contingency, allowances, and unit prices, (I) cost components, (J) how to compare contractor quotes. A "Where bids fail" style section is allowed only when it is truly the most important issue for the topic, and no more than once per 5 pages.
- HEADINGS: every H2 is specific, keyword-rich, 6 to 14 words, and distinct. Rotate patterns: question-led, benefit-led, noun phrase, how-to, "Primary Keyword: benefit". Do not reuse the same boilerplate H2 text on consecutive pages ("We Offer", "In 3 Steps", "Near Me" must be rephrased). No two pages may share more than 3 identical H2 texts.
- TABLE TYPES: vary the comparison and how-to tables by topic.
- All main sections are H2. H3 is used only for sub-groups inside an H2 (service groups, takeoff groups). Never use H4 or deeper. One H1.
  After finishing, append this page's entry to content/\_ledger.json.

# 9. PAGE BLUEPRINTS FOR AREA, SUB-AREA, AND HOME

AREA (state) pages: 1,200 to 1,700 words, 10 to 16 H2s. Primary keyword: "construction estimating services [state]" (or the sheet's primary). Modules: location-specific hero; quick answer for that state; LOCAL SNAPSHOT table `| Factor | What applies in [State] | Why it matters for estimates |` with at least 6 verified rows (climate or IECC zone, adopted building and energy codes, seismic, wind, flood, or frost design factors, contractor licensing body, prevailing wage rules for public work, permitting basics, common project types, labor and material market notes); how those local factors change an estimate (table); services and trades available in the state (link grid); cities and regions covered (link grid to SUB-AREA pages); project types common in the state; how remote estimating works for contractors there (3 steps); what we need; pricing and turnaround; nearby states; 6 to 8 local FAQs; final CTA.
SUB-AREA (city or metro) pages: 900 to 1,400 words, 8 to 14 H2s. They must contain at least 5 verified facts specific to that city or metro (permit office or jurisdiction name, climate, adopted codes and local amendments, typical building stock and project types, local conditions such as soils, seismic, wind, snow, or flood). If you cannot verify 5, do NOT write the page. Output "BLOCKED: insufficient verified local facts" and list what is missing. This protects us from doorway pages. Write a unique intro and unique local sections, link to the parent state page and 3 sibling cities, and never reuse state paragraphs.
For both: mark every local fact with its source in the report; if unverified, write [Verification Required]. Never claim a local office, team, projects, or clients.
HOME page: 1,900 to 2,400 words. Hero, quick answer, services cards (8 to 10) linking to service pages, trades grid linking to trade pages, process, deliverables, who we serve, how to choose an estimating company (comparison table), pricing and turnaround, coverage grid linking to state pages, FAQs, 3 CTA bands.

# 10. WRITING RULES

- American English. Plain, direct, expert, commercial. Grade 7 to 9 reading level. Sentences average 10 to 18 words. Paragraphs 3 sentences or fewer. Active voice.
- Serial (Oxford) commas always. Card labels end with a colon inside the bold: **Label:**.
- NO em dashes and NO en dashes anywhere. Use commas, colons, periods, or the word "to" for ranges.
- Every H2 except the Hero, FAQ, and final CTA is followed by one bold direct-answer sentence of 25 words or fewer.
- Define abbreviations on first use. Write for contractors: bid day, takeoff, scope gaps, addenda, sub quotes, margin, change orders.
- Banned phrases: in today's fast-paced world, it is important to note, let's dive in, game changer, revolutionary, seamlessly, robust solution, cutting-edge, state-of-the-art, unlock the power, elevate, tailored solutions, comprehensive solutions, one-stop shop, navigating the complexities, in conclusion.
- Brand name is always "Construction Estimations". Never "Estimatings". Do not start a section with the brand followed by "prices".
- Do not name competitors or their products. Name only software we use (from business-facts.md) and neutral standards bodies.

# 11. SEO OUTPUT

## Every page file starts with YAML front matter:

title: "[meta title, 60 characters or fewer, contains the primary keyword]"
meta_description: "[145 to 160 characters, benefit, soft CTA]"
slug: [slug]
page_type: [service|trade|area|subarea|home]
primary_keyword: "[keyword]"

---

Then the page body in Markdown. Also save {slug}.schema.json (JSON-LD: Service or ProfessionalService, FAQPage matching the FAQs, BreadcrumbList; LocalBusiness only if business-facts.md has a real address).
Internal links: use Markdown links to slugs in sitemap.json (even if the target is not written yet). Each page links to its parent hub, 3 sibling pages, and 2 cross-type pages (service, trade, and area). Use varied anchors.

# 12. OUTPUT FILES AND QA

For each page produce:

1. content/pages/{type}/{slug}.md (front matter plus page body only, no commentary)
2. content/pages/{type}/{slug}.schema.json
3. content/qa/{slug}.keywords.txt
4. content/qa/{slug}.report.md with: research snapshot (5 bullets), keyword triage and exclusions, keyword coverage table, sources used (URLs and dates), math checks, QA output, "Assumptions to confirm" (scope claims, process claims, software, standards numbers, anything assumed), 5 image ideas with alt text, and the ledger entry.
5. Update content/\_ledger.json.
   Then run: python scripts/qa_check.py content/pages/{type}/{slug}.md --type {service|trade|area|subarea|home} --primary "{primary keyword}" --keywords content/qa/{slug}.keywords.txt
   Fix every FAIL and re-run until it passes. Paste the final QA output into the report. A WARN on FAQ length is acceptable only for very short honest answers.
   Finish by showing me: the file paths, the QA result, the "Assumptions to confirm" list, and any BLOCKED items. Do not paste the whole page unless I ask.

---

Part 2: Business facts (content/\_config/business-facts.md)

# BUSINESS FACTS (single source of truth)

Brand: Construction Estimations
Website: [add URL]
Phone / Email: [add]
Address: [leave blank unless real]
Upload form URL: [add]
Coverage: All 50 US states, fully remote, ZIP-code-based pricing
Turnaround: Most estimates in 24 to 48 hours. Large or incomplete plan sets can take longer.
Quote policy: Free quote before any work starts. Approve only if it fits.
Confidentiality: NDA on request
Quality process: scope review, digital takeoff, second-estimator check before delivery
Deliverables: itemized Excel and PDF estimate (in your template or ours), marked-up plan sheets, assumptions and exclusions logs, overhead and profit on its own line
Accepted files: PDF, DWG, images, Dropbox or portal links, plus specs and addenda
Software we actually use: Bluebeam Revu, PlanSwift, On-Screen Takeoff, STACK, RSMeans data, CostWorks
Trade-specific tools we actually use: [e.g., Accubid, ConEst, McCormick Systems, FastPIPE, FastDUCT, Xactimate]
Services we offer: [list, one per line]
Trades we cover: [list, one per line]
We do NOT: install, fabricate, supply, or detail shop drawings; perform demolition; test or abate hazardous materials; adjust claims or act as a public adjuster; visit job sites
Pricing: Quoted upfront before work starts. From-prices: [blank unless real]
Revision policy: confirmed in the quote [edit if you have a set policy]
Real testimonials, credentials, years in business, project counts: [blank unless real]
Local offices: none
Escalation, rush, and other add-ons: [list only what is real]

---

Part 3: Starter config files
content/\_config/sitemap.json (edit slugs to match your site):
{
"home": "/",
"services": ["construction-estimating-services", "construction-takeoff-services", "commercial-estimating-services", "residential-estimating-services", "cost-estimating-services"],
"trades": ["concrete-estimating-services", "masonry-estimating-services", "rebar-estimating-services", "electrical-estimating-services", "framing-estimating-services"],
"areas": ["california", "texas", "florida"],
"subareas": {"california": ["los-angeles", "san-diego"], "texas": ["houston", "dallas"]}
}

content/\_ledger.json (start with this; Cursor appends one entry per page):
json
{ "pages": [] }

---

Part 4: Per-page request (paste this into Cursor each time)
Service or trade page
PAGE REQUEST
Sheet: content/keywords/keywords.xlsx
Page group: "Rebar Estimating Services"
Page type: TRADE
Slug: rebar-estimating-services
Notes: (optional) competitor URLs to review, services to include or exclude, length override
Follow .cursor/rules/content-system.mdc. Do the research, write the page, run QA, update the ledger, and show me the report.

State (area) page
PAGE REQUEST
Sheet: content/keywords/keywords.xlsx
Page group: "Construction Estimating Services Utah"
Page type: AREA
Slug: utah
State: Utah
Notes: link to these cities: Salt Lake City, Provo, St. George
Follow .cursor/rules/content-system.mdc. Verify the local facts, write the page, run QA, update the ledger, and show me the report.

City (sub-area) page
PAGE REQUEST
Sheet: content/keywords/keywords.xlsx
Page group: "Construction Estimating Services Salt Lake City"
Page type: SUB-AREA
Slug: utah/salt-lake-city
Parent: utah
City: Salt Lake City
Follow .cursor/rules/content-system.mdc. If you cannot verify at least 5 city-specific facts, return BLOCKED with what is missing.

Several pages in a row (optional)

Do these page groups one at a time, in order, and stop after each one so I can read the QA result before you continue: [list]

Part 5: QA script (scripts/qa_check.py)
#!/usr/bin/env python3
"""
Usage:
python scripts/qa_check.py content/pages/trade/rebar-estimating-services.md --type trade --primary "rebar estimating services" --keywords content/qa/rebar-estimating-services.keywords.txt
Types: service, trade, area, subarea, home
keywords.txt = one keyword per line (the ones you want checked for coverage).
Front matter (top of file) must contain: title, meta_description, slug
"""
import re, sys, argparse

RANGES = { # words (visible body, markdown symbols stripped), H2 count
"service": (2000, 2600, 15, 21),
"trade": (2000, 2600, 15, 21),
"home": (1900, 2400, 16, 21),
"area": (1200, 1700, 10, 16),
"subarea": (900, 1400, 8, 14),
}
BANNED = ["in today's fast-paced", "it is important to note", "let's dive in", "game changer",
"game-changer", "revolutionary", "seamlessly", "robust solution", "cutting-edge",
"state-of-the-art", "unlock the power", "elevate your", "navigating the complexities",
"one-stop shop", "100% accurate", "guaranteed accuracy"]

def main():
ap = argparse.ArgumentParser()
ap.add_argument("file"); ap.add_argument("--type", required=True, choices=RANGES)
ap.add_argument("--primary", required=True); ap.add_argument("--keywords")
a = ap.parse_args()
raw = open(a.file, encoding="utf-8").read()
fm, body = {}, raw
m = re.match(r"^---\n(.\*?)\n---\n", raw, re.S)
if m:
for line in m.group(1).split("\n"):
if ":" in line:
k, v = line.split(":", 1); fm[k.strip()] = v.strip().strip('"')
body = raw[m.end():]
ok = True
def res(flag, msg):
nonlocal ok
print(("PASS " if flag else "FAIL ") + msg)
ok = ok and flag
def warn(msg): print("WARN " + msg)

    # front matter
    t, d = fm.get("title", ""), fm.get("meta_description", "")
    res(0 < len(t) <= 60, f"meta title length {len(t)} (max 60)")
    res(145 <= len(d) <= 160, f"meta description length {len(d)} (145 to 160)")
    res(bool(fm.get("slug")), "slug present")

    # dashes and brand
    res(("\u2014" not in body) and ("\u2013" not in body), "no em dashes or en dashes")
    res("Estimatings" not in raw, 'brand never written as "Estimatings"')
    res("Construction Estimations" in body, 'brand "Construction Estimations" appears')
    res(not re.search(r"^\s*Construction Estimations\s+prices?\b", body, re.M | re.I),
        "no sentence opens with 'Construction Estimations prices'")
    low = body.lower()
    for b in BANNED:
        if b in low: res(False, f"banned phrase found: {b}")

    # headings
    h1 = re.findall(r"^# (.+)$", body, re.M)
    h2 = re.findall(r"^## (.+)$", body, re.M)
    res(len(h1) == 1, f"exactly one H1 (found {len(h1)})")
    res(len(re.findall(r"^#### ", body, re.M)) == 0, "no H4 or deeper")
    lo, hi, h2lo, h2hi = RANGES[a.type]
    res(h2lo <= len(h2) <= h2hi, f"H2 count {len(h2)} (target {h2lo} to {h2hi})")
    if h1: res(len(h1[0].split()) <= 13, f"H1 length {len(h1[0].split())} words (max 13)")
    seen_h2 = False
    for line in body.split("\n"):
        if line.startswith("## "): seen_h2 = True
        if line.startswith("### ") and not seen_h2: res(False, "H3 before any H2")

    # FAQ format
    faq = re.search(r"^## .*FAQ.*$", body, re.M)
    if faq:
        sec = body[faq.end():]
        nxt = re.search(r"^## ", sec, re.M)
        sec = sec[: nxt.start()] if nxt else sec
        res("### " not in sec, "FAQ questions are bold text, not H3")
        q = re.findall(r"^\*\*(.+\?)\*\*\s*$", sec, re.M)
        res(6 <= len(q) <= 10, f"FAQ count {len(q)} (target 6 to 10)")
        for blk in re.split(r"^\*\*.+\?\*\*\s*$", sec, flags=re.M)[1:]:
            n = len(blk.split())
            if not (22 <= n <= 62): warn(f"FAQ answer length {n} words (target 25 to 60): {blk.strip()[:50]}")
    else: res(False, "FAQ section found")

    # word count
    clean = re.sub(r"</?cite[^>]*>", " ", body)
    clean = re.sub(r"[|#*]|---", " ", clean)
    wc = len(clean.split())
    res(lo <= wc <= hi, f"word count {wc} (target {lo} to {hi})")

    # cards: 2-col table rows with bold label + colon and a long second cell
    bad = []
    for line in body.split("\n"):
        mm = re.match(r"^\| \*\*(.+?):\*\* \| (.*) \|$", line)
        if mm and len(mm.group(2).split()) >= 12:
            txt = mm.group(2); n = len(txt.split())
            s = len(re.findall(r"[.!?](?:\s|$)", txt))
            if not (20 <= n <= 30 and s == 2): bad.append((mm.group(1)[:35], n, s))
    res(not bad, f"cards are 2 sentences and 20 to 30 words (off: {bad})" if bad else "cards are 2 sentences and 20 to 30 words")
    # step cards (3-column row)
    for line in body.split("\n"):
        cells = [c.strip() for c in line.strip().strip("|").split(" | ")]
        if line.startswith("| ") and len(cells) == 3 and all(len(c.split()) >= 14 for c in cells) and not line.startswith("| **"):
            lens = [len(c.split()) for c in cells]
            if not all(20 <= n <= 31 for n in lens): warn(f"step card lengths {lens} (target 20 to 30)")

    # keywords
    prim = a.primary.lower()
    pc = low.count(prim)
    res(pc >= (10 if a.type in ("area", "subarea") else 14), f'primary keyword "{a.primary}" used {pc} times')
    res(prim in (h1[0].lower() if h1 else "") or prim in low[:900], "primary keyword in H1 or first 900 characters")
    res(any(prim in x.lower() for x in h2), "primary keyword in at least one H2")
    if a.keywords:
        print("\nKEYWORD COVERAGE")
        for k in [x.strip() for x in open(a.keywords, encoding="utf-8") if x.strip()]:
            c = low.count(k.lower())
            print(f"  {c:>3}  {k}" + ("   <-- MISSING (use natural variant or add to exclusions list)" if c == 0 else ""))
    print("\nRESULT:", "ALL CHECKS PASSED" if ok else "FIX THE FAILED CHECKS AND RE-RUN")
    sys.exit(0 if ok else 1)

if **name** == "**main**":
main()

---

How to run it
Create the folders, paste Parts 1, 2, 3, and 5 into the files above, and put your Excel sheet in content/keywords/.
Fill in Part 2 with what is true. Cursor will not claim anything that is not there.
Paste one request from Part 4 into Cursor. Use a strong model with web search turned on.
Read the report’s “Assumptions to confirm” before anything is published. That is where Cursor lists the scope, process, software, and standards claims it had to assume.
Do one page at a time at first. The ledger keeps headings, hero angles, and FAQs from repeating across pages.
