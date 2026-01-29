import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mockData } from '../mock';

const HeaderNew = () => {
  const { company } = mockData;
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll position to highlight active section
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }

    const handleScroll = () => {
      const sections = ['solutions', 'scenarios'];
      const scrollPosition = window.scrollY + 150; // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      
      // If at the top, no section is active
      if (window.scrollY < 300) {
        setActiveSection(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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
    if (path === '/') {
      // HOME is only active when on homepage AND no section (Solutions/Scenarios) is active
      return location.pathname === '/' && activeSection === null;
    }
    return location.pathname.startsWith(path);
  };

  // Check if a section is active (for scroll-based highlighting)
  const isSectionActive = (sectionId) => {
    return location.pathname === '/' && activeSection === sectionId;
  };

  // Get nav link classes based on active state
  const getNavClasses = (path) => {
    const baseClasses = "text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-md";
    if (isActive(path)) {
      return `${baseClasses} bg-black dark:bg-white text-white dark:text-black`;
    }
    return `${baseClasses} text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10`;
  };

  // Get section nav classes (for Solutions/Scenarios)
  const getSectionNavClasses = (sectionId) => {
    const baseClasses = "text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-md";
    if (isSectionActive(sectionId)) {
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

  // Mobile section nav classes
  const getMobileSectionNavClasses = (sectionId) => {
    const baseClasses = "block w-full text-left py-2 px-3 text-sm font-medium transition-all duration-200 rounded-md";
    if (isSectionActive(sectionId)) {
      return `${baseClasses} bg-black dark:bg-white text-white dark:text-black`;
    }
    return `${baseClasses} text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Brand Name - Fixed for mobile */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-2" data-testid="header-logo">
            <img 
              src={theme === 'dark' 
                ? 'images/title/noBgWhite.png' 
                : 'images/title/noBgBlack.png'
              } 
              alt="Sha by Mahadeva Systems" 
              className="h-14 w-auto"
            />
            {/* Always visible brand text */}
            <div className="flex items-center border-l-2 h-12 border-black/30 dark:border-white/30 pl-4">
              <div className="flex flex-col justify-center">
                <div className="text-xs leading-tight text-black/60 dark:text-white/60">by</div>
                <div className="text-sm font-semibold leading-tight text-black dark:text-white">{company.name}</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" onClick={scrollToTop} className={getNavClasses('/')} data-testid="nav-home">HOME</Link>
            <button onClick={() => scrollToSection('solutions')} className={getSectionNavClasses('solutions')} data-testid="nav-solutions">SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className={getSectionNavClasses('scenarios')} data-testid="nav-scenarios">SCENARIOS</button>
            <button onClick={() => handleNavClick('/products')} className={getNavClasses('/products')} data-testid="nav-products">PRODUCTS</button>
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
            <button onClick={() => scrollToSection('solutions')} className={getMobileSectionNavClasses('solutions')}>SOLUTIONS</button>
            <button onClick={() => scrollToSection('scenarios')} className={getMobileSectionNavClasses('scenarios')}>SCENARIOS</button>
            <button onClick={() => handleNavClick('/products')} className={getMobileNavClasses('/products')}>PRODUCTS</button>
            <button onClick={() => handleNavClick('/about')} className={getMobileNavClasses('/about')}>ABOUT</button>
            <button onClick={() => handleNavClick('/contact')} className={getMobileNavClasses('/contact')}>CONTACT</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNew;
