import { Link } from "react-router";
import { ChevronRight, Leaf, Users, RotateCcw, ArrowRight, Download } from "lucide-react";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

export default function SustainabilityPage() {
  const { t, lang } = useTranslation();

  const PILLARS = [
    {
      icon: Leaf,
      title: lang === "tr" ? "İklim" : "Climate",
      color: "text-green-600", bg: "bg-green-50", border: "border-green-200",
      desc: lang === "tr" ? "Enerji verimli üretim, yenilenebilir enerji benimsemesi ve düşük karbonlu ürün yenilikleriyle karbon ayak izimizi azaltıyoruz." : "Reducing our carbon footprint through energy-efficient manufacturing, renewable energy adoption, and low-carbon product innovations.",
      goals: lang === "tr"
        ? ["2030'a kadar Kapsam 1 ve 2 emisyonlarında %30 azalma", "2035'e kadar tüm tesislerde %100 yenilenebilir elektrik", "2050'ye kadar net sıfır karbon taahhüdü", "ENERGY STAR sertifikalı Serin Çatı ürünleri"]
        : ["30% reduction in Scope 1 & 2 emissions by 2030", "100% renewable electricity at all facilities by 2035", "Net-zero carbon commitment by 2050", "ENERGY STAR certified Cool Roof products"],
    },
    {
      icon: Users,
      title: lang === "tr" ? "Topluluklar" : "Communities",
      color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200",
      desc: lang === "tr" ? "İş gücümüzü, tedarik zincirimizi ve faaliyet gösterdiğimiz toplulukları oluşturan insanlara ve yerlere yatırım yapıyoruz." : "Investing in the people and places that make up our workforce, supply chain, and the communities where we operate.",
      goals: lang === "tr"
        ? ["Roofing for Good aracılığıyla 500+ topluluk desteklendi", "İş gücü geliştirme programlarına 10 milyon dolar taahhüt", "Çeşitli tedarikçi girişimi — 2027'ye kadar %20 harcama", "Güvenlik öncelikli kültür: sıfır kayıp-iş kazası hedefi"]
        : ["500+ communities supported through Roofing for Good", "$10M committed to workforce development programs", "Diverse supplier initiative — 20% spend by 2027", "Safety-first culture: zero lost-time incident goal"],
    },
    {
      icon: RotateCcw,
      title: lang === "tr" ? "Döngüsellik" : "Circularity",
      color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200",
      desc: lang === "tr" ? "Dayanıklılık için tasarlıyor, üretimde israfı minimize ediyor ve çatı malzemeleri için kullanım ömrü sonu çözümleri geliştiriyoruz." : "Designing for durability, minimizing waste in production, and developing end-of-life solutions for roofing materials.",
      goals: lang === "tr"
        ? ["Yıllık 100 milyon kg malzeme çöplükten uzaklaştırıldı", "40'tan fazla eyalette kiremit geri dönüşüm programı", "2030'a kadar %25 tüketici sonrası geri dönüştürülmüş içerik hedefi", "2035'e kadar üretimden sıfır atık"]
        : ["100M lbs of material diverted from landfills annually", "Shingle recycling program in 40+ states", "25% post-consumer recycled content target by 2030", "Zero manufacturing waste to landfill by 2035"],
    },
  ];

  const METRICS = [
    { value: "22%", label: lang === "tr" ? "2019'dan Bu Yana Kapsam 1 & 2 Emisyonlarında Azalma" : "Reduction in Scope 1 & 2 Emissions Since 2019" },
    { value: "85M", label: lang === "tr" ? "Çöplükten Uzaklaştırılan Kg Malzeme (2024)" : "Pounds of Material Diverted from Landfills (2024)" },
    { value: "500+", label: lang === "tr" ? "Roofing for Good ile Desteklenen Topluluk" : "Communities Supported Through Roofing for Good" },
    { value: "40+", label: lang === "tr" ? "Aktif Kiremit Geri Dönüşüm Programı Olan Eyalet" : "States with Active Recycling Programs" },
  ];

  const PROGRAMS = [
    {
      name: lang === "tr" ? "Starbond Solar" : "Starbond Solar",
      desc: lang === "tr" ? "Starbond kiremitlerinin dayanıklılığını fotovoltaik teknolojiyle birleştiren entegre güneş enerjili çatı sistemi." : "Integrated solar roofing that combines the durability of Starbond tiles with photovoltaic technology for a seamless, weatherproof installation.",
      gradient: "from-yellow-600 to-orange-700",
    },
    {
      name: lang === "tr" ? "Serin Çatı Teknolojisi" : "Cool Roof Technology",
      desc: lang === "tr" ? "Güneş enerjisini yansıtan ve çatı sıcaklığını 50°F'a kadar düşüren gelişmiş granül teknolojisine sahip ENERGY STAR sertifikalı kiremitler." : "ENERGY STAR-certified tiles with advanced reflective granule technology that deflect solar radiation and reduce rooftop temperatures by up to 50°F.",
      gradient: "from-sky-600 to-blue-700",
    },
    {
      name: lang === "tr" ? "Kiremit Geri Dönüşüm Programı" : "Tile Recycling Program",
      desc: lang === "tr" ? "Sökülen kiremitleri yol kaplama ve diğer altyapı uygulamalarında kullanılacak agregaya dönüştürmek için 120'den fazla geri dönüşüm tesisiyle ortaklık." : "Partnership with 120+ recycling facilities nationwide to convert tear-off materials into aggregate for road paving and other infrastructure applications.",
      gradient: "from-green-700 to-emerald-800",
    },
    {
      name: "Roofing for Good",
      desc: lang === "tr" ? "Afet mağdurları, gaziler ve düşük gelirli aileler için çatı onarımı veya yenileme sağlayan toplum bağış programı." : "Community giving program that provides roofing materials and contractor labor to repair or replace roofs for disaster victims, veterans, and low-income families.",
      gradient: "from-violet-700 to-violet-900",
    },
  ];

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/about" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Hakkımızda" : "About"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{t("nav.sustainability")}</span>
        </div>
      </div>

      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3320] via-[#1a5c38] to-[#2d7a50]" />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-400" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("sustainability.eyebrow")}</p>
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight max-w-3xl mb-5">{t("sustainability.title")}</h1>
          <p className="text-white/80 text-xl font-sans font-normal max-w-xl mb-8">{t("sustainability.subtitle")}</p>
          <button className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 text-sm transition-colors">
            <Download className="w-4 h-4" /> {t("sustainability.downloadReport")}
          </button>
        </div>
      </section>

      <section className="bg-[#0d3320] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-green-800/50">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center py-6 px-4">
              <p className="text-green-400 text-4xl font-bold">{m.value}</p>
              <p className="text-white/60 text-sm font-sans mt-1 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("sustainability.pillarsEyebrow")} title={t("sustainability.pillarsTitle")} subtitle={lang === "tr" ? "Sürdürülebilirlik stratejimiz, hedeflerimizi, yatırımlarımızı ve ilerleme raporlamamızı yönlendiren üç birbirine bağlı sütun etrafında organize edilmiştir." : "Our sustainability strategy is organized around three interconnected pillars that guide our goals, investments, and progress reporting."} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {PILLARS.map(({ icon: Icon, title, color, bg, border, desc, goals }) => (
              <div key={title} className={`border ${border} ${bg} p-8`}>
                <div className="w-14 h-14 bg-white flex items-center justify-center mb-5 shadow-sm">
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-[var(--gaf-near-black)] text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-600 text-sm font-sans leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {goals.map((g) => (
                    <li key={g} className="flex items-start gap-2 text-sm text-gray-700 font-sans">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${color.replace("text", "bg")}`} />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("sustainability.programsEyebrow")} title={t("sustainability.programsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="bg-white border border-[var(--border)] overflow-hidden flex">
                <div className={`w-24 shrink-0 bg-gradient-to-b ${p.gradient}`} />
                <div className="p-6">
                  <h4 className="text-[var(--gaf-near-black)] font-bold text-lg mb-2">{p.name}</h4>
                  <p className="text-gray-600 text-sm font-sans leading-relaxed">{p.desc}</p>
                  <Link to="/resources" className="inline-flex items-center gap-1.5 text-[var(--gaf-red)] font-semibold text-sm font-sans mt-4 hover:gap-2.5 transition-all">
                    {t("common.learnMore")} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={t("sustainability.ctaTitle")} subtext={lang === "tr" ? "GAF'ın sürdürülebilirlik taahhüdü müteahhit ağımıza ve ürün ekosistemine uzanır." : "GAF's sustainability commitment extends to our contractor network and product ecosystem."} ctaLabel={lang === "tr" ? "Müteahhit Programları" : "Learn About Contractor Programs"} ctaHref="/contractors" variant="dark" />
    </div>
  );
}
