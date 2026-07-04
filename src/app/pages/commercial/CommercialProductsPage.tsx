import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";
import HeroBanner from "../../components/shared/HeroBanner";
import CTABanner from "../../components/shared/CTABanner";
import SectionHeading from "../../components/shared/SectionHeading";
import { COMMERCIAL_PRODUCTS, type CommercialProduct } from "../../data/products";

type TabType = "all" | "tpo" | "epdm" | "modified-bitumen" | "built-up";

const TABS: { label: string; value: TabType }[] = [
  { label: "All Systems", value: "all" },
  { label: "TPO", value: "tpo" },
  { label: "EPDM", value: "epdm" },
  { label: "Modified Bitumen", value: "modified-bitumen" },
  { label: "Built-Up Roofing", value: "built-up" },
];

const advantages = [
  { title: "Engineered Durability", desc: "GAF commercial systems are rigorously tested to withstand the harshest weather conditions and deliver decades of reliable performance." },
  { title: "Energy Efficiency", desc: "Our ENERGY STAR-rated membranes reflect solar energy, reducing cooling loads and qualifying buildings for tax credits and utility incentives." },
  { title: "Warranted Installation", desc: "When installed by a GAF-certified commercial contractor, our systems come backed by labor and material warranties unavailable elsewhere." },
  { title: "Technical Support", desc: "GAF's team of commercial roofing specialists provides on-site technical support, specification assistance, and project oversight." },
  { title: "Sustainable Solutions", desc: "From cool roof technology to recycled content, GAF leads the industry in developing environmentally responsible commercial roofing options." },
  { title: "Single-Source Accountability", desc: "One manufacturer. One warranty. One point of contact for the entire roofing system — from insulation to membrane to accessories." },
];

function ProductRow({ product }: { product: CommercialProduct }) {
  return (
    <div className="bg-white border border-[var(--border)] grid grid-cols-1 md:grid-cols-3 overflow-hidden">
      <div className={`bg-gradient-to-br ${product.gradientFrom} ${product.gradientTo} min-h-[160px]`} />
      <div className="md:col-span-2 p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-[var(--gaf-red)] text-xs font-semibold uppercase tracking-widest font-sans">
              {product.type.replace("-", " ")}
            </span>
            <h3 className="text-[var(--gaf-near-black)] text-xl font-bold mt-0.5">{product.name}</h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm font-sans leading-relaxed mb-4">{product.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {product.features.slice(0, 4).map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm text-gray-700 font-sans">
              <CheckCircle className="w-4 h-4 text-[var(--gaf-red)] shrink-0" />
              {f}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/homeowners/find-a-contractor"
            className="inline-flex items-center gap-1.5 text-[var(--gaf-red)] font-semibold text-sm font-sans hover:gap-2.5 transition-all"
          >
            {t("common.findContractor")} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/resources"
            className="text-gray-600 text-sm font-sans hover:text-[var(--gaf-red)] transition-colors"
          >
            Product Specs →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CommercialProductsPage() {
  const { t, lang } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const filtered =
    activeTab === "all"
      ? COMMERCIAL_PRODUCTS
      : COMMERCIAL_PRODUCTS.filter((p) => p.type === activeTab);

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">Commercial Roofing</span>
        </div>
      </div>

      <HeroBanner
        height="short"
        title={lang === "tr" ? "Ticari Çatı Çözümleri" : "Commercial Roofing Solutions"}
        subtitle="Proven systems for low-slope and flat roofs — from TPO and EPDM membranes to built-up roofing and insulation."
        eyebrow="Commercial"
      />

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-0 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-3 text-sm font-semibold font-sans border-b-2 transition-colors -mb-px ${
                  activeTab === tab.value
                    ? "border-[var(--gaf-red)] text-[var(--gaf-red)]"
                    : "border-transparent text-gray-600 hover:text-[var(--gaf-near-black)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {filtered.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The GAF Advantage"
            title="Why Specifiers Choose GAF for Commercial Projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {advantages.map((item, i) => (
              <div key={i} className="bg-white p-6 border border-[var(--border)]">
                <div className="w-8 h-1 bg-[var(--gaf-red)] mb-4" />
                <h4 className="text-[var(--gaf-near-black)] font-bold text-base mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Market Segments"
            title="Commercial Applications We Serve"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { name: "Retail & Mixed-Use", gradient: "from-blue-800 to-blue-950" },
              { name: "Healthcare Facilities", gradient: "from-teal-700 to-teal-950" },
              { name: "Education & Institutional", gradient: "from-indigo-700 to-indigo-950" },
              { name: "Industrial & Warehouse", gradient: "from-slate-700 to-slate-950" },
              { name: "Hospitality", gradient: "from-amber-700 to-amber-950" },
              { name: "Office Buildings", gradient: "from-sky-700 to-sky-950" },
              { name: "Multi-Family Residential", gradient: "from-violet-700 to-violet-950" },
              { name: "Government Buildings", gradient: "from-gray-700 to-gray-950" },
            ].map((seg) => (
              <div key={seg.name} className="overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${seg.gradient}`} />
                <div className="bg-[var(--secondary)] p-3">
                  <p className="text-[var(--gaf-near-black)] font-semibold text-sm font-sans">{seg.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Talk to a Commercial Roofing Specialist"
        subtext="Our technical team can help you specify the right system for your project."
        ctaLabel={t("common.findContractor")}
        ctaHref="/homeowners/find-a-contractor"
        variant="dark"
        secondaryCta={{ label: "Download Specs", href: "/contractors/resources" }}
      />
    </div>
  );
}
