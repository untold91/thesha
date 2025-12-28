import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/sonner';
import HeaderNew from './components/HeaderNew';
import HeroCarousel from './components/HeroCarousel';
import SolutionsNew from './components/SolutionsNew';
import TailoredScenarios from './components/TailoredScenarios';
import Service from './components/Service';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ProductSelector from './components/ProductSelector';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Button } from './components/ui/button';
import { Sparkles } from 'lucide-react';

// Home Page Component
const HomePage = () => {
  const [showSelector, setShowSelector] = useState(false);

  return (
    <>
      <HeroCarousel />
      
      {/* Product Selector CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Not sure where to start?</h3>
              <p className="text-white/90">Let us help you find the perfect smart home solution</p>
            </div>
            <Button 
              size="lg" 
              onClick={() => setShowSelector(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Find My Solution
            </Button>
          </div>
        </div>
      </div>
      
      <SolutionsNew />
      <TailoredScenarios />
      <Service />
      
      {showSelector && <ProductSelector />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="App">
          <HeaderNew />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:productId" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
          <Toaster />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;