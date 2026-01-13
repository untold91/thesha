import React from 'react';
import { Mail, Phone, MapPin, Youtube, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();
  const { company } = mockData;
  const socialMedia = company.social_media;

  const formatAddress = () => {
    const addr = company.address;
    return `${addr.building}, ${addr.street}, ${addr.area}, ${addr.city}, ${addr.state} ${addr.zip}, ${addr.country}`;
  };

  return (
    <footer className="bg-black dark:bg-white border-t border-white/10 dark:border-black/10 text-white dark:text-black" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={theme === 'dark' 
                  ? 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/70ax8pqv_noBgBlack.png'
                  : 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/xu4gxpi2_noBgWhite.png' 
                } 
                alt="Sha by Mahadeva Systems" 
                className="h-14 w-auto"
              />
              <div>
                <div className="text-xs text-white/60 dark:text-black/60">by</div>
                <div className="text-sm font-semibold">{company.name}</div>
              </div>
            </div>
            <p className="text-sm text-white/70 dark:text-black/70 leading-relaxed">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors" data-testid="footer-home-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors" data-testid="footer-products-link">
                  Products
                </Link>
              </li>
              <li>
                <button onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('scenarios')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors">
                  Scenarios
                </button>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors" data-testid="footer-about-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors" data-testid="footer-contact-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <a href={`mailto:${company.email}`} className="flex items-start space-x-2 text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{company.email}</span>
              </a>
              <a href={`tel:${company.phone}`} className="flex items-center space-x-2 text-sm text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{company.phone}</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-white/70 dark:text-black/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{formatAddress()}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all" aria-label="YouTube" data-testid="social-youtube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all" aria-label="LinkedIn" data-testid="social-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all" aria-label="Facebook" data-testid="social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all" aria-label="Instagram" data-testid="social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white transition-all" aria-label="Twitter" data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 dark:border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60 dark:text-black/60">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
            <p className="text-sm text-white/60 dark:text-black/60">
              {company.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
