import React, { useEffect } from 'react';
import { Award, Users, Target, Lightbulb, MapPin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectLocations = [
    { city: 'Mumbai', top: '68%', left: '18%', projects: 85 },
    { city: 'Delhi', top: '22%', left: '32%', projects: 120 },
    { city: 'Bangalore', top: '72%', left: '30%', projects: 95 },
    { city: 'Hyderabad', top: '62%', left: '32%', projects: 150 },
    { city: 'Chennai', top: '75%', left: '34%', projects: 70 },
    { city: 'Pune', top: '66%', left: '24%', projects: 60 },
    { city: 'Ahmedabad', top: '54%', left: '20%', projects: 45 },
    { city: 'Kolkata', top: '54%', left: '50%', projects: 55 }
  ];

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
                <strong>Mahadeva Systems</strong>, under our brand <strong>Sha</strong>, is dedicated to transforming homes and offices into intelligent, connected spaces. We specialize in providing comprehensive smart home automation solutions that combine cutting-edge technology with user-friendly design.
              </p>
              <p className="text-lg text-black/80 dark:text-white/80 leading-relaxed">
                With years of experience in the automation industry, we've helped hundreds of clients across India embrace the future of smart living. Our solutions are tailored to meet the unique needs of residential properties, commercial offices, and hospitality establishments.
              </p>
            </div>

            {/* India Map with Project Locations */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
                Our Presence Across India
              </h2>
              <div className="bg-black/5 dark:bg-white/5 p-8 rounded-2xl border-2 border-black/10 dark:border-white/10">
                <div className="relative max-w-2xl mx-auto" style={{ paddingBottom: '120%' }}>
                  {/* India Map SVG */}
                  <svg 
                    viewBox="0 0 400 500" 
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Simplified India outline */}
                    <path 
                      d="M 130 50 L 140 60 L 145 70 L 150 80 L 155 90 L 160 110 L 165 130 L 170 150 L 175 170 L 180 190 L 185 210 L 190 230 L 195 250 L 200 270 L 205 290 L 210 310 L 215 330 L 220 350 L 215 360 L 210 370 L 200 375 L 190 370 L 180 365 L 170 360 L 165 350 L 160 340 L 155 330 L 150 320 L 145 310 L 140 300 L 135 290 L 130 280 L 125 270 L 120 260 L 115 250 L 110 240 L 105 230 L 100 220 L 95 210 L 90 200 L 85 190 L 80 180 L 75 170 L 72 160 L 70 150 L 68 140 L 67 130 L 68 120 L 70 110 L 73 100 L 77 90 L 82 80 L 88 70 L 95 65 L 105 60 L 115 55 L 125 52 Z"
                      fill="currentColor"
                      className="text-black/10 dark:text-white/10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Project Location Markers */}
                  {projectLocations.map((location, index) => (
                    <div
                      key={index}
                      className="absolute group cursor-pointer"
                      style={{ top: location.top, left: location.left, transform: 'translate(-50%, -50%)' }}
                    >
                      <div className="relative">
                        <div className="w-4 h-4 bg-black dark:bg-white rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-4 h-4 bg-black dark:bg-white rounded-full opacity-50 group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      {/* Tooltip */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-black px-3 py-2 rounded-lg shadow-xl border-2 border-black/10 dark:border-white/10 whitespace-nowrap z-10">
                        <div className="text-sm font-semibold text-black dark:text-white">{location.city}</div>
                        <div className="text-xs text-black/60 dark:text-white/60">{location.projects} Projects</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center text-black/70 dark:text-white/70 mt-4">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Serving {projectLocations.length}+ major cities across India
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
                <div className="text-4xl font-bold text-black dark:text-white mb-2">8+</div>
                <div className="text-sm text-black/60 dark:text-white/60">Cities Served</div>
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
