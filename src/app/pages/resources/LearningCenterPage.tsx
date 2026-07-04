import { useState } from "react";
import { Link } from "react-router";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";
import ArticleCard from "../../components/shared/ArticleCard";
import { ARTICLES, type ArticleCategory } from "../../data/articles";
import { useTranslation } from "../../i18n/LanguageContext";

const ARTICLES_PER_PAGE = 9;

export default function LearningCenterPage() {
  const { t, lang } = useTranslation();
  const [category, setCategory] = useState<ArticleCategory | "all">("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const CATEGORIES: { label: string; value: ArticleCategory | "all" }[] = [
    { label: lang === "tr" ? "Tümü" : "All", value: "all" },
    { label: lang === "tr" ? "Ev Sahipleri" : "Homeowners", value: "Homeowners" },
    { label: lang === "tr" ? "Müteahhitler" : "Contractors", value: "Contractors" },
    { label: lang === "tr" ? "Ticari" : "Commercial", value: "Commercial" },
    { label: lang === "tr" ? "Ürün Haberleri" : "Product News", value: "Product News" },
    { label: lang === "tr" ? "Sürdürülebilirlik" : "Sustainability", value: "Sustainability" },
    { label: lang === "tr" ? "Nasıl Yapılır" : "How-To", value: "How-To" },
  ];

  const filtered = ARTICLES.filter((a) => {
    if (category !== "all" && a.category !== category) return false;
    if (search && !a.title.toLowerCase().includes(search.toLowerCase()) && !a.excerpt.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);
  const featured = ARTICLES.find((a) => a.featured);

  return (
    <div>
      {/* Header */}
      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">{t("resources.eyebrow")}</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">{t("resources.title")}</h1>
          <div className="max-w-lg relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder={t("resources.searchPlaceholder")}
              className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder-gray-400 font-sans text-base outline-none focus:border-white" />
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && !search && category === "all" && (
        <section className="py-10 px-6 bg-white border-b border-[var(--border)]">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4 font-sans">{t("resources.featuredLabel")}</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`aspect-video bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo}`} />
              <div>
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-sans">{featured.category}</span>
                <h2 className="text-[var(--gaf-near-black)] text-3xl font-bold mt-3 mb-3">{featured.title}</h2>
                <p className="text-gray-600 font-sans leading-relaxed mb-4">{featured.excerpt}</p>
                <p className="text-gray-500 text-sm font-sans mb-5">{featured.author} · {featured.date} · {featured.readTime} {lang === "tr" ? "dk okuma" : "min read"}</p>
                <Link to={`/resources/${featured.slug}`} className="inline-flex items-center gap-2 bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-6 py-2.5 text-sm transition-colors">
                  {t("common.readMore")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category filter */}
      <section className="bg-white border-b border-[var(--border)] sticky top-[65px] z-30 px-6">
        <div className="max-w-7xl mx-auto flex overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button key={cat.value} onClick={() => { setCategory(cat.value); setPage(1); }}
              className={`px-4 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors font-sans -mb-px ${category === cat.value ? "border-[var(--gaf-red)] text-[var(--gaf-red)]" : "border-transparent text-gray-500 hover:text-[var(--gaf-near-black)]"}`}>
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 bg-[var(--secondary)] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-gray-500 font-sans mb-6">{filtered.length} {lang === "tr" ? "makale" : (filtered.length !== 1 ? "articles" : "article")}</p>
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((article) => <ArticleCard key={article.id} article={article} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg font-sans">{t("resources.noResults")}</p>
              <button onClick={() => { setSearch(""); setCategory("all"); }} className="mt-3 text-[var(--gaf-red)] font-semibold font-sans hover:underline">
                {t("resources.clearFilters")}
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="w-9 h-9 flex items-center justify-center border border-[var(--border)] bg-white text-gray-600 hover:border-[var(--gaf-red)] hover:text-[var(--gaf-red)] disabled:opacity-40 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} className={`w-9 h-9 flex items-center justify-center border text-sm font-semibold font-sans transition-colors ${page === i + 1 ? "bg-[var(--gaf-red)] border-[var(--gaf-red)] text-white" : "border-[var(--border)] bg-white text-gray-600 hover:border-[var(--gaf-red)] hover:text-[var(--gaf-red)]"}`}>
                  {i + 1}
                </button>
              ))}
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="w-9 h-9 flex items-center justify-center border border-[var(--border)] bg-white text-gray-600 hover:border-[var(--gaf-red)] hover:text-[var(--gaf-red)] disabled:opacity-40 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
