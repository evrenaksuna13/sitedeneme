import { Leaf, Scale, Zap, Palette, Flame, ShieldAlert, CloudRain, Award, Sparkles, ShieldCheck, Sun } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function MetalKiremitFarkiPage() {
  const { t } = useTranslation();

  const features = [
    { icon: Leaf, title: "Çevre Dostu", desc: "Metal Kiremitin yükte hafif, güçlü tasarım özellikleri uygun maliyetli çatı kiremiti seçeneği haline getirir. Uzun ömürlü dayanıklı bir çatı malzemesi olması nedeniyle bakım maliyetine ihtiyaç duymaz, nakliyede tasarruf sağlar, kolay kurulumu işçilik maliyetleri ve inşaat süresinin azaltılmasını sağlar." },
    { icon: Scale, title: "Hafiflik", desc: "Metal Kiremit diğer geleneksel kiremitlerle karşılaştırıldığında 7 kez daha hafiftir. Taşınması, kullanılması, depolanması elverişlidir. Böylelikle, paradan ve kurulum zamanından tasarruf edilir. Destek yapı ve temeller üzerinde önemli ölçüde daha az ağırlık ve stres yapar." },
    { icon: Zap, title: "KOLAY ve HIZLI KURULUM", desc: "Metal Çatı Kiremiti çok hafiftir ve kolay bükülür, eğilir, kesilir. Bu nedenle her çeşit bina çatısı için uygundur. Hafif yapıda olduğu için kolay ve hızlı montaj edilir." },
    { icon: Palette, title: "RENK SEÇENEK ÇEŞİTLİLİĞİ", desc: "Müşteri gereksinimlerine göre Metal Kiremitin pek çok rengi mevcutdur. Üretim renkleri ekranda görülen renklerden bir parça farklılaşacaktır. Sipariş öncesi tam bir gerçek ürün numunesinin görülmesi tavsiye edilir." },
    { icon: Flame, title: "YANGIN DİRENCİ", desc: "Metal Kiremit yanmayan yüksek kaliteli alüminyum-çinko kaplı çelikten imal edilmiştir. Yangının yayılmasında etken olan dıştan gelen sıcak közleri önlemek için yangına dayanıklılığıyla güvenilir bir çözümdür." },
    { icon: ShieldAlert, title: "DEPREM DİRENCİ", desc: "Depremlerde ölümler, yaralanmalar ve hasarın en yaygın nedeni sıklıkla binalarda yetersiz yapısal destekler nedeniyle ağır çatı kaplama malzemelerinin hareketi ve çökmesi sonucu olmaktadır. Metal Kiremit doğal taş kaplı metal kiremitler hafiftir, sağlamdır ve binanın yükünü azaltır ve depremlerde binanın altındaki yapılara kolayca zarara neden olmaz." },
    { icon: CloudRain, title: "FIRTINA, RUZGAR, YAGMUR , KAR DİRENCİ ve GÜRÜLTÜ", desc: "Metal Kiremitleri kenetlenerek ve yatay yapıda sabitlendiği için güçlü rüzgar ve yağmurlara dayanıklı ve dirençlidir. Bu birbirine sabitleme işlemi Metal Kiremit Çatıyı son derece güvenli hale getirir. Taş kaplı Metal Kiremit Çatı geleneksel çatı malzemelerinden yapılmış bir çatıdan daha fazla gürültü üretmez." },
    { icon: Award, title: "GARANTİ", desc: "Galvalume (Aluzinc) kaplı Metal Kiremit çatılar çok az veya hiç bakıma maruz kalmadan atmosferik koşullara dayanma gücüne sahiptir. Doğru montajlandığında, Metal kiremit Çatının, bir binanın tipik ömrü boyunca değiştirilmesi gerekmez, böylece Metal kiremitler, 50 yıllık garanti taşır." },
    { icon: Sparkles, title: "İÇ, DIŞ SAĞLAMLIK ve GÜZELLİK", desc: "Tüm Metal Kiremit ürünleri Alu-zinc çelikden üretilmektedir. Sıradan galvanizli çelik çatı ürünleri ile karşılaştırıldığında çok daha fazla kalıcı ömürlü olduğu kanıtlamıştır. Bu, alüminyum bariyerlerle korunan çinkoyla çeliğin özünün korunmasıyla başarılır. Çeşitli renklere sahip doğal taş kaplı metal kiremitler herhangi bir binaya eşsiz bir şıklık katarken aynı zamanda kalın tabakasıyla tüm hava koşullarından da koruma sağlar." },
    { icon: ShieldCheck, title: "MÜKEMMEL DAYANIKLILIK", desc: "Metal Kiremitler, mükemmel anti korozyon özellikleriyle farklı olmasını ve 50 yıldan daha uzun ömür sürmesini sağlayan yüksek kaliteli galvalume (Aluzinc) panellerin doğal taş ile kaplanmasıyla yapılır." },
    { icon: Sun, title: "ENERJİ VERİMLİLİĞİ", desc: "Metal Kiremit Çatı Sistemleri coğrafi bölgeye bağlı olarak yıllık enerji maliyetlerinden %40 tasarruf edilebilmesini sağlar. 60-70 derece arası kurulabilen Metal Kiremit Çatı kaplamaları çatının yüzey sıcaklığın azaltılabilir ve çatının absorbe ettiği güneş enerjisinin %70 inden korur." }
  ];

  return (
    <div className="py-16 px-6 bg-white font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--gaf-near-black)] mb-6">Metal Kiremit Farkı</h1>
          <p className="text-xl text-gray-600">Metal Kiremit metal çatı kiremitinin üstün özellikleri</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div key={index} className="border border-[var(--border)] p-8 hover:border-[var(--gaf-red)] transition-colors">
              <item.icon className="w-10 h-10 text-[var(--gaf-red)] mb-6" />
              <h3 className="text-xl font-bold text-[var(--gaf-near-black)] mb-3 uppercase tracking-wide">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}