import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import HeroBanner from "../../components/shared/HeroBanner";
import StatBar from "../../components/shared/StatBar";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

const TIMELINE_EN = [
  { year: "1886", event: "Founded in New York", desc: "General Aniline & Film Corporation establishes the roofing division that would become GAF." },
  { year: "1940s", event: "Wartime Production", desc: "GAF pivots to critical wartime manufacturing, supplying roofing for military installations across the U.S." },
  { year: "1967", event: "National Expansion", desc: "Manufacturing facilities expand to 10 plants nationwide, establishing GAF as a truly national brand." },
  { year: "1990s", event: "Laminated Tile Innovation", desc: "GAF pioneers the architectural laminated tile category, fundamentally changing residential roofing aesthetics." },
  { year: "2005", event: "Master Elite Program Launch", desc: "The Master Elite Contractor certification program launches, establishing the gold standard for installer quality." },
  { year: "2012", event: "Standard Industries Acquisition", desc: "GAF joins Standard Industries, the world's largest privately held roofing and waterproofing business." },
  { year: "2018", event: "Starbond Classic Launch", desc: "Starbond Classic launches with stone-coated Galvalume technology, becoming the market-leading tile." },
  { year: "2024", event: "Sustainability Commitment", desc: "GAF announces aggressive 2030 sustainability targets across Climate, Communities, and Circularity pillars." },
];

const TIMELINE_TR = [
  { year: "1886", event: "New York'ta Kuruluş", desc: "General Aniline & Film Corporation, GAF olacak olan çatı bölümünü kurar." },
  { year: "1940'lar", event: "Savaş Dönemi Üretimi", desc: "GAF, kritik savaş dönemi üretimine yönelerek ABD genelindeki askeri tesislere çatı tedarik eder." },
  { year: "1967", event: "Ulusal Genişleme", desc: "Üretim tesisleri ülke genelinde 10 fabrikaya ulaşarak GAF'ı gerçek anlamda ulusal bir marka haline getirir." },
  { year: "1990'lar", event: "Lamine Kiremit Yeniliği", desc: "GAF, mimari lamine kiremit kategorisinin öncüsü olarak konut çatı estetiğini temelden değiştirir." },
  { year: "2005", event: "Master Elite Program Lansmanı", desc: "Master Elite Müteahhit sertifikasyon programı başlatılarak montaj kalitesinde altın standart oluşturulur." },
  { year: "2012", event: "Standard Industries Satın Alması", desc: "GAF, dünyanın en büyük özel çatı ve su yalıtımı işletmesi Standard Industries'e katılır." },
  { year: "2018", event: "Starbond Classic Lansmanı", desc: "Starbond Classic, taş kaplı Galvalume teknolojisiyle piyasaya çıkarak pazar lideri kiremit haline gelir." },
  { year: "2024", event: "Sürdürülebilirlik Taahhüdü", desc: "GAF, İklim, Topluluklar ve Döngüsellik sütunlarında agresif 2030 sürdürülebilirlik hedeflerini açıklar." },
];

const LEADERSHIP = [
  { name: "Jim Schnepper", title: "President & CEO", initials: "JS" },
  { name: "Teresa Cracchiolo", title: "Chief Operating Officer", initials: "TC" },
  { name: "Martin Grohman", title: "Chief Financial Officer", initials: "MG" },
  { name: "Kara Rosauer", title: "Chief Marketing Officer", initials: "KR" },
  { name: "Andrew Evans", title: "SVP, Residential Products", initials: "AE" },
  { name: "Lisa Thornton", title: "SVP, Commercial Products", initials: "LT" },
  { name: "David Park", title: "SVP, Contractor Programs", initials: "DP" },
  { name: "Sandra Reeves", title: "Chief Sustainability Officer", initials: "SR" },
];

export default function AboutPage() {
  const { t, lang } = useTranslation();
  const TIMELINE = lang === "tr" ? TIMELINE_TR : TIMELINE_EN;

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{t("about.title")}</span>
        </div>
      </div>

      <HeroBanner
        height="half"
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        ctaButtons={[
          { label: t("nav.sustainability"), href: "/about/sustainability", variant: "primary" },
          { label: t("careers.title"), href: "/about/careers", variant: "outline" },
        ]}
      />

      <StatBar stats={[
        { value: "1886", label: lang === "tr" ? "Kuruluş Yılı" : "Year Founded" },
        { value: "#1", label: lang === "tr" ? "Kuzey Amerika'nın 1 No'lu Üreticisi" : "Roofing Manufacturer in N. America" },
        { value: "8,000+", label: lang === "tr" ? "Dünya Genelinde Çalışan" : "Employees Worldwide" },
        { value: "28", label: lang === "tr" ? "Üretim Tesisi" : "Manufacturing Facilities" },
      ]} variant="dark" />

      {/* Mission */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("about.missionEyebrow")}</p>
            <h2 className="text-[var(--gaf-near-black)] text-4xl font-bold leading-tight mb-6">{t("about.missionTitle")}</h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-5 text-lg">
              {lang === "tr"
                ? "GAF'ın misyonu, dünyanın en iyi çatı ürünlerini üretmek ve bunları dünyanın en iyi çatı müteahhitleri aracılığıyla teslim etmektir. Yaptığımız her şey — Ar-Ge yatırımından müteahhit eğitimine, garanti tasarımına kadar — bu taahhütten kaynaklanmaktadır."
                : "GAF's mission is to make the best roofing products in the world and deliver them through the best roofing contractors. Everything we do — from R&D investment to contractor training to warranty design — flows from that commitment."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about/sustainability" className="inline-flex items-center gap-2 bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-6 py-3 text-sm transition-colors">
                {t("nav.sustainability")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about/news" className="inline-flex items-center gap-2 border border-gray-300 hover:border-[var(--gaf-near-black)] text-gray-700 font-semibold px-6 py-3 text-sm transition-colors">
                {t("nav.newsPress")}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "130+", label: lang === "tr" ? "Yıllık Deneyim" : "Years of Experience", bg: "bg-[var(--gaf-red)]" },
              { value: "50M", label: lang === "tr" ? "Yıllık Kurulum (m²)" : "Squares Installed Each Year", bg: "bg-[var(--gaf-near-black)]" },
              { value: "3,000+", label: lang === "tr" ? "Sertifikalı Müteahhit" : "Certified Contractors", bg: "bg-[var(--gaf-near-black)]" },
              { value: "28", label: lang === "tr" ? "Üretim Tesisi" : "Manufacturing Plants", bg: "bg-[var(--gaf-red)]" },
            ].map(({ value, label, bg }) => (
              <div key={label} className={`${bg} p-6 flex flex-col justify-center`}>
                <p className="text-white text-3xl font-bold">{value}</p>
                <p className="text-white/75 text-sm font-sans mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-[var(--secondary)]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow={t("about.historyEyebrow")} title={t("about.historyTitle")} align="left" />
          <div className="relative mt-8">
            <div className="absolute left-[68px] top-0 bottom-0 w-0.5 bg-gray-300" />
            <div className="flex flex-col gap-8">
              {TIMELINE.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-[60px] text-right">
                    <span className="text-[var(--gaf-red)] font-bold text-sm font-sans">{item.year}</span>
                  </div>
                  <div className="relative shrink-0 mt-1">
                    <div className="w-4 h-4 bg-[var(--gaf-red)] rounded-full border-2 border-white shadow" />
                  </div>
                  <div className="bg-white border border-[var(--border)] p-5 flex-1">
                    <h4 className="text-[var(--gaf-near-black)] font-bold mb-1">{item.event}</h4>
                    <p className="text-gray-600 text-sm font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("about.leadershipEyebrow")} title={t("about.leadershipTitle")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-20 h-20 bg-[var(--gaf-near-black)] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg font-sans">{person.initials}</span>
                </div>
                <p className="text-[var(--gaf-near-black)] font-bold text-sm">{person.name}</p>
                <p className="text-gray-500 text-xs font-sans mt-0.5">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 px-6 bg-[var(--secondary)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 text-center mb-6 font-sans">{t("about.awardsLabel")}</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {["Energy Star Partner of the Year", "Top 100 Contractor Preferred Brand", "Forbes America's Best Employers", "Good Housekeeping Seal", "NAHB Building Products Award", "National Safety Council Award"].map((award) => (
              <span key={award} className="text-gray-600 font-semibold text-sm font-sans border border-gray-300 px-4 py-2 bg-white">{award}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={t("about.ctaTitle")} subtext={t("about.ctaSubtitle")} ctaLabel={lang === "tr" ? "Açık Pozisyonları Gör" : "View Open Positions"} ctaHref="/about/careers" variant="dark" />
    </div>
  );
}
