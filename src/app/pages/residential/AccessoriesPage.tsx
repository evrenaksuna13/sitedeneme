import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";
import { motion } from "motion/react";

const ACCESSORIES = [
  { name: "Düz Levha", img: "/duzlevha.png", slug: "duz-levha" },
  { name: "Havalandırma", img: "/havalandirma.png", slug: "havalandirma" },
  { name: "Mahya Kapama", img: "/mahyakapama.png", slug: "mahyakapama" },
  { name: "Rötuş Seti", img: "/rotus.png", slug: "rotus" },
  { name: "Tepe Mahya Profili", img: "/tepemahya.png", slug: "tepemahya" },
  { name: "Üçlü Mahya", img: "/uclumahya.png", slug: "uclumahya" },
  { name: "Vadi Dere Profili", img: "/vadidere.png", slug: "vadidere" },
  { name: "Yan Saçak Mahya Profili", img: "/yansacak.png", slug: "yansacak" },
  { name: "Yuvarlak Mahya", img: "/yuvarlakmahya.png", slug: "yuvarlakmahya" },
  { name: "Duvar Dibi Profili", img: "/duvardibi.png", slug: "duvardibi" },
];

export default function AccessoriesPage() {
  const { lang } = useTranslation();

  return (
    <div className="bg-[var(--secondary)] min-h-screen pb-20">
      <div className="bg-white border-b border-[var(--border)] py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-sans text-gray-500">
          <Link to="/" className="hover:text-[var(--gaf-red)]">{lang === "tr" ? "Ana Sayfa" : "Home"}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[var(--gaf-near-black)]">{lang === "tr" ? "Çatı Detay Aksesuarları" : "Roof Accessories"}</span>
        </div>
      </div>

      <section className="bg-[var(--gaf-near-black)] py-16 px-6 text-center">
        <h1 className="text-white text-4xl font-bold mb-4">{lang === "tr" ? "Çatı Detay Aksesuarları" : "Roof Accessories"}</h1>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCESSORIES.map((item) => (
            <motion.div key={item.slug} whileHover={{ y: -10 }} className="bg-white p-4 border hover:shadow-xl">
              <Link to={`/products/accessories/${item.slug}`}>
                <div className="aspect-video overflow-hidden mb-4 bg-gray-100">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="font-bold text-sm mb-2">{item.name}</h3>
                <span className="text-[var(--gaf-red)] text-xs font-semibold uppercase">{lang === "tr" ? "Detayları Gör" : "View Details"}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}