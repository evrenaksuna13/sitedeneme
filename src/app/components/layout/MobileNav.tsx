import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "../../data/navigation";
import { useTranslation } from "../../i18n/LanguageContext";

export default function MobileNav() {
  const { t, lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => { setOpen(false); setExpanded(null); };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 text-[var(--gaf-near-black)] hover:text-[var(--gaf-red)] transition-colors"
        aria-label={t("header.openMenu")}
      >
        <Menu className="w-6 h-6" />
      </button>

      {open && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={close} />}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 md:hidden overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <span className="font-bold text-xl text-[var(--gaf-near-black)]" style={{ fontFamily: "'Roboto Slab', serif" }}>
            <span className="text-[var(--gaf-red)]">GAF</span>
          </span>
          <div className="flex items-center gap-3">
            {/* Mobile language switcher */}
            <div className="flex gap-1">
              {(["tr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-0.5 text-xs font-bold font-sans transition-colors ${
                    lang === l ? "bg-[var(--gaf-red)] text-white" : "text-gray-500 hover:text-[var(--gaf-red)]"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={close} className="p-1 text-gray-500 hover:text-gray-800">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="py-2">
          {NAV_ITEMS.map((item) => (
            <div key={item.labelKey}>
              {item.megaMenu ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === item.labelKey ? null : item.labelKey)}
                    className="w-full flex items-center justify-between px-5 py-3.5 text-[var(--gaf-near-black)] hover:bg-gray-50 font-semibold text-sm font-sans"
                  >
                    {t(item.labelKey)}
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expanded === item.labelKey ? "rotate-180" : ""}`} />
                  </button>
                  {expanded === item.labelKey && (
                    <div className="bg-gray-50 px-5 pb-3">
                      {item.megaMenu.map((col) => (
                        <div key={col.headingKey} className="mt-3">
                          <p className="text-[var(--gaf-red)] text-xs font-semibold uppercase tracking-widest mb-2 font-sans">
                            {t(col.headingKey)}
                          </p>
                          <ul className="space-y-1">
                            {col.links.map((link) => (
                              <li key={link.href + link.label}>
                                <Link
                                  to={link.href}
                                  onClick={close}
                                  className="flex items-center gap-2 py-1.5 text-sm text-gray-700 hover:text-[var(--gaf-red)] font-sans transition-colors"
                                >
                                  <ChevronRight className="w-3 h-3 text-gray-400" />
                                  {lang === "tr" ? link.labelTr : link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href ?? "/"}
                  onClick={close}
                  className="block px-5 py-3.5 text-[var(--gaf-near-black)] hover:bg-gray-50 font-semibold text-sm font-sans"
                >
                  {t(item.labelKey)}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-5 border-t border-gray-200">
          <Link
            to="/contact"
            onClick={close}
            className="block w-full text-center bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold py-3 text-sm transition-colors font-sans"
          >
            {lang === "tr" ? "İletişime Geç" : "Contact Us"}
          </Link>
        </div>
      </div>
    </>
  );
}