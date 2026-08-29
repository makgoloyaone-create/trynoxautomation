import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Globe, Headphones, Plug, Workflow, UserPlus } from "lucide-react";

import heroVideoAsset from "@/assets/trynox-hero.mp4.asset.json";
import heroVideoWebmAsset from "@/assets/trynox-hero.webm.asset.json";
import { Reveal } from "@/components/reveal";
import { CtaBand, Page } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRYNOX — AI Automation Agency in Mahikeng, South Africa" },
      {
        name: "description",
        content:
          "TRYNOX helps businesses use AI and automation to save time, capture more opportunities and streamline everyday operations.",
      },
      { property: "og:title", content: "TRYNOX — AI Automation Agency" },
      {
        property: "og:description",
        content:
          "Automate your business. Work smarter. Grow faster. Practical AI automation, chatbots and websites.",
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Workflow, title: "AI Automation" },
  { icon: Bot, title: "AI Chatbots" },
  { icon: Globe, title: "Websites & Landing Pages" },
  { icon: UserPlus, title: "Lead Capture Systems" },
  { icon: Headphones, title: "Customer Support Automation" },
  { icon: Plug, title: "AI Integrations" },
];

const steps = [
  { n: "01", title: "Discovery", body: "We learn how your business runs and where time is being lost." },
  { n: "02", title: "Blueprint", body: "We design the system and agree on scope, timelines and outcomes." },
  { n: "03", title: "Build", body: "We develop, integrate and test everything against real workflows." },
  { n: "04", title: "Launch & refine", body: "We deploy, train your team and keep improving the system." },
];

function Index() {
  return (
    <Page>
      <section className="hero-gradient overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs text-muted-foreground">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
              AI Automation Agency — Mahikeng, South Africa
            </span>
            <h1 style={{ animationDelay: "120ms" }} className="animate-rise mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Automate Your Business.
              <br />
              Work Smarter.
              <br />
              <span className="text-[oklch(0.42_0.09_245)]">Grow Faster.</span>
            </h1>
            <p style={{ animationDelay: "240ms" }} className="animate-rise mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              TRYNOX helps businesses use AI and automation to save time, capture more
              opportunities, improve customer experiences, and streamline everyday operations.
            </p>
            <div style={{ animationDelay: "360ms" }} className="animate-rise mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground btn-press arrow-slide hover:bg-primary/90"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-md border border-border bg-background/80 px-6 py-3.5 text-sm font-medium text-foreground btn-press hover:bg-background"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          <video
            src={heroVideoAsset.url}
            autoPlay
            muted
            loop
            playsInline
            aria-label="TRYNOX logo animation"
            className="animate-float w-full rounded-xl border border-border/50 shadow-[0_30px_60px_-30px_oklch(0.3_0.06_250_/_0.45)]"
          />
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <Reveal className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2">
          <h2 className="font-display text-4xl leading-tight text-foreground">
            Technology should make your business easier to run — not harder.
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Most businesses don't need more software. They need the systems they already have to
              work together. TRYNOX builds practical automation designed around the specific way
              your business operates — the enquiries you receive, the follow-ups you forget, the
              admin that eats the day.
            </p>
            <p>
              Our founders have already worked on dozens of websites and digital projects, giving
              TRYNOX real, hands-on experience in creating professional digital experiences that
              businesses can rely on.
            </p>
          </div>
        </Reveal>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal as="p" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What we do</Reveal>
          <Reveal delay={80} className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-2xl font-display text-4xl leading-tight text-foreground">
              Systems that quietly do the work in the background
            </h2>
            <Link
              to="/services"
              className="arrow-slide inline-flex items-center gap-2 text-sm font-medium text-foreground hover:opacity-70"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
              <Link
                to="/services"
                className="card-lift arrow-slide group block h-full rounded-xl border border-border bg-card p-6"
              >
                <s.icon className="h-5 w-5 text-[oklch(0.45_0.09_245)]" />
                <h3 className="mt-6 text-base font-medium text-foreground">{s.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-foreground">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal as="p" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Build. Automate. Grow.
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-4 max-w-2xl font-display text-4xl leading-tight text-foreground">
            The way we work on every project — and the order your business should do it in.
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="card-lift h-full rounded-xl border border-border bg-card p-6">
                <span className="font-display text-2xl text-[oklch(0.6_0.06_245)]">{s.n}</span>
                <h3 className="mt-4 text-base font-medium text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's find what your business should stop doing manually."
        body="Tell us how your business currently operates and we'll show you where automation makes the biggest difference. No obligation."
        primary={{ to: "/contact", label: "Get in touch" }}
        secondary={{ to: "/pricing", label: "See packages" }}
      />
    </Page>
  );
}
