export const blueprint = {
  seo: {
    title: "Blueprint Estimating Services | Blueprint Takeoff",
    description:
      "Blueprint estimating services that turn plans into quantities and prices. Upload blueprints, get a free quote, and an itemized estimate in 24 to 48 hours.",
    path: "/blueprint-estimating-services/",
  },
  hero: {
    title: "Blueprint Estimating Services That Turn Plans Into Bid Numbers",
    body: "Counts, lengths, areas, and volumes are measured from your blueprints, then priced for material and labor. Contractors upload PDF, DWG, or image plans, get a free quote first, and receive an itemized blueprint estimate in 24 to 48 hours.",
    stats: [
      { value: "24 to 48 hrs", label: "typical turnaround" },
      { value: "EA + LF + SF + CY", label: "counts, lengths, areas, and volumes" },
      { value: "50 states", label: "covered remotely" },
      { value: "$0", label: "quote before work starts" },
    ],
    primaryCta: "Upload Blueprints",
    secondaryCta: "Get a Free Quote",
    note: "Free quote first. NDA on request. Approve only if it fits. We estimate from blueprints. We do not design, stamp, or build the work.",
  },
  cover: {
    title: "What Blueprint Estimating Services Include: Quantities From Your Plan Set",
    paragraphs: [
      "Blueprint estimating services measure the quantities drawn on your plans and organize them by trade or cost code. A blueprint estimator runs a digital takeoff and delivers an itemized estimate you can bid from.",
      "Need a blueprint takeoff service for one bid, or a blueprint estimator on call all year? Blueprint takeoff services cover one trade or the full set from first budget to final bid, so you can price more work without adding payroll.",
    ],
    systemsLabel: "What a blueprint takeoff can cover",
    systems: [
      "Architectural sheets",
      "Structural sheets",
      "Civil and site sheets",
      "MEP sheets",
      "Schedules and details",
      "Addenda revisions",
      "PDF, DWG, and image plans",
      "Marked-up plan sheets",
    ],
  },
  method: {
    title: "How a Blueprint Takeoff Service Turns Drawing Dimensions Into Quantities",
    intro: "A blueprint takeoff service starts with the dimension on the sheet, then converts it to the unit you buy.",
    note: "Counts come from symbols and schedules. Lengths follow the run. Areas are length times width. Volumes are area times thickness, then cubic feet divided by 27 for cubic yards.",
    columns: ["Quantity", "How it is built", "How we show it"],
    rows: [
      ["Count", "Each symbol or scheduled item", "Each, by type"],
      ["Length", "Measured along the run", "Linear feet"],
      ["Area", "Length times width", "Square feet"],
      ["Volume", "Area times thickness, then divided by 27", "Cubic yards"],
    ],
    example:
      "Illustrative example: a slab 30 feet by 20 feet is 600 square feet. At 5 inches thick, the volume is 250 cubic feet. Divided by 27, that is about 9.3 cubic yards before waste. A 5 percent waste allowance adds about 0.5 cubic yards, for about 9.7 cubic yards.",
    prompt: "Bid due this week? Get your free blueprint quote and see your price first.",
    cta: "Get Blueprint Quote",
  },
  services: {
    title: "Blueprint Takeoff Services and Blueprint Estimating Services We Offer",
    intro: "Pick a blueprint takeoff service for quantities, or blueprint estimating services with material and labor priced.",
    takeoffLabel: "Blueprint Takeoff Services",
    takeoff: [
      {
        title: "Full Plan-Set Takeoffs",
        body: "Architectural, structural, and civil sheets measured into one quantity list. Each trade stays in its own group so the bid stays clear.",
      },
      {
        title: "Single-Trade Blueprint Takeoffs",
        body: "One trade measured from the sheets that matter for that bid. Concrete, framing, finishes, and MEP can each stand alone.",
      },
      {
        title: "Schedule-Driven Takeoffs",
        body: "Doors, windows, fixtures, and equipment counted from schedules. Each item is tied back to the sheet it came from.",
      },
      {
        title: "Revision and Addenda Takeoffs",
        body: "Revised clouds and addenda sheets checked against the first takeoff. You get a clear list of what changed.",
      },
      {
        title: "Preliminary Blueprint Takeoffs",
        body: "Early blueprints labeled preliminary when design is still moving. Assumptions are written down so the range is clear.",
      },
    ],
    estimatingLabel: "Blueprint Estimating and Pricing",
    estimating: [
      {
        title: "Blueprint Estimating Services",
        body: "Material and labor priced from the takeoff, with scope, assumptions, and exclusions written out. Use the estimate to bid and to defend the number.",
      },
      {
        title: "Labor and Material Splits",
        body: "Crew hours are built from the assemblies on the blueprints, with your rates or stated assumptions. Material-only options are shown apart.",
      },
      {
        title: "Trade Package Pricing",
        body: "Each trade can be priced on its own when you need sub packages. Overhead and profit stay on their own lines.",
      },
      {
        title: "Template Delivery",
        body: "Quantities and prices are delivered in your Excel template or ours. Cost codes follow the order you send.",
      },
      {
        title: "Blueprint Revision Pricing",
        body: "Fast updates when a new set replaces the last one. You get a clear list of quantity changes before the bid goes out.",
      },
    ],
  },
  steps: {
    title: "How Blueprint Estimating Services Move From Upload to a Bid File",
    intro: "Three steps take you from blueprint upload to a bid-ready number, with your free quote first.",
    items: [
      {
        title: "Upload and get your quote",
        body: "Upload blueprints with your ZIP code and bid date. You get a free quote before work starts, and you approve only if it fits.",
      },
      {
        title: "Takeoff and pricing",
        body: "A blueprint estimator measures counts, lengths, areas, and volumes from the plan set. Quantities are priced with ZIP-code-based material and labor rates.",
      },
      {
        title: "Check and deliver",
        body: "A second estimator checks the quantities and the units. You receive Excel and PDF files, with marked-up plans and an assumptions log.",
      },
    ],
    prompt: "Ready to see your number? Upload your blueprints for a free quote.",
    cta: "Get My Blueprint Estimate",
  },
  comparison: {
    title: "Blueprint Takeoff vs Blueprint Estimate: What You Receive",
    intro: "A blueprint takeoff is the quantity list. A blueprint estimate prices that list. You can stop at either one.",
    columns: ["Factor", "Blueprint takeoff", "Blueprint estimate"],
    rows: [
      ["You receive", "Counts, lengths, areas, and volumes", "Those quantities plus a price"],
      ["Pricing", "Left for you or your supplier", "Material, labor, overhead, and profit"],
      ["Best use", "Supplier quotes and your own pricing", "A number you can bid"],
      ["Files", "Excel quantities and marked-up plans", "Excel and PDF estimate"],
      ["Still included", "Assumptions, exclusions, and units", "The same notes, plus the price lines"],
    ],
  },
  scope: {
    title: "What a Blueprint Estimator Measures, and in Which Units",
    intro: "Each item is counted in the unit it is bought or installed in, so the list can be priced.",
    columns: ["Element", "What we measure", "Units"],
    rows: [
      ["Counted items", "Fixtures, doors, equipment, and scheduled pieces", "EA"],
      ["Linear work", "Walls, pipe, curb, and trim", "LF"],
      ["Surfaces", "Floors, roofs, walls, and paving", "SF, SY"],
      ["Concrete", "Slabs, footings, and walls", "CY, SF"],
      ["Earthwork", "Cut, fill, and trench volumes from civil plans", "CY"],
      ["Framing", "Studs, joists, and sheathing", "LF, EA, SF"],
      ["Finishes", "Floor, ceiling, and paint areas", "SF, SY"],
      ["MEP", "Fixtures, devices, and runs shown on the plans", "EA, LF"],
      ["Openings", "Doors, windows, and frames", "EA"],
      ["Sitework", "Pavement, curb, and utilities from the civil set", "SF, LF, CY"],
    ],
    key: "Key: EA = each. LF = linear feet. SF = square feet. SY = square yards. CY = cubic yards. MEP = mechanical, electrical, and plumbing.",
  },
  pricingMethod: {
    title: "What Goes Into Blueprint Estimating Services: Our Pricing Checks",
    intro: "When you want prices with the quantities, every estimate follows these checks.",
    columns: ["Check", "How we handle it"],
    items: [
      { title: "Scope first", body: "drawings, specs, and addenda reviewed before measuring" },
      { title: "Units", body: "each quantity labeled with the unit it is bought in" },
      { title: "Trade split", body: "quantities grouped so trades are not mixed together" },
      { title: "Addenda", body: "revised sheets checked against the quantity list" },
      { title: "Waste and overage", body: "shown as a separate allowance so you can adjust it" },
      { title: "Current material costs", body: "follow supplier pricing for your ZIP code when pricing is included" },
      { title: "Local labor rates", body: "priced to your city and region, not a national average" },
      { title: "Preliminary label", body: "early blueprints are marked preliminary" },
      { title: "Missing information", body: "gaps written in the assumptions and exclusions log" },
      { title: "Overhead and profit lines", body: "visible so that you can set your margin" },
      { title: "Your cost codes", body: "used when you send a template" },
      { title: "Second-estimator review", body: "quantities, units, and totals checked before delivery" },
    ],
  },
  types: {
    title: "Blueprint Project Types We Estimate From Plan Sets",
    intro: "The sheet set changes the quantities, so the takeoff follows the project type.",
    groups: [
      { title: "Commercial buildings", body: "offices, retail, schools, and healthcare plan sets" },
      { title: "Residential", body: "custom homes, multifamily, and additions" },
      { title: "Industrial", body: "warehouses, plants, and large floor plates" },
      { title: "Site and civil", body: "grading, utilities, and paving from civil blueprints" },
      { title: "Renovations", body: "existing plans plus new work sheets" },
      { title: "Preliminary budgets", body: "early quantities labeled while design is still moving" },
    ],
  },
  csi: {
    title: "How Blueprint Estimating Services Group Quantities by CSI Division",
    intro: "Quantities can be delivered by MasterFormat division so your estimate and sub quotes use the same structure.",
    columns: ["Structure", "Envelope and finishes", "Site and MEP"],
    rows: [
      ["Concrete (03 00 00)", "Thermal and Moisture Protection (07 00 00)", "Earthwork (31 00 00)"],
      ["Masonry (04 00 00)", "Openings (08 00 00)", "Plumbing (22 00 00)"],
      ["Metals (05 00 00)", "Finishes (09 00 00)", "HVAC (23 00 00)"],
      ["Wood and Plastics (06 00 00)", "Furnishings when shown", "Electrical (26 00 00)"],
    ],
  },
  software: {
    title: "Takeoff Tools We Use for Blueprint Estimating Services",
    intro: "We work in the same takeoff and cost tools estimators know, then deliver files you can open right away.",
    rows: [
      { label: "Digital takeoff", value: "Bluebeam Revu, PlanSwift, On-Screen Takeoff, STACK" },
      { label: "Cost data", value: "RSMeans data, CostWorks, when the quote includes pricing" },
      { label: "Rate sources", value: "your supplier quotes and labor rates, or local rate references" },
      { label: "Delivery", value: "Excel and PDF, in your template or ours" },
    ],
    note: "Every estimate runs through the relevant software, then a second estimator reviews it by hand.",
  },
  start: {
    title: "What We Need to Start Your Blueprint Takeoff",
    intro: "Send what you have, and your quote confirms what can be measured.",
    drawingsLabel: "Drawings and specs",
    drawings: [
      "Blueprints in PDF, DWG, or images, or a Dropbox or portal link",
      "Specs, schedules, and addenda",
      "Civil sheets when the scope includes sitework",
    ],
    detailsLabel: "Project details",
    details: [
      "Project ZIP code and bid due date",
      "Quantities only, or quantities plus pricing",
      "Trades to include, and your cost-code template if you have one",
    ],
  },
  includes: {
    title: "What Your Blueprint Estimate Includes",
    intro: "A package you can bid from, with every unit labeled.",
    items: [
      { title: "Quantity list", body: "counts, lengths, areas, and volumes" },
      { title: "Trade or CSI split", body: "so scopes stay separate" },
      { title: "Units", body: "on every line" },
      { title: "Material list", body: "when you need supplier quantities" },
      { title: "Waste allowance", body: "shown as its own line" },
      { title: "Pricing", body: "only when your quote includes it" },
      { title: "Assumptions and exclusions logs", body: "written down" },
      { title: "Marked-up plan sheets", body: "color-coded to show what was measured" },
      { title: "Addenda check", body: "revised sheets noted" },
      { title: "Preliminary label", body: "when drawings are incomplete" },
      { title: "Overhead and profit", body: "on its own line if pricing is included" },
      { title: "Excel and PDF files", body: "in your template or ours" },
    ],
  },
  why: {
    title: "Why Contractors Choose Blueprint Estimating Services for Bid Day",
    intro: "Speed, clear units, and a written trail for every quantity.",
    items: [
      "24 to 48 Hour Turnaround",
      "Free Quote First",
      "Quantities From Blueprints",
      "Second-Estimator Check",
      "ZIP-Code Pricing",
      "NDA on Request",
      "Excel and PDF Files",
      "Nationwide Remote Service",
    ],
    close:
      "Our blueprint takeoff services work project by project. Construction Estimations is an estimating company on call, with a blueprint estimator for hire when your bid calendar fills up.",
  },
  pricing: {
    title: "Blueprint Estimating Pricing and Turnaround",
    intro: "You see the price first, and most estimates arrive in 24 to 48 hours.",
    columns: ["What affects your quote", "Why it matters"],
    items: [
      { title: "Sheet count and trades", body: "more sheets and trades means more measuring time" },
      { title: "Plan completeness", body: "full sets move faster than early sketches" },
      { title: "Quantities only or priced", body: "pricing adds a cost pass after the takeoff" },
      { title: "Bid due date", body: "tell us when you upload" },
    ],
  },
  coverage: {
    title: "Blueprint Estimating Services Near Me: Remote Coverage in All 50 States",
    body: "Searching for blueprint estimating services near me? We work online with contractors in all 50 states.",
    note: "ZIP-code pricing builds in local labor and material rates when the quote includes pricing, so you do not need a local office.",
    areasLabel: "Popular searches",
    areas: [
      "blueprint estimating services California",
      "blueprint estimating services Texas",
      "blueprint estimating services Florida",
      "blueprint estimating services Georgia",
      "blueprint estimating services Arizona",
      "blueprint estimating services Illinois",
      "blueprint estimating services Minnesota",
      "blueprint estimating services Colorado",
    ],
  },
  faq: {
    title: "Blueprint Estimating FAQs",
    items: [
      {
        question: "What do blueprint estimating services include?",
        answer:
          "Measured counts, lengths, areas, and volumes from your blueprints, grouped by trade or CSI division, plus marked-up sheets and an assumptions and exclusions log. Pricing is included when your quote says so. You receive Excel and PDF files.",
      },
      {
        question: "How much do blueprint estimating services cost?",
        answer:
          "Cost depends on sheet count, number of trades, plan completeness, and whether you want pricing. Construction Estimations gives you a free quote before any work starts, so you see the price first. The quote is free. The estimate is priced.",
      },
      {
        question: "How long does a blueprint takeoff take?",
        answer:
          "Most blueprint takeoff services are delivered in 24 to 48 hours. Large plan sets or incomplete drawings can take longer, so share your bid due date when you upload.",
      },
      {
        question: "What is the difference between a blueprint takeoff and a blueprint estimate?",
        answer:
          "A blueprint takeoff lists quantities and units. A blueprint estimate prices those quantities with material, labor, overhead, and profit. You can order either one.",
      },
      {
        question: "Can I order a blueprint takeoff service without pricing?",
        answer:
          "Yes. A blueprint takeoff service can stop at quantities. Use it for supplier quotes or your own pricing. Say that when you upload so the quote matches.",
      },
      {
        question: "Do you design, stamp, or build from the blueprints?",
        answer:
          "No. We estimate from the plans you upload. We do not design, stamp, survey, or build the work. Marked-up sheets show what was measured.",
      },
      {
        question: "Can I hire a blueprint estimator for one project or for the year?",
        answer:
          "Either. Send one plan set, or keep a blueprint estimator on call when bids stack up. Each job still starts with a free quote.",
      },
      {
        question: "What file types do you accept for blueprints?",
        answer:
          "PDF, DWG, and image plans, plus Dropbox or portal links. Specs and addenda help the takeoff. Incomplete sets are labeled preliminary in the assumptions log.",
      },
      {
        question: "Is this the same as construction takeoff services?",
        answer:
          "They are close. This page focuses on estimating from blueprints and plan sets. Construction takeoff services is the broader quantity hub. Both measure plans. Neither designs or installs the work.",
      },
    ],
  },
  finalCta: {
    title: "Get Your Blueprints Counted Before Bid Day",
    body: "Upload your plans to Construction Estimations for blueprint estimating services with a free quote before work starts.",
    primaryCta: "Upload Blueprints",
    secondaryCta: "Request My Free Quote",
    note: "NDA on request. Approve only if the quote fits.",
  },
} as const;
