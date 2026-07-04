import { Link } from "react-router";
import { ChevronRight, CheckCircle, Star, Award, Users, BookOpen, TrendingUp, Headphones, Megaphone, DollarSign, Shield } from "lucide-react";
import HeroBanner from "../../components/shared/HeroBanner";
import StatBar from "../../components/shared/StatBar";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

const TIERS = [
  {
    name: "GAF Certified Contractor",
    level: "Entry",
    color: "border-gray-300",
    badge: "bg-gray-500",
    requirements: [
      "Valid state contractor license",
      "Proof of general liability insurance",
      "Workers' comp coverage",
      "Complete GAF certification training",
      "Signed contractor agreement",
    ],
    benefits: [
      "Access to GAF Contractor Portal",
      "Product training & education",
      "Marketing materials",
      "System Plus warranty eligibility",
      "GAF Certified logo usage",
    ],
  },
  {
    name: "Factory-Certified Contractor",
    level: "Advanced",
    color: "border-slate-600",
    badge: "bg-slate-700",
    requirements: [
      "All Certified Contractor requirements",
      "2+ years in business",
      "Advanced installation training",
      "Demonstrated workmanship standards",
      "Positive customer review history",
    ],
    benefits: [
      "All Certified Contractor benefits",
      "Silver Pledge warranty eligibility",
      "Priority contractor referrals",
      "Advanced marketing support",
      "Dedicated GAF representative",
      "Factory-Certified logo & badging",
    ],
  },
  {
    name: "Master Elite® Contractor",
    level: "Elite",
    color: "border-[var(--gaf-gold)]",
    badge: "bg-[var(--gaf-gold)]",
    featured: true,
    requirements: [
      "All Factory-Certified requirements",
      "Demonstrated financial stability",
      "Minimum 3 years in business",
      "Consistent customer satisfaction record",
      "Annual recertification",
    ],
    benefits: [
      "All Factory-Certified benefits",
      "Golden Pledge® warranty eligibility",
      "Top contractor referral placement",
      "Exclusive business management tools",
      "Leads generation program access",
      "Annual Master Elite summit invitation",
      "Preferred pricing on GAF products",
    ],
  },
];

const BENEFITS = [
  { icon: BookOpen, title: "Exclusive Training", desc: "200+ online and in-person courses covering installation, safety, and business management." },
  { icon: Shield, title: "Warranty Offerings", desc: "Offer homeowners the industry's strongest warranties — only available through GAF contractors." },
  { icon: TrendingUp, title: "Business Tools", desc: "Estimating software, project management tools, and financial resources to grow your business." },
  { icon: Megaphone, title: "Marketing Support", desc: "Professional marketing materials, digital assets, and co-branded advertising support." },
  { icon: DollarSign, title: "Leads Program", desc: "Access to verified homeowner leads in your area from gaf.com's contractor finder." },
  { icon: Headphones, title: "Technical Support", desc: "Direct access to GAF's team of technical experts for on-site support and project consultation." },
];

const testimonials = [
  {
    quote: "Becoming a Master Elite contractor changed everything for our business. Our close rate jumped 40% in the first year, and the Golden Pledge warranty is a sales tool unlike anything else.",
    name: "Brian Kowalski",
    company: "Apex Roofing & Exteriors",
    location: "Cincinnati, OH",
    tier: "Master Elite",
    years: 18,
  },
  {
    quote: "The training alone is worth it. GAF's installation courses improved our crew's efficiency and quality immediately. Our callback rate dropped to nearly zero.",
    name: "Maria Santos",
    company: "Cornerstone Roofing LLC",
    location: "Charlotte, NC",
    tier: "Factory-Certified",
    years: 11,
  },
  {
    quote: "I was skeptical at first, but the leads program has been incredible. Qualified homeowners actively looking for my specific certification level contact me every week.",
    name: "Derek Williamson",
    company: "Heritage Roofing Group",
    location: "Pittsburgh, PA",
    tier: "Master Elite",
    years: 24,
  },
];

export default function ContractorProgramPage() {
  const { t, lang } = useTranslation();
  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">For Contractors</span>
        </div>
      </div>

      <HeroBanner
        height="half"
        title={t("contractors.title")}
        subtitle={t("contractors.subtitle")}
        eyebrow={t("contractors.tiersEyebrow")}
        ctaButtons={[
          { label: t("contractors.startApplication"), href: "/contractors/training", variant: "primary" },
          { label: "Learn More", href: "/contractors/training", variant: "outline" },
        ]}
      />

      <StatBar
        stats={[
          { value: "3,000+", label: "Certified Contractors" },
          { value: "Top 3%", label: "Master Elite Standard" },
          { value: "200+", label: "Training Courses" },
          { value: "50", label: "States Covered" },
        ]}
      />

      {/* Tiers */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow={t("contractors.tiersEyebrow")}
            title={t("contractors.tiersTitle")}
            subtitle="Each tier unlocks additional warranty access, marketing support, and business growth tools."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`border-2 ${tier.color} p-7 flex flex-col relative ${tier.featured ? "bg-[var(--gaf-near-black)]" : "bg-white"}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--gaf-gold)] text-white text-xs font-bold px-4 py-1 uppercase tracking-wide font-sans whitespace-nowrap">
                    Top 3% Nationally
                  </div>
                )}
                <span className={`inline-flex w-fit text-white text-xs font-semibold px-2.5 py-1 mb-3 font-sans uppercase tracking-wide ${tier.badge}`}>
                  {tier.level}
                </span>
                <h3 className={`text-xl font-bold mb-5 ${tier.featured ? "text-white" : "text-[var(--gaf-near-black)]"}`}>
                  {tier.name}
                </h3>

                <div className="mb-5">
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-2 font-sans ${tier.featured ? "text-gray-400" : "text-gray-500"}`}>Requirements</p>
                  <ul className="space-y-1.5">
                    {tier.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm font-sans">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? "text-[var(--gaf-gold)]" : "text-gray-400"}`} />
                        <span className={tier.featured ? "text-gray-400" : "text-gray-600"}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 mb-6">
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-2 font-sans ${tier.featured ? "text-gray-400" : "text-gray-500"}`}>Benefits</p>
                  <ul className="space-y-1.5">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm font-sans">
                        <Star className={`w-4 h-4 shrink-0 mt-0.5 ${tier.featured ? "fill-[var(--gaf-gold)] text-[var(--gaf-gold)]" : "fill-[var(--gaf-red)] text-[var(--gaf-red)]"}`} />
                        <span className={tier.featured ? "text-gray-300" : "text-gray-700"}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contractors/training"
                  className={`block text-center font-semibold py-2.5 text-sm transition-colors font-sans ${
                    tier.featured
                      ? "bg-[var(--gaf-gold)] hover:bg-yellow-600 text-white"
                      : "border-2 border-[var(--gaf-near-black)] text-[var(--gaf-near-black)] hover:bg-[var(--gaf-near-black)] hover:text-white"
                  }`}
                >
                  {t("contractors.startApplication")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow={t("contractors.benefitsEyebrow")}
            title={t("contractors.benefitsTitle")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[var(--border)] p-6">
                <div className="w-12 h-12 bg-[var(--gaf-red)]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--gaf-red)]" />
                </div>
                <h4 className="text-[var(--gaf-near-black)] font-bold mb-2">{title}</h4>
                <p className="text-gray-600 text-sm font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("contractors.storiesEyebrow")} title={t("contractors.storiesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[var(--secondary)] p-7 border border-[var(--border)]">
                <p className="text-gray-700 text-sm font-sans leading-relaxed italic mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-[var(--gaf-near-black)] font-bold text-sm font-sans">{t.name}</p>
                  <p className="text-gray-600 text-xs font-sans mt-0.5">{t.company} — {t.location}</p>
                  <p className="text-[var(--gaf-gold)] text-xs font-semibold font-sans mt-1">{t.tier} · {t.years} years in business</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={t("contractors.ctaTitle")}
        subtext={t("contractors.ctaSubtitle")}
        ctaLabel={t("contractors.startApplication")}
        ctaHref="/contractors/training"
        variant="dark"
        secondaryCta={{ label: t("common.findContractor"), href: "/contractors/training" }}
      />
    </div>
  );
}
