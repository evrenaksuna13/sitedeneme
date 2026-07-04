import { useState, useRef } from "react";
import { Link, NavLink } from "react-router";
import { Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "../../data/navigation";
import { useTranslation } from "../../i18n/LanguageContext";
import MobileNav from "./MobileNav";

export default function Header() {
  const { t, lang, setLang } = useTranslation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(key);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };
  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="hidden md:flex bg-[var(--gaf-near-black)] text-white text-xs font-sans">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-between py-2">
          <div className="flex items-center gap-2 text-gray-400">
            <Phone className="w-3 h-3" />
            <span>{t("header.phone")}</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/homeowners/find-a-contractor" className="text-gray-400 hover:text-white transition-colors">
              {t("nav.findContractor")}
            </Link>
            <Link to="/contractors" className="text-gray-400 hover:text-white transition-colors">
              {t("nav.contractorLogin")}
            </Link>
            <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
              {t("nav.resources")}
            </Link>
            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-2 border-l border-gray-700 pl-4">
              <button
                onClick={() => setLang("tr")}
                className={`px-2 py-0.5 text-xs font-bold transition-colors font-sans ${
                  lang === "tr"
                    ? "bg-[var(--gaf-red)] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                TR
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 text-xs font-bold transition-colors font-sans ${
                  lang === "en"
                    ? "bg-[var(--gaf-red)] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-white border-b border-[var(--border)] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="bg-[var(--gaf-red)] px-3 py-1.5"><span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "'Roboto Slab', serif" }}>GAF</span></div>
            <span className="hidden sm:block text-gray-500 text-xs font-sans font-medium uppercase tracking-wide max-w-[120px]">
              {t("header.tagline")}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.labelKey}
                className="relative"
                onMouseEnter={() => item.megaMenu && openMenu(item.labelKey)}
                onMouseLeave={closeMenu}
              >
                {item.megaMenu ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-5 text-sm font-semibold font-sans transition-colors border-b-2 ${
                      activeMenu === item.labelKey
                        ? "text-[var(--gaf-red)] border-[var(--gaf-red)]"
                        : "text-[var(--gaf-near-black)] border-transparent hover:text-[var(--gaf-red)]"
                    }`}
                  >
                    {t(item.labelKey)}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === item.labelKey ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <NavLink
                    to={item.href ?? "/"}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-5 text-sm font-semibold font-sans transition-colors border-b-2 ${
                        isActive
                          ? "text-[var(--gaf-red)] border-[var(--gaf-red)]"
                          : "text-[var(--gaf-near-black)] border-transparent hover:text-[var(--gaf-red)]"
                      }`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-3">
            <Link
              to="/homeowners/find-a-contractor"
              className="hidden md:inline-block bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold text-sm px-5 py-2.5 transition-colors font-sans"
            >
              {t("common.getFreeEstimate")}
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-0 right-0 bg-white border-b border-[var(--border)] shadow-xl z-40"
            onMouseEnter={keepOpen}
            onMouseLeave={closeMenu}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              {NAV_ITEMS.find((i) => i.labelKey === activeMenu)?.megaMenu && (
                <div
                  className="grid gap-8"
                  style={{
                    gridTemplateColumns: `repeat(${NAV_ITEMS.find((i) => i.labelKey === activeMenu)!.megaMenu!.length}, 1fr)`,
                  }}
                >
                  {NAV_ITEMS.find((i) => i.labelKey === activeMenu)!.megaMenu!.map((col) => (
                    <div key={col.headingKey}>
                      <h4 className="text-[var(--gaf-red)] text-xs font-semibold uppercase tracking-widest mb-3 pb-2 border-b border-gray-200 font-sans">
                        {t(col.headingKey)}
                      </h4>
                      <ul className="space-y-2">
                        {col.links.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              to={link.href}
                              onClick={() => setActiveMenu(null)}
                              className="text-sm text-gray-700 hover:text-[var(--gaf-red)] font-sans transition-colors block py-0.5"
                            >
                              {lang === "tr" ? link.labelTr : link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
