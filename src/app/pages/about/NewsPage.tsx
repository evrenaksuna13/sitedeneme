import { Link } from "react-router";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "../../components/shared/SectionHeading";
import { ARTICLES } from "../../data/articles";
import { useTranslation } from "../../i18n/LanguageContext";

const PRESS_RELEASES = [
  { date: "June 24, 2025", title: "GAF Announces Record-Breaking 2025 Contractor Certification Numbers", tag: "Company News" },
  { date: "June 12, 2025", title: "GAF Launches Next-Generation Timberline UHDZ with 15 New Color Blends", tag: "Product News" },
  { date: "May 28, 2025", title: "GAF Named Energy Star Partner of the Year for Third Consecutive Year", tag: "Awards" },
  { date: "May 15, 2025", title: "GAF Roofing for Good Program Completes 500th Community Roof Installation", tag: "Community" },
  { date: "April 30, 2025", title: "GAF Expands Shingle Recycling Program to Five Additional States", tag: "Sustainability" },
  { date: "April 18, 2025", title: "Standard Industries and GAF Announce $200M Investment in U.S. Manufacturing", tag: "Company News" },
];

export default function NewsPage() {
  const { t, lang } = useTranslation();
  const featured = ARTICLES.find((a) => a.featured)!;
  const recent = ARTICLES.slice(0, 6);

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/about" className="hover:text-[var(--gaf-red)]">About GAF</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">News & Press</span>
        </div>
      </div>

      <section className="bg-[var(--gaf-near-black)] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">Media Center</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">{t("nav.newsPress")}</h1>
          <p className="text-gray-400 mt-2 font-sans">The latest from GAF — product announcements, company news, and industry updates.</p>
        </div>
      </section>

      {/* Featured story */}
      <section className="py-12 px-6 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`aspect-video bg-gradient-to-br ${featured.gradientFrom} ${featured.gradientTo}`} />
          <div>
            <span className="text-xs font-semibold bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-sans">{featured.category}</span>
            <h2 className="text-[var(--gaf-near-black)] text-3xl font-bold mt-3 mb-3">{featured.title}</h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-4">{featured.excerpt}</p>
            <p className="text-gray-500 text-sm font-sans mb-5">{featured.author} · {featured.date}</p>
            <Link
              to={`/resources/${featured.slug}`}
              className="inline-flex items-center gap-2 bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-6 py-2.5 text-sm transition-colors"
            >
              Read Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Official Releases" title="Press Releases" align="left" />
          <div className="bg-white border border-[var(--border)] divide-y divide-[var(--border)] mt-4">
            {PRESS_RELEASES.map((pr) => (
              <div key={pr.title} className="flex items-center gap-5 px-6 py-5 hover:bg-[var(--secondary)] transition-colors cursor-pointer group">
                <div className="flex items-center gap-2 text-gray-500 text-sm font-sans shrink-0 w-32">
                  <Calendar className="w-3.5 h-3.5" />
                  {pr.date}
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--gaf-near-black)] font-semibold text-sm font-sans group-hover:text-[var(--gaf-red)] transition-colors">
                    {pr.title}
                  </h4>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 font-sans shrink-0 hidden sm:block">{pr.tag}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--gaf-red)] transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent coverage */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="From Our Blog" title="Recent Articles & Updates" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {recent.slice(0, 6).map((a) => (
              <Link key={a.id} to={`/resources/${a.slug}`} className="group block border border-[var(--border)] overflow-hidden hover:border-[var(--gaf-red)] transition-colors">
                <div className={`h-36 bg-gradient-to-br ${a.gradientFrom} ${a.gradientTo}`} />
                <div className="p-4">
                  <span className="text-xs text-gray-500 font-sans">{a.category} · {a.date}</span>
                  <h4 className="text-[var(--gaf-near-black)] font-bold text-sm mt-1 leading-snug group-hover:text-[var(--gaf-red)] transition-colors line-clamp-2">
                    {a.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Media contact */}
      <section className="py-16 px-6 bg-[var(--gaf-near-black)]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">Media Inquiries</p>
          <h2 className="text-white text-3xl font-bold mb-3">Press Contact</h2>
          <p className="text-gray-400 font-sans mb-6">For media inquiries, interview requests, and press materials, please contact our communications team.</p>
          <a href="mailto:press@gaf.com" className="inline-block bg-white text-[var(--gaf-near-black)] font-bold px-8 py-3 hover:bg-gray-100 transition-colors font-sans">
            press@gaf.com
          </a>
        </div>
      </section>
    </div>
  );
}
