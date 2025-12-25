import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Service = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="service" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-blue-950/10 dark:to-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
              <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Service & Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We stand behind our installations with comprehensive support
            </p>
          </div>

          <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-2xl bg-white dark:bg-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {mockData.serviceInfo.warranty}
                </div>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  {mockData.serviceInfo.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {mockData.serviceInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                  {mockData.serviceInfo.postWarranty}
                </p>
                
                {/* Contact Us Button */}
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    onClick={handleContactClick}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Service;