import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'SMART TOUCH PANELS',
    subtitle: 'Control Everything at Your Fingertips',
    description: 'Experience convenience and energy savings with intelligent automation',
    benefits: ['Save up to 30% on energy bills', 'Control from anywhere', 'Voice activated'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1920&q=80',
    cta: 'Get Started'
  },
  {
    id: 2,
    title: 'INTELLIGENT LIGHTING',
    subtitle: 'Transform Your Space with Smart Light',
    description: 'Automated lighting that adapts to your lifestyle and saves energy',
    benefits: ['Mood-based scenes', 'Automated schedules', '80% longer bulb life'],
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80',
    cta: 'Learn More'
  },
  {
    id: 3,
    title: 'ADVANCED SECURITY',
    subtitle: 'Your Safety, Our Priority',
    description: '24/7 monitoring with AI-powered detection and instant alerts',
    benefits: ['4K crystal clear footage', 'Smart motion detection', 'Remote monitoring'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    cta: 'Request Demo'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    navigate('/contact');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-6 animate-fade-in">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Smart Living Innovation</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-white/95 mb-3 font-medium">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-white/85 mb-6 max-w-xl">
                  {slide.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-8">
                  {slide.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button
                    size="lg"
                    className="group px-8 py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={scrollToContact}
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                    onClick={() => navigate('/products')}
                  >
                    View Products
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all z-10 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all z-10 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-blue-500 w-10' : 'bg-white/50 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;