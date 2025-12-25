import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/sonner';
import HeaderNew from './components/HeaderNew';
import HeroCarousel from './components/HeroCarousel';
import SolutionsNew from './components/SolutionsNew';
import Products from './components/Products';
import TailoredScenarios from './components/TailoredScenarios';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="App">
          <HeaderNew />
          <main>
            <HeroCarousel />
            <SolutionsNew />
            <Products />
            <TailoredScenarios />
            <Service />
            <Contact />
          </main>
          <Footer />
          <Toaster />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;