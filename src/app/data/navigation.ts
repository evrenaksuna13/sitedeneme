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
          { label: "All Residential Products", labelTr: "Tüm Konut Ürünleri", href: "/products/residential" },
        ],
      },
      {
        headingKey: "nav.commercialRoofing",
        links: [
          { label: "TPO Roofing Systems", labelTr: "TPO Çatı Sistemleri", href: "/products/commercial" },
          { label: "EPDM Roofing", labelTr: "EPDM Çatı", href: "/products/commercial" },
          { label: "Modified Bitumen", labelTr: "Modifiye Bitüm", href: "/products/commercial" },
          { label: "Built-Up Roofing (BUR)", labelTr: "Çok Katlı Çatı (BUR)", href: "/products/commercial" },
          { label: "All Commercial Products", labelTr: "Tüm Ticari Ürünler", href: "/products/commercial" },
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
    ],
  },
  {
    labelKey: "nav.forHomeowners",
    megaMenu: [
      {
        headingKey: "nav.getStarted",
        links: [
          { label: "Find a Contractor", labelTr: "Müteahhit Bul", href: "/homeowners/find-a-contractor" },
          { label: "Design Your Roof", labelTr: "Çatınızı Tasarlayın", href: "/homeowners/design-your-roof" },
          { label: "Get a Free Estimate", labelTr: "Ücretsiz Teklif Al", href: "/homeowners/find-a-contractor" },
        ],
      },
      {
        headingKey: "nav.learn",
        links: [
          { label: "Roofing Basics", labelTr: "Çatı Temelleri", href: "/homeowners/learn" },
          { label: "Choosing the Right Tile", labelTr: "Doğru Kiremiti Seçme", href: "/homeowners/learn" },
          { label: "Roof Maintenance Tips", labelTr: "Bakım İpuçları", href: "/homeowners/learn" },
          { label: "Storm Damage Guide", labelTr: "Fırtına Hasar Rehberi", href: "/homeowners/learn" },
        ],
      },
      {
        headingKey: "nav.protection",
        links: [
          { label: "Warranty Options", labelTr: "Garanti Seçenekleri", href: "/homeowners/warranty" },
          { label: "Register Your Warranty", labelTr: "Garantinizi Kaydedin", href: "/homeowners/warranty" },
          { label: "Certified Protection", labelTr: "Sertifikalı Koruma", href: "/homeowners/warranty" },
        ],
      },
    ],
  },
  {
    labelKey: "nav.forContractors",
    megaMenu: [
      {
        headingKey: "nav.certificationPrograms",
        links: [
          { label: "Master Elite Contractor Program", labelTr: "Master Elite Müteahhit Programı", href: "/contractors" },
          { label: "Factory-Certified Contractor", labelTr: "Fabrika Onaylı Müteahhit", href: "/contractors" },
          { label: "GAF Certified Contractor", labelTr: "Sertifikalı Müteahhit", href: "/contractors" },
          { label: "Apply Now", labelTr: "Başvur", href: "/contractors" },
        ],
      },
      {
        headingKey: "nav.trainingEducation",
        links: [
          { label: "Training Academy", labelTr: "Eğitim Akademisi", href: "/contractors/training" },
          { label: "Online Courses", labelTr: "Online Kurslar", href: "/contractors/training" },
          { label: "In-Person Workshops", labelTr: "Yüz Yüze Atölyeler", href: "/contractors/training" },
          { label: "Certification Renewal", labelTr: "Sertifika Yenileme", href: "/contractors/training" },
        ],
      },
      {
        headingKey: "nav.resources",
        links: [
          { label: "Contractor Portal", labelTr: "Müteahhit Portalı", href: "/contractors/resources" },
          { label: "Technical Documents", labelTr: "Teknik Belgeler", href: "/contractors/resources" },
          { label: "Marketing Materials", labelTr: "Pazarlama Materyalleri", href: "/contractors/resources" },
          { label: "Leads Program", labelTr: "Müşteri Adayı Programı", href: "/contractors/resources" },
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
          { label: "Learning Center", labelTr: "Öğrenme Merkezi", href: "/resources" },
          { label: "Blog & Articles", labelTr: "Blog & Makaleler", href: "/resources" },
          { label: "Videos", labelTr: "Videolar", href: "/resources" },
          { label: "Infographics", labelTr: "İnfografikler", href: "/resources" },
        ],
      },
      {
        headingKey: "nav.installGuides",
        links: [
          { label: "Installation Guides", labelTr: "Montaj Rehberleri", href: "/resources" },
          { label: "Product Specifications", labelTr: "Ürün Özellikleri", href: "/resources" },
          { label: "Safety Data Sheets", labelTr: "Güvenlik Bilgi Formları", href: "/resources" },
          { label: "CAD Details", labelTr: "CAD Detayları", href: "/resources" },
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
          { label: "Our Story", labelTr: "Hikayemiz", href: "/about" },
          { label: "Leadership Team", labelTr: "Yönetim Ekibi", href: "/about" },
          { label: "News & Press", labelTr: "Haberler & Basın", href: "/about/news" },
          { label: "Careers", labelTr: "Kariyer", href: "/about/careers" },
        ],
      },
      {
        headingKey: "nav.responsibility",
        links: [
          { label: "Sustainability", labelTr: "Sürdürülebilirlik", href: "/about/sustainability" },
          { label: "Community Giving", labelTr: "Topluma Katkı", href: "/about/sustainability" },
          { label: "Safety Commitment", labelTr: "Güvenlik Taahhüdü", href: "/about/sustainability" },
        ],
      },
    ],
  },
];
