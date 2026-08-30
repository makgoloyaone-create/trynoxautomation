import { createFileRoute } from "@tanstack/react-router";
import { Bot, Globe, Headphones, Plug, UserPlus, Workflow } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { CtaBand, Page, PageHeader } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Automation, Chatbots & Websites | TRYNOX" },
      {
        name: "description",
        content:
          "AI automation, chatbots, websites, lead capture, support automation and system integrations built around how your business actually operates.",
      },
      { property: "og:title", content: "TRYNOX Services" },
      {
        property: "og:description",
        content: "Practical systems that do the routine work for you.",
      },
      { property: "og:url", content: "https://trynoxautomation.lovable.app/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://trynoxautomation.lovable.app/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Workflow,
    title: "AI Automation",
    body: "We automate repetitive processes end to end — from lead intake to follow-ups, invoicing and reporting — so your team spends its hours on work that moves the business forward.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    body: "Assistants that answer common customer questions, qualify enquiries and hand over to your team with the full context already captured.",
  },
  {
    icon: Globe,
    title: "Websites & Landing Pages",
    body: "Clear, fast, conversion-focused websites that present your business professionally and turn visitors into enquiries.",
  },
  {
    icon: UserPlus,
    title: "Lead Capture Systems",
    body: "Forms, funnels and CRM connections that make sure every enquiry is captured, routed and followed up on time.",
  },
  {
    icon: Headphones,
    title: "Customer Support Automation",
    body: "Automated responses, ticket routing and knowledge bases that keep response times short without adding headcount.",
  },
  {
    icon: Plug,
    title: "System Integrations",
    body: "We connect the tools you already use — email, WhatsApp, spreadsheets, calendars and CRMs — into one system that runs quietly in the background.",
  },
];

const work = [
  {
    initial: "LL",
    name: "Luxe Lacquer",
    body: "Brand-focused landing page that turns Instagram and walk-in enquiries into booked appointments.",
  },
  {
    initial: "CF",
    name: "CrystalFlow Carwash",
    body: "Simple booking flow and WhatsApp-style follow-up system to keep customers coming back weekly.",
  },
  {
    initial: "SE",
    name: "Sharp Edge Barber Shop & Grooming",
    body: "Online presence and automated reminder messages that reduce no-shows and keep the chair full.",
  },
];

function Services() {
  return (
    <Page>
      <PageHeader
        eyebrow="Services"
        title="Practical systems that do the routine work for you"
        intro="Every engagement starts with how your business actually operates, then we automate the parts that cost you the most time."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-24 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="article" key={s.title} delay={i * 70} className="card-lift rounded-xl border border-border bg-card p-7">
              <s.icon className="h-5 w-5 text-[oklch(0.45_0.09_245)]" />
              <h2 className="mt-6 text-lg font-medium text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal as="p" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Portfolio</Reveal>
          <Reveal as="h2" delay={80} className="mt-4 font-display text-4xl text-foreground">Some of our work</Reveal>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A selection of local businesses we have helped with websites, automation and customer
            follow-up systems.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {work.map((w, i) => (
              <Reveal as="article" key={w.name} delay={i * 90} className="card-lift rounded-xl border border-border bg-card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary font-display text-base text-primary-foreground">
                  {w.initial}
                </span>
                <h3 className="mt-6 text-base font-medium text-foreground">{w.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which of these your business needs?"
        primary={{ to: "/contact", label: "Book a consultation" }}
      />
    </Page>
  );
}
