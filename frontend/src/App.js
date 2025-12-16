import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Products from './components/Products';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <Solutions />
            <Products />
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