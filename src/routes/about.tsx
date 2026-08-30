import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/reveal";
import { CtaBand, Page, PageHeader } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TRYNOX — AI Automation Agency in Mahikeng" },
      {
        name: "description",
        content:
          "TRYNOX was founded by Tiroyaone Makgolo and Motheo Mpuisang to help businesses use modern technology and AI to operate more efficiently.",
      },
      { property: "og:title", content: "About TRYNOX" },
      { property: "og:description", content: "Founded to make modern technology usable." },
      { property: "og:url", content: "https://trynoxautomation.lovable.app/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://trynoxautomation.lovable.app/about" }],
  }),
  component: About,
});

const founders = [
  { initial: "T", name: "Tiroyaone Makgolo" },
  { initial: "M", name: "Motheo Mpuisang" },
];

function About() {
  return (
    <Page>
      <PageHeader
        eyebrow="About"
        title="Founded to make modern technology usable"
        intro="TRYNOX is an AI automation and digital solutions agency based in Mahikeng, South Africa."
      />

      <section>
        <Reveal className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2">
          <p className="text-base leading-relaxed text-muted-foreground">
            TRYNOX was founded by Tiroyaone Makgolo and Motheo Mpuisang, two entrepreneurs based in
            Mahikeng, South Africa, with a single goal: help businesses use modern technology and
            artificial intelligence to operate more efficiently.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            We are a young company with a deliberately high standard. Every project is approached
            with the same seriousness — clear scoping, careful build quality and systems our clients
            can depend on long after launch.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-24 md:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal as="article" key={f.name} delay={i * 120} className="card-lift rounded-xl border border-border bg-card p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-xl text-primary-foreground">
                {f.initial}
              </span>
              <h2 className="mt-6 font-display text-2xl text-foreground">{f.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">Co-Founder</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Work with a team that stays involved."
        primary={{ to: "/contact", label: "Contact TRYNOX" }}
      />
    </Page>
  );
}
