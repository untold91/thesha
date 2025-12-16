import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Brand Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart Home Innovation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">Transform Your</span>
            <span className="block bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
              Living Space
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {mockData.company.tagline} - Experience next-generation home automation with intelligent touch panels, lighting control, and security systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="group px-8 py-6 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              onClick={scrollToContact}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-semibold border-2 hover:bg-foreground hover:text-background transition-all duration-300"
              onClick={() => document.getElementById('solutions').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Solutions
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">1 Year</div>
              <div className="text-sm text-muted-foreground">Free Service</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;