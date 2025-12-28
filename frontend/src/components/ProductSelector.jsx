import React, { useState } from 'react';
import { ArrowRight, Home, Building2, Briefcase, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const ProductSelector = () => {
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
        <Card className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-2xl">
          <CardHeader className="border-b border-gray-200 dark:border-gray-700">
            <CardTitle className="text-2xl text-center text-gray-900 dark:text-gray-100">
              Your Personalized Recommendation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {recommendation.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {recommendation.description}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Recommended Package Includes:</h4>
              <div className="space-y-3">
                {recommendation.products.map((product, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{product}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => navigate('/contact')} 
                className="flex-1 bg-blue-600 hover:bg-blue-700 h-12 text-lg"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={resetSelector} 
                variant="outline" 
                className="flex-1 h-12"
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
      <Card className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-2xl">
        <CardHeader className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Step {step + 1} of {questions.length}</span>
            <Button variant="ghost" size="sm" onClick={resetSelector}>Cancel</Button>
          </div>
          <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">
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
                  className="flex items-start gap-4 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all text-left group"
                >
                  {Icon && (
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {option.desc}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
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