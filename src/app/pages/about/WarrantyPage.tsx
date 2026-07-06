import { ShieldCheck, FileText, CalendarDays } from "lucide-react";

export default function WarrantyPage() {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <div className="mb-12 border-b border-[var(--border)] pb-8">
          <h1 className="text-4xl font-bold text-[var(--gaf-near-black)] mb-4">Garanti Koşulları</h1>
          <p className="text-gray-600 font-sans text-lg">Metal Kiremit çatı sistemlerimizin güvenilirliği ve uzun ömürlülüğü hakkında detaylı bilgi.</p>
        </div>

        {/* Ana İçerik */}
        <div className="space-y-8 font-sans text-gray-700 leading-relaxed">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-12 h-12 text-[var(--gaf-red)] shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-[var(--gaf-near-black)] mb-3">50 Yıl Garanti Güvencesi</h2>
              <p>
                METAL KİREMİT DOĞAL TAŞ KAPLI METAL PANEL KİREMİT 50 YIL GARANTİLİDİR. 
                Sizlere sunduğumuz bu uzun süreli garanti, ürünlerimizin dayanıklılığına olan sonsuz güvenimizin bir göstergesidir.
              </p>
            </div>
          </div>

          <div className="bg-[var(--secondary)] p-8 border-l-4 border-[var(--gaf-red)]">
            <p className="italic text-lg text-[var(--gaf-near-black)]">
              "Kurallarına uygun montajlandığı takdirde Metal Kiremit çatının bir binanın tipik ömrü kadar değiştirilmesi gerekli olmayacaktır ve Metal Kiremit garanti 50 yıllık bir süre için desteklenen bağımsız bir sigorta olacaktır."
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--border)] p-6">
              <CalendarDays className="w-8 h-8 text-[var(--gaf-red)] mb-4" />
              <h3 className="font-bold text-[var(--gaf-near-black)] mb-2">Uzun Ömürlü Çözüm</h3>
              <p className="text-sm">Yapılarınızın yaşam döngüsü boyunca koruma sağlar, bakım maliyetlerinizi minimize eder.</p>
            </div>
            <div className="border border-[var(--border)] p-6">
              <FileText className="w-8 h-8 text-[var(--gaf-red)] mb-4" />
              <h3 className="font-bold text-[var(--gaf-near-black)] mb-2">Bağımsız Sigorta</h3>
              <p className="text-sm">Garanti kapsamımız, 50 yıllık süreci güvence altına alan bağımsız bir sigorta sistemi ile desteklenmektedir.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}