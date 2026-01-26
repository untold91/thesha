import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const Service = () => {
  const serviceInfo = {
    warranty: 'Warranty',
    description: 'Free support and maintenance, guaranteed for the entire warranty period after installation.',
    postWarranty: 'Affordable paid service plans available after the free period',
    features: [
      'Regular maintenance checks',
      'Software updates',
      '24/7 technical support',
      'Emergency repairs'
    ]
  }
  
  return (
    <section id="service" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/5 dark:bg-white/10 mb-6">
              <Shield className="w-10 h-10 text-black dark:text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
              Service & Support
            </h2>
            <p className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              We stand behind our installations with comprehensive support
            </p>
          </div>

          <Card className="border-2 border-black/20 dark:border-white/20 shadow-2xl bg-white dark:bg-black">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-black dark:text-white mb-2">
                  {serviceInfo.warranty}
                </div>
                <p className="text-xl text-black/70 dark:text-white/70">
                  {serviceInfo.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {serviceInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-black dark:text-white flex-shrink-0 mt-1" />
                    <span className="text-black/80 dark:text-white/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10">
                <p className="text-center text-black/70 dark:text-white/70">
                  {serviceInfo.postWarranty}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Service;
