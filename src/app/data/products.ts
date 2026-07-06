export type FireRating = "A" | "B" | "C";
export type WindRating = "130 mph" | "110 mph" | "60 mph";
export type Category = "classic" | "alaturka" | "ottoman" | "aquapan" | "double-classic" | "senator" | "commercial";

export interface Product {
  id: string; name: string; slug: string; series: string; category: Category; colorName: string; colorNameEn: string; tagline: string; description: string; features: string[]; image: string; swatchBg: string; warranty: string; windRating: WindRating; fireRating: FireRating; badge?: string;
  colorGroup: "warm" | "green" | "blue" | "grey"; 
}

export interface CommercialProduct {
  id: string; name: string; type: "tpo" | "epdm" | "modified-bitumen" | "built-up"; description: string; features: string[]; applications: string[]; gradientFrom: string; gradientTo: string;
}

const SERIES_COLORS: Record<string, { group: "warm" | "green" | "blue" | "grey", name: string }[]> = {
  "Alaturka": [
    {group: "warm", name: "Altın Kırmızı"}, {group: "green", name: "Yeşil"}, {group: "warm", name: "Tuğla"}, {group: "grey", name: "Siyah"}, {group: "green", name: "Sega"}, {group: "blue", name: "Safir"}, {group: "warm", name: "Portakal"}, {group: "grey", name: "Kömür"}, {group: "warm", name: "Kırmızı Siyah"}, {group: "warm", name: "Kahve"}, {group: "warm", name: "Havana"}, {group: "grey", name: "Granit"}, {group: "blue", name: "Gece Mavisi"}, {group: "grey", name: "Ayışığı"}, {group: "grey", name: "Ay Gri"}, {group: "grey", name: "Antrasit"}
  ],
  "Aquapan": [
    {group: "grey", name: "Antrasit"}, {group: "warm", name: "Altın Kırmızı"}, {group: "green", name: "Yeşil"}, {group: "warm", name: "Tuğla"}, {group: "grey", name: "Siyah"}, {group: "green", name: "Sega"}, {group: "blue", name: "Safir"}, {group: "warm", name: "Portakal"}, {group: "grey", name: "Kömür"}, {group: "warm", name: "Kırmızı Siyah"}, {group: "warm", name: "Kahve"}, {group: "warm", name: "Havana"}, {group: "grey", name: "Granit"}, {group: "blue", name: "Gece Mavisi"}, {group: "grey", name: "Ayışığı"}, {group: "grey", name: "Ay Gri"}
  ],
  "Classic": [
    {group: "warm", name: "Altın Kırmızı"}, {group: "green", name: "Yeşil"}, {group: "warm", name: "Tuğla"}, {group: "green", name: "Sega"}, {group: "blue", name: "Safir"}, {group: "warm", name: "Portakal"}, {group: "grey", name: "Kömür"}, {group: "warm", name: "Kırmızı Siyah"}, {group: "warm", name: "Kahve"}, {group: "grey", name: "Granit"}, {group: "grey", name: "Antrasit"}, {group: "grey", name: "Siyah"}, {group: "warm", name: "Havana"}, {group: "blue", name: "Gece Mavisi"}, {group: "grey", name: "Ayışığı"}, {group: "grey", name: "Ay Gri"}
  ],
  "Double Classic": [
    {group: "grey", name: "Ay Gri"}, {group: "warm", name: "Altın Kırmızı"}, {group: "warm", name: "Tuğla"}, {group: "green", name: "Sega"}, {group: "blue", name: "Safir"}, {group: "warm", name: "Kırmızı Siyah"}, {group: "warm", name: "Havana"}, {group: "blue", name: "Gece Mavisi"}, {group: "grey", name: "Antrasit"}, {group: "green", name: "Yeşil"}, {group: "grey", name: "Siyah"}, {group: "warm", name: "Portakal"}, {group: "grey", name: "Kömür"}, {group: "warm", name: "Kahve"}, {group: "grey", name: "Granit"}, {group: "grey", name: "Ayışığı"}
  ],
  "Ottoman": [
    {group: "warm", name: "Altın Kırmızı"}, {group: "green", name: "Yeşil"}, {group: "warm", name: "Tuğla"}, {group: "grey", name: "Siyah"}, {group: "green", name: "Sega"}, {group: "blue", name: "Safir"}, {group: "warm", name: "Portakal"}, {group: "grey", name: "Kömür"}, {group: "warm", name: "Kırmızı Siyah"}, {group: "warm", name: "Kahve"}, {group: "warm", name: "Havana"}, {group: "grey", name: "Granit"}, {group: "blue", name: "Gece Mavisi"}, {group: "grey", name: "Ayışığı"}, {group: "grey", name: "Ay Gri"}, {group: "grey", name: "Antrasit"}
  ],
  "Senator": [
    {group: "warm", name: "Altın Kırmızı"}, {group: "green", name: "Yeşil"}, {group: "warm", name: "Tuğla"}, {group: "grey", name: "Siyah"}, {group: "green", name: "Sega"}, {group: "blue", name: "Safir"}, {group: "warm", name: "Portakal"}, {group: "grey", name: "Kömür"}, {group: "warm", name: "Kırmızı Siyah"}, {group: "warm", name: "Kahve"}, {group: "warm", name: "Havana"}, {group: "grey", name: "Granit"}, {group: "blue", name: "Gece Mavisi"}, {group: "grey", name: "Ayışığı"}, {group: "grey", name: "Ay Gri"}, {group: "grey", name: "Antrasit"}
  ]
};

const SERIES_LIST = ["Classic", "Alaturka", "Ottoman", "Aquapan", "Double Classic", "Senator"];

export const RESIDENTIAL_PRODUCTS: Product[] = SERIES_LIST.flatMap((series: string) => 
  SERIES_COLORS[series].map((item, i) => ({
    id: `${series.toLowerCase()}-${i + 1}`,
    name: `${series} — ${item.name}`,
    slug: `${series.toLowerCase()}-${i + 1}`,
    series: series,
    category: series.toLowerCase() as Category,
    colorName: item.name,
    colorNameEn: item.name,
    tagline: series,
    description: "Metal Kiremit doğal taş kaplı metal kiremit.",
    features: [],
    image: `/${series} (${i + 1}).jpg`, 
    swatchBg: item.group === "warm" ? "#8B3A1A" : item.group === "green" ? "#3A5E2A" : item.group === "blue" ? "#1E3A8A" : "#374151",
    warranty: "50-Year Limited Warranty",
    windRating: "130 mph" as WindRating,
    fireRating: "A" as FireRating,
    colorGroup: item.group
  }))
);

export const COMMERCIAL_PRODUCTS: CommercialProduct[] = [];