import { Link, type LinkProps } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/why-trynox", label: "Why TRYNOX" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
          <path
            d="M6 17V7l12 10V7"
            stroke="oklch(0.78 0.14 220)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-xl tracking-wide text-foreground">TRYNOX</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Get Started
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            AI automation and digital solutions agency based in Mahikeng, South Africa. We help
            businesses use AI and automation to save time and grow faster.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.slice(1).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium text-foreground">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:trynoxautomation@gmail.com" className="hover:text-foreground">
                trynoxautomation@gmail.com
              </a>
            </li>
            <li>Mahikeng, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} TRYNOX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.1] text-foreground md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary: { to: LinkProps["to"]; label: string };
  secondary?: { to: LinkProps["to"]; label: string };
}) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {body && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {body}
          </p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to={primary.to}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {primary.label} <ArrowRight className="h-4 w-4" />
          </Link>
          {secondary && (
            <Link
              to={secondary.to}
              className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
