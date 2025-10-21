import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AdsProfile from "./pages/AdsProfile";
import DigitalMarketingGrowth from "./pages/DigitalMarketingGrowth";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Beyond from "./pages/Beyond";
import HealthcarePriceTransparency from "./pages/HealthcarePriceTransparency";
import CreditDefaultPrediction from "./pages/CreditDefaultPrediction";
import DineWise from "./pages/DineWise";
import NikeDigitalMarketing from "./pages/NikeDigitalMarketing";
import ConagraMarketAnalysis from "./pages/ConagraMarketAnalysis";
import DataVisualizationStorytelling from "./pages/DataVisualizationStorytelling";
import WalmartSalesAnalysis from "./pages/WalmartSalesAnalysis";
import MoneyAppUIUX from "./pages/MoneyAppUIUX";
import TheRacquetCaseStudy from "./pages/TheRacquetCaseStudy";
import H5ColoSocialMedia from "./pages/H5ColoSocialMedia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ads-profile" element={<AdsProfile />} />
          <Route path="/digital-marketing-growth" element={<DigitalMarketingGrowth />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/healthcare-price-transparency" element={<HealthcarePriceTransparency />} />
          <Route path="/projects/dinewise" element={<DineWise />} />
          <Route path="/projects/nike-digital-marketing" element={<NikeDigitalMarketing />} />
          <Route path="/projects/conagra-market-analysis" element={<ConagraMarketAnalysis />} />
          <Route path="/projects/credit-default-prediction" element={<CreditDefaultPrediction />} />
          <Route path="/projects/data-visualization-storytelling" element={<DataVisualizationStorytelling />} />
          <Route path="/projects/walmart-sales-analysis" element={<WalmartSalesAnalysis />} />
          <Route path="/projects/money-app-uiux" element={<MoneyAppUIUX />} />
          <Route path="/projects/the-racquet-case-study" element={<TheRacquetCaseStudy />} />
          <Route path="/projects/h5-colo-social-media" element={<H5ColoSocialMedia />} />
          <Route path="/beyond" element={<Beyond />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
