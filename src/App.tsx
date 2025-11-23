import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoleSpecificQuestions from "./pages/RoleSpecificQuestions";
import RealTimeFeedback from "./pages/RealTimeFeedback";
import DetailedScoring from "./pages/DetailedScoring";
import TrackProgress from "./pages/TrackProgress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/role-specific-questions" element={<RoleSpecificQuestions />} />
          <Route path="/real-time-feedback" element={<RealTimeFeedback />} />
          <Route path="/detailed-scoring" element={<DetailedScoring />} />
          <Route path="/track-progress" element={<TrackProgress />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
