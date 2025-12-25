import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { mockData } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-muted/30 border-t border-gray-200 dark:border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gray-900 dark:text-foreground">Sha</div>
            <p className="text-sm text-gray-600 dark:text-muted-foreground">
              by {mockData.company.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-muted-foreground leading-relaxed">
              {mockData.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('scenarios')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  Scenarios
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  Service & Support
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <a href={`mailto:${mockData.company.email}`} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="break-all">{mockData.company.email}</span>
              </a>
              <a href={`tel:${mockData.company.phone}`} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-muted-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{mockData.company.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-muted-foreground">
              © {new Date().getFullYear()} Mahadeva Systems. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-muted-foreground">
              Smart Living, Simplified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;