import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import ProductCard from "../../components/shared/ProductCard";
import CTABanner from "../../components/shared/CTABanner";
import SectionHeading from "../../components/shared/SectionHeading";
import { RESIDENTIAL_PRODUCTS } from "../../data/products";
import { useTranslation } from "../../i18n/LanguageContext";

const WARM_COLORS = ["altin-kirmizi", "tugla-kirmizisi", "portakal", "kirmizi-siyah", "kahve", "havana-kahve"];
const GREEN_COLORS = ["yesil", "sega-yesil-siyah"];
const BLUE_COLORS = ["safir", "gece-mavisi"];
const GREY_COLORS = ["komur-gri", "granit-gri", "ay-gri", "antrasit-gri", "ayisigi", "siyah"];

function getColorGroup(slug: string) {
  const base = slug.replace(/^(classic|alaturka|ottoman|aquapan|double-classic|senator)-/, "");
  if (WARM_COLORS.includes(base)) return "warm";
  if (GREEN_COLORS.includes(base)) return "green";
  if (BLUE_COLORS.includes(base)) return "blue";
  if (GREY_COLORS.includes(base)) return "grey";
  return "all";
}

const classicCount = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Classic").length;
const alaturkaCount = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Alaturka").length;
const ottomanCount = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Ottoman").length;
const aquapanCount = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Aquapan").length;
const doubleClassicCount = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Double Classic").length;
const senatorCount = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Senator").length;

export default function ResidentialProductsPage() {
  const { t, lang } = useTranslation();
  const [searchParams] = useSearchParams();
  const [seriesFilter, setSeriesFilter] = useState(() => searchParams.get("series") ?? "all");
  const [colorFilter, setColorFilter] = useState("all");

  useEffect(() => {
    const s = searchParams.get("series");
    if (s) setSeriesFilter(s);
  }, [searchParams]);

  const filtered = RESIDENTIAL_PRODUCTS.filter((p) => {
    if (seriesFilter !== "all" && p.series !== seriesFilter) return false;
    if (colorFilter !== "all" && getColorGroup(p.slug) !== colorFilter) return false;
    return true;
  });

  const classicProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Classic");
  const alaturkaProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Alaturka");
  const ottomanProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Ottoman");
  const aquapanProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Aquapan");
  const doubleClassicProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Double Classic");
  const senatorProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === "Senator");

  const SERIES_FILTERS = [
    { label: t("common.allSeries"), value: "all" },
    { label: "Classic", value: "Classic" },
    { label: "Alaturka", value: "Alaturka" },
    { label: "Ottoman", value: "Ottoman" },
    { label: "Aquapan", value: "Aquapan" },
    { label: "Double Classic", value: "Double Classic" },
    { label: "Senator", value: "Senator" },
  ];

  const COLOR_FILTERS = [
    { label: t("common.allColours"), value: "all" },
    { label: t("common.redsAndBrowns"), value: "warm" },
    { label: t("common.greens"), value: "green" },
    { label: t("common.blues"), value: "blue" },
    { label: t("common.greysAndBlack"), value: "grey" },
  ];

  const seriesData = [
    { series: "Classic", profile: t("products.classicProfile"), desc: t("products.classicDesc"), count: classicCount, products: classicProducts },
    { series: "Alaturka", profile: t("products.alaturkaProfile"), desc: t("products.alaturkaDesc"), count: alaturkaCount, products: alaturkaProducts },
    { series: "Ottoman", profile: t("products.ottomanProfile"), desc: t("products.ottomanDesc"), count: ottomanCount, products: ottomanProducts },
    { series: "Aquapan", profile: t("products.aquapanProfile"), desc: t("products.aquapanDesc"), count: aquapanCount, products: aquapanProducts },
    { series: "Double Classic", profile: t("products.doubleClassicProfile"), desc: t("products.doubleClassicDesc"), count: doubleClassicCount, products: doubleClassicProducts },
    { series: "Senator", profile: t("products.senatorProfile"), desc: t("products.senatorDesc"), count: senatorCount, products: senatorProducts },
  ];

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)] transition-colors">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{lang === "tr" ? "Konut Çatısı" : "Residential Roofing"}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("products.eyebrow")}</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">{t("products.title")}</h1>
            <p className="text-gray-400 text-lg font-sans leading-relaxed mb-6">
              {t("products.subtitle").replace("{count}", String(RESIDENTIAL_PRODUCTS.length))}
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-sans mb-8">
              {[
                { value: "50-Year", label: t("common.warranty") },
                { value: "Class A", label: t("common.fireRating") },
                { value: "130 mph", label: t("common.windResistance") },
                { value: `${RESIDENTIAL_PRODUCTS.length}`, label: lang === "tr" ? "Renk" : "Colours" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 px-4 py-3 text-center min-w-[90px]">
                  <p className="text-white font-bold text-base">{value}</p>
                  <p className="text-white/60 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {seriesData.map(({ series, count }) => (
                <button key={series} onClick={() => setSeriesFilter(series)} className="flex items-center gap-2 bg-white/10 hover:bg-[var(--gaf-red)] text-white font-semibold px-4 py-2.5 text-sm transition-colors font-sans border border-white/20">
                  {series} — {count} {lang === "tr" ? "renk" : "colours"} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Preview grid */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
            {seriesData.map(({ series, products }) => (
              <div key={series}>
                <p className="text-white/50 text-xs font-sans uppercase tracking-widest mb-2">{series}</p>
                <div className="grid grid-cols-4 gap-0.5">
                  {products.slice(0, 8).map((p) => (
                    <Link key={p.id} to={`/products/residential/${p.slug}`} title={p.colorName}>
                      <div className="aspect-square overflow-hidden">
                        <img src={p.image} alt={p.colorName} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series comparison */}
      <section className="bg-white border-b border-[var(--border)] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {seriesData.map((s) => (
            <div key={s.series} className={`flex gap-3 p-4 border-2 cursor-pointer transition-all ${seriesFilter === s.series ? "border-[var(--gaf-red)] bg-red-50" : "border-[var(--border)] hover:border-gray-400"}`} onClick={() => setSeriesFilter(seriesFilter === s.series ? "all" : s.series)}>
              <div className="w-1.5 shrink-0 bg-[var(--gaf-red)]" />
              <div>
                <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                  <h3 className="font-bold text-[var(--gaf-near-black)] text-sm">{s.series}</h3>
                  <span className="text-xs bg-[var(--gaf-red)] text-white px-1.5 py-0.5 font-sans font-semibold">{s.count}</span>
                </div>
                <p className="text-[var(--gaf-red)] text-xs font-semibold font-sans mb-1">{s.profile}</p>
                <p className="text-gray-600 text-xs font-sans leading-relaxed line-clamp-3">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter bar */}
      <div className="bg-white border-b border-[var(--border)] px-6 py-3 sticky top-[65px] z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <div className="flex gap-1.5">
            {SERIES_FILTERS.map((f) => (
              <button key={f.value} onClick={() => setSeriesFilter(f.value)} className={`px-3 py-1.5 text-xs font-semibold border transition-colors font-sans ${seriesFilter === f.value ? "bg-[var(--gaf-near-black)] border-[var(--gaf-near-black)] text-white" : "bg-white border-gray-300 text-gray-700 hover:border-gray-500"}`}>
                {f.label}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-gray-200 hidden sm:block" />
          <div className="flex flex-wrap gap-1.5">
            {COLOR_FILTERS.map((f) => (
              <button key={f.value} onClick={() => setColorFilter(f.value)} className={`px-3 py-1.5 text-xs font-semibold border transition-colors font-sans ${colorFilter === f.value ? "bg-[var(--gaf-red)] border-[var(--gaf-red)] text-white" : "bg-white border-gray-300 text-gray-700 hover:border-[var(--gaf-red)] hover:text-[var(--gaf-red)]"}`}>
                {f.label}
              </button>
            ))}
          </div>
          <span className="ml-auto text-xs text-gray-500 font-sans hidden sm:block">{filtered.length} {t("common.productsShown")}</span>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-sans">{t("common.noProducts")}</p>
              <button onClick={() => { setSeriesFilter("all"); setColorFilter("all"); }} className="mt-4 text-[var(--gaf-red)] font-semibold font-sans hover:underline">
                {t("common.clearFilters")}
              </button>
            </div>
          ) : seriesFilter === "all" ? (
            ["Classic", "Alaturka", "Ottoman", "Aquapan", "Double Classic", "Senator"].map((series) => {
              const sp = filtered.filter((p) => p.series === series);
              if (!sp.length) return null;
              return (
                <div key={series} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-[var(--gaf-near-black)] text-xl font-bold">{series} {t("common.series")}</h2>
                    <span className="text-sm text-gray-500 font-sans">{sp.length} {lang === "tr" ? "renk" : "colours"}</span>
                    <button onClick={() => setSeriesFilter(series)} className="ml-auto text-[var(--gaf-red)] text-sm font-semibold font-sans hover:underline flex items-center gap-1">
                      {t("common.viewAll")} {series} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {sp.map((product) => (
                      <ProductCard key={product.id} name={product.name} slug={product.slug} series={product.series} colorName={product.colorName} colorNameEn={product.colorNameEn} tagline={product.tagline} description={product.description} warranty={product.warranty} windRating={product.windRating} badge={product.badge} image={product.image} swatchBg={product.swatchBg} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} name={product.name} slug={product.slug} series={product.series} colorName={product.colorName} colorNameEn={product.colorNameEn} tagline={product.tagline} description={product.description} warranty={product.warranty} windRating={product.windRating} badge={product.badge} image={product.image} swatchBg={product.swatchBg} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("products.specsTitle")} title={t("products.specsTitle")} subtitle={t("products.specsSubtitle")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { label: t("products.baseMaterial"), value: "Galvalume Steel (AZ150)" },
              { label: t("products.stoneCoating"), value: lang === "tr" ? "Doğal Bazalt Granül" : "Natural Basalt Granules" },
              { label: t("products.windResistance"), value: "130 mph (ASTM D3161)" },
              { label: t("products.fireRating"), value: "Class A" },
              { label: t("products.warranty"), value: lang === "tr" ? "50 Yıl Sınırlı" : "50-Year Limited" },
              { label: t("products.tempRange"), value: "−40°C to +120°C" },
              { label: t("products.classicWeight"), value: "1.4 kg / tile" },
              { label: t("products.alaturkaWeight"), value: "1.6 kg / tile" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[var(--secondary)] border border-[var(--border)] p-5">
                <p className="text-[var(--gaf-red)] text-xs font-semibold uppercase tracking-widest mb-1 font-sans">{label}</p>
                <p className="text-[var(--gaf-near-black)] font-bold text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={t("products.ctaTitle")}
        subtext={t("products.ctaSubtitle")}
        ctaLabel={t("products.designToolBtn")}
        ctaHref="/homeowners/design-your-roof"
        secondaryCta={{ label: t("common.findContractor"), href: "/homeowners/find-a-contractor" }}
      />
    </div>
  );
}
