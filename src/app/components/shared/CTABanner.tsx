import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "red" | "dark";
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({
  headline,
  subtext,
  ctaLabel,
  ctaHref,
  variant = "red",
  secondaryCta,
}: CTABannerProps) {
  const bg = variant === "red" ? "bg-[var(--gaf-red)]" : "bg-[var(--gaf-near-black)]";

  return (
    <section className={`${bg} py-16 px-6`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">{headline}</h2>
          {subtext && (
            <p className="text-white/80 text-lg mt-2 font-sans font-normal">{subtext}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-4 shrink-0">
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-2 bg-white text-[var(--gaf-near-black)] hover:bg-gray-100 font-bold px-8 py-3 transition-colors whitespace-nowrap"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryCta && (
            <Link
              to={secondaryCta.href}
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3 transition-colors whitespace-nowrap"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
