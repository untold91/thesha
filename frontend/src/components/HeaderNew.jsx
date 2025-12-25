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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Brand Name */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3">
            <img 
              src={theme === 'dark' 
                ? 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/xu4gxpi2_noBgWhite.png' 
                : 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/70ax8pqv_noBgBlack.png'
              } 
              alt="Sha by Mahadeva Systems" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block border-l border-gray-300 dark:border-gray-600 pl-3">
              <div className="text-xs text-gray-600 dark:text-gray-400">by</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Mahadeva Systems</div>
            </div>
          </Link>

          {/* Desktop Navigation - Updated Order */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={scrollToTop} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">HOME</Link>
            <button onClick={() => handleNavClick('/products')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">PRODUCTS</button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SCENARIOS</button>
            <button onClick={() => handleNavClick('/about')} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ABOUT US</button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
            <Link to="/" onClick={() => { scrollToTop(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">HOME</Link>
            <button onClick={() => handleNavClick('/products')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">PRODUCTS</button>
            <button onClick={() => scrollToSection('solutions')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SCENARIOS</button>
            <button onClick={() => handleNavClick('/about')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">ABOUT US</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNew;