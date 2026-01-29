import React, { useState } from 'react';
import { ArrowRight, Home, Building2, Briefcase, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const ProductSelector = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});
  const navigate = useNavigate();

  const questions = [
    {
      question: 'What type of property do you want to automate?',
      options: [
        { id: 'residence', label: 'Residential Home', icon: Home, desc: 'Houses, Apartments, Villas' },
        { id: 'office', label: 'Office Space', icon: Briefcase, desc: 'Corporate offices, Co-working' },
        { id: 'hotel', label: 'Hotel/Hospitality', icon: Building2, desc: 'Hotels, Resorts, Guest houses' }
      ]
    },
    {
      question: 'Which features are most important to you?',
      options: [
        { id: 'lighting', label: 'Lighting Control', desc: 'Smart switches and dimmers' },
        { id: 'security', label: 'Security Systems', desc: 'CCTV cameras and sensors' },
        { id: 'climate', label: 'Climate Control', desc: 'AC and fan automation' },
        { id: 'all', label: 'Complete Automation', desc: 'All smart home features' }
      ]
    },
    {
      question: 'What is your property size?',
      options: [
        { id: 'small', label: 'Small (1-2 BHK)', desc: 'Up to 1000 sq ft' },
        { id: 'medium', label: 'Medium (3-4 BHK)', desc: '1000-2500 sq ft' },
        { id: 'large', label: 'Large (5+ BHK/Commercial)', desc: '2500+ sq ft' }
      ]
    }
  ];

  const handleSelect = (questionIndex, optionId) => {
    setSelections({ ...selections, [questionIndex]: optionId });
    
    if (questionIndex < questions.length - 1) {
      setTimeout(() => setStep(questionIndex + 1), 300);
    } else {
      setTimeout(() => setStep(questionIndex + 1), 300);
    }
  };

  const resetSelector = () => {
    setStep(0);
    setSelections({});
  };

  const handleCancel = () => {
    if (onClose) {
      onClose();
    }
  };

  const getRecommendation = () => {
    const propertyType = selections[0];
    const features = selections[1];
    
    return {
      title: `Smart ${propertyType === 'residence' ? 'Home' : propertyType === 'office' ? 'Office' : 'Hotel'} Solution`,
      description: 'Based on your selections, we recommend a comprehensive automation package.',
      products: [
        'Smart Touch Panels',
        features === 'lighting' || features === 'all' ? 'Intelligent Lighting System' : null,
        features === 'security' || features === 'all' ? '4K CCTV Cameras & Sensors' : null,
        features === 'climate' || features === 'all' ? 'Climate Control System' : null,
        'Professional Installation',
        '1 Year Free Service'
      ].filter(Boolean)
    };
  };

  if (step === questions.length) {
    const recommendation = getRecommendation();
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full bg-white dark:bg-black shadow-2xl border-2 border-black/20 dark:border-white/20">
          <CardHeader className="border-b border-black/10 dark:border-white/10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-black dark:text-white">
                Your Personalized Recommendation
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={handleCancel} data-testid="selector-close-button">
                Cancel
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-black dark:text-white mb-2">
                {recommendation.title}
              </h3>
              <p className="text-black/70 dark:text-white/70">
                {recommendation.description}
              </p>
            </div>

            <div className="bg-black/5 dark:bg-white/10 p-6 rounded-lg">
              <h4 className="font-semibold text-black dark:text-white mb-4">Recommended Package Includes:</h4>
              <div className="space-y-3">
                {recommendation.products.map((product, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-black dark:text-white flex-shrink-0" />
                    <span className="text-black/80 dark:text-white/80">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => { navigate('/contact'); handleCancel(); }} 
                className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 h-12 text-lg"
                data-testid="selector-request-demo-button"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={resetSelector} 
                variant="outline" 
                className="flex-1 h-12 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                data-testid="selector-start-over-button"
              >
                Start Over
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[step];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-white dark:bg-black shadow-2xl border-2 border-black/20 dark:border-white/20">
        <CardHeader className="border-b border-black/10 dark:border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-black/60 dark:text-white/60">Step {step + 1} of {questions.length}</span>
            <Button variant="ghost" size="sm" onClick={handleCancel} data-testid="selector-cancel-button">
              Cancel
            </Button>
          </div>
          <CardTitle className="text-2xl text-black dark:text-white">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {currentQuestion.options.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(step, option.id)}
                  className="flex items-start gap-4 p-4 border-2 border-black/20 dark:border-white/20 rounded-lg hover:border-black dark:hover:border-white hover:bg-black/5 dark:hover:bg-white/10 transition-all text-left group"
                  data-testid={`selector-option-${option.id}`}
                >
                  {Icon && (
                    <div className="w-12 h-12 rounded-lg bg-black/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-black dark:group-hover:bg-white transition-colors">
                      <Icon className="w-6 h-6 text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-black dark:text-white mb-1">
                      {option.label}
                    </div>
                    <div className="text-sm text-black/60 dark:text-white/60">
                      {option.desc}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSelector;
