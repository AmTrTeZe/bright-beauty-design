import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Why from "./pages/Why";
import What from "./pages/What";
import How from "./pages/How";
import Who from "./pages/Who";
import With from "./pages/With";
import Where from "./pages/Where";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      {/* French routes (default) */}
      <Route path="/" element={<Index />} />
      <Route path="/why" element={<Why />} />
      <Route path="/what" element={<What />} />
      <Route path="/how" element={<How />} />
      <Route path="/who" element={<Who />} />
      <Route path="/with" element={<With />} />
      <Route path="/where" element={<Where />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      
      {/* English routes */}
      <Route path="/en" element={<Index />} />
      <Route path="/en/why" element={<Why />} />
      <Route path="/en/what" element={<What />} />
      <Route path="/en/how" element={<How />} />
      <Route path="/en/who" element={<Who />} />
      <Route path="/en/with" element={<With />} />
      <Route path="/en/where" element={<Where />} />
      <Route path="/en/legal-notice" element={<MentionsLegales />} />
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <CookieConsent />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <AppRoutes />
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
