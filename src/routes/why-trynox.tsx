import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { CtaBand, Page, PageHeader } from "@/components/site";

export const Route = createFileRoute("/why-trynox")({
  head: () => ({
    meta: [
      { title: "Why TRYNOX — Serious work, delivered clearly" },
      {
        name: "description",
        content:
          "Careful scoping, practical systems and long-term support. Why businesses choose TRYNOX for AI automation.",
      },
      { property: "og:title", content: "Why TRYNOX" },
      { property: "og:description", content: "Serious work, delivered clearly." },
    ],
  }),
  component: WhyTrynox,
});

const reasons = [
  {
    title: "Built around your business",
    body: "No templated packages. We map how your business actually operates, then automate the parts that cost you time.",
  },
  {
    title: "Practical, not experimental",
    body: "We deliver systems that work today and are simple enough for your team to trust and use daily.",
  },
  {
    title: "Real digital experience",
    body: "Our founders have worked on dozens of websites and digital projects, giving TRYNOX hands-on experience building professional digital experiences.",
  },
  {
    title: "Clear communication",
    body: "Straightforward scoping, honest timelines and plain-language updates from the first call to handover.",
  },
  {
    title: "Long-term partnership",
    body: "We stay involved after launch — refining, maintaining and expanding your systems as the business grows.",
  },
  {
    title: "Local, responsive support",
    body: "Based in Mahikeng and working with clients across South Africa and beyond.",
  },
];

const steps = [
  { n: "01", title: "Discovery", body: "We learn how your business runs and where time is being lost." },
  { n: "02", title: "Blueprint", body: "We design the system and agree on scope, timelines and outcomes." },
  { n: "03", title: "Build", body: "We develop, integrate and test everything against real workflows." },
  { n: "04", title: "Launch & refine", body: "We deploy, train your team and keep improving the system." },
];

function WhyTrynox() {
  return (
    <Page>
      <PageHeader
        eyebrow="Why TRYNOX"
        title="Serious work, delivered clearly"
        intro="We are a young company with a deliberately high standard. Every project is scoped carefully, built properly and supported after handover."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-24 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal as="article" key={r.title} delay={i * 70} className="card-lift rounded-xl border border-border bg-card p-7">
              <h2 className="text-lg font-medium text-foreground">{r.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal as="h2" className="font-display text-4xl text-foreground">How we work</Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="card-lift rounded-xl border border-border bg-card p-6">
                <span className="font-display text-2xl text-[oklch(0.6_0.06_245)]">{s.n}</span>
                <h3 className="mt-4 text-base font-medium text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's talk about your operations."
        primary={{ to: "/contact", label: "Get in touch" }}
      />
    </Page>
  );
}
