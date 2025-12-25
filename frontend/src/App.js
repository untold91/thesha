import React from 'react';
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
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <SolutionsNew />
      <TailoredScenarios />
      <Service />
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
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;