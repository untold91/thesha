import React from 'react';
import { Mail, Phone, MapPin, Youtube, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockData } from '../mock';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={theme === 'dark' 
                  ? 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/xu4gxpi2_noBgWhite.png' 
                  : 'https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/70ax8pqv_noBgBlack.png'
                } 
                alt="Sha by Mahadeva Systems" 
                className="h-14 w-auto"
              />
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400">by</div>
                <div className="text-sm font-semibold text-black dark:text-white">Mahadeva Systems</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {mockData.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <button onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('scenarios')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Scenarios
                </button>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Contact Info</h3>
            <div className="space-y-3">
              <a href={`mailto:${mockData.company.email}`} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">{mockData.company.email}</span>
              </a>
              <a href={`tel:${mockData.company.phone}`} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{mockData.company.phone}</span>
              </a>
              <div className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Smart Home Street,<br />Tech Park, Hyderabad,<br />Telangana 500032, India</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black dark:text-white">Follow Us</h3>
            <div className="flex flex-wrap gap-3">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919550509490" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all" aria-label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Mahadeva Systems. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Smart Living, Simplified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;