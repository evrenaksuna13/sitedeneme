import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import { ChevronRight, Award, Shield, Star, MapPin } from "lucide-react";
import ContractorCard from "../../components/shared/ContractorCard";
import SectionHeading from "../../components/shared/SectionHeading";
import { CONTRACTORS } from "../../data/contractors";
import { useTranslation } from "../../i18n/LanguageContext";

export default function FindContractorPage() {
  const { t, lang } = useTranslation();
  const [searchParams] = useSearchParams();
  const [inputZip, setInputZip] = useState(searchParams.get("zip") ?? "");
  const [zip, setZip] = useState(searchParams.get("zip") ?? "");
  const [radius, setRadius] = useState("50");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(!!searchParams.get("zip"));

  const handleSearch = (searchZip: string) => {
    setIsLoading(true);
    setHasSearched(true);
    setTimeout(() => { setZip(searchZip); setIsLoading(false); }, 800);
  };

  useEffect(() => {
    const initialZip = searchParams.get("zip");
    if (initialZip) handleSearch(initialZip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = hasSearched ? CONTRACTORS : [];

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{t("contractor.title")}</span>
        </div>
      </div>

      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">{t("contractor.eyebrow")}</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">{t("contractor.title")}</h1>
          <p className="text-gray-400 text-lg font-sans max-w-xl">{t("contractor.subtitle")}</p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b border-[var(--border)] py-8 px-6 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" value={inputZip} onChange={(e) => setInputZip(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSearch(inputZip)}
                placeholder={t("contractor.zipPlaceholder")}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 text-sm font-sans outline-none focus:border-[var(--gaf-red)]" />
            </div>
            <select value={radius} onChange={(e) => setRadius(e.target.value)} className="border border-gray-300 px-4 py-3 text-sm font-sans bg-white outline-none focus:border-[var(--gaf-red)] min-w-[160px]">
              {["25", "50", "100"].map((r) => (
                <option key={r} value={r}>{t("contractor.radiusLabel").replace("{n}", r)}</option>
              ))}
            </select>
            <button onClick={() => handleSearch(inputZip)} disabled={!inputZip.trim()} className="bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] disabled:bg-gray-300 text-white font-semibold px-8 py-3 text-sm transition-colors font-sans whitespace-nowrap">
              {t("contractor.searchBtn")}
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6 bg-[var(--secondary)] min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          {!hasSearched && (
            <div className="text-center py-20">
              <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-[var(--gaf-near-black)] text-xl font-bold mb-2">{t("contractor.emptyTitle")}</h3>
              <p className="text-gray-500 font-sans">{t("contractor.emptySubtitle")}</p>
            </div>
          )}
          {isLoading && (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-4 border-[var(--gaf-red)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-600 font-sans">{t("contractor.searching")} {inputZip}...</p>
            </div>
          )}
          {hasSearched && !isLoading && (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-[var(--gaf-near-black)] font-semibold font-sans">
                  {t("contractor.resultsFound").replace("{n}", String(results.length))}
                  {zip && <span className="text-gray-500 font-normal"> {t("contractor.resultsNear")} {zip}</span>}
                </p>
                <div className="flex gap-2">
                  {[t("contractor.filterAll"), t("contractor.filterMasterElite"), t("contractor.filterFactory"), t("contractor.filterCertified")].map((f) => (
                    <button key={f} className="text-xs px-3 py-1.5 border border-gray-300 bg-white hover:border-[var(--gaf-red)] hover:text-[var(--gaf-red)] font-sans transition-colors">{f}</button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {results.map((contractor) => <ContractorCard key={contractor.id} contractor={contractor} />)}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Master Elite info */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--gaf-gold)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">{lang === "tr" ? "Altın Standart" : "The Gold Standard"}</p>
            <h2 className="text-[var(--gaf-near-black)] text-4xl font-bold mb-4">{t("contractor.masterEliteTitle")}</h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-6">{t("contractor.masterEliteDesc")}</p>
            <ul className="space-y-3 mb-8">
              {(lang === "tr" ? [
                "GAF eğitimi ve sertifikasyonunu başarıyla tamamlamış olmak",
                "Tüm eyaletlerde gerekli lisans ve sigortaya sahip olmak",
                "Kanıtlanmış müşteri memnuniyeti geçmişi",
                "Özel Golden Pledge İşçilik & Malzeme Garantisi sunabilme",
                "Sürekli eğitim ve yeniden sertifikasyona katılım",
              ] : [
                "Must pass rigorous GAF training and certification",
                "Carry required licensing and insurance in all states",
                "Maintain a proven track record of satisfied customers",
                "Offer exclusive Golden Pledge Labor & Material Warranty",
                "Participate in ongoing education and recertification",
              ]).map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700 font-sans">
                  <Award className="w-5 h-5 text-[var(--gaf-gold)] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contractors" className="inline-flex items-center gap-2 text-[var(--gaf-red)] font-semibold font-sans hover:gap-3 transition-all">
              {lang === "tr" ? "Müteahhit Sertifikasyonu Hakkında →" : "Learn About Contractor Certification →"}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Star, label: "Master Elite®", sub: lang === "tr" ? "En iyi %3" : "Top 3% of contractors", color: "bg-[var(--gaf-gold)]" },
              { icon: Shield, label: lang === "tr" ? "Fabrika Onaylı" : "Factory-Certified", sub: lang === "tr" ? "Eğitimli & sigortalı" : "Trained & insured", color: "bg-slate-700" },
              { icon: Award, label: lang === "tr" ? "Sertifikalı" : "GAF Certified", sub: lang === "tr" ? "Temel sertifikasyon" : "Baseline certification", color: "bg-gray-500" },
            ].map(({ icon: Icon, label, sub, color }) => (
              <div key={label} className="bg-[var(--secondary)] p-6 border border-[var(--border)]">
                <div className={`w-10 h-10 ${color} flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-[var(--gaf-near-black)] font-bold font-sans text-sm">{label}</p>
                <p className="text-gray-500 text-xs font-sans mt-1">{sub}</p>
              </div>
            ))}
            <div className="bg-[var(--gaf-red)] p-6 flex flex-col justify-center">
              <p className="text-white text-3xl font-bold">3,000+</p>
              <p className="text-white/80 text-sm font-sans mt-1">{t("contractor.certifiedNationwide")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
