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
    <section id="solutions" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Comprehensive Smart Home Ecosystem
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Complete hardware and software solutions covering all smart home scenarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.solutions.map((solution) => {
            const Icon = iconMap[solution.icon];
            return (
              <div
                key={solution.id}
                className="group bg-white dark:bg-gray-800 p-8 rounded-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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