import { Link } from "react-router";
import { ChevronRight, MapPin, Briefcase, ArrowRight, Clock } from "lucide-react";
import HeroBanner from "../../components/shared/HeroBanner";
import StatBar from "../../components/shared/StatBar";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

const OPENINGS = [
  { title: "Regional Sales Manager — Residential", dept: "Sales", location: "Chicago, IL", type: "Full-Time", level: "Senior" },
  { title: "Product Engineer — Commercial Membranes", dept: "R&D", location: "Parsippany, NJ", type: "Full-Time", level: "Mid-Level" },
  { title: "Contractor Training Specialist", dept: "Training", location: "Remote / Travel", type: "Full-Time", level: "Mid-Level" },
  { title: "Supply Chain Analyst", dept: "Operations", location: "Dallas, TX", type: "Full-Time", level: "Entry" },
  { title: "Digital Marketing Manager", dept: "Marketing", location: "Parsippany, NJ", type: "Full-Time", level: "Senior" },
  { title: "Manufacturing Plant Manager", dept: "Operations", location: "Kansas City, MO", type: "Full-Time", level: "Senior" },
  { title: "Sustainability Program Manager", dept: "Corporate", location: "New York, NY", type: "Full-Time", level: "Mid-Level" },
  { title: "Inside Sales Representative", dept: "Sales", location: "Charlotte, NC", type: "Full-Time", level: "Entry" },
  { title: "Quality Control Technician", dept: "Operations", location: "Denver, CO", type: "Full-Time", level: "Entry" },
  { title: "Senior Software Engineer — eCommerce", dept: "Technology", location: "Remote", type: "Full-Time", level: "Senior" },
  { title: "Technical Service Representative", dept: "Technical", location: "Multiple Locations", type: "Full-Time", level: "Mid-Level" },
  { title: "Summer Internship — Marketing", dept: "Marketing", location: "Parsippany, NJ", type: "Internship", level: "Intern" },
];

const levelColors: Record<string, string> = {
  Senior: "bg-purple-100 text-purple-800",
  "Mid-Level": "bg-blue-100 text-blue-800",
  Entry: "bg-green-100 text-green-800",
  Intern: "bg-orange-100 text-orange-800",
};

export default function CareersPage() {
  const { t, lang } = useTranslation();

  const BENEFITS = [
    { title: lang === "tr" ? "Rekabetçi Ücret" : "Competitive Compensation", desc: lang === "tr" ? "Piyasa odaklı maaşlar, yıllık değerlendirmeler ve hem bireysel hem de şirket sonuçlarına bağlı performans primleri." : "Market-rate salaries, annual reviews, and performance bonuses tied to both individual and company results." },
    { title: lang === "tr" ? "Sağlık & Wellness" : "Health & Wellness", desc: lang === "tr" ? "HSA katkılarıyla kapsamlı tıbbi, diş ve görme sigortası. Genel merkezde yerinde spor salonu." : "Comprehensive medical, dental, and vision coverage with HSA contributions. On-site fitness at HQ." },
    { title: lang === "tr" ? "Emeklilik Planlaması" : "Retirement Planning", desc: lang === "tr" ? "Cömert şirket katkısıyla 401(k). Finansal planlama kaynakları ve yatırım eğitimi." : "401(k) with generous company match. Financial planning resources and investment education." },
    { title: lang === "tr" ? "Kariyer Gelişimi" : "Career Development", desc: lang === "tr" ? "Eğitim geri ödemesi, dahili hareketlilik programları ve GAF Eğitim Akademisi'ne erişim." : "Tuition reimbursement, internal mobility programs, and access to GAF's Training Academy." },
    { title: lang === "tr" ? "İzin & Esneklik" : "Time Off & Flexibility", desc: lang === "tr" ? "Cömert ücretli izin politikası, ücretli tatiller, ebeveyn izni ve uygun roller için hibrit çalışma seçenekleri." : "Generous PTO policy, paid holidays, parental leave, and hybrid work options for eligible roles." },
    { title: lang === "tr" ? "Topluluk Etkisi" : "Community Impact", desc: lang === "tr" ? "GAF Topluluk Vakfı aracılığıyla ücretli gönüllülük zamanı ve şirket eşleşmeli bağış." : "Paid volunteer time and company-matched charitable giving through the GAF Community Foundation." },
  ];

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/about" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Hakkımızda" : "About"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{t("careers.title")}</span>
        </div>
      </div>

      <HeroBanner
        height="half"
        eyebrow={t("careers.eyebrow")}
        title={t("careers.title")}
        subtitle={t("careers.subtitle")}
        ctaButtons={[
          { label: lang === "tr" ? "Açık Pozisyonlar" : "View Open Positions", href: "/about/careers", variant: "primary" },
          { label: lang === "tr" ? "Kültürümüz" : "Our Culture", href: "/about", variant: "outline" },
        ]}
      />

      <StatBar stats={[
        { value: "8,000+", label: lang === "tr" ? "Dünya Genelinde Çalışan" : "Employees Worldwide" },
        { value: "28", label: lang === "tr" ? "Üretim Tesisi" : "Manufacturing Facilities" },
        { value: "92%", label: lang === "tr" ? "Çalışan Memnuniyeti Puanı" : "Employee Satisfaction Score" },
        { value: "Forbes", label: lang === "tr" ? "Amerika'nın En İyi İşverenleri Listesi" : "America's Best Employers List" },
      ]} variant="dark" />

      {/* Culture */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("careers.cultureEyebrow")}</p>
            <h2 className="text-[var(--gaf-near-black)] text-4xl font-bold leading-tight mb-5">{t("careers.cultureTitle")}</h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-5">
              {lang === "tr" ? "GAF'ta insanlarımızın kalitesinin ürünlerimizin kalitesini ve müteahhitler ile ev sahipleriyle ilişkilerimizin gücünü doğrudan belirlediğine inanıyoruz. İnsanlarımıza yatırım yapıyoruz çünkü bunun tek sürdürülebilir rekabet avantajı olduğunu biliyoruz." : "At GAF, we believe that the quality of our people directly determines the quality of our products and the strength of our relationships with contractors and homeowners. We invest in our people because we know that's the only sustainable competitive advantage."}
            </p>
            <div className="flex flex-wrap gap-3">
              {(lang === "tr" ? ["Dürüstlük", "Yenilik", "Kalite", "Topluluk"] : ["Integrity", "Innovation", "Quality", "Community"]).map((v) => (
                <span key={v} className="bg-[var(--gaf-near-black)] text-white font-semibold px-4 py-2 text-sm font-sans">{v}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { gradient: "from-slate-700 to-slate-900", label: lang === "tr" ? "Üretim Mükemmeliyeti" : "Manufacturing Excellence" },
              { gradient: "from-blue-700 to-blue-900", label: lang === "tr" ? "Ürün Yeniliği" : "Product Innovation" },
              { gradient: "from-green-700 to-green-900", label: lang === "tr" ? "Sürdürülebilirlik Odağı" : "Sustainability Focus" },
              { gradient: "from-red-700 to-red-900", label: lang === "tr" ? "Müşteri Ortaklığı" : "Customer Partnership" },
            ].map(({ gradient, label }) => (
              <div key={label} className={`aspect-square bg-gradient-to-br ${gradient} flex items-end p-4`}>
                <span className="text-white text-xs font-semibold font-sans">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("careers.benefitsEyebrow")} title={t("careers.benefitsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {BENEFITS.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-[var(--border)] p-6">
                <div className="w-6 h-0.5 bg-[var(--gaf-red)] mb-4" />
                <h4 className="text-[var(--gaf-near-black)] font-bold mb-2">{title}</h4>
                <p className="text-gray-600 text-sm font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <SectionHeading eyebrow={t("careers.openingsEyebrow")} title={t("careers.openingsTitle")} align="left" />
            <span className="text-sm text-gray-500 font-sans pb-10">{OPENINGS.length} {t("careers.positionsAvailable")}</span>
          </div>
          <div className="bg-white border border-[var(--border)] divide-y divide-[var(--border)]">
            {OPENINGS.map((job) => (
              <div key={job.title} className="flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 hover:bg-[var(--secondary)] transition-colors cursor-pointer group">
                <div className="flex-1">
                  <h4 className="text-[var(--gaf-near-black)] font-semibold text-sm font-sans group-hover:text-[var(--gaf-red)] transition-colors">{job.title}</h4>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-sans"><Briefcase className="w-3 h-3" />{job.dept}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-sans"><MapPin className="w-3 h-3" />{job.location}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 font-sans"><Clock className="w-3 h-3" />{job.type}</span>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 font-sans shrink-0 ${levelColors[job.level]}`}>{job.level}</span>
                <button className="shrink-0 flex items-center gap-1.5 border border-[var(--gaf-near-black)] hover:bg-[var(--gaf-red)] hover:border-[var(--gaf-red)] hover:text-white text-[var(--gaf-near-black)] text-xs font-semibold px-4 py-2 transition-colors font-sans">
                  {t("common.apply")} <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={t("careers.ctaTitle")} subtext={t("careers.ctaSubtitle")} ctaLabel={t("careers.sendResume")} ctaHref="/about" variant="dark" />
    </div>
  );
}
