import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const slides = [
  {
    id: 1,
    title: 'SMART TOUCH PANELS',
    subtitle: 'Control Everything at Your Fingertips',
    description: 'Premium glass touch panels with intelligent automation',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80',
    cta: 'Explore Now'
  },
  {
    id: 2,
    title: 'INTELLIGENT LIGHTING',
    subtitle: 'Transform Your Space with Smart Light',
    description: 'Energy-efficient lighting control for modern homes',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80',
    cta: 'Learn More'
  },
  {
    id: 3,
    title: 'ADVANCED SECURITY',
    subtitle: 'Your Safety, Our Priority',
    description: '4K CCTV cameras with AI-powered monitoring',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    cta: 'Discover'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 mb-3">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-white/80 mb-8 max-w-xl">
                  {slide.description}
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
                  onClick={scrollToContact}
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all z-10"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-blue-600 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;