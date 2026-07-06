export default function Videos() {
  const videos = [
    {
      id: "ku-zW-nQVMk",
      title: "Metal Kiremit Tanıtım Videosu 1",
      description: "Metal kiremit sistemlerinin genel özelliklerini ve dayanıklılığını keşfedin."
    },
    {
      id: "g4TX0ZEKURo",
      title: "Metal Kiremit Uygulama Videosu",
      description: "Çatı sistemlerimizin adım adım montaj süreci ve teknik detayları."
    },
    {
      id: "AkLKYaFkdyY",
      title: "Doğal Taş Kaplı Metal Kiremit",
      description: "Volkanik taş granüllerinin çatıya kattığı estetik ve koruma."
    },
    {
      id: "7AWbKm-E_hg",
      title: "Metal Kiremit Detaylar",
      description: "Metal kiremit katmanları ve uzun ömürlü çatı çözümleri."
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Videolar</h1>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h2 className="text-xl font-bold text-[var(--gaf-near-black)]">{video.title}</h2>
              <p className="text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}