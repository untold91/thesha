import React, { useEffect, useState } from 'react';
import { Award, Users, Target, Lightbulb, MapPin, Building2, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { mockData } from '../mock';

const AboutPage = () => {
  const [hoveredState, setHoveredState] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-16" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white" data-testid="about-title">
              About
            </h1>
            <p className="text-xl text-black/70 dark:text-white/70">
              Leading provider of smart home automation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Company Story */}
            <div className="mb-16">
              <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed mb-6">
                <strong>{mockData.company.name}</strong>, under our brand <strong>{mockData.company.brand}</strong>, is dedicated to transforming homes and offices into intelligent, connected spaces. We specialize in providing comprehensive smart home automation solutions that combine cutting-edge technology with user-friendly design.
              </p>
              <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                With years of experience in the automation industry, we&apos;ve helped hundreds of clients across India embrace the future of smart living. Our solutions are tailored to meet the unique needs of residential properties, commercial offices, and hospitality establishments.
              </p>
            </div>

            {/* India Map Infographic - Our Presence Across India */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
                Our Presence Across India
              </h2>
              
              <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl border-2 border-black/10 dark:border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Map Container */}
                  <div className="lg:col-span-2">
                    <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                      <svg 
                        viewBox="0 0 600 700" 
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* India Map Outline - Simplified */}
                        <path 
                          d="M 250 50 
                             C 280 45, 320 50, 350 60 
                             C 380 70, 410 90, 430 120 
                             C 450 150, 460 180, 470 220 
                             C 475 260, 470 300, 460 340 
                             C 450 380, 430 420, 400 460 
                             C 370 500, 340 540, 300 570 
                             C 260 600, 220 610, 180 600 
                             C 140 590, 110 560, 90 520 
                             C 70 480, 60 440, 55 400 
                             C 50 360, 55 320, 70 280 
                             C 85 240, 110 200, 140 160 
                             C 170 120, 200 80, 250 50 Z"
                          fill="currentColor"
                          className="text-black/10 dark:text-white/10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        
                        {/* Telangana State - Highlighted */}
                        <path 
                          d="M 280 320 
                             C 290 310, 310 305, 330 310 
                             C 350 315, 365 330, 370 350 
                             C 375 370, 370 390, 355 405 
                             C 340 420, 315 425, 290 420 
                             C 265 415, 250 400, 250 375 
                             C 250 350, 265 330, 280 320 Z"
                          fill="currentColor"
                          className={`transition-all duration-300 cursor-pointer ${
                            hoveredState === 'telangana' 
                              ? 'text-black dark:text-white' 
                              : 'text-black/60 dark:text-white/60'
                          }`}
                          stroke="currentColor"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredState('telangana')}
                          onMouseLeave={() => setHoveredState(null)}
                        />
                        
                        {/* Andhra Pradesh State - Highlighted */}
                        <path 
                          d="M 300 420 
                             C 320 410, 350 415, 375 430 
                             C 400 445, 420 470, 425 500 
                             C 430 530, 420 555, 395 570 
                             C 370 585, 335 585, 305 575 
                             C 275 565, 255 545, 250 515 
                             C 245 485, 260 455, 280 435 
                             C 285 428, 295 422, 300 420 Z"
                          fill="currentColor"
                          className={`transition-all duration-300 cursor-pointer ${
                            hoveredState === 'andhra' 
                              ? 'text-black dark:text-white' 
                              : 'text-black/60 dark:text-white/60'
                          }`}
                          stroke="currentColor"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredState('andhra')}
                          onMouseLeave={() => setHoveredState(null)}
                        />
                        
                        {/* New Delhi Marker - Reference Point */}
                        <g className="cursor-pointer" transform="translate(265, 140)">
                          <circle 
                            r="8" 
                            fill="currentColor" 
                            className="text-black/40 dark:text-white/40"
                          />
                          <circle 
                            r="4" 
                            fill="currentColor" 
                            className="text-black dark:text-white"
                          />
                          <text 
                            x="15" 
                            y="5" 
                            className="text-xs fill-current text-black/60 dark:text-white/60 font-medium"
                          >
                            New Delhi
                          </text>
                        </g>
                        
                        {/* Hyderabad Marker - Headquarters */}
                        <g 
                          className="cursor-pointer"
                          transform="translate(310, 365)"
                          onMouseEnter={() => setHoveredState('telangana')}
                          onMouseLeave={() => setHoveredState(null)}
                        >
                          <circle 
                            r="12" 
                            fill="currentColor" 
                            className={`transition-all duration-300 ${
                              hoveredState === 'telangana' 
                                ? 'text-black dark:text-white animate-pulse' 
                                : 'text-black/70 dark:text-white/70'
                            }`}
                          />
                          <circle 
                            r="6" 
                            fill="currentColor" 
                            className="text-white dark:text-black"
                          />
                          <Building2 
                            x="-6" 
                            y="-6" 
                            width="12" 
                            height="12" 
                            className="text-black dark:text-white"
                          />
                        </g>
                        
                        {/* Hyderabad Label */}
                        <text 
                          x="330" 
                          y="370" 
                          className="text-sm fill-current text-black dark:text-white font-bold"
                        >
                          Hyderabad (HQ)
                        </text>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Legend and Info Sidebar */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                      Active Regions
                    </h3>
                    
                    {/* Telangana */}
                    <div 
                      className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        hoveredState === 'telangana'
                          ? 'border-black dark:border-white bg-black/10 dark:bg-white/10'
                          : 'border-black/20 dark:border-white/20'
                      }`}
                      onMouseEnter={() => setHoveredState('telangana')}
                      onMouseLeave={() => setHoveredState(null)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 rounded-full bg-black/60 dark:bg-white/60"></div>
                        <span className="font-bold text-black dark:text-white">Telangana</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 mb-1">
                        <Zap className="w-4 h-4" />
                        <span>Active Operations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                        <Building2 className="w-4 h-4" />
                        <span>Headquarters & Primary Hub</span>
                      </div>
                    </div>
                    
                    {/* Andhra Pradesh */}
                    <div 
                      className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        hoveredState === 'andhra'
                          ? 'border-black dark:border-white bg-black/10 dark:bg-white/10'
                          : 'border-black/20 dark:border-white/20'
                      }`}
                      onMouseEnter={() => setHoveredState('andhra')}
                      onMouseLeave={() => setHoveredState(null)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 rounded-full bg-black/60 dark:bg-white/60"></div>
                        <span className="font-bold text-black dark:text-white">Andhra Pradesh</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 mb-1">
                        <Zap className="w-4 h-4" />
                        <span>Active Operations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70">
                        <MapPin className="w-4 h-4" />
                        <span>Extended Service Coverage</span>
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="p-4 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                      <h4 className="font-semibold text-black dark:text-white mb-3">Legend</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
                          <div className="w-3 h-3 rounded-full bg-black/60 dark:bg-white/60"></div>
                          <span>Active Service Region</span>
                        </div>
                        <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
                          <div className="w-3 h-3 rounded-full bg-black/10 dark:bg-white/10 border border-black/30 dark:border-white/30"></div>
                          <span>Other Regions</span>
                        </div>
                        <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
                          <Building2 className="w-3 h-3" />
                          <span>Headquarters</span>
                        </div>
                        <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
                          <div className="w-3 h-3 rounded-full bg-black/40 dark:bg-white/40"></div>
                          <span>Reference Point</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Footer Text */}
                <p className="text-center text-black/60 dark:text-white/60 mt-6 text-sm">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Currently serving Telangana and Andhra Pradesh with plans to expand across India
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-black">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Quality First</h3>
                  <p className="text-black/70 dark:text-white/70">
                    We use only premium quality devices and provide professional installation with 1 year free service warranty.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-black">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Customer Focus</h3>
                  <p className="text-black/70 dark:text-white/70">
                    Our dedicated team provides 24/7 support and personalized solutions tailored to your specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-black">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Innovation</h3>
                  <p className="text-black/70 dark:text-white/70">
                    We stay ahead with the latest smart home technologies and continuously improve our offerings.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-black">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Mission</h3>
                  <p className="text-black/70 dark:text-white/70">
                    To make smart living accessible, affordable, and seamless for everyone across India.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center pt-8 border-t border-black/10 dark:border-white/10">
              <div>
                <div className="text-4xl font-bold text-black dark:text-white mb-2">500+</div>
                <div className="text-sm text-black/60 dark:text-white/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black dark:text-white mb-2">2</div>
                <div className="text-sm text-black/60 dark:text-white/60">States Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-black dark:text-white mb-2">98%</div>
                <div className="text-sm text-black/60 dark:text-white/60">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
