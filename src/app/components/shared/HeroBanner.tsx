import { Link } from "react-router";
import { motion } from "motion/react";

interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "outline";
}

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  ctaButtons?: CTAButton[];
  height?: "full" | "half" | "short";
  bgImage?: string;
  eyebrow?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  ctaButtons = [],
  height = "half",
  bgImage,
  eyebrow,
}: HeroBannerProps) {
  const heightClass =
    height === "full"
      ? "min-h-screen"
      : height === "half"
      ? "min-h-[60vh]"
      : "min-h-[40vh]";

  return (
    <section
      className={`relative flex items-center ${heightClass} bg-[var(--gaf-near-black)] overflow-hidden`}
      style={
        bgImage
          ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Decorative accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--gaf-red)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">
              {eyebrow}
            </p>
          )}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 font-sans font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
          {ctaButtons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {ctaButtons.map((btn) => (
                <Link
                  key={btn.label}
                  to={btn.href}
                  className={
                    btn.variant === "primary"
                      ? "inline-block bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-8 py-3 text-base transition-colors"
                      : "inline-block border-2 border-white text-white hover:bg-white hover:text-[var(--gaf-near-black)] font-semibold px-8 py-3 text-base transition-colors"
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
