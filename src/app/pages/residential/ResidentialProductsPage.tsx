import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import ProductCard from "../../components/shared/ProductCard";
import { RESIDENTIAL_PRODUCTS } from "../../data/products";
import { useTranslation } from "../../i18n/LanguageContext";

export default function ResidentialProductsPage() {
  const { t, lang } = useTranslation();
  const [seriesFilter, setSeriesFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");

  const filtered = RESIDENTIAL_PRODUCTS.filter((p) => {
    const matchSeries = seriesFilter === "all" || p.series === seriesFilter;
    const matchColor = colorFilter === "all" || p.colorGroup === colorFilter;
    return matchSeries && matchColor;
  });

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{lang === "tr" ? "Konut Çatısı" : "Residential Roofing"}</span>
        </div>
      </div>

      <div className="bg-white border-b border-[var(--border)] px-6 py-3 sticky top-[65px] z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <div className="flex gap-1.5">
            <button onClick={() => setSeriesFilter("all")} className={`px-3 py-1.5 text-xs font-semibold border ${seriesFilter === "all" ? "bg-black text-white" : "bg-white"}`}>All Series</button>
            {["Classic", "Alaturka", "Ottoman", "Aquapan", "Double Classic", "Senator"].map((s) => (
              <button key={s} onClick={() => setSeriesFilter(s)} className={`px-3 py-1.5 text-xs font-semibold border ${seriesFilter === s ? "bg-black text-white" : "bg-white"}`}>{s}</button>
            ))}
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div className="flex flex-wrap gap-1.5">
            {[
              {l: "All Colours", v: "all"}, {l: "Reds & Browns", v: "warm"}, {l: "Greens", v: "green"}, {l: "Blues", v: "blue"}, {l: "Greys & Black", v: "grey"}
            ].map((f) => (
              <button key={f.v} onClick={() => setColorFilter(f.v)} className={`px-3 py-1.5 text-xs font-semibold border transition-colors ${colorFilter === f.v ? "bg-[var(--gaf-red)] text-white border-[var(--gaf-red)]" : "bg-white border-gray-300 hover:border-gray-500"}`}>
                {f.l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center py-20 text-gray-500">No products found for this filter.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}