import React from 'react';
import { Smartphone, Lightbulb, Wind, Settings, Video, Activity } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  touchscreen: Smartphone,
  lightbulb: Lightbulb,
  wind: Wind,
  settings: Settings,
  video: Video,
  activity: Activity
};

const SolutionsNew = () => {
  return (
    <section id="solutions" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Comprehensive Smart Home Ecosystem
          </h2>
          <p className="text-lg text-black/70 dark:text-white/70 max-w-3xl mx-auto">
            Complete hardware and software solutions covering all smart home scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.solutions.map((solution) => {
            const Icon = iconMap[solution.icon];
            return (
              <div
                key={solution.id}
                className="group bg-white dark:bg-black p-8 rounded-lg hover:shadow-2xl transition-all duration-300 border-2 border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white"
              >
                <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:bg-black dark:group-hover:bg-white transition-colors">
                  <Icon className="w-8 h-8 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                  {solution.title}
                </h3>
                <p className="text-black/70 dark:text-white/70 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsNew;
