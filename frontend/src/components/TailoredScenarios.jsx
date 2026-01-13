import React from 'react';
import { Home, Building2, Briefcase } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const scenarios = [
  {
    id: 'residence',
    label: 'Residence',
    icon: Home,
    title: 'Smart Residence Solutions',
    description: 'Transform your home into an intelligent living space with automated lighting, climate control, security systems, and entertainment integration.',
    features: [
      'Automated lighting scenes',
      'Climate control optimization',
      'Advanced security monitoring',
      'Voice control integration',
      'Energy management system'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  },
  {
    id: 'office',
    label: 'Office',
    icon: Briefcase,
    title: 'Smart Office Solutions',
    description: 'Enhance productivity with intelligent workspace automation including meeting room management, access control, and energy-efficient systems.',
    features: [
      'Meeting room automation',
      'Access control systems',
      'Smart lighting zones',
      'HVAC optimization',
      'Occupancy-based controls'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    id: 'hotel',
    label: 'Hotel',
    icon: Building2,
    title: 'Smart Hotel Solutions',
    description: 'Deliver exceptional guest experiences with automated room controls, energy management, and seamless integration across your property.',
    features: [
      'Guest room automation',
      'Energy management',
      'Centralized control',
      'Maintenance alerts',
      'Guest preferences memory'
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
  }
];

const TailoredScenarios = () => {
  const [activeTab, setActiveTab] = React.useState('residence');

  const activeScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];
  const Icon = activeScenario.icon;

  return (
    <section id="scenarios" className="py-20 bg-black dark:bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-black">
            Tailored Solutions
          </h2>
          <p className="text-lg text-white/70 dark:text-black/70">
            Smart automation designed for every space
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Updated TabsList to show only 3 centered items */}
          <div className="flex justify-center mb-8">
            <TabsList className="inline-grid grid-cols-3 gap-2 h-auto bg-white/10 dark:bg-black/10 p-2 rounded-lg">
              {scenarios.map((scenario) => {
                const ScenarioIcon = scenario.icon;
                return (
                  <TabsTrigger
                    key={scenario.id}
                    value={scenario.id}
                    className="flex flex-col items-center gap-2 py-4 px-8 text-white/70 dark:text-black/70 data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-black dark:data-[state=active]:text-white rounded-md transition-all"
                  >
                    <ScenarioIcon className="w-6 h-6" />
                    <span className="text-sm font-medium">{scenario.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {scenarios.map((scenario) => (
            <TabsContent key={scenario.id} value={scenario.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="order-2 lg:order-1">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 border-2 border-white/20 dark:border-black/20">
                    <img
                      src={scenario.image}
                      alt={scenario.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 dark:bg-black/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white dark:text-black" />
                    </div>
                    <h3 className="text-3xl font-bold text-white dark:text-black">
                      {scenario.title}
                    </h3>
                  </div>
                  <p className="text-lg text-white/70 dark:text-black/70 mb-8 leading-relaxed">
                    {scenario.description}
                  </p>
                  <div className="space-y-3">
                    {scenario.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white dark:bg-black"></div>
                        <span className="text-white/90 dark:text-black/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TailoredScenarios;
