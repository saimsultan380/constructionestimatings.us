import { homepage } from "@/content/homepage";

/** About page copy is composed only from homepage content — no invented claims. */
export const about = {
  seo: {
    title: "About Construction Estimatings",
    description: homepage.footer.description,
    path: "/about/",
  },
  hero: {
    eyebrow: "About",
    title: "About Construction Estimatings",
    body: homepage.hero.body,
    note: homepage.hero.note,
    trust: homepage.hero.trust,
    primaryCta: homepage.hero.primaryCta,
    secondaryCta: homepage.finalCta.secondaryCta,
  },
  story: {
    title: homepage.intro.title,
    paragraphs: homepage.intro.paragraphs,
  },
  process: {
    title: homepage.process.title,
    intro: homepage.process.intro,
    steps: homepage.process.steps,
  },
  why: homepage.why,
  audiences: homepage.audiences,
  deliverables: homepage.deliverables,
  coverage: homepage.coverage,
  finalCta: homepage.finalCta,
  slots: {
    hero: homepage.slots.hero,
    intro: homepage.slots.intro,
    serve: homepage.slots.serve,
    solution: homepage.slots.solution,
  },
} as const;
