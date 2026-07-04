interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-white" : "text-[var(--gaf-near-black)]";
  const subtitleColor = light ? "text-white/75" : "text-gray-600";

  return (
    <div className={`${alignClass} max-w-2xl mb-10`}>
      {eyebrow && (
        <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">
          {eyebrow}
        </p>
      )}
      <h2 className={`${titleColor} text-3xl md:text-4xl font-bold leading-tight`}>{title}</h2>
      {subtitle && (
        <p className={`${subtitleColor} text-lg mt-3 font-sans font-normal leading-relaxed`}>{subtitle}</p>
      )}
    </div>
  );
}
