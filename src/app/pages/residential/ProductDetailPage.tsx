import { useParams, Link } from "react-router";
import { ChevronRight, Shield, Wind, Flame, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import CTABanner from "../../components/shared/CTABanner";
import { RESIDENTIAL_PRODUCTS } from "../../data/products";
import { useTranslation } from "../../i18n/LanguageContext";
import { motion } from "motion/react";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useTranslation();
  const product = RESIDENTIAL_PRODUCTS.find((p) => p.slug === slug);
  const seriesProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === product?.series);
  const currentIndex = seriesProducts.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? seriesProducts[currentIndex - 1] : null;
  const nextProduct = currentIndex < seriesProducts.length - 1 ? seriesProducts[currentIndex + 1] : null;
  const related = seriesProducts.filter((p) => p.slug !== slug).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--gaf-near-black)] mb-2">
            {lang === "tr" ? "Ürün Bulunamadı" : "Product Not Found"}
          </h1>
          <Link to="/products/residential" className="text-[var(--gaf-red)] font-semibold font-sans hover:underline">
            ← {lang === "tr" ? "Ürünlere Geri Dön" : "Back to Products"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products/residential" className="hover:text-[var(--gaf-red)]">{product.series} {t("common.series")}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{product.colorName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
              <img src={product.image} alt={`${product.series} ${product.colorName}`} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center justify-between mt-4 gap-4">
              {prevProduct ? (
                <Link to={`/products/residential/${prevProduct.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--gaf-red)] font-sans transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="truncate max-w-[140px]">{prevProduct.colorName}</span>
                </Link>
              ) : <span />}
              {nextProduct && (
                <Link to={`/products/residential/${nextProduct.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--gaf-red)] font-sans transition-colors">
                  <span className="truncate max-w-[140px]">{nextProduct.colorName}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>

          <div>
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">
              {product.series} {t("common.series")} · {t("productDetail.seriesLabel")}
            </p>
            <h1 className="text-[var(--gaf-near-black)] text-4xl md:text-5xl font-bold leading-tight mb-1">{product.colorName}</h1>
            <p className="text-gray-400 text-xl font-sans mb-3">{product.colorNameEn}</p>
            <p className="text-gray-600 text-base font-sans leading-relaxed mb-8">{product.tagline}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Shield, label: t("common.warranty"), value: product.warranty },
                { icon: Wind, label: t("common.windResistance"), value: product.windRating },
                { icon: Flame, label: t("common.fireRating"), value: `Class ${product.fireRating}` },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2.5 bg-[var(--secondary)] border border-[var(--border)] px-4 py-3">
                  <Icon className="w-4 h-4 text-[var(--gaf-red)]" />
                  <div>
                    <p className="text-xs text-gray-500 font-sans uppercase tracking-wide leading-none mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-[var(--gaf-near-black)] font-sans leading-none">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Colour strip */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 font-sans">
                {t("productDetail.allColours").replace("{series}", product.series)}
              </p>
              <div className="flex gap-2 flex-wrap">
                {seriesProducts.map((p) => (
                  <Link key={p.id} to={`/products/residential/${p.slug}`} title={`${p.colorName} — ${p.colorNameEn}`}
                    className={`relative overflow-hidden transition-all ${p.id === product.id ? "ring-2 ring-[var(--gaf-red)] ring-offset-1" : "opacity-70 hover:opacity-100"}`}>
                    <div className="w-10 h-10 overflow-hidden">
                      <img src={p.image} alt={p.colorName} className="w-full h-full object-cover" />
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-xs text-gray-500 font-sans mt-2">
                {t("productDetail.currentlyViewing")} <span className="font-semibold text-[var(--gaf-near-black)]">{product.colorName}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/homeowners/find-a-contractor" className="inline-flex items-center gap-2 bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-bold px-8 py-3 transition-colors">
                {t("productDetail.findInstaller")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/homeowners/design-your-roof" className="inline-flex items-center gap-2 border-2 border-[var(--gaf-near-black)] text-[var(--gaf-near-black)] hover:bg-[var(--gaf-near-black)] hover:text-white font-bold px-8 py-3 transition-colors">
                {t("products.designToolBtn")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[var(--gaf-near-black)] text-2xl font-bold mb-4">{t("productDetail.aboutProduct")}</h2>
            <p className="text-gray-600 font-sans leading-relaxed text-base">{product.description}</p>
          </div>
          <div>
            <h2 className="text-[var(--gaf-near-black)] text-2xl font-bold mb-4">{t("productDetail.keyFeatures")}</h2>
            <ul className="space-y-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 bg-white border border-[var(--border)] px-4 py-3">
                  <CheckCircle className="w-4 h-4 text-[var(--gaf-red)] shrink-0 mt-0.5" />
                  <span className="text-[var(--gaf-near-black)] text-sm font-sans">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[var(--gaf-near-black)] text-2xl font-bold mb-8">
              {t("productDetail.otherColours").replace("{series}", product.series)}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <Link key={p.id} to={`/products/residential/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-2">
                    <img src={p.image} alt={p.colorName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="font-semibold text-sm text-[var(--gaf-near-black)] group-hover:text-[var(--gaf-red)] transition-colors font-sans">{p.colorName}</p>
                  <p className="text-gray-500 text-xs font-sans">{p.colorNameEn}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline={t("productDetail.ctaTitle")}
        subtext={t("productDetail.ctaSubtitle")}
        ctaLabel={t("common.findContractor")}
        ctaHref="/homeowners/find-a-contractor"
      />
    </div>
  );
}
