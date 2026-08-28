import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Page, PageHeader } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TRYNOX — Start Automating Your Business" },
      {
        name: "description",
        content:
          "Tell us how your business operates and we'll show you where automation makes the biggest difference. Email trynoxautomation@gmail.com.",
      },
      { property: "og:title", content: "Contact TRYNOX" },
      {
        property: "og:description",
        content: "Let's find what your business should stop doing manually.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Page>
      <PageHeader
        eyebrow="Contact"
        title="Let's find what your business should stop doing manually"
        intro="Tell us how your business currently operates and we'll show you where automation makes the biggest difference. No obligation."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-24 md:grid-cols-2">
          <Reveal as="article" className="card-lift rounded-xl border border-border bg-card p-8">
            <Mail className="h-5 w-5 text-[oklch(0.45_0.09_245)]" />
            <h2 className="mt-6 font-display text-2xl text-foreground">Get in touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Email us with a short description of your business and the tasks taking up most of
              your team's time. We'll reply with next steps.
            </p>
            <a
              href="mailto:trynoxautomation@gmail.com"
              className="btn-press mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              trynoxautomation@gmail.com
            </a>
          </Reveal>
          <Reveal as="article" delay={120} className="card-lift rounded-xl border border-border bg-card p-8">
            <MapPin className="h-5 w-5 text-[oklch(0.45_0.09_245)]" />
            <h2 className="mt-6 font-display text-2xl text-foreground">Where we are</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Mahikeng, South Africa
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We work with clients across South Africa and internationally, remotely and on site
              where it helps.
            </p>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
