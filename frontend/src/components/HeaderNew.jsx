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
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMobileMenuOpen(false);
  };

  // Check if a nav item is active
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Get nav link classes based on active state
  const getNavClasses = (path) => {
    const baseClasses = "text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-md";
    if (isActive(path)) {
      return `${baseClasses} bg-black dark:bg-white text-white dark:text-black`;
    }
    return `${baseClasses} text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10`;
  };

  // Mobile nav link classes
  const getMobileNavClasses = (path) => {
    const baseClasses = "block w-full text-left py-2 px-3 text-sm font-medium transition-all duration-200 rounded-md";
    if (isActive(path)) {
      return `${baseClasses} bg-black dark:bg-white text-white dark:text-black`;
    }
    return `${baseClasses} text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Brand Name - Fixed for mobile */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2" data-testid="header-logo">
            <img 
              src={theme === 'dark' 
                ? 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/xu4gxpi2_noBgWhite.png' 
                : 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/70ax8pqv_noBgBlack.png'
              } 
              alt="Sha by Mahadeva Systems" 
              className="h-10 w-auto"
            />
            {/* Always visible brand text */}
            <div className="border-l border-black/20 dark:border-white/20 pl-2">
              <div className="text-[10px] leading-tight text-black/60 dark:text-white/60">by</div>
              <div className="text-xs font-semibold leading-tight text-black dark:text-white">Mahadeva Systems</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" onClick={scrollToTop} className={getNavClasses('/')} data-testid="nav-home">HOME</Link>
            <button onClick={() => handleNavClick('/products')} className={getNavClasses('/products')} data-testid="nav-products">PRODUCTS</button>
            <button onClick={() => scrollToSection('solutions')} className={`text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-md text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10`} data-testid="nav-solutions">SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className={`text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-md text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10`} data-testid="nav-scenarios">SCENARIOS</button>
            <button onClick={() => handleNavClick('/about')} className={getNavClasses('/about')} data-testid="nav-about">ABOUT</button>
            <button onClick={() => handleNavClick('/contact')} className={getNavClasses('/contact')} data-testid="nav-contact">CONTACT</button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
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
          <div className="md:hidden py-4 space-y-1 border-t border-black/10 dark:border-white/10" data-testid="mobile-menu">
            <Link to="/" onClick={() => { scrollToTop(); setMobileMenuOpen(false); }} className={getMobileNavClasses('/')}>HOME</Link>
            <button onClick={() => handleNavClick('/products')} className={getMobileNavClasses('/products')}>PRODUCTS</button>
            <button onClick={() => scrollToSection('solutions')} className={`block w-full text-left py-2 px-3 text-sm font-medium text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-md`}>SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className={`block w-full text-left py-2 px-3 text-sm font-medium text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 rounded-md`}>SCENARIOS</button>
            <button onClick={() => handleNavClick('/about')} className={getMobileNavClasses('/about')}>ABOUT</button>
            <button onClick={() => handleNavClick('/contact')} className={getMobileNavClasses('/contact')}>CONTACT</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNew;
