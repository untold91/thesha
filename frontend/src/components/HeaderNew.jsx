import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HeaderNew = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setTimeout(scrollToTop, 50);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Brand Name */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3" data-testid="header-logo">
            <img 
              src={theme === 'dark' 
                ? 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/xu4gxpi2_noBgWhite.png' 
                : 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/70ax8pqv_noBgBlack.png'
              } 
              alt="Sha by Mahadeva Systems" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block border-l border-black/20 dark:border-white/20 pl-3">
              <div className="text-xs text-black/60 dark:text-white/60">by</div>
              <div className="text-sm font-semibold text-black dark:text-white">Mahadeva Systems</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={scrollToTop} className="text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors" data-testid="nav-home">HOME</Link>
            <button onClick={() => handleNavClick('/products')} className="text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors" data-testid="nav-products">PRODUCTS</button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors" data-testid="nav-solutions">SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className="text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors" data-testid="nav-scenarios">SCENARIOS</button>
            <button onClick={() => handleNavClick('/about')} className="text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors" data-testid="nav-about">ABOUT</button>
            <button onClick={() => handleNavClick('/contact')} className="text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors" data-testid="nav-contact">CONTACT</button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-black/10 dark:hover:bg-white/10"
              data-testid="theme-toggle-button"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-black/10 dark:hover:bg-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-black/10 dark:border-white/10" data-testid="mobile-menu">
            <Link to="/" onClick={() => { scrollToTop(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors">HOME</Link>
            <button onClick={() => handleNavClick('/products')} className="block w-full text-left py-2 text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors">PRODUCTS</button>
            <button onClick={() => scrollToSection('solutions')} className="block w-full text-left py-2 text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors">SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className="block w-full text-left py-2 text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors">SCENARIOS</button>
            <button onClick={() => handleNavClick('/about')} className="block w-full text-left py-2 text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors">ABOUT</button>
            <button onClick={() => handleNavClick('/contact')} className="block w-full text-left py-2 text-sm font-medium text-black dark:text-white hover:text-black/60 dark:hover:text-white/60 transition-colors">CONTACT</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNew;
