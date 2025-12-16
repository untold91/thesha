import React from 'react';
import { Lightbulb, Video, Wind, Settings, Activity, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mock';

const iconMap = {
  touchscreen: Smartphone,
  lightbulb: Lightbulb,
  wind: Wind,
  settings: Settings,
  video: Video,
  activity: Activity
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Smart Home Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive automation solutions tailored for modern homes and offices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockData.solutions.map((solution) => {
            const Icon = iconMap[solution.icon];
            return (
              <Card
                key={solution.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;