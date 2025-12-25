import React from 'react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-foreground">
              About Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-muted-foreground">
              Leading provider of smart home automation solutions
            </p>
          </div>

          {/* Company Story */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 dark:text-foreground leading-relaxed mb-6">
              <strong>Mahadeva Systems</strong>, under our brand <strong>Sha</strong>, is dedicated to transforming homes and offices into intelligent, connected spaces. We specialize in providing comprehensive smart home automation solutions that combine cutting-edge technology with user-friendly design.
            </p>
            <p className="text-lg text-gray-700 dark:text-foreground leading-relaxed">
              With years of experience in the automation industry, we've helped hundreds of clients across India embrace the future of smart living. Our solutions are tailored to meet the unique needs of residential properties, commercial offices, and hospitality establishments.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-foreground">Quality First</h3>
                <p className="text-gray-600 dark:text-muted-foreground">
                  We use only premium quality devices and provide professional installation with 1 year free service warranty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-foreground">Customer Focus</h3>
                <p className="text-gray-600 dark:text-muted-foreground">
                  Our dedicated team provides 24/7 support and personalized solutions tailored to your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-foreground">Innovation</h3>
                <p className="text-gray-600 dark:text-muted-foreground">
                  We stay ahead with the latest smart home technologies and continuously improve our offerings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 dark:border-border hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-foreground">Mission</h3>
                <p className="text-gray-600 dark:text-muted-foreground">
                  To make smart living accessible, affordable, and seamless for everyone across India.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-center pt-8 border-t border-gray-200 dark:border-border">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2">50+</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-2">98%</div>
              <div className="text-sm text-gray-600 dark:text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;