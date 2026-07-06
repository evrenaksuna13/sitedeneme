import { useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function LearningCenterPage() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Görseller artık public klasöründe olduğu için doğrudan yollarını yazıyoruz
  const kurulumGorselleri = [
    "/metalkiremit.Kurulum.jpg",
    "/metalkiremit.Kurulum2.jpg",
    "/metalkiremit.Kurulum3.jpg",
    "/metalkiremit.Kurulum4.jpg",
    "/metalkiremit.Kurulum5.jpg",
  ];

  return (
    <div>
      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">{t("resources.eyebrow")}</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">{t("resources.title")}</h1>
        </div>
      </section>

      <section className="py-12 px-6 bg-[var(--secondary)] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-[var(--gaf-near-black)]">Montaj Rehberi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kurulumGorselleri.map((img, index) => (
                <button 
                  key={index} 
                  onClick={() => setSelectedImage(img)}
                  className="block bg-white p-2 shadow-sm border border-[var(--border)] hover:shadow-lg transition-shadow"
                >
                  <img src={img} alt={`Montaj Rehberi ${index + 1}`} className="w-full h-auto" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full max-h-[90vh] overflow-auto bg-white p-2">
            <img src={selectedImage} alt="Büyük Görünüm" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
}