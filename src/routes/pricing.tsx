import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Page, PageHeader } from "@/components/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — TRYNOX AI Automation" },
      {
        name: "description",
        content:
          "Starter, Growth and Custom automation packages. Every project is scoped and quoted individually.",
      },
      { property: "og:title", content: "TRYNOX Pricing" },
      {
        property: "og:description",
        content: "Scoped to the work, quoted once we understand it.",
      },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Starter",
    tagline: "For small businesses taking their first automation step.",
    featured: false,
    features: [
      "Professional website or landing page",
      "One automated workflow",
      "Lead capture form and notifications",
      "Setup, training and handover",
    ],
  },
  {
    name: "Growth",
    tagline: "For businesses ready to automate day-to-day operations.",
    featured: true,
    features: [
      "Everything in Starter",
      "AI chatbot trained on your business",
      "Multiple connected workflows",
      "CRM and tool integrations",
      "Ongoing optimisation",
    ],
  },
  {
    name: "Custom",
    tagline: "For teams with specific systems and larger requirements.",
    featured: false,
    features: [
      "Fully bespoke automation architecture",
      "Advanced AI integrations",
      "Internal tools and dashboards",
      "Priority support and maintenance",
    ],
  },
];

function Pricing() {
  return (
    <Page>
      <PageHeader
        eyebrow="Pricing"
        title="Scoped to the work, quoted once we understand it"
        intro="Every business runs differently, so we price each project individually. These packages show the levels of engagement you can choose from."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-24 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-xl border bg-card p-8 ${
                p.featured ? "border-foreground/30 shadow-lg" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-2xl text-foreground">{p.name}</h2>
                {p.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-medium text-primary-foreground">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.5_0.09_245)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-9 inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-accent"
                }`}
              >
                Request a quote
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
