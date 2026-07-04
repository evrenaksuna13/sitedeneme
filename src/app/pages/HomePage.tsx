import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Star, ArrowRight, CheckCircle, MapPin, Zap, Shield, Award } from "lucide-react";
import { motion } from "motion/react";
import StatBar from "../components/shared/StatBar";
import SectionHeading from "../components/shared/SectionHeading";
import CTABanner from "../components/shared/CTABanner";
import ArticleCard from "../components/shared/ArticleCard";
import SearchBar from "../components/shared/SearchBar";
import { useTranslation } from "../i18n/LanguageContext";
import { RESIDENTIAL_PRODUCTS, COMMERCIAL_PRODUCTS } from "../data/products";
import { ARTICLES } from "../data/articles";

const testimonials = [
  {
    quoteEn: "We chose the Classic Tuğla Kırmızısı and it completely transformed the look of our home. The stone coating gives it real depth — nothing like the flat tiles we had before.",
    quoteTr: "Classic Tuğla Kırmızısı'nı seçtik ve evimizin görünümünü tamamen değiştirdi. Taş kaplama gerçek bir derinlik veriyor — daha önce sahip olduğumuz düz kiremitlerle hiç karşılaştırılamaz.",
    name: "Patricia Donaldson",
    location: "Columbus, OH",
    rating: 5,
    product: "Classic — Tuğla Kırmızısı",
  },
  {
    quoteEn: "After a storm damaged our roof, a certified Starbond installer replaced it with the Classic Kömür Gri. The interlocking system is incredibly solid and the 50-year warranty gave us genuine peace of mind.",
    quoteTr: "Bir fırtına çatımıza zarar verdikten sonra, sertifikalı bir Starbond montajcısı onu Classic Kömür Gri ile değiştirdi. Kilitlemeli sistem inanılmaz derecede sağlam ve 50 yıllık garanti bize gerçek bir gönül rahatlığı sağladı.",
    name: "Robert & Linda Kim",
    location: "Nashville, TN",
    rating: 5,
    product: "Classic — Kömür Gri",
  },
  {
    quoteEn: "The Classic Safir on our Mediterranean-style home is stunning — the blue granules catch the light beautifully. Everyone who visits asks about it.",
    quoteTr: "Akdeniz tarzı evimizde Classic Safir muhteşem görünüyor — mavi granüller ışığı güzel bir şekilde yakalıyor. Ziyaret eden herkes soruyor.",
    name: "Thomas Whitfield",
    location: "Pittsburgh, PA",
    rating: 5,
    product: "Classic — Safir",
  },
];

export default function HomePage() {
  const { t, lang } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");

  const featuredResidential = RESIDENTIAL_PRODUCTS.slice(0, 4);
  const featuredCommercial = COMMERCIAL_PRODUCTS.slice(0, 4);
  const featuredArticles = ARTICLES.slice(0, 3);

  const whyGAF = [
    { icon: Award, title: t("home.why1Title"), desc: t("home.why1Desc") },
    { icon: Shield, title: t("home.why2Title"), desc: t("home.why2Desc") },
    { icon: Zap, title: t("home.why3Title"), desc: t("home.why3Desc") },
    { icon: CheckCircle, title: t("home.why4Title"), desc: t("home.why4Desc") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-[var(--gaf-near-black)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop&auto=format')] bg-cover bg-center opacity-40" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--gaf-red)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">
              {t("home.heroEyebrow")}
            </p>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6">
              {t("home.heroTitle")}
            </h1>
            <p className="text-gray-300 text-xl max-w-lg mb-10 font-sans font-normal leading-relaxed">
              {t("home.heroSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/homeowners/find-a-contractor" className="inline-flex items-center gap-2 bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-bold px-8 py-4 text-base transition-colors">
                {t("home.heroCta1")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/products/residential" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[var(--gaf-near-black)] font-bold px-8 py-4 text-base transition-colors">
                {t("home.heroCta2")}
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center bg-white/10 backdrop-blur-sm border border-white/20 p-5 gap-1">
          <span className="text-white text-4xl font-bold">{t("home.stat1Value")}</span>
          <span className="text-white/70 text-xs uppercase tracking-widest font-sans">{t("home.stat1Label")}</span>
        </motion.div>
      </section>

      {/* Stats */}
      <StatBar stats={[
        { value: t("home.stat1Value"), label: t("home.stat1Label") },
        { value: t("home.stat2Value"), label: t("home.stat2Label") },
        { value: t("home.stat3Value"), label: t("home.stat3Label") },
        { value: t("home.stat4Value"), label: t("home.stat4Label") },
      ]} />

      {/* Product highlights */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("home.highlightsEyebrow")} title={t("home.highlightsTitle")} subtitle={t("home.highlightsSubtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {RESIDENTIAL_PRODUCTS.slice(0, 3).map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <Link to={`/products/residential/${product.slug}`}>
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img src={product.image} alt={product.colorName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.badge && <span className="absolute top-3 left-3 bg-[var(--gaf-red)] text-white text-xs font-semibold px-2 py-1 uppercase tracking-wide">{product.badge}</span>}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1.5">
                      <span className="w-3 h-3 rounded-full border border-white/40 shrink-0" style={{ background: product.swatchBg }} />
                      <span className="text-white text-xs font-semibold font-sans">{product.colorName}</span>
                    </div>
                  </div>
                  <div className="pt-4 pb-2">
                    <h3 className="text-[var(--gaf-near-black)] text-xl font-bold group-hover:text-[var(--gaf-red)] transition-colors">{product.colorName}</h3>
                    <p className="text-gray-500 text-sm font-sans mt-0.5">{product.colorNameEn} · {product.series} {t("common.series")}</p>
                    <p className="text-[var(--gaf-red)] text-sm font-semibold font-sans mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("common.viewDetails")} <ArrowRight className="w-4 h-4" />
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products/residential" className="inline-flex items-center gap-2 border-2 border-[var(--gaf-near-black)] text-[var(--gaf-near-black)] hover:bg-[var(--gaf-near-black)] hover:text-white font-semibold px-8 py-3 transition-colors">
              {t("home.viewAllColours")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Find Contractor */}
      <section className="bg-[var(--gaf-near-black)] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("home.contractorEyebrow")}</p>
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">{t("home.contractorTitle")}</h2>
            <p className="text-gray-400 text-lg font-sans font-normal leading-relaxed mb-8">{t("home.contractorSubtitle")}</p>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-[var(--gaf-red)] shrink-0" />
              <span className="text-gray-300 font-sans">{t("home.contractorZipLabel")}</span>
            </div>
            <div className="mt-4">
              <SearchBar placeholder={lang === "tr" ? "Posta kodunuzu girin" : "Enter your ZIP code"} buttonLabel={t("home.contractorFindBtn")} onSearch={(zip) => navigate(`/homeowners/find-a-contractor?zip=${zip}`)} />
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="bg-[var(--gaf-red)] h-80 w-full" style={{ clipPath: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
              <div className="flex flex-col items-end justify-center h-full pr-10 gap-4">
                <div className="bg-white/10 p-5 text-right">
                  <p className="text-white text-3xl font-bold">{t("home.contractorStat1")}</p>
                  <p className="text-white/75 text-sm font-sans">{t("home.contractorStat1Label")}</p>
                </div>
                <div className="bg-white/10 p-5 text-right">
                  <p className="text-white text-3xl font-bold">{t("home.contractorStat2")}</p>
                  <p className="text-white/75 text-sm font-sans">{t("home.contractorStat2Label")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("home.whyEyebrow")} title={t("home.whyTitle")} subtitle={t("home.whySubtitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {whyGAF.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white p-6 border border-[var(--border)]">
                <div className="w-12 h-12 bg-[var(--gaf-red)]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--gaf-red)]" />
                </div>
                <h3 className="text-[var(--gaf-near-black)] text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm font-sans leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("home.catalogEyebrow")} title={t("home.catalogTitle")} />
          <div className="flex gap-0 border-b border-gray-200 mb-8 mt-4">
            {(["residential", "commercial"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 text-sm font-semibold font-sans border-b-2 transition-colors -mb-px ${activeTab === tab ? "border-[var(--gaf-red)] text-[var(--gaf-red)]" : "border-transparent text-gray-500 hover:text-[var(--gaf-near-black)]"}`}>
                {t(tab === "residential" ? "home.residentialTab" : "home.commercialTab")}
              </button>
            ))}
          </div>
          {activeTab === "residential" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredResidential.map((p) => (
                <Link key={p.id} to={`/products/residential/${p.slug}`} className="group block">
                  <div className="aspect-square overflow-hidden bg-gray-100 mb-2.5 relative">
                    <img src={p.image} alt={p.colorName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1">
                      <span className="w-2.5 h-2.5 rounded-full border border-white/40 shrink-0" style={{ background: p.swatchBg }} />
                      <span className="text-white text-[10px] font-semibold font-sans leading-none">{p.colorName}</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-[var(--gaf-near-black)] group-hover:text-[var(--gaf-red)] transition-colors text-sm">{p.colorName}</h4>
                  <p className="text-gray-500 text-xs font-sans mt-0.5">{p.colorNameEn}</p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredCommercial.map((p) => (
                <Link key={p.id} to="/products/commercial" className="group block">
                  <div className={`aspect-square bg-gradient-to-br ${p.gradientFrom} ${p.gradientTo} mb-3`} />
                  <h4 className="font-bold text-[var(--gaf-near-black)] group-hover:text-[var(--gaf-red)] transition-colors text-sm">{p.name}</h4>
                  <p className="text-gray-500 text-xs font-sans mt-0.5">{p.type.toUpperCase()}</p>
                </Link>
              ))}
            </div>
          )}
          <div className="text-center mt-10">
            <Link to={activeTab === "residential" ? "/products/residential" : "/products/commercial"} className="inline-flex items-center gap-2 bg-[var(--gaf-near-black)] hover:bg-[var(--gaf-red)] text-white font-semibold px-8 py-3 transition-colors">
              {t(activeTab === "residential" ? "home.viewAllResidential" : "home.viewAllCommercial")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("home.testimonialsEyebrow")} title={t("home.testimonialsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {testimonials.map((t_, i) => (
              <motion.div key={t_.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-7 border border-[var(--border)] flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t_.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 text-sm font-sans leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{lang === "tr" ? t_.quoteTr : t_.quoteEn}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-[var(--gaf-near-black)] font-semibold text-sm font-sans">{t_.name}</p>
                  <p className="text-gray-500 text-xs font-sans mt-0.5">{t_.location} · {t_.product}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <SectionHeading eyebrow={t("home.newsEyebrow")} title={t("home.newsTitle")} align="left" />
            <Link to="/resources" className="hidden md:inline-flex items-center gap-2 text-[var(--gaf-red)] font-semibold text-sm font-sans hover:gap-3 transition-all shrink-0 pb-10">
              {t("home.viewAllArticles")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => <ArticleCard key={article.id} article={article} />)}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[var(--gaf-near-black)] py-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 text-xs uppercase tracking-widest text-center mb-6 font-sans">{t("home.trustLabel")}</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["This Old House", "HGTV", "Better Homes & Gardens", "Consumer Reports", "Good Housekeeping", "Energy Star"].map((brand) => (
              <span key={brand} className="text-gray-500 font-semibold text-sm font-sans tracking-wide border border-gray-700 px-4 py-2">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={t("home.finalCtaTitle")}
        subtext={t("home.finalCtaSubtitle")}
        ctaLabel={t("common.findContractor")}
        ctaHref="/homeowners/find-a-contractor"
        secondaryCta={{ label: lang === "tr" ? "Ürünleri Görüntüle" : "View Products", href: "/products/residential" }}
      />
    </div>
  );
}
