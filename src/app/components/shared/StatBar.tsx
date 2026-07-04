interface Stat {
  value: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
  variant?: "red" | "dark" | "light";
}

export default function StatBar({ stats, variant = "red" }: StatBarProps) {
  const bg =
    variant === "red"
      ? "bg-[var(--gaf-red)]"
      : variant === "dark"
      ? "bg-[var(--gaf-near-black)]"
      : "bg-[var(--secondary)]";
  const textColor = variant === "light" ? "text-[var(--gaf-near-black)]" : "text-white";
  const labelColor = variant === "light" ? "text-gray-600" : "text-white/80";
  const borderColor = variant === "light" ? "border-gray-200" : "border-white/20";

  return (
    <section className={`${bg} py-12 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x ${borderColor}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center py-6 px-4">
              <span className={`${textColor} text-4xl lg:text-5xl font-bold leading-none mb-2`}>
                {stat.value}
              </span>
              <span className={`${labelColor} text-sm font-sans font-medium uppercase tracking-wide leading-snug max-w-[140px]`}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
