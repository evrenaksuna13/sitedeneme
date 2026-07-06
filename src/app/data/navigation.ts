export interface NavLink {
  label: string;
  labelTr: string;
  href: string;
}

export interface NavColumn {
  headingKey: string;
  links: NavLink[];
}

export interface NavItem {
  labelKey: string;
  href?: string;
  megaMenu?: NavColumn[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    labelKey: "nav.products",
    megaMenu: [
      {
        headingKey: "nav.residentialSeries",
        links: [
          { label: "Classic Series", labelTr: "Classic Serisi", href: "/products/residential?series=Classic" },
          { label: "Alaturka Series", labelTr: "Alaturka Serisi", href: "/products/residential?series=Alaturka" },
          { label: "Ottoman Series", labelTr: "Ottoman Serisi", href: "/products/residential?series=Ottoman" },
          { label: "Aquapan Series", labelTr: "Aquapan Serisi", href: "/products/residential?series=Aquapan" },
          { label: "Double Classic Series", labelTr: "Double Classic Serisi", href: "/products/residential?series=Double+Classic" },
          { label: "Senator Series", labelTr: "Senator Serisi", href: "/products/residential?series=Senator" },
          { label: "All Roof Products", labelTr: "Tüm Çatı Ürünleri", href: "/products/residential" },
        ],
      },
    
      {
        headingKey: "nav.browseByColour",
        links: [
          { label: "Reds & Browns", labelTr: "Kırmızı & Kahve", href: "/products/residential" },
          { label: "Greens", labelTr: "Yeşiller", href: "/products/residential" },
          { label: "Blues", labelTr: "Maviler", href: "/products/residential" },
          { label: "Greys & Black", labelTr: "Gri & Siyah", href: "/products/residential" },
        ],
      },
      
      {
        headingKey: "nav.accessories",
        links: [
          // Bu sayfa artık tüm aksesuarları tek sayfada listeleyecek
          { label: "View All Accessories", labelTr: "Tüm Aksesuarları Görüntüle", href: "/products/accessories" },
        ],
      },
    ],
  },
  {
    labelKey: "nav.resources",
    megaMenu: [
      {
        headingKey: "nav.learn",
        links: [
          { label: "Assembly Guide", labelTr: "Montaj Rehberi", href: "/resources" },
          { label: "What are Metal Roof Tiles?", labelTr: "Metal Kiremit Nedir?", href: "/whataremetalrooftiles"},
          { label: "Videos", labelTr: "Videolar", href: "/videos"},
        ],
      },
      
    ],
  },
  {
    labelKey: "nav.about",
    megaMenu: [
      {
        headingKey: "nav.company",
        links: [
          { label: "About", labelTr: "Hakkımızda", href: "/about" },
          { label: "Warranty Conditions", labelTr: "Garanti Koşulları", href: "/about/warranty" },
          { label: "Metal Kiremit Difference", labelTr: "Metal Kiremit Farkı", href: "/about/difference" },
        ],
      },
    ],
  },
];