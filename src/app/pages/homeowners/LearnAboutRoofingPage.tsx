import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import ArticleCard from "../../components/shared/ArticleCard";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { ARTICLES } from "../../data/articles";
import { useTranslation } from "../../i18n/LanguageContext";

export default function LearnAboutRoofingPage() {
  const { t, lang } = useTranslation();

  const TOPICS_EN = [
    { title: "Roofing Basics", desc: "Understand the anatomy of a roof system — from deck to ridge cap.", gradient: "from-slate-600 to-slate-800" },
    { title: "Choosing Tiles", desc: "Compare styles, colours, and performance ratings to find your perfect match.", gradient: "from-stone-600 to-stone-800" },
    { title: "Roof Maintenance", desc: "Simple inspection and maintenance steps to extend your roof's life.", gradient: "from-teal-700 to-teal-900" },
    { title: "Storm Damage", desc: "What to do when hail or wind damages your roof — a step-by-step guide.", gradient: "from-blue-700 to-blue-900" },
    { title: "Energy Efficiency", desc: "How the right tiles can reduce your cooling costs and earn tax credits.", gradient: "from-yellow-700 to-orange-800" },
    { title: "Hiring a Contractor", desc: "Red flags to avoid and questions to ask before signing any contract.", gradient: "from-violet-700 to-violet-900" },
  ];

  const TOPICS_TR = [
    { title: "Çatı Temelleri", desc: "Bir çatı sisteminin anatomisini anlayın — güverten levhasından mahya kapağına kadar.", gradient: "from-slate-600 to-slate-800" },
    { title: "Kiremit Seçimi", desc: "Mükemmel eşleşmeyi bulmak için stilleri, renkleri ve performans değerlendirmelerini karşılaştırın.", gradient: "from-stone-600 to-stone-800" },
    { title: "Çatı Bakımı", desc: "Çatınızın ömrünü uzatmak için basit muayene ve bakım adımları.", gradient: "from-teal-700 to-teal-900" },
    { title: "Fırtına Hasarı", desc: "Dolu veya rüzgar çatınıza zarar verdiğinde ne yapacağınız — adım adım rehber.", gradient: "from-blue-700 to-blue-900" },
    { title: "Enerji Verimliliği", desc: "Doğru kiremitlerin soğutma maliyetlerinizi nasıl azaltabileceği ve vergi kredisi kazandırabileceği.", gradient: "from-yellow-700 to-orange-800" },
    { title: "Müteahhit Seçimi", desc: "Herhangi bir sözleşme imzalamadan önce kaçınılacak tehlike işaretleri ve sorulacak sorular.", gradient: "from-violet-700 to-violet-900" },
  ];

  const FACTS_EN = [
    { fact: "The average stone-coated metal roof lasts 40–50 years depending on ventilation, climate, and product quality.", label: "Roof Lifespan" },
    { fact: "Improper ventilation is responsible for up to 40% of all premature roof failures — a problem often missed during installation.", label: "Ventilation" },
    { fact: "Starbond Classic tiles can resist winds up to 130 mph — equivalent to a Category 3 hurricane — when properly installed.", label: "Wind Resistance" },
    { fact: "An Energy Star-rated cool roof can reduce urban heat island temperatures by 5°F and lower rooftop temps by up to 50°F on hot days.", label: "Energy Efficiency" },
  ];

  const FACTS_TR = [
    { fact: "Ortalama taş kaplı metal çatı, havalandırmaya, iklime ve ürün kalitesine bağlı olarak 40-50 yıl dayanır.", label: "Çatı Ömrü" },
    { fact: "Uygunsuz havalandırma, tüm erken çatı arızalarının %40'ına kadar sorumludur — montaj sırasında sıklıkla gözden kaçan bir sorun.", label: "Havalandırma" },
    { fact: "Starbond Classic kiremitler, doğru kurulduğunda Kategori 3 kasırgaya eşdeğer 130 mph'a kadar rüzgara dayanabilir.", label: "Rüzgar Direnci" },
    { fact: "Energy Star onaylı serin çatı, kentsel ısı adası sıcaklıklarını 5°F azaltabilir ve sıcak günlerde çatı üstü sıcaklığını 50°F'a kadar düşürebilir.", label: "Enerji Verimliliği" },
  ];

  const topics = lang === "tr" ? TOPICS_TR : TOPICS_EN;
  const facts = lang === "tr" ? FACTS_TR : FACTS_EN;
  const homeownerArticles = ARTICLES.filter((a) => a.category === "Homeowners" || a.category === "How-To").slice(0, 6);

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{t("learn.title")}</span>
        </div>
      </div>

      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("learn.eyebrow")}</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">{t("learn.title")}</h1>
          <p className="text-gray-400 text-lg font-sans max-w-xl">{t("learn.subtitle")}</p>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("learn.topicsEyebrow")} title={t("learn.topicsTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {topics.map((topic) => (
              <Link key={topic.title} to="/resources" className="group block overflow-hidden border border-[var(--border)] hover:border-[var(--gaf-red)] transition-colors">
                <div className={`h-32 bg-gradient-to-br ${topic.gradient} group-hover:opacity-90 transition-opacity`} />
                <div className="p-5">
                  <h3 className="text-[var(--gaf-near-black)] font-bold text-lg group-hover:text-[var(--gaf-red)] transition-colors">{topic.title}</h3>
                  <p className="text-gray-600 text-sm font-sans mt-1 leading-relaxed">{topic.desc}</p>
                  <p className="text-[var(--gaf-red)] text-sm font-semibold font-sans mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                    {lang === "tr" ? "Keşfet" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("learn.articlesEyebrow")} title={t("learn.articlesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {homeownerArticles.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/resources" className="inline-flex items-center gap-2 border-2 border-[var(--gaf-near-black)] text-[var(--gaf-near-black)] hover:bg-[var(--gaf-near-black)] hover:text-white font-semibold px-8 py-3 transition-colors">
              {lang === "tr" ? "Tüm Makaleleri Görüntüle" : "View All Articles"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={lang === "tr" ? "Biliyor muydunuz?" : "Did You Know?"} title={lang === "tr" ? "Her Ev Sahibinin Bilmesi Gereken Çatı Gerçekleri" : "Roofing Facts Every Homeowner Should Know"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {facts.map(({ fact, label }) => (
              <div key={label} className="flex gap-4 p-6 bg-[var(--secondary)] border border-[var(--border)]">
                <div className="w-1.5 bg-[var(--gaf-red)] shrink-0" />
                <div>
                  <p className="text-[var(--gaf-red)] text-xs font-semibold uppercase tracking-widest mb-2 font-sans">{label}</p>
                  <p className="text-[var(--gaf-near-black)] text-base font-sans leading-relaxed">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={t("learn.ctaTitle")} subtext={t("learn.ctaSubtitle")} ctaLabel={t("common.findContractor")} ctaHref="/homeowners/find-a-contractor" secondaryCta={{ label: lang === "tr" ? "Ürünleri Keşfet" : "Explore Products", href: "/products/residential" }} />
    </div>
  );
}
