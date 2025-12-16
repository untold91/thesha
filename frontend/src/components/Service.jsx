import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const Service = () => {
  return (
    <section id="service" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Service & Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We stand behind our installations with comprehensive support
            </p>
          </div>

          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {mockData.serviceInfo.warranty}
                </div>
                <p className="text-xl text-muted-foreground">
                  {mockData.serviceInfo.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {mockData.serviceInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground">
                  {mockData.serviceInfo.postWarranty}
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