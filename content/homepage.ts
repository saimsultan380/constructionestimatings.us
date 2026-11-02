export const homepage = {
  hero: {
    title:
      "Construction Estimating Services With Bid-Ready Estimates in 24 to 48 Hours",
    subhead:
      "Every Bid You Skip Is a Job Your Competitor Wins. Stop Losing Bids. Start Winning Them",
    body: "Construction Estimatings is a nationwide construction estimating company in the USA that provides the best construction estimating services for contractors, builders, and developers. Upload your plans and get a clear takeoff and construction estimate for most projects within 24 to 48 hours.",
    trust: [
      "24 to 48-hour turnaround",
      "All 50 states",
      "NDA on request",
    ] as const,
    callLabel: "Call Us on",
    primaryCta: "Upload Your Plans",
    secondaryCta: "Get a Free Quote",
    note: "Free quote before any work starts.",
  },
  intro: {
    title:
      "Professional Construction Estimating Services That Turn Plans Into Winning Bids",
    paragraphs: [
      "Professional construction cost estimating services turn your drawings into measured quantities and a priced estimate. A building construction estimator reviews scope, runs the takeoff, applies local material and labor costs, and delivers an itemized estimate you can bid, budget, or negotiate with.",
      "As a construction estimating company built around bid deadlines, we handle construction estimating for general contractors, subcontractors, builders, developers, and owners. You bid more jobs without adding estimators to payroll.",
    ],
    bandTitle: "Bid due this week?",
    bandBody: "Send your plans and get a free quote before work starts.",
    bandCta: "Upload Your Plans",
  },
  failures: {
    title: "Why Bids Fail Before Bid Day",
    intro:
      "Rushed takeoffs, missed scope, and old pricing quietly cost contractors jobs and margin.",
    items: [
      {
        title: "Rushed takeoffs:",
        body: "When one estimator is juggling three bids, quantities get skimmed, and scope gets missed.",
      },
      {
        title: "Stale pricing:",
        body: "Material and labor costs move. A number from last quarter can erase your margin.",
      },
      {
        title: "Missed addenda:",
        body: "Late addenda change quantities. If they are not in the takeoff, they are not in your bid.",
      },
    ],
    solutionTitle: "We built our process to fix all three:",
    solutionBody:
      "Every estimate starts with a scope and addenda review, uses current ZIP-code pricing, and gets a second-estimator check before delivery. Send your plans and bid with numbers you can defend.",
    solutionCta: "Request a Free Estimate",
  },
  services: {
    title: "Our Construction Estimating Services",
    intro:
      "From early budgets to final bid numbers, our estimating services cover every stage of your project.",
    items: [
      {
        key: "cost",
        title: "Cost Estimating Services",
        body: "Detailed cost estimation services built from measured quantities and local pricing. You get itemized numbers for budgets, bids, and owner approvals.",
        slot: "svc-cost",
        ratio: "16 / 10",
      },
      {
        key: "takeoff",
        title: "Construction Material Takeoff Services",
        body: "Fast, organized quantity takeoff and estimation from PDF, DWG, and image plans. Every count, length, and area is grouped by trade for easy pricing.",
        slot: "svc-takeoff",
        ratio: "16 / 10",
      },
      {
        key: "design",
        title: "Design Estimating Services",
        body: "Cost feedback while drawings develop keeps design decisions within budget. We update the estimate as your architects and engineers revise the plans.",
        slot: "svc-design",
        ratio: "3 / 4",
      },
      {
        key: "commercial",
        title: "Commercial Construction Estimating Services",
        body: "Commercial construction estimating services for offices, retail, healthcare, schools, and mixed-use buildings. Expect clear scope notes, assumptions, and exclusions on every estimate.",
        slot: "svc-commercial",
        ratio: "16 / 10",
      },
      {
        key: "residential",
        title: "Residential Cost Estimating Services",
        body: "Residential construction estimating services for custom homes, multifamily, additions, and remodels. Clear line items help you quote homeowners and builders with confidence.",
        slot: "svc-residential",
        ratio: "3 / 4",
      },
      {
        key: "industrial",
        title: "Industrial Construction Estimating",
        body: "Industrial construction estimating for warehouses, plants, and heavy-duty facilities. Large scopes are broken into trades, so nothing slips through and every package stays easy to price.",
        slot: "svc-industrial",
        ratio: "16 / 10",
      },
      {
        key: "freelance",
        title: "Freelance Estimating Services",
        body: "Need a freelance estimator for one bid? Our construction estimators for hire work project by project, so you scale up without payroll.",
        slot: "svc-freelance",
        ratio: "1 / 1",
      },
      {
        key: "bid",
        title: "Construction Bid Estimating",
        body: "Bid-day numbers with scope, assumptions, and exclusions written out. Use them to price with confidence, compare sub quotes, and defend your bid.",
        slot: "svc-bid",
        ratio: "1 / 1",
      },
      {
        key: "change",
        title: "Preliminary and Change Order Estimating",
        body: "Early budgets before drawings are final, plus fast pricing when scope changes after award. Both keep owners and contractors aligned on cost.",
        slot: "svc-change",
        ratio: "16 / 10",
      },
    ],
  },
  mep: {
    title: "MEP Estimating Services",
    intro:
      "Our MEP estimators price mechanical, electrical, and plumbing scopes from one plan set, so your trades stay aligned.",
    items: [
      {
        key: "hvac",
        title: "HVAC and Mechanical Estimating:",
        body: "Mechanical estimating services cover HVAC equipment, ductwork, piping, insulation, and controls. Quantities come straight from the mechanical sheets and specs.",
        slot: "mep-hvac",
      },
      {
        key: "electrical",
        title: "Electrical Estimating Services:",
        body: "Electrical takeoffs count fixtures, devices, panels, conduit, wire, and low-voltage systems. Each item is tied to the drawing sheet it came from.",
        slot: "mep-electrical",
      },
      {
        key: "plumbing",
        title: "Plumbing Estimating Services:",
        body: "Plumbing takeoff services cover fixtures, piping, valves, drains, and water heaters. We price by system so you can compare sub bids easily.",
        slot: "mep-plumbing",
      },
      {
        key: "fire",
        title: "Fire Sprinkler and Fire Protection Estimating:",
        body: "We measure sprinkler heads, piping, and risers for fire protection scopes. Results drop into your bid package alongside the rest of MEP.",
        slot: "mep-fire",
      },
    ],
  },
  trades: {
    title: "Construction Takeoff Services by Trade",
    intro:
      "Pick your trade and get a takeoff measured and priced the way that trade actually works.",
    items: [
      {
        title: "Concrete Takeoff Services",
        body: "Footings, slabs, walls, columns, and flatwork are measured in cubic yards and square feet. Rebar and formwork can be included in the same takeoff.",
        slot: "trade-concrete",
      },
      {
        title: "Masonry Takeoff Services",
        body: "Block, brick, stone, and precast are counted by wall area and unit. Residential and commercial masonry scopes are kept clean for easy bidding.",
        slot: "trade-masonry",
      },
      {
        title: "Drywall Estimating Services",
        body: "Sheetrock, framing, insulation, and finishing are measured by wall and ceiling area. General contractors and drywall subs use it to quote faster.",
        slot: "trade-drywall",
      },
      {
        title: "Painting Estimating Services",
        body: "Interior and exterior paint, coatings, and wall finishes are measured by surface area. You get quantities ready for labor and material pricing.",
        slot: "trade-painting",
      },
      {
        title: "Structural Steel and Metals Takeoff",
        body: "Beams, columns, decking, joists, and miscellaneous metals are counted by piece and weight. Our structural steel takeoff services support fabricators and steel contractors.",
        slot: "trade-steel",
      },
      {
        title: "Lumber and Framing Estimating",
        body: "Rough and finish carpentry, trusses, and sheathing are measured from framing plans. Lumber estimating services help builders order the right quantities.",
        slot: "trade-lumber",
      },
      {
        title: "Millwork Takeoff Services",
        body: "Cabinets, casework, trim, and countertops are counted from elevations and details. Millwork contractors get clear, itemized quantities ready for shop pricing.",
        slot: "trade-millwork",
      },
      {
        title: "Sitework and Earthwork Takeoff",
        body: "Cut and fill, grading, utilities, paving, and site concrete are measured from civil plans. Earthwork takeoff services give excavators dependable volumes.",
        slot: "trade-sitework",
      },
      {
        title: "Roofing and Gutter Takeoff Services",
        body: "Roof area, flashing, insulation, and gutters are measured from roof plans. Roofers get quantities that are ready for material orders.",
        slot: "trade-roofing",
      },
      {
        title: "Demolition Estimating Services",
        body: "Selective and full demolition are measured by area, volume, and haul-off. Scope notes flag items to verify on site before you bid.",
        slot: "trade-demolition",
      },
      {
        title: "Solar Takeoff Services",
        body: "Panel counts, racking, trenching, and electrical runs are taken off solar plans. Installers get quantities that are ready to price.",
        slot: "trade-solar",
      },
      {
        title: "Flooring Takeoff Services",
        body: "Tile, carpet, wood, and resilient flooring are measured by room and transition. Material counts include the area you need to order.",
        slot: "trade-flooring",
      },
    ],
  },
  anatomy: {
    title: "What Goes Into a Construction Cost Estimate",
    intro:
      "Every estimate we prepare prices six core components, so no cost category gets left out.",
    items: [
      {
        title: "Scope",
        body: "We read drawings, specs, and addenda to confirm exactly what you must price. Gaps and conflicts are flagged before the takeoff begins.",
      },
      {
        title: "Quantities",
        body: "Every wall, slab, fixture, and run is measured from your plan set. Quantities are grouped by trade and CSI division for easy sub quotes.",
      },
      {
        title: "Labor",
        body: "Crew hours are priced to your location, including prevailing wage where it applies. Labor burden is shown so you can see the real cost.",
      },
      {
        title: "Materials",
        body: "Unit prices follow current supplier pricing for your ZIP code. Delivery is added where it affects the number, so totals reflect real purchase cost.",
      },
      {
        title: "Equipment",
        body: "Cranes, lifts, small tools, and rentals are priced against your schedule and site conditions. Heavy sitework gets equipment hours, not guesses.",
      },
      {
        title: "Subcontractor costs",
        body: "Specialty scopes you will sublet are carried as allowances or quotes. They roll into your total with overhead and profit on a separate line.",
      },
    ],
  },
  stages: {
    title: "Construction Cost Estimating Services for Every Project Stage",
    intro:
      "Estimating needs change as a project moves forward, so we match the estimate to your stage.",
    items: [
      {
        title: "Concept:",
        body: "Rough budget ranges help owners and developers test feasibility before design is complete. Expect wider ranges at this stage, with assumptions listed.",
      },
      {
        title: "Design:",
        body: "Cost feedback as drawings develop keeps design choices inside budget. We update the numbers whenever the architects or engineers revise the plans.",
      },
      {
        title: "Bid:",
        body: "Detailed, bid-ready estimates are built from complete drawings. You submit a number you can defend and honor once the job is awarded.",
      },
      {
        title: "Construction:",
        body: "During the build, we price changes and compare costs against the original scope. You see where the money is going.",
      },
      {
        title: "Change orders:",
        body: "We re-price added or removed scope so every change order reflects its real cost impact. Owners and contractors get a clear basis to agree on.",
      },
    ],
  },
  methods: {
    title: "Construction Estimating Methods We Use",
    intro:
      "We choose the estimating method that fits your drawings and your decision, from quick budgets to bid-day numbers.",
    items: [
      {
        key: "bottom-up",
        title: "Bottom-up estimating:",
        body: "Every item is measured and priced individually from complete drawings. It is the standard for bid-day numbers and gives you the most control.",
      },
      {
        key: "unit",
        title: "Unit cost estimating:",
        body: "Measured quantities are multiplied by unit prices for each work item. It works well for repeat scopes such as concrete, drywall, and sitework.",
      },
      {
        key: "assembly",
        title: "Assembly estimating:",
        body: "We price complete systems, such as a wall or roof assembly, as one item. It speeds up estimates while the design is still developing.",
      },
      {
        key: "parametric",
        title: "Parametric estimating:",
        body: "A cost per square foot or another driver gives fast budgets from limited information. Owners and developers use it for early feasibility checks.",
      },
    ],
  },
  software: {
    title: "Estimating Software and Quality Checks Behind Every Estimate",
    paragraphs: [
      "Every estimate runs through professional takeoff software, then a second estimator checks it by hand.",
      "Our construction estimators work in Bluebeam, PlanSwift, On-Screen Takeoff, STACK, Xactimate, Trimble, Quest Estimating, FastDUCT, FastPIPE, and RSMeans data. That lets us open your plan set and deliver in your format.",
      "We cover concrete, masonry, earthwork, mechanical, electrical, plumbing, and more in one takeoff, so nothing falls between trades. The best estimate is the one you can trace line by line, from quantity to price. Early budgets carry wider ranges because drawings are less complete, so we update assumptions as plans mature and you never bid on outdated numbers.",
    ],
    names: [
      "Bluebeam",
      "PlanSwift",
      "On-Screen Takeoff",
      "STACK",
      "Xactimate",
      "Trimble",
      "Quest Estimating",
      "FastDUCT",
      "FastPIPE",
      "RSMeans data",
    ],
  },
  process: {
    title: "Our Technical Estimating Process, From Upload to Delivery",
    intro:
      "Upload your plans, and we handle measuring, pricing, and review before the files reach you.",
    steps: [
      {
        title: "Digital plan uploads:",
        body: "Send PDFs, DWG files, images, or a Dropbox link with your ZIP code and bid date. We process drawings digitally for fast, organized quantity extraction.",
      },
      {
        title: "Takeoff software tools:",
        body: "Our building construction estimators use professional digital takeoff tools. Measurements stay aligned with every architectural and engineering sheet in your plan set.",
      },
      {
        title: "Location-based pricing:",
        body: "Material and labor costs are adjusted to your project ZIP code and current market rates. Your estimate reflects where you build, not a national average.",
      },
      {
        title: "Second-estimator review:",
        body: "A second estimator checks quantities, math, and assumptions. Then you receive Excel and PDF files, in your template or ours.",
      },
    ],
    form: {
      title: "Upload Plans form:",
      fields: {
        fullName: "Full name",
        email: "Email",
        phone: "Phone",
        zip: "ZIP code",
        message: "Your message",
        files: "Upload Files",
        bidDueDate: "Bid due date",
      },
      submit: "Get a Free Quote",
      note: "Prefer an online construction estimate? Share your plans, and we quote first. NDA on request.",
    },
  },
  deliverables: {
    title: "What You Receive With Every Estimate",
    intro: "Every estimate arrives as an itemized package your team can bid from.",
    items: [
      "Quantity takeoff: measured from your drawings",
      "Material and labor breakdown: line by line",
      "Marked-up plans: color-coded to show what was counted",
      "Assumptions and exclusions logs: every judgment call and unpriced scope written down",
      "Overhead and profit: shown on its own line",
      "Excel and PDF files: your template or ours",
    ],
  },
  audiences: {
    title: "Who We Serve in the USA:",
    items: [
      "General Contractors",
      "Subcontractors",
      "Home Builders",
      "Developers",
      "Architects",
      "Designers",
      "Engineers",
      "Vendors and Suppliers",
      "Owners",
    ],
  },
  why: {
    title: "Why Contractors Choose Construction Estimatings",
    body: "Call us an estimating company, an estimating firm, or a national estimator. Our construction estimating service is built around your deadline, your plans, and your format.",
    items: [
      "24 to 48 Hour Turnaround",
      "Free Quote First",
      "ZIP-Code Local Pricing",
      "Written Assumptions and Exclusions",
      "Excel and PDF Formats",
      "NDA on Request",
      "Nationwide Remote Service",
    ],
  },
  pricing: {
    title: "Construction Estimating Pricing and Turnaround",
    intro:
      "You get a quote before work starts, and most estimates arrive in 24 to 48 hours.",
    offer:
      "Send your plans, get your price. Upload your plans to Construction Estimatings and get a free quote.",
    cta: "Request My Free Quote",
    columns: ["What affects your quote", "Why it matters"] as const,
    rows: [
      ["Project size", "More area means more measuring time"],
      ["Number of trades", "Each trade adds its own takeoff"],
      ["Drawing completeness", "Clean plans speed up the estimate"],
      ["Bid deadline", "Tell us your date when you upload"],
    ],
  },
  coverage: {
    title: "Construction Estimating Services Near Me: We Cover the USA",
    body: "Searching for construction estimating services near me? Our estimators work online with contractors in all 50 states.",
    fact: "All 50 states",
  },
  faq: {
    title: "Construction Estimating FAQs",
    aside: "Free quote before any work starts.",
    items: [
      {
        question: "What are construction estimating services?",
        answer:
          "Construction estimating services turn your plans and specs into measured quantities and a priced estimate. A building construction estimator reviews scope, runs the takeoff, applies local material and labor costs, and delivers an itemized estimate you can use to bid or budget.",
      },
      {
        question: "How much do construction estimating services cost?",
        answer:
          "Cost depends on project size, number of trades, drawing quality, and your deadline. Construction Estimatings gives you a free quote before any work starts, so you know the price first. Upload your plans to get yours.",
      },
      {
        question: "How long does a construction estimate take?",
        answer:
          "Most estimates are delivered in 24 to 48 hours. Large, complex, or multi-trade projects can take longer, so share your bid date when you upload, and we can plan around it.",
      },
      {
        question: "What is the difference between a quantity takeoff and a cost estimate?",
        answer:
          "A quantity takeoff measures what is on the drawings, such as square feet, linear feet or cubic yards. A cost estimate then prices those quantities with labor, materials, equipment, overhead, and profit. Our construction takeoff services can stand alone or feed a full bid estimate.",
      },
      {
        question: "How accurate are your construction estimates?",
        answer:
          "Accuracy depends on how complete your drawings are. Every estimate starts with a scope review, uses ZIP-code-based pricing, and gets a second-estimator check. Early budgets carry wider ranges than final bid sets, and we list assumptions so you can trace each number. The best estimate is one you can verify line by line.",
      },
      {
        question: "How do I choose a construction estimating company?",
        answer:
          "Ask every construction estimating company the same questions: how fast they deliver, what the package includes, how pricing is set, who checks the numbers, what it costs before work starts, and whether they sign an NDA. The best construction estimating services answer all six clearly and in writing.",
      },
      {
        question: "Should I outsource estimating or hire an in-house estimator?",
        answer:
          "An in-house estimator is a fixed salary, even in slow months. Outsourcing construction estimating lets you scale up for busy bid weeks and pay per project. Some contractors keep one estimator in-house and send overflow bids to outsource estimating services.",
      },
      {
        question: "What do you need from me to start an estimate?",
        answer:
          "Send plans in PDF, DWG, or image format, plus specs and addenda if you have them. Add your project ZIP code, bid due date, and the trades you need priced. We reply with a free quote before any work starts.",
      },
      {
        question: "What if my plans or scope change after I get the estimate?",
        answer:
          "Send the revised drawings or addenda, and we will quote the update. Revision terms are confirmed in your quote, so you know how changes are handled before you approve the work.",
      },
      {
        question: "Is my project information kept confidential?",
        answer:
          "Yes. We sign an NDA on request before you upload your plans, so your drawings, quantities, and pricing stay private. Just ask for one when you request your quote.",
      },
      {
        question: "Can I hire an estimator for one project?",
        answer:
          "Yes. Our construction estimating service and construction estimators for hire work project by project. Upload your plans, review the quote, and approve only if it fits.",
      },
    ],
  },
  finalCta: {
    title: "Get the Best Estimate for Your Next Bid",
    body: "Upload your plans to Construction Estimatings and get a free quote before any work starts. Most estimates are back in 24 to 48 hours, ready to bid from.",
    trust: [
      "Free quote first",
      "24 to 48 hour turnaround",
      "NDA on request",
      "All 50 states",
    ] as const,
    callLabel: "Call",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Upload Your Plans",
  },
  footer: {
    description:
      "Construction Estimatings is a nationwide construction estimating company in the USA that provides the best construction estimating services for contractors, builders, and developers.",
    coverage: "All 50 states",
  },
  topBar: {
    nda: "NDA on request",
    quote: "Free quote before any work starts",
  },
  publishedServices: [
    {
      title: "Commercial Construction Estimating Services",
      href: "/commercial-estimating-service/",
    },
    {
      title: "Residential Cost Estimating Services",
      href: "/residential-estimating-services/",
    },
    {
      title: "Industrial Estimating Services",
      href: "/industrial-estimating-services/",
    },
  ],
  publishedTrades: [
    {
      title: "Concrete Estimating Services",
      href: "/concrete-estimating-services/",
    },
    {
      title: "Painting Estimating Services",
      href: "/painting-estimating-services/",
    },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/commercial-estimating-service/", label: "Services", menu: "services" as const },
    { href: "/concrete-estimating-services/", label: "Trades", menu: "trades" as const },
    { href: "/#why-choose", label: "About" },
    { href: "/contact/", label: "Contact" },
  ],
  slots: {
    hero: {
      id: "hero-main",
      section: "hero",
      brief:
        "Estimator at a desk reviewing large-format plans with a takeoff on a monitor, realistic office or site trailer",
      ratio: "4 / 3",
    },
    intro: {
      id: "intro-main",
      section: "intro",
      brief: "Close-up of hands marking a printed plan set with a scale ruler",
      ratio: "4 / 5",
    },
    solution: {
      id: "solution-main",
      section: "failures",
      brief:
        "Estimator checking a revised sheet against the takeoff on two screens",
      ratio: "4 / 3",
    },
    software: {
      id: "software-main",
      section: "software",
      brief: "Dual-monitor takeoff software view over plans",
      ratio: "4 / 3",
    },
    serve: {
      id: "serve-main",
      section: "serve",
      brief:
        "Site meeting with hard hats over plans (contractor and architect)",
      ratio: "4 / 3",
    },
    faq: {
      id: "faq-side",
      section: "faq",
      brief: "Estimator on a call with plans in front of them",
      ratio: "4 / 5",
    },
  },
} as const;

export type Homepage = typeof homepage;
