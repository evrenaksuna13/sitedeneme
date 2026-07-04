import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight, CheckCircle, ChevronDown } from "lucide-react";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

export default function WarrantyPage() {
  const { t, lang } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({ name: "", address: "", city: "", state: "", contractor: "", date: "", product: "" });

  const WARRANTY_TIERS = [
    {
      name: lang === "tr" ? "Sistem Plus Sınırlı Garanti" : "System Plus Limited Warranty",
      tier: lang === "tr" ? "Temel" : "Essential",
      coverage: lang === "tr" ? "Kiremitlerde Ömür Boyu + 10 yıl işçilik" : "Lifetime on shingles + 10 years on workmanship",
      color: "border-gray-300", badge: "bg-gray-500",
      features: lang === "tr" ? ["Ömür boyu malzeme kusuru kapsamı", "10 yıl işçilik garantisi", "110 mph'a kadar rüzgar kapsamı", "GAF sertifikalı müteahhit gerektirir", "Sonraki ev sahibine devredilebilir"]
        : ["Lifetime material defects coverage", "10-year workmanship guarantee", "Wind coverage up to 110 mph", "Requires GAF-certified contractor", "Transferable to next homeowner"],
      cta: lang === "tr" ? "Daha Fazla Bilgi" : "Learn More",
    },
    {
      name: lang === "tr" ? "Silver Pledge™ Sınırlı Garanti" : "Silver Pledge™ Limited Warranty",
      tier: lang === "tr" ? "Gelişmiş" : "Enhanced",
      coverage: lang === "tr" ? "Tüm sistemde Ömür Boyu + 25 yıl işçilik" : "Lifetime on entire system + 25 years workmanship",
      color: "border-gray-400", badge: "bg-gray-600",
      features: lang === "tr" ? ["Tüm GAF sistem bileşenlerinde ömür boyu kapsam", "25 yıl pro-rata olmayan işçilik kapsamı", "130 mph'a kadar rüzgar kapsamı", "Fabrika Onaylı müteahhit gerektirir", "Tamamen devredilebilir"]
        : ["Lifetime coverage on all GAF system components", "25-year non-prorated workmanship coverage", "Wind coverage up to 130 mph", "Requires Factory-Certified contractor", "Fully transferable"],
      cta: lang === "tr" ? "Daha Fazla Bilgi" : "Learn More",
    },
    {
      name: lang === "tr" ? "Golden Pledge® Sınırlı Garanti" : "Golden Pledge® Limited Warranty",
      tier: lang === "tr" ? "Maksimum Koruma" : "Maximum Protection",
      coverage: lang === "tr" ? "Ömür Boyu sistem + 30 yıl işçilik — sektörün en güçlüsü" : "Lifetime system + 30 years labor — industry's strongest",
      color: "border-[var(--gaf-gold)]", badge: "bg-[var(--gaf-gold)]",
      features: lang === "tr" ? ["Ömür boyu kapsam — malzeme VE işçilik", "30 yıl pro-rata olmayan işçilik garantisi", "130 mph'a kadar rüzgar kapsamı", "Master Elite® müteahhit gerektirir", "Satışta tamamen devredilebilir", "Yıllık muayene dahil"]
        : ["Lifetime coverage — materials AND labor", "30-year non-prorated labor warranty", "Wind coverage up to 130 mph", "Requires Master Elite® contractor", "Fully transferable at closing", "Annual inspection included"],
      cta: lang === "tr" ? "Master Elite Müteahhit Bul" : "Find a Master Elite Contractor",
      featured: true,
    },
  ];

  const FAQS = lang === "tr" ? [
    { q: "GAF garantisi ne kadar sürer?", a: "GAF, 3 yapraklı kiremitlerde 25 yıllık garantiden mimari ve tasarımcı ürünlerde Ömür Boyu Sınırlı kapsamına kadar garantiler sunmaktadır." },
    { q: "Garanti kapsamı için GAF sertifikalı müteahhit gerekli mi?", a: "Evet — gelişmiş garanti kademeleri (System Plus, Silver Pledge, Golden Pledge) GAF sertifikalı müteahhit tarafından kurulum gerektirmektedir." },
    { q: "GAF garantisi evi sattığımda devredilebilir mi?", a: "Evet. Tüm gelişmiş GAF garantileri sonraki ev sahiplerine devredilebilir, genellikle mülk satışından 60 gün içinde." },
    { q: "Silver Pledge ile Golden Pledge arasındaki fark nedir?", a: "Golden Pledge 30 yıl işçilik kapsamı ekler (Silver Pledge'de 25 yıl), Master Elite müteahhit gerektirir ve yıllık muayeneleri kapsar." },
    { q: "GAF garantimi nasıl kaydederim?", a: "GAF sertifikalı müteahhidiniz proje tamamlandığında garantiyi sizin adınıza kaydeder. Sertifikayı 4-6 hafta içinde alırsınız." },
  ] : [
    { q: "How long does a GAF warranty last?", a: "GAF offers warranties ranging from 25 years on 3-tab shingles to Lifetime Limited coverage on architectural and designer products." },
    { q: "Do I need a GAF-certified contractor for warranty coverage?", a: "Yes — enhanced warranty tiers (System Plus, Silver Pledge, Golden Pledge) require installation by a GAF-certified contractor." },
    { q: "Is the GAF warranty transferable when I sell my home?", a: "Yes. All enhanced GAF warranties are transferable to subsequent homeowners, typically within 60 days of property sale." },
    { q: "What's the difference between Silver Pledge and Golden Pledge?", a: "The Golden Pledge adds 30 years of labor coverage, requires a Master Elite contractor, and includes annual inspections." },
    { q: "How do I register my GAF warranty?", a: "Your GAF-certified contractor registers the warranty on your behalf at project completion. You'll receive a certificate within 4–6 weeks." },
  ];

  const fields = [
    { label: t("warranty.fieldName"), key: "name", type: "text", placeholder: "Jane Smith", col: 2 },
    { label: t("warranty.fieldAddress"), key: "address", type: "text", placeholder: "1234 Oak Street", col: 2 },
    { label: t("warranty.fieldCity"), key: "city", type: "text", placeholder: "Columbus" },
    { label: t("warranty.fieldState"), key: "state", type: "text", placeholder: "OH" },
    { label: t("warranty.fieldContractor"), key: "contractor", type: "text", placeholder: "Summit Roofing Solutions", col: 2 },
    { label: t("warranty.fieldDate"), key: "date", type: "date", col: 1 },
    { label: t("warranty.fieldProduct"), key: "product", type: "text", placeholder: "Classic — Tuğla Kırmızısı" },
  ];

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{t("warranty.title")}</span>
        </div>
      </div>

      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("warranty.eyebrow")}</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">{t("warranty.title")}</h1>
          <p className="text-gray-400 text-lg font-sans max-w-xl">{t("warranty.subtitle")}</p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow={t("warranty.chooseEyebrow")} title={t("warranty.chooseTitle")} subtitle={t("warranty.chooseSubtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {WARRANTY_TIERS.map((tier) => (
              <div key={tier.name} className={`border-2 ${tier.color} p-7 flex flex-col relative ${(tier as { featured?: boolean }).featured ? "bg-[var(--gaf-near-black)]" : "bg-white"}`}>
                {(tier as { featured?: boolean }).featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--gaf-gold)] text-white text-xs font-bold px-4 py-1 uppercase tracking-wide font-sans whitespace-nowrap">
                    {lang === "tr" ? "En Kapsamlı" : "Most Comprehensive"}
                  </div>
                )}
                <div className={`inline-flex w-fit ${tier.badge} text-white text-xs font-semibold px-2.5 py-1 mb-3 font-sans uppercase tracking-wide`}>{tier.tier}</div>
                <h3 className={`text-xl font-bold mb-2 ${(tier as { featured?: boolean }).featured ? "text-white" : "text-[var(--gaf-near-black)]"}`}>{tier.name}</h3>
                <p className={`text-sm font-sans mb-6 ${(tier as { featured?: boolean }).featured ? "text-gray-400" : "text-gray-600"}`}>{tier.coverage}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${(tier as { featured?: boolean }).featured ? "text-[var(--gaf-gold)]" : "text-[var(--gaf-red)]"}`} />
                      <span className={`text-sm font-sans ${(tier as { featured?: boolean }).featured ? "text-gray-300" : "text-gray-700"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/homeowners/find-a-contractor" className={`block text-center font-semibold py-2.5 text-sm transition-colors font-sans ${(tier as { featured?: boolean }).featured ? "bg-[var(--gaf-gold)] hover:bg-yellow-600 text-white" : "border-2 border-[var(--gaf-near-black)] text-[var(--gaf-near-black)] hover:bg-[var(--gaf-near-black)] hover:text-white"}`}>{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register */}
      <section className="py-16 px-6 bg-[var(--secondary)]">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow={t("warranty.registerEyebrow")} title={t("warranty.registerTitle")} subtitle={t("warranty.registerSubtitle")} align="left" />
          <form className="bg-white border border-[var(--border)] p-8 grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            {fields.map(({ label, key, type, placeholder, col }) => (
              <div key={key} className={col === 2 ? "md:col-span-2" : ""}>
                <label className="block text-sm font-semibold text-[var(--gaf-near-black)] mb-1.5 font-sans">{label}</label>
                <input type={type} placeholder={placeholder} value={formState[key as keyof typeof formState]} onChange={(e) => setFormState((s) => ({ ...s, [key]: e.target.value }))} className="w-full border border-gray-300 px-3 py-2.5 text-sm font-sans outline-none focus:border-[var(--gaf-red)]" />
              </div>
            ))}
            <div className="md:col-span-2">
              <button type="submit" className="bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-8 py-3 text-sm transition-colors font-sans">{t("warranty.registerBtn")}</button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow={t("warranty.faqEyebrow")} title={t("warranty.faqTitle")} align="left" />
          <div className="mt-4 divide-y divide-[var(--border)]">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-4 text-left gap-4">
                  <span className="text-[var(--gaf-near-black)] font-semibold text-sm font-sans">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="pb-4"><p className="text-gray-600 text-sm font-sans leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline={t("warranty.ctaTitle")} subtext={t("warranty.ctaSubtitle")} ctaLabel={t("common.findContractor")} ctaHref="/homeowners/find-a-contractor" variant="dark" />
    </div>
  );
}
