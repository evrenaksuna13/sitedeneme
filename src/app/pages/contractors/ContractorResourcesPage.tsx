import { Link } from "react-router";
import { ChevronRight, Download, ExternalLink, FileText, Video, Image, Package } from "lucide-react";
import HeroBanner from "../../components/shared/HeroBanner";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

const DOCUMENTS = [
  { name: "Timberline HDZ Installation Guide", type: "PDF", size: "4.2 MB", category: "Installation", icon: FileText },
  { name: "Commercial TPO Specification Sheet", type: "PDF", size: "2.8 MB", category: "Commercial", icon: FileText },
  { name: "Ventilation Design Calculator", type: "Excel", size: "1.1 MB", category: "Technical", icon: FileText },
  { name: "GAF System Components Overview", type: "PDF", size: "6.4 MB", category: "Installation", icon: FileText },
  { name: "Master Elite Application Packet", type: "PDF", size: "890 KB", category: "Certification", icon: FileText },
  { name: "Warranty Registration Instructions", type: "PDF", size: "1.5 MB", category: "Warranty", icon: FileText },
  { name: "Safety Data Sheets — All Products", type: "ZIP", size: "22 MB", category: "Safety", icon: Package },
  { name: "CAD Details Library", type: "ZIP", size: "18 MB", category: "Technical", icon: Package },
  { name: "EPDM Installation Video Series", type: "Video", size: "Stream", category: "Commercial", icon: Video },
  { name: "Brand Asset Package", type: "ZIP", size: "45 MB", category: "Marketing", icon: Image },
  { name: "Marketing Brochures — Residential", type: "PDF", size: "8.2 MB", category: "Marketing", icon: FileText },
  { name: "Contractor Pricing Guide 2025", type: "PDF", size: "3.1 MB", category: "Business", icon: FileText },
];

const TOOLS = [
  { name: "Contractor Portal", desc: "Manage jobs, warranties, and orders in one place.", href: "#", icon: ExternalLink },
  { name: "Estimating Software", desc: "Accurate takeoffs and material estimates in minutes.", href: "#", icon: ExternalLink },
  { name: "Leads Dashboard", desc: "View and claim homeowner leads in your service area.", href: "#", icon: ExternalLink },
  { name: "Warranty Registration", desc: "Register customer warranties instantly after installation.", href: "#", icon: ExternalLink },
];

const categoryColors: Record<string, string> = {
  Installation: "bg-blue-100 text-blue-800",
  Commercial: "bg-sky-100 text-sky-800",
  Technical: "bg-teal-100 text-teal-800",
  Certification: "bg-amber-100 text-amber-800",
  Warranty: "bg-purple-100 text-purple-800",
  Safety: "bg-red-100 text-red-800",
  Marketing: "bg-green-100 text-green-800",
  Business: "bg-indigo-100 text-indigo-800",
};

export default function ContractorResourcesPage() {
  const { t, lang } = useTranslation();
  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/contractors" className="hover:text-[var(--gaf-red)]">For Contractors</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">Resources</span>
        </div>
      </div>

      <HeroBanner
        height="short"
        title={lang === "tr" ? "Yüklenici Kaynakları" : "Contractor Resources"}
        subtitle="Technical documents, marketing materials, business tools, and more — everything a GAF certified contractor needs."
        eyebrow="Resource Center"
      />

      {/* Online tools */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Digital Tools" title="Contractor Portal & Tools" align="left" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {TOOLS.map(({ name, desc, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="group block border border-[var(--border)] bg-white hover:border-[var(--gaf-red)] p-5 transition-colors"
              >
                <div className="w-10 h-10 bg-[var(--gaf-near-black)] group-hover:bg-[var(--gaf-red)] flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-[var(--gaf-near-black)] font-bold text-sm mb-1 group-hover:text-[var(--gaf-red)] transition-colors">{name}</h4>
                <p className="text-gray-500 text-xs font-sans leading-relaxed">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Document library */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Document Library" title="Downloads & Technical Resources" align="left" />
          <div className="bg-white border border-[var(--border)] divide-y divide-[var(--border)] mt-4">
            {DOCUMENTS.map(({ name, type, size, category, icon: Icon }) => (
              <div key={name} className="flex items-center gap-4 px-5 py-4 hover:bg-[var(--secondary)] transition-colors">
                <div className="w-8 h-8 bg-gray-100 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[var(--gaf-near-black)] text-sm font-semibold font-sans truncate">{name}</p>
                  <p className="text-gray-500 text-xs font-sans">{type} · {size}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 font-sans shrink-0 hidden sm:block ${categoryColors[category] ?? "bg-gray-100 text-gray-700"}`}>
                  {category}
                </span>
                <button className="shrink-0 flex items-center gap-1.5 bg-[var(--gaf-near-black)] hover:bg-[var(--gaf-red)] text-white text-xs font-semibold px-3 py-2 transition-colors font-sans">
                  <Download className="w-3 h-3" /> {t("common.download")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need Additional Support?"
        subtext="Our technical team is available Monday–Friday, 8am–6pm ET."
        ctaLabel="Contact Technical Support"
        ctaHref="/about"
        variant="dark"
      />
    </div>
  );
}
