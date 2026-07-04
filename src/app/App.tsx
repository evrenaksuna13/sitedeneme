import { createBrowserRouter, RouterProvider } from "react-router";
import { LanguageProvider } from "./i18n/LanguageContext";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import ResidentialProductsPage from "./pages/residential/ResidentialProductsPage";
import ProductDetailPage from "./pages/residential/ProductDetailPage";
import CommercialProductsPage from "./pages/commercial/CommercialProductsPage";
import FindContractorPage from "./pages/homeowners/FindContractorPage";
import DesignYourRoofPage from "./pages/homeowners/DesignYourRoofPage";
import LearnAboutRoofingPage from "./pages/homeowners/LearnAboutRoofingPage";
import WarrantyPage from "./pages/homeowners/WarrantyPage";
import ContractorProgramPage from "./pages/contractors/ContractorProgramPage";
import TrainingPage from "./pages/contractors/TrainingPage";
import ContractorResourcesPage from "./pages/contractors/ContractorResourcesPage";
import LearningCenterPage from "./pages/resources/LearningCenterPage";
import ArticleDetailPage from "./pages/resources/ArticleDetailPage";
import AboutPage from "./pages/about/AboutPage";
import SustainabilityPage from "./pages/about/SustainabilityPage";
import NewsPage from "./pages/about/NewsPage";
import CareersPage from "./pages/about/CareersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/residential", element: <ResidentialProductsPage /> },
      { path: "products/residential/:slug", element: <ProductDetailPage /> },
      { path: "products/commercial", element: <CommercialProductsPage /> },
      { path: "homeowners/find-a-contractor", element: <FindContractorPage /> },
      { path: "homeowners/design-your-roof", element: <DesignYourRoofPage /> },
      { path: "homeowners/learn", element: <LearnAboutRoofingPage /> },
      { path: "homeowners/warranty", element: <WarrantyPage /> },
      { path: "contractors", element: <ContractorProgramPage /> },
      { path: "contractors/training", element: <TrainingPage /> },
      { path: "contractors/resources", element: <ContractorResourcesPage /> },
      { path: "resources", element: <LearningCenterPage /> },
      { path: "resources/:slug", element: <ArticleDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "about/sustainability", element: <SustainabilityPage /> },
      { path: "about/news", element: <NewsPage /> },
      { path: "about/careers", element: <CareersPage /> },
    ],
  },
]);

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
