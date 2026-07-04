import { Link } from "react-router";
import { ArrowRight, Shield, Wind } from "lucide-react";
import { motion } from "motion/react";

interface ProductCardProps {
  name: string;
  slug: string;
  colorName?: string;
  colorNameEn?: string;
  series?: string;
  tagline: string;
  description: string;
  warranty: string;
  windRating?: string;
  badge?: string;
  image?: string;
  swatchBg?: string;
  /* legacy gradient fallback */
  gradientFrom?: string;
  gradientTo?: string;
  basePath?: string;
}

export default function ProductCard({
  name,
  slug,
  colorName,
  colorNameEn,
  series,
  tagline,
  description,
  warranty,
  windRating,
  badge,
  image,
  swatchBg,
  gradientFrom,
  gradientTo,
  basePath = "/products/residential",
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-[var(--border)] overflow-hidden flex flex-col group"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={`${name} — ${colorName ?? tagline}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div
            className={`w-full h-full ${gradientFrom && gradientTo ? `bg-gradient-to-br ${gradientFrom} ${gradientTo}` : ""}`}
            style={swatchBg && !gradientFrom ? { background: swatchBg } : undefined}
          />
        )}

        {badge && (
          <span className="absolute top-3 left-3 bg-[var(--gaf-red)] text-white text-xs font-semibold px-2 py-1 uppercase tracking-wide">
            {badge}
          </span>
        )}

        {/* Color swatch pill */}
        {colorName && (
          <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1.5">
            {swatchBg && (
              <span
                className="w-3 h-3 rounded-full border border-white/40 shrink-0"
                style={{ background: swatchBg }}
              />
            )}
            <span className="text-white text-xs font-semibold font-sans leading-none">
              {colorName}
            </span>
            {colorNameEn && (
              <span className="text-white/60 text-xs font-sans leading-none">
                · {colorNameEn}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {series && (
          <p className="text-[var(--gaf-red)] text-xs font-semibold uppercase tracking-widest mb-1 font-sans">
            {series} Series
          </p>
        )}
        <h3 className="text-[var(--gaf-near-black)] text-base font-bold mb-1 leading-snug">
          {colorName ? colorName : name}
          {colorNameEn && (
            <span className="text-gray-400 font-normal ml-1 text-sm">/ {colorNameEn}</span>
          )}
        </h3>
        <p className="text-gray-500 text-xs font-sans leading-relaxed mb-4 flex-1">{tagline}</p>

        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-600 font-sans">
            <Shield className="w-3.5 h-3.5 text-[var(--gaf-red)] shrink-0" />
            <span>{warranty}</span>
          </div>
          {windRating && (
            <div className="flex items-center gap-2 text-xs text-gray-600 font-sans">
              <Wind className="w-3.5 h-3.5 text-[var(--gaf-red)] shrink-0" />
              <span>{windRating} wind resistance</span>
            </div>
          )}
        </div>

        <Link
          to={`${basePath}/${slug}`}
          className="inline-flex items-center gap-2 text-[var(--gaf-red)] font-semibold text-sm group-hover:gap-3 transition-all font-sans"
        >
          View Details <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
