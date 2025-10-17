import React from "react";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CancellationRefunds from "./pages/CancellationRefunds";
import TermsConditions from "./pages/TermsConditions";
import Shipping from "./pages/Shipping";
import Privacy from "./pages/Privacy";
import ContactUs from "./pages/ContactUs";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cancellation-refunds" element={<CancellationRefunds />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
