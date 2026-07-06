import { Link } from "react-router";
import HeroBanner from "../components/shared/HeroBanner";
import StatBar from "../components/shared/StatBar";
import CTABanner from "../components/shared/CTABanner";
import { useTranslation } from "../i18n/LanguageContext";

export default function HomePage() {
  const { t, lang } = useTranslation();

  return (
    <div>
      <HeroBanner
        height="full"
        bgImage="/banner1.png" // Görseli doğrudan public klasöründen çekiyoruz
        eyebrow={t("home.eyebrow")}
        title={t("home.title")}
        subtitle={t("home.subtitle")}
        ctaButtons={[
          { label: t("home.ctaPrimary"), href: "/products/residential", variant: "primary" },
          { label: t("home.ctaSecondary"), href: "/about", variant: "outline" },
        ]}
      />

      <StatBar stats={[
        { value: t("home.stat1Value"), label: t("home.stat1Label") },
        { value: t("home.stat2Value"), label: t("home.stat2Label") },
        { value: t("home.stat3Value"), label: t("home.stat3Label") },
        { value: t("home.stat4Value"), label: t("home.stat4Label") },
      ]} variant="red" />

      <CTABanner
        headline={t("home.finalCtaTitle")}
        subtext={t("home.finalCtaSubtitle")}
        ctaLabel={t("home.ctaLabel")}
        ctaHref="/contact"
        variant="dark"
      />
    </div>
  );
}