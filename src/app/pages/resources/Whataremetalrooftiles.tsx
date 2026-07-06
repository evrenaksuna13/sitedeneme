export default function WhatAreMetalRoofTiles() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Metal Kiremit Nedir?</h1>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          METAL KİREMİTİN KAPLADIĞI DOĞAL TAŞLAR 500 YILDA OLUŞMUŞ MAĞMATİK TÜREVLİ BİR TAŞ CİNSİDİR VE SU TUTMAZ ÖZELLİKLİDİR.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Metal Kiremit, volkanik oluşmuş doğal taş granüllerle kaplıdır. Bu kaplamalar sert tabakasıyla çatıyı hava şartlarına karşı koruyarak doğal bir güzellik katar. Canlı renkli doğal taşlar güneşin aşırı UV sine karşı korur ve çatı renk değiştirmez. Metal Kiremit ana renkler dışında, farklı renkler karıştırılarak yeni tonlar yaratılabilir.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <img src="/metalkiremitnedir1.jpg" alt="Metal Kiremit Detay 1" className="w-full h-64 object-cover shadow-lg" />
          <img src="/metalkiremitnedir2.jpg" alt="Metal Kiremit Detay 2" className="w-full h-64 object-cover shadow-lg" />
          <img src="/metalkiremitnedir3.jpg" alt="Metal Kiremit Detay 3" className="w-full h-64 object-cover shadow-lg" />
        </div>
      </section>
    </div>
  );
}