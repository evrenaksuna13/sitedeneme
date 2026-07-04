import { Link } from "react-router";
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  const columns = [
    {
      heading: t("footer.products"),
      links: [
        { label: t("footer.allResidential"), href: "/products/residential" },
        { label: t("footer.allCommercial"), href: "/products/commercial" },
        { label: "Classic Series", href: "/products/residential?series=Classic" },
        { label: "Alaturka Series", href: "/products/residential?series=Alaturka" },
        { label: t("footer.accessories"), href: "/products/residential" },
      ],
    },
    {
      heading: t("footer.forHomeowners"),
      links: [
        { label: t("footer.findContractor"), href: "/homeowners/find-a-contractor" },
        { label: t("footer.designRoof"), href: "/homeowners/design-your-roof" },
        { label: t("footer.learnRoofing"), href: "/homeowners/learn" },
        { label: t("footer.warranty"), href: "/homeowners/warranty" },
        { label: t("footer.registerWarranty"), href: "/homeowners/warranty" },
      ],
    },
    {
      heading: t("footer.forContractors"),
      links: [
        { label: t("footer.masterElite"), href: "/contractors" },
        { label: t("footer.certification"), href: "/contractors" },
        { label: t("footer.training"), href: "/contractors/training" },
        { label: t("footer.contractorResources"), href: "/contractors/resources" },
        { label: t("footer.leadsProgram"), href: "/contractors/resources" },
      ],
    },
    {
      heading: t("footer.company"),
      links: [
        { label: t("footer.aboutUs"), href: "/about" },
        { label: t("footer.sustainability"), href: "/about/sustainability" },
        { label: t("footer.news"), href: "/about/news" },
        { label: t("footer.careers"), href: "/about/careers" },
        { label: t("footer.learningCenter"), href: "/resources" },
        { label: t("footer.contact"), href: "/about" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--gaf-near-black)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="bg-[var(--gaf-red)] px-3 py-1.5 inline-block">
                <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "'Roboto Slab', serif" }}>
                  GAF
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm font-sans leading-relaxed mb-6">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              {[Twitter, Facebook, Linkedin, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-[var(--gaf-red)] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4 font-sans">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link to={link.href} className="text-gray-400 hover:text-[var(--gaf-red)] text-sm font-sans transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-sans">
            &copy; {new Date().getFullYear()} GAF Materials LLC. {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            {[
              { key: "footer.privacy", href: "#" },
              { key: "footer.terms", href: "#" },
              { key: "footer.accessibility", href: "#" },
              { key: "footer.sitemap", href: "#" },
            ].map((item) => (
              <a key={item.key} href={item.href} className="text-gray-500 hover:text-gray-300 text-xs font-sans transition-colors">
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
