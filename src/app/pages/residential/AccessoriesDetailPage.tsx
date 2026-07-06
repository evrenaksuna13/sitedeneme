import { useParams, Link } from "react-router";
import { ChevronRight, ArrowLeft } from "lucide-react";

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

export default function AccessoriesDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = ACCESSORIES.find((p) => p.slug === slug);

  if (!product) return <div className="p-20 text-center">Ürün bulunamadı.</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[var(--secondary)] py-2.5 px-6 border-b">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs">
          <Link to="/">Ana Sayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/products/accessories">Aksesuarlar</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="font-bold">{product.name}</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 p-8">
            <img src={product.img} alt={product.name} className="w-full object-contain" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <Link to="/products/accessories" className="inline-flex items-center gap-2 text-[var(--gaf-red)] font-bold hover:underline">
              <ArrowLeft className="w-4 h-4" /> Geri Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}