import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight, Share2, Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import CTABanner from "../../components/shared/CTABanner";
import { RESIDENTIAL_PRODUCTS } from "../../data/products";
import { useTranslation } from "../../i18n/LanguageContext";

export default function DesignYourRoofPage() {
  const { t, lang } = useTranslation();
  const [activeSeries, setActiveSeries] = useState<"Classic" | "Alaturka" | "Ottoman" | "Aquapan" | "Double Classic" | "Senator">("Classic");
  const seriesProducts = RESIDENTIAL_PRODUCTS.filter((p) => p.series === activeSeries);
  const [selectedId, setSelectedId] = useState(RESIDENTIAL_PRODUCTS[0].id);
  const selected = RESIDENTIAL_PRODUCTS.find((p) => p.id === selectedId) ?? RESIDENTIAL_PRODUCTS[0];

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products/residential" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ürünler" : "Products"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{t("design.title")}</span>
        </div>
      </div>

      <section className="bg-[var(--gaf-near-black)] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">{t("design.eyebrow")}</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold">{t("design.title")}</h1>
          <p className="text-gray-400 text-lg font-sans mt-2 max-w-xl">{t("design.subtitle")}</p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* House preview */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--secondary)] border border-[var(--border)] aspect-[16/10] relative overflow-hidden">
              <svg viewBox="0 0 800 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="500" fill="#d4e8f5" />
                <rect y="380" width="800" height="120" fill="#5a8a3c" />
                <rect x="180" y="220" width="440" height="165" fill="#f0ece4" />
                <polygon points="150,225 400,60 650,225" fill={selected.swatchBg} />
                <polygon points="145,230 400,56 655,230 650,225 400,60 150,225" fill={selected.swatchBg} opacity="0.65" />
                <rect x="510" y="80" width="40" height="100" fill="#8b7355" />
                <rect x="505" y="75" width="50" height="12" fill="#6b5535" />
                <rect x="355" y="280" width="70" height="105" fill="#8b6914" />
                <rect x="357" y="282" width="66" height="101" fill="#a07820" />
                <circle cx="415" cy="335" r="5" fill="#c8973a" />
                <rect x="210" y="255" width="80" height="65" fill="#b8d4e8" stroke="#888" strokeWidth="2" />
                <line x1="250" y1="255" x2="250" y2="320" stroke="#888" strokeWidth="1.5" />
                <line x1="210" y1="287" x2="290" y2="287" stroke="#888" strokeWidth="1.5" />
                <rect x="510" y="255" width="80" height="65" fill="#b8d4e8" stroke="#888" strokeWidth="2" />
                <line x1="550" y1="255" x2="550" y2="320" stroke="#888" strokeWidth="1.5" />
                <line x1="510" y1="287" x2="590" y2="287" stroke="#888" strokeWidth="1.5" />
                <rect x="20" y="270" width="150" height="115" fill="#e8e0d4" />
                <rect x="25" y="275" width="140" height="85" fill="#c8c0b4" />
                <line x1="25" y1="295" x2="165" y2="295" stroke="#aaa" strokeWidth="1" />
                <line x1="25" y1="315" x2="165" y2="315" stroke="#aaa" strokeWidth="1" />
                <line x1="25" y1="335" x2="165" y2="335" stroke="#aaa" strokeWidth="1" />
                <line x1="95" y1="275" x2="95" y2="360" stroke="#aaa" strokeWidth="1" />
                <polygon points="10,272 95,200 180,272" fill={selected.swatchBg} opacity="0.9" />
                <circle cx="700" cy="330" r="55" fill="#3a6a25" />
                <rect x="695" y="355" width="10" height="30" fill="#6b4a2a" />
                <circle cx="740" cy="345" r="35" fill="#4a7a30" />
              </svg>
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-black/70 backdrop-blur-sm px-3 py-2">
                <span className="w-4 h-4 rounded-full border-2 border-white/50 shrink-0" style={{ background: selected.swatchBg }} />
                <div>
                  <p className="text-white text-sm font-semibold font-sans leading-none">{selected.colorName}</p>
                  <p className="text-white/60 text-xs font-sans mt-0.5">{selected.colorNameEn} · {selected.series} {t("common.series")}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <button onClick={() => toast.success(t("design.savedToast"))} className="flex items-center gap-2 bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-5 py-2.5 text-sm transition-colors font-sans">
                <Download className="w-4 h-4" /> {t("design.saveDesign")}
              </button>
              <button onClick={() => toast.success(t("design.shareToast"))} className="flex items-center gap-2 border border-gray-300 hover:border-[var(--gaf-red)] text-gray-700 hover:text-[var(--gaf-red)] font-semibold px-5 py-2.5 text-sm transition-colors font-sans">
                <Share2 className="w-4 h-4" /> {t("common.share")}
              </button>
              <button onClick={() => { setSelectedId(RESIDENTIAL_PRODUCTS[0].id); }} className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-semibold px-3 py-2.5 text-sm transition-colors font-sans ml-auto">
                <RotateCcw className="w-4 h-4" /> {t("common.reset")}
              </button>
            </div>
          </div>

          {/* Controls */}
          <div>
            <div className="flex gap-1.5 mb-4 flex-wrap">
              {(["Classic", "Alaturka", "Ottoman", "Aquapan", "Double Classic", "Senator"] as const).map((s) => (
                <button key={s} onClick={() => { setActiveSeries(s); const first = RESIDENTIAL_PRODUCTS.find((p) => p.series === s); if (first) setSelectedId(first.id); }}
                  className={`flex-1 py-2 text-xs font-bold border transition-colors font-sans min-w-[80px] ${activeSeries === s ? "bg-[var(--gaf-near-black)] border-[var(--gaf-near-black)] text-white" : "bg-white border-gray-300 text-gray-600 hover:border-gray-500"}`}>
                  {s}
                </button>
              ))}
            </div>
            <h3 className="text-[var(--gaf-near-black)] font-bold text-base mb-1">
              {t("design.seriesColours").replace("{series}", activeSeries)}
            </h3>
            <p className="text-gray-500 text-xs font-sans mb-4">{seriesProducts.length} {t("design.coloursAvailable")}</p>
            <div className="flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1">
              {seriesProducts.map((p) => (
                <button key={p.id} onClick={() => setSelectedId(p.id)}
                  className={`flex items-center gap-3 p-2 border text-left transition-all ${selectedId === p.id ? "border-[var(--gaf-red)] bg-red-50 ring-1 ring-[var(--gaf-red)]" : "border-[var(--border)] bg-white hover:border-gray-400"}`}>
                  <div className="w-14 h-10 overflow-hidden shrink-0">
                    <img src={p.image} alt={p.colorName} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold font-sans leading-none truncate ${selectedId === p.id ? "text-[var(--gaf-red)]" : "text-[var(--gaf-near-black)]"}`}>{p.colorName}</p>
                    <p className="text-gray-400 text-xs font-sans mt-0.5">{p.colorNameEn}</p>
                  </div>
                  <span className={`w-3 h-3 rounded-full border shrink-0 ${selectedId === p.id ? "border-[var(--gaf-red)]" : "border-gray-300"}`} style={{ background: p.swatchBg }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product info */}
      <section className="py-10 px-6 bg-[var(--secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-[var(--border)] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-14 overflow-hidden shrink-0">
                <img src={selected.image} alt={selected.colorName} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[var(--gaf-red)] text-xs font-semibold uppercase tracking-widest font-sans">{selected.series} {t("common.series")}</p>
                <h3 className="text-[var(--gaf-near-black)] text-xl font-bold">{selected.colorName}</h3>
                <p className="text-gray-500 text-sm font-sans mt-0.5">
                  {selected.colorNameEn} · {selected.warranty} · {selected.windRating} {lang === "tr" ? "rüzgar direnci" : "wind rated"}
                </p>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link to={`/products/residential/${selected.slug}`} className="border border-[var(--gaf-near-black)] text-[var(--gaf-near-black)] hover:bg-[var(--gaf-near-black)] hover:text-white font-semibold px-5 py-2.5 text-sm transition-colors font-sans">
                {t("design.fullDetails")}
              </Link>
              <Link to="/homeowners/find-a-contractor" className="bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-5 py-2.5 text-sm transition-colors font-sans">
                {t("common.getInstalled")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline={lang === "tr" ? "Yeni Çatınızı Kurmaya Hazır Mısınız?" : "Ready to Get Your New Roof?"}
        subtext={lang === "tr" ? "Seçtiğiniz rengi hayata geçirmek için sertifikalı bir montajcıyla iletişime geçin." : "Connect with a certified installer to bring your chosen colour to life."}
        ctaLabel={t("common.findContractor")}
        ctaHref="/homeowners/find-a-contractor"
      />
    </div>
  );
}
