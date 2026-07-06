export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 font-sans">
      <h1 className="text-4xl font-bold mb-10 text-[var(--gaf-near-black)]">İletişim</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* İletişim Bilgileri */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">İletişim Bilgilerimiz</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong className="block text-[var(--gaf-near-black)]">Adres:</strong>
              Anadolu Organize Sanayi 7. Cadde No:6, <br />
              Malıköy - Temelli - Sincan, Ankara / Türkiye
            </p>
            <p>
              <strong className="block text-[var(--gaf-near-black)]">Telefon:</strong>
              +90 850 270 00 22 
            </p>
            <p>
              <strong className="block text-[var(--gaf-near-black)]">GSM:</strong>
              +90 532 402 55 52 <br />
              +90 546 545 63 49
            </p>
            <p>
              <strong className="block text-[var(--gaf-near-black)]">E-Mail:</strong>
              info@metalkiremit.com
            </p>
          </div>
        </div>

        {/* Bilgilendirme */}
        <div className="bg-gray-50 p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6">Bilgi Talebi</h2>
          <p className="text-gray-700 mb-4">
            İletişim bilgilerimizden bizlere ulaşabilir, dilerseniz yandaki veya aşağıdaki alanları kullanarak bizden detaylı bilgi talebinde bulunabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}