import { useParams, Link } from "react-router";
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import ArticleCard from "../../components/shared/ArticleCard";
import CTABanner from "../../components/shared/CTABanner";
import { ARTICLES } from "../../data/articles";
import { useTranslation } from "../../i18n/LanguageContext";

export default function ArticleDetailPage() {
  const { t, lang } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);
  const related = ARTICLES.filter((a) => a.slug !== slug && (article ? a.category === article.category : true)).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--gaf-near-black)] mb-2">Article Not Found</h1>
          <Link to="/resources" className="text-[var(--gaf-red)] font-semibold font-sans hover:underline">
            ← {lang === "tr" ? "Öğrenme Merkezine Dön" : "Back to Learning Center"}
          </Link>
        </div>
      </div>
    );
  }

  // Generate realistic article body paragraphs
  const paragraphs = [
    article.excerpt,
    "When it comes to residential roofing, the choices you make today will affect your home's performance and appearance for decades. Industry professionals consistently emphasize that investing in quality materials — and ensuring they're installed by a certified contractor — pays dividends in reduced maintenance costs, better energy efficiency, and stronger resale value.",
    "GAF's extensive research and development program has produced innovations that address the most common failure points in residential roofing systems. From advanced nail-strip technology that reduces installation errors to integrated leak barriers that protect vulnerable transition areas, every component is engineered to work as part of a complete roofing system rather than as an isolated product.",
    "Homeowners often focus exclusively on shingle style and color when planning a roofing project — understandably so, since these decisions have the most visible impact on curb appeal. But experienced contractors know that the components beneath the shingles determine whether a roof performs as designed over its entire expected service life.",
    "The importance of proper attic ventilation cannot be overstated. An inadequately ventilated attic creates a feedback loop of problems: in summer, trapped heat degrades shingles prematurely and drives up cooling costs; in winter, warm air escaping from living spaces melts snow on the roof, which then refreezes at the cold eave overhang, forming ice dams that can force water under shingles and into the structure itself.",
    "When comparing warranty options, look beyond the headline term length. A 30-year warranty that doesn't cover labor is meaningfully less valuable than a warranty that covers both materials and installation workmanship for the same period. GAF's Golden Pledge warranty — available exclusively through Master Elite contractors — is the only residential roofing warranty that covers both for 30 years.",
    "The bottom line: a new roof is one of the most significant investments you'll make in your home. The quality of the products, the skill of the installer, and the strength of the warranty protection all matter — and GAF's integrated approach addresses all three.",
  ];

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/resources" className="hover:text-[var(--gaf-red)]">Learning Center</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)] truncate max-w-[200px]">{article.title}</span>
        </div>
      </div>

      {/* Article hero */}
      <div className={`aspect-[21/6] bg-gradient-to-br ${article.gradientFrom} ${article.gradientTo} max-h-80 w-full`} />

      <article className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-sans">{article.category}</span>
            <span className="flex items-center gap-1 text-xs text-gray-500 font-sans">
              <Clock className="w-3 h-3" /> {article.readTime} min read
            </span>
          </div>

          <h1 className="text-[var(--gaf-near-black)] text-4xl md:text-5xl font-bold leading-tight mb-5">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pb-8 border-b border-[var(--border)] mb-8">
            <div className="w-9 h-9 bg-[var(--gaf-red)] flex items-center justify-center text-white font-bold text-sm font-sans">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--gaf-near-black)] font-sans">{article.author}</p>
              <p className="text-xs text-gray-500 font-sans">{article.date}</p>
            </div>
          </div>

          <div className="prose max-w-none">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-gray-700 text-base font-sans leading-relaxed mb-5">
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[var(--border)]">
            {["Roofing", article.category, "GAF", "Home Improvement"].map((tag) => (
              <Link
                key={tag}
                to="/resources"
                className="text-xs bg-gray-100 hover:bg-[var(--gaf-red)] hover:text-white text-gray-700 px-3 py-1 font-sans transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Link
              to="/resources"
              className="flex items-center gap-2 text-[var(--gaf-red)] font-semibold text-sm font-sans hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> {lang === "tr" ? "Öğrenme Merkezine Dön" : "Back to Learning Center"}
            </Link>
            <Link
              to="/homeowners/find-a-contractor"
              className="flex items-center gap-2 text-[var(--gaf-red)] font-semibold text-sm font-sans hover:gap-3 transition-all"
            >
              Find a Contractor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-[var(--secondary)]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-[var(--gaf-near-black)] text-2xl font-bold mb-8">{lang === "tr" ? "İlgili Makaleler" : "Related Articles"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline="Ready to Put This Knowledge to Work?"
        subtext="Find a GAF certified contractor to start your roofing project."
        ctaLabel="Find a Contractor"
        ctaHref="/homeowners/find-a-contractor"
      />
    </div>
  );
}
