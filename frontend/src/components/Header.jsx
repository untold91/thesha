import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';

const Header = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl font-bold">
              <span className="text-foreground">Sha</span>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground">
              by Mahadeva Systems
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('solutions')} className="text-foreground hover:text-primary transition-colors font-medium">Solutions</button>
            <button onClick={() => scrollToSection('products')} className="text-foreground hover:text-primary transition-colors font-medium">Products</button>
            <button onClick={() => scrollToSection('service')} className="text-foreground hover:text-primary transition-colors font-medium">Service</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">Contact</button>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="outline"
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
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('solutions')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium">Solutions</button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium">Products</button>
            <button onClick={() => scrollToSection('service')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium">Service</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;