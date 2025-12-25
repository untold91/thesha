import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';

const HeaderNew = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-gray-200 dark:border-border shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Sha
            </div>
            <div className="hidden md:block text-xs text-gray-500 dark:text-muted-foreground border-l border-gray-300 dark:border-border pl-2">
              by Mahadeva Systems
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">HOME</button>
            <button onClick={() => scrollToSection('solutions')} className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">SOLUTIONS</button>
            <button onClick={() => scrollToSection('products')} className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">PRODUCTS</button>
            <button onClick={() => scrollToSection('scenarios')} className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">SCENARIOS</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">CONTACT</button>
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
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200 dark:border-border">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">HOME</button>
            <button onClick={() => scrollToSection('solutions')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">SOLUTIONS</button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">PRODUCTS</button>
            <button onClick={() => scrollToSection('scenarios')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">SCENARIOS</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-sm font-medium text-gray-700 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">CONTACT</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNew;