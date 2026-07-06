import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import HeroBanner from "../../components/shared/HeroBanner";
import StatBar from "../../components/shared/StatBar";
import SectionHeading from "../../components/shared/SectionHeading";
import CTABanner from "../../components/shared/CTABanner";
import { useTranslation } from "../../i18n/LanguageContext";

export default function AboutPage() {
  const { t, lang } = useTranslation();

  return (
    <div>
      <div className="bg-[var(--secondary)] border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">Hakkımızda</span>
        </div>
      </div>

      <HeroBanner
        height="half"
        eyebrow="Hakkımızda"
        title="Köklü Geçmiş, Yenilikçi Gelecek"
        subtitle="Metal kiremit ve çatı sistemlerinde uzun yıllara dayanan tecrübe."
      />

      <StatBar stats={[
        { value: "24+", label: "Yıllık Tecrübe" },
        { value: "100%", label: "Kaliteli Üretim" },
        { value: "Güven", label: "Sektördeki Yerimiz" },
        { value: "Çözüm", label: "Çatı Sistemleri" },
      ]} variant="dark" />

      {/* Vizyon ve Kurumsal Metin */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Vizyonumuz</p>
            <h2 className="text-[var(--gaf-near-black)] text-4xl font-bold leading-tight mb-6">
              Metal Kiremit ve Çatı Sistemlerinde 1 Numaralı Tercihiniz
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-5 text-lg">
              Gelişmiş teknolojinin ürünleri ve uygulama modelleri kullanılarak garanti kapsamında üretim ve hizmet sunmayı 
              ilke edinen kuruluşumuz, köklü geçmişiyle inşaat sektöründe uzun yıllar başarıyla sürdürdüğü çalışmaları ve 
              deneyimleri ile gelecekte de sürekli istikrarlı bir şekilde hizmet üretmeye devam etmektedir.
            </p>
          </div>
          <div className="bg-[var(--secondary)] p-8 border-l-4 border-[var(--gaf-red)]">
            <h3 className="text-2xl font-bold text-[var(--gaf-near-black)] mb-4">Kurumsal Değerlerimiz</h3>
            <p className="text-gray-600 font-sans leading-relaxed mb-4">
              24 yıldır metal kiremit ve çatı sistemlerinde kaliteli, garantili üretimleri ile inşaat - yapı malzemeleri sektörüne 
              hizmet veren aile kuruluşumuz "Metal Kiremit ve Çatı Sistemleri" profesyonel yönetim ve uzman teknik kadrosu ile 
              başarılı hizmetlerine süreklilik kazandırmak hedefi ile kendini geliştirmeye devam etmektedir.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed mb-4">
              Metal Kiremit ve Çözüm Sistemleri üretimi ile inşaat sektöründe ilkeli, güvenilir ve saygın çalışması ile güvenin, 
              kalitenin ve çevre duyarlılığının simgesi olmuş, olmaya devam etmektedir.
            </p>
            <p className="text-gray-600 font-sans leading-relaxed">
              Kuruluşunun amacı Metal Panel Kiremit ve Çatı Sistemleri Çözümü olan, Metal Kiremit bu güne kadar üstlenmiş olduğu 
              bütün projeleri çözüm ortağı bayileri ile birlikte titizlikle, kalite ve saygınlık ilkesi ile zamanında bitirmiş olup, 
              devam etmekte olan projelerinde de söz verdiği zamanda çözüm ortakları ile birlikte bitirmeyi taahhüt etmektedir.
            </p>
          </div>
        </div>
      </section>

      <CTABanner headline="Projeleriniz İçin Bizimle Çalışın" subtext="Metal kiremit çözümlerimiz hakkında detaylı bilgi almak için iletişime geçin." ctaLabel="İletişime Geç" ctaHref="/contact" variant="dark" />
    </div>
  );
}