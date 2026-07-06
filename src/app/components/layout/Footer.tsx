import { Link } from "react-router";
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { useTranslation } from "../../i18n/LanguageContext";
// Logo dosyanın yolu
<img src="/metalkiremitlogo2.png" className="h-8 w-auto" />


export default function Footer() {
  const { t } = useTranslation();

  const columns = [
    {
      heading: t("footer.products"),
      links: [
        { label: t("footer.allResidential"), href: "/products/residential" },
        { label: "Classic Series", href: "/products/residential?series=Classic" },
        { label: "Alaturka Series", href: "/products/residential?series=Alaturka" },
        { label: t("footer.accessories"), href: "/products/residential" },
      ],
    },
    {
      heading: t("footer.company"),
      links: [
        { label: t("footer.aboutUs"), href: "/about" },
        { label: t("footer.sustainability"), href: "/about/sustainability" },
        { label: t("footer.news"), href: "/about/news" },
        { label: t("footer.warranty"), href: "/about/warranty" },
        { label: t("footer.learningCenter"), href: "/resources" },
        { label: t("footer.contact"), href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--gaf-near-black)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={"metalkiremitlogo2.png"} className="h-8 w-auto" />

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
            &copy; {new Date().getFullYear()} Metal Kiremit. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}