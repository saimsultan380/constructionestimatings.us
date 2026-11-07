import { email, phone, siteName, siteUrl } from "@/lib/site";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const contactLines = [
  phone ? `Phone: ${phone}` : null,
  email ? `Email: ${email}` : null,
  `Website: ${siteUrl}/`,
].filter(Boolean) as string[];

export const legalPages = {
  privacy: {
    slug: "privacy-policy",
    path: "/privacy-policy/",
    title: "Privacy Policy",
    description: `How ${siteName} collects, uses, and protects information when you request a quote or use our website.`,
    updated: "November 7, 2026",
    intro: `This Privacy Policy explains how ${siteName} (“we,” “us,” or “our”) handles information when you visit ${siteUrl}/, request a quote, upload project files, or contact us. By using the site or submitting a quote request, you agree to this policy.`,
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "We collect information you provide directly and limited technical data created when you use the site.",
        ],
        bullets: [
          "Contact and project details you enter on quote forms, such as name, email, phone, ZIP code, company details, bid due date, and message content",
          "Files and plan sets you choose to upload or send for estimating work",
          "Communications you send by email, phone, or form",
          "Basic technical data such as IP address, browser type, device type, pages viewed, and referring URL",
          "Analytics events if measurement tools are enabled on the site",
        ],
      },
      {
        heading: "How we use information",
        paragraphs: [
          "We use the information we collect to operate the business and deliver estimating services.",
        ],
        bullets: [
          "Respond to quote requests and prepare takeoffs or estimates",
          "Communicate about scope, pricing, delivery, revisions, and support",
          "Provide an NDA when you request one before sharing plans",
          "Improve site performance, security, and content",
          "Comply with legal obligations and protect against fraud or abuse",
        ],
      },
      {
        heading: "Project files and confidentiality",
        paragraphs: [
          "Drawings, quantities, pricing, and related project materials are treated as confidential business information. We use them only to prepare and deliver the services you request.",
          "We can sign a nondisclosure agreement (NDA) on request before you upload plans. Ask for an NDA when you request your quote if your project requires one.",
        ],
      },
      {
        heading: "Sharing of information",
        paragraphs: [
          "We do not sell your personal information. We may share information only when needed to operate the service or meet a legal requirement.",
        ],
        bullets: [
          "Service providers that help with hosting, email delivery, storage, analytics, or security, under appropriate confidentiality obligations",
          "Professional advisors when needed for legal, accounting, or compliance matters",
          "Authorities when required by law, court order, or to protect rights, safety, or property",
        ],
      },
      {
        heading: "Cookies and analytics",
        paragraphs: [
          "The site may use cookies or similar technologies for essential operation, preference storage, and analytics. Analytics tools may collect aggregated usage data so we can understand how pages perform.",
          "You can control cookies through your browser settings. Blocking some cookies may affect site features.",
        ],
      },
      {
        heading: "Data retention",
        paragraphs: [
          "We keep personal and project information only as long as needed for the purposes described in this policy, including delivering services, resolving disputes, maintaining records, and meeting legal requirements. When information is no longer needed, we delete or de-identify it where practical.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We use reasonable administrative, technical, and organizational measures to protect information we handle. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You may request access to, correction of, or deletion of personal information we hold about you, subject to legal and operational limits. Contact us using the details below. We may need to verify your identity before fulfilling a request.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "The site and services are intended for business users and are not directed to children under 16. We do not knowingly collect personal information from children.",
        ],
      },
      {
        heading: "Changes to this policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time. The “Last updated” date at the top of the page will change when we do. Continued use of the site after an update means you accept the revised policy.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Questions about this Privacy Policy or your information can be sent to ${siteName}.`,
          ...contactLines,
        ],
      },
    ],
  } satisfies LegalPage,

  terms: {
    slug: "terms-of-service",
    path: "/terms-of-service/",
    title: "Terms of Service",
    description: `Terms that govern use of the ${siteName} website and construction estimating services.`,
    updated: "November 7, 2026",
    intro: `These Terms of Service (“Terms”) govern your access to ${siteUrl}/ and any estimating, takeoff, or related services provided by ${siteName}. By using the site or approving a quote, you agree to these Terms.`,
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `${siteName} provides construction estimating and takeoff services for contractors, builders, developers, and related professionals. Services are delivered remotely for projects across the United States.`,
        ],
      },
      {
        heading: "Quotes and engagement",
        paragraphs: [
          "Most work begins with a free quote. A quote is an offer based on the information and files you provide. We begin paid work only after you approve the quote and any stated conditions.",
          "Scope, turnaround, deliverable format, revision handling, and price are confirmed in the quote or related written confirmation. If project documents change after approval, revision pricing may apply as stated in that confirmation.",
        ],
      },
      {
        heading: "Your responsibilities",
        paragraphs: [
          "You agree to provide accurate contact details and project information, and to upload or send only files you have the right to share.",
        ],
        bullets: [
          "Confirm that drawings, specs, addenda, and schedules are current before we start",
          "Tell us the bid due date and any hard deadlines when you request a quote",
          "Review assumptions, exclusions, and deliverables before you rely on them for bidding",
          "Keep login credentials, shared links, and confidential materials secure on your side",
        ],
      },
      {
        heading: "Deliverables and use",
        paragraphs: [
          "Estimates and takeoffs are prepared from the documents and instructions you provide. They are tools to support bidding, budgeting, or planning. They are not a guarantee of final job cost, award, or profit.",
          "You may use deliverables for your project purposes. You may not resell our work as a competing estimating product or present it as an independent third-party certification unless we agree in writing.",
        ],
      },
      {
        heading: "Turnaround",
        paragraphs: [
          "Many projects are delivered within 24 to 48 hours after quote approval and receipt of usable documents. Large, incomplete, or heavily revised plan sets can take longer. Stated turnaround begins when we have the approved scope and the files needed to start.",
        ],
      },
      {
        heading: "Payment",
        paragraphs: [
          "Payment terms are stated on the quote or invoice. Work may be held, paused, or withheld if payment is late or disputed without a good-faith resolution. Fees already earned for completed work remain due.",
        ],
      },
      {
        heading: "Confidentiality",
        paragraphs: [
          "We treat your project files and pricing as confidential. An NDA is available on request before upload. You likewise agree not to misuse any proprietary methods, templates, or internal materials we share with you.",
        ],
      },
      {
        heading: "Acceptable use of the website",
        paragraphs: [
          "You may not misuse the site, including by attempting unauthorized access, submitting malware, scraping at a volume that harms performance, or using the forms for spam or unlawful content.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          `Site content, branding, and design are owned by ${siteName} or its licensors. Project deliverables are licensed to you for the project purposes described above once paid for, unless a quote states otherwise.`,
        ],
      },
      {
        heading: "Disclaimer of warranties",
        paragraphs: [
          "The site and services are provided on an “as is” and “as available” basis to the fullest extent permitted by law. We do not warrant that estimates will match final construction cost, that every quantity is free of human or document-driven error, or that the site will be uninterrupted or error-free.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          `To the fullest extent permitted by law, ${siteName} is not liable for indirect, incidental, special, consequential, or lost-profit damages arising from use of the site or services. Our total liability for a given engagement is limited to the fees you paid us for that engagement.`,
        ],
      },
      {
        heading: "Indemnity",
        paragraphs: [
          `You agree to indemnify and hold ${siteName} harmless from claims arising out of your misuse of deliverables, your bidding decisions, inaccurate materials you supplied, or your violation of these Terms or applicable law.`,
        ],
      },
      {
        heading: "Changes and termination",
        paragraphs: [
          "We may update these Terms by posting a revised version with a new “Last updated” date. We may suspend or stop providing the site or services when needed for security, legal, or operational reasons.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: [
          "These Terms are governed by the laws of the United States and the state in which ${siteName} primarily operates its business, without regard to conflict-of-law rules. Courts in that jurisdiction will have exclusive venue for disputes that cannot be resolved informally, except where prohibited by law.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Questions about these Terms can be sent to ${siteName}.`,
          ...contactLines,
        ],
      },
    ],
  } satisfies LegalPage,

  disclaimer: {
    slug: "disclaimer",
    path: "/disclaimer/",
    title: "Disclaimer",
    description: `Important limitations on estimates, takeoffs, and website content from ${siteName}.`,
    updated: "November 7, 2026",
    intro: `This Disclaimer applies to the ${siteName} website and to estimating and takeoff deliverables we prepare. Please read it together with our Terms of Service and Privacy Policy.`,
    sections: [
      {
        heading: "Estimates are not final job costs",
        paragraphs: [
          "Construction estimates and quantity takeoffs are based on the drawings, specifications, addenda, schedules, and instructions available at the time of work. Actual project cost can change because of design revisions, site conditions, labor and material markets, means and methods, subcontractor pricing, schedule, waste factors, and other variables outside our control.",
          "A deliverable from us is not a bid bond, not a guarantee of award, and not a substitute for your own review, field verification, or professional judgment.",
        ],
      },
      {
        heading: "Document quality and scope limits",
        paragraphs: [
          "Incomplete, conflicting, or outdated documents can affect quantities and pricing. Items not shown, not dimensioned, or excluded by written assumptions are outside the measured or priced scope unless we agree otherwise in writing.",
          "Assumptions and exclusions listed with your deliverable are part of the work product. Rely on the full package, not on isolated line items taken out of context.",
        ],
      },
      {
        heading: "Website content",
        paragraphs: [
          "Articles, service descriptions, process summaries, and examples on this website are for general information. They do not create a professional engagement until a quote is approved. Named software, methods, or third-party sites mentioned in content are examples only unless we state a direct partnership.",
        ],
      },
      {
        heading: "No professional licensing claim beyond the service described",
        paragraphs: [
          "We provide estimating and takeoff services. Nothing on the site should be read as architectural, engineering, legal, insurance, or tax advice. If your project requires stamped drawings, licensed design services, or legal review, engage the appropriate professional.",
        ],
      },
      {
        heading: "External links",
        paragraphs: [
          "The site may reference third-party tools or websites. We are not responsible for their content, availability, or privacy practices.",
        ],
      },
      {
        heading: "Limitation",
        paragraphs: [
          `To the fullest extent permitted by law, ${siteName} disclaims liability for decisions you make using website content or deliverables, including bidding, purchasing, hiring, or scheduling decisions. See our Terms of Service for warranty and liability terms that apply to paid engagements.`,
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `If you need clarification on a specific deliverable or assumption set, contact ${siteName} before you submit a bid.`,
          ...contactLines,
        ],
      },
    ],
  } satisfies LegalPage,
} as const;

export const legalNav = [
  { href: legalPages.privacy.path, label: legalPages.privacy.title },
  { href: legalPages.terms.path, label: legalPages.terms.title },
  { href: legalPages.disclaimer.path, label: legalPages.disclaimer.title },
] as const;
