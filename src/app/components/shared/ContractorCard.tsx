import { Phone, Globe, Star, Award } from "lucide-react";
import type { Contractor } from "../../data/contractors";

interface ContractorCardProps {
  contractor: Contractor;
}

const certLabels: Record<string, { label: string; color: string }> = {
  "master-elite": { label: "Master Elite®", color: "bg-[var(--gaf-gold)] text-white" },
  "factory-certified": { label: "Factory-Certified", color: "bg-slate-700 text-white" },
  certified: { label: "GAF Certified", color: "bg-gray-500 text-white" },
};

export default function ContractorCard({ contractor }: ContractorCardProps) {
  const cert = certLabels[contractor.certificationLevel];

  return (
    <div className="bg-white border border-[var(--border)] p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-[var(--gaf-near-black)] text-lg font-bold leading-snug">{contractor.name}</h3>
          <p className="text-gray-600 text-sm font-sans">
            {contractor.city}, {contractor.state} {contractor.zip}
          </p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 whitespace-nowrap font-sans ${cert.color}`}>
          {cert.label}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(contractor.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-gray-800 font-sans">{contractor.rating}</span>
        <span className="text-sm text-gray-500 font-sans">({contractor.reviewCount} reviews)</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 font-sans">
        <Award className="w-4 h-4 text-[var(--gaf-red)] flex-shrink-0" />
        <span>{contractor.yearsInBusiness} years in business</span>
      </div>

      <div className="flex flex-wrap gap-1">
        {contractor.specialties.map((s) => (
          <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 font-sans">
            {s}
          </span>
        ))}
      </div>

      <div className="border-t border-[var(--border)] pt-4 flex flex-col gap-2">
        <a
          href={`tel:${contractor.phone}`}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[var(--gaf-red)] transition-colors font-sans"
        >
          <Phone className="w-4 h-4" /> {contractor.phone}
        </a>
        <a
          href={`https://${contractor.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-[var(--gaf-red)] transition-colors font-sans"
        >
          <Globe className="w-4 h-4" /> {contractor.website}
        </a>
      </div>

      <button className="w-full bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold py-2.5 text-sm transition-colors font-sans">
        Get a Free Quote
      </button>
    </div>
  );
}
