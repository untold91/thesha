// Common specifications used across products
const commonSpecs = [
  { key: 'Power Supply', value: '100-240V AC' },
  { key: 'Operating temperature', value: '0 – 35°C' },
  { key: 'Ambient humidity', value: '0 – 95% RH' },
  { key: 'Range', value: 'up to 50 m outdoors / up to 40 m indoors' }
];

const controlPanelFeatures = ['WiFi/Zigbee Enabled', 'Capacitive Touch', 'Customizable Icons', 'Scene Control'];
const insetModuleFeatures = ['WiFi/Zigbee Enabled', 'Easy Installation', 'Voice Control', 'App Integration'];

// Product images using Unsplash
const productImages = {
  panel1: 'https://images.unsplash.com/photo-1655194827229-a1d3192b533e?w=800&q=80',
  panel2: 'https://images.unsplash.com/photo-1631016042018-448c284aa279?w=800&q=80',
  panel3: 'https://images.unsplash.com/photo-1581431019684-bfd38511b924?w=800&q=80',
  panel4: 'https://images.unsplash.com/photo-1655194826649-33a197c6cb2f?w=800&q=80',
  panel5: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?w=800&q=80',
  panel6: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
  module1: 'https://images.unsplash.com/photo-1762329406809-e46415e6974e?w=800&q=80',
  module2: 'https://images.unsplash.com/photo-1763372278600-fd0b0997a7b8?w=800&q=80',
};

export const mockData = {
  company: {
    name: 'Mahadeva Systems',
    brand: 'Sha',
    tagline: 'Smart Living, Simplified',
    email: 'smarthomeautomations25@gmail.com',
    phone: '+918500570590',
    description: 'Leading provider of smart home automation solutions for modern homes and offices',
    address: {
      building: '#7-71/51',
      street: 'Mahalakshmi Nagar',
      area: 'Hubsiguda',
      city: 'Hyderabad',
      state: 'Telangana',
      zip: '500007',
      country: 'India'
    },
    social_media: {
      facebook: 'https://www.facebook.com/mahadevasystems',
      instagram: 'https://www.instagram.com/_the_sha_25_/',
      linkedin: 'https://www.linkedin.com/company/mahadeva-systems',
      youtube: 'https://www.youtube.com/@MahadevaSystems',
      twitter: 'https://twitter.com/mahadevasys',
    }
  },

  slides: [
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
  ],

  solutions: [
    {
      id: 1,
      title: 'Touch Panel Controls',
      description: 'Modern touch panels for seamless control of your entire home automation system',
      icon: 'touchscreen'
    },
    {
      id: 2,
      title: 'Lighting Control',
      description: 'Intelligent lighting systems that adapt to your lifestyle and save energy',
      icon: 'lightbulb'
    },
    {
      id: 3,
      title: 'Climate Control',
      description: 'Smart fan and AC control for optimal comfort and energy efficiency',
      icon: 'wind'
    },
    {
      id: 4,
      title: 'Motor Control',
      description: 'Automated control for gates, curtains, and other motor-driven systems',
      icon: 'settings'
    },
    {
      id: 5,
      title: 'CCTV Systems',
      description: 'Advanced surveillance cameras with remote monitoring capabilities',
      icon: 'video'
    },
    {
      id: 6,
      title: 'Sensor Integration',
      description: 'Motion, temperature, and security sensors for complete home automation',
      icon: 'activity'
    }
  ],

  products: [
    {
      id: 1,
      name: 'Senses 4',
      image: productImages.panel1,
      category: 'Control Panels',
      description: 'Premium glass touch panel with capacitive technology',
      features: controlPanelFeatures,
      specifications: [
        { key: 'Gang', value: '2M' },
        { key: 'Controls', value: '4 Switches' },
        { key: 'Type', value: 'On/Off or Scene Switch' },
        { key: 'Rated load current', value: '10A per switch' },
        ...commonSpecs,
        { key: 'Dimensions', value: '86mm x 86mm x 35mm' },
      ]
    },
    {
      id: 2,
      name: 'Senses 4 Plus',
      image: productImages.panel2,
      category: 'Control Panels',
      description: 'Premium glass touch panel with capacitive technology',
      features: controlPanelFeatures,
      specifications: [
        { key: 'Gang', value: '4M' },
        { key: 'Controls', value: '4 Switches + 1 Multi-Socket' },
        { key: 'Type', value: 'On/Off or Scene Switch' },
        { key: 'Rated load current', value: '10A per switch' },
        ...commonSpecs,
        { key: 'Dimensions', value: '86mm x 86mm x 35mm' },
      ]
    },
    {
      id: 3,
      name: 'Senses 8',
      image: productImages.panel3,
      category: 'Control Panels',
      description: 'Premium glass touch panel with capacitive technology',
      features: controlPanelFeatures,
      specifications: [
        { key: 'Gang', value: '4M' },
        { key: 'Controls', value: '8 Switches' },
        { key: 'Type', value: 'On/Off or Scene Switch' },
        { key: 'Rated load current', value: '10A per switch' },
        ...commonSpecs,
        { key: 'Dimensions', value: '86mm x 86mm x 35mm' },
      ]
    },
    {
      id: 4,
      name: 'Senses 8 Plus',
      image: productImages.panel4,
      category: 'Control Panels',
      description: 'Premium glass touch panel with capacitive technology',
      features: controlPanelFeatures,
      specifications: [
        { key: 'Gang', value: '6/8M' },
        { key: 'Controls', value: '8 Switches + 1 Multi-Socket' },
        { key: 'Type', value: 'On/Off or Scene Switch' },
        { key: 'Rated load current', value: '10A per switch' },
        ...commonSpecs,
        { key: 'Dimensions', value: '86mm x 86mm x 35mm' },
      ]
    },
    {
      id: 5,
      name: 'Senses 10',
      image: productImages.panel5,
      category: 'Control Panels',
      description: 'Premium glass touch panel with capacitive technology',
      features: controlPanelFeatures,
      specifications: [
        { key: 'Gang', value: '6/8M' },
        { key: 'Controls', value: '10 Switches' },
        { key: 'Type', value: 'On/Off or Scene Switch' },
        { key: 'Rated load current', value: '10A per switch' },
        ...commonSpecs,
        { key: 'Dimensions', value: '86mm x 86mm x 35mm' },
      ]
    },
    {
      id: 6,
      name: 'Senses 10 Plus',
      image: productImages.panel6,
      category: 'Control Panels',
      description: 'Premium glass touch panel with capacitive technology',
      features: controlPanelFeatures,
      specifications: [
        { key: 'Gang', value: '10/12M' },
        { key: 'Controls', value: '10 Switches + 1 Multi-Socket' },
        { key: 'Type', value: 'On/Off or Scene Switch' },
        { key: 'Rated load current', value: '10A per switch' },
        ...commonSpecs,
        { key: 'Dimensions', value: '120mm x 86mm x 35mm' },
      ]
    },
    {
      id: 7,
      name: 'Node 3R',
      image: productImages.module1,
      category: 'Control Modules',
      description: 'Compact modules for retrofit installations',
      features: insetModuleFeatures,
      specifications: [
        { key: 'Controls', value: '1/2/3 On/Off Switch' },
        { key: 'Load Type', value: 'Resistive/Inductive/Capacitive' },
        { key: 'Type', value: 'Relay Module' },
        ...commonSpecs,
        { key: 'Dimensions', value: '45mm x 45mm x 20mm' },
      ]
    },
    {
      id: 8,
      name: 'Node DIM',
      image: productImages.module2,
      category: 'Control Modules',
      description: 'Compact modules for retrofit installations',
      features: insetModuleFeatures,
      specifications: [
        { key: 'Controls', value: 'Light Dimmer' },
        { key: 'Load Type', value: 'Resistive/Capacitive' },
        { key: 'Type', value: 'Relay Module' },
        ...commonSpecs,
        { key: 'Dimensions', value: '45mm x 45mm x 20mm' },
      ]
    },
    {
      id: 9,
      name: 'Node FAN',
      image: productImages.module1,
      category: 'Control Modules',
      description: 'Compact modules for retrofit installations',
      features: insetModuleFeatures,
      specifications: [
        { key: 'Controls', value: 'Fan Dimmer' },
        { key: 'Load Type', value: 'Inductive' },
        { key: 'Type', value: 'Relay Module' },
        ...commonSpecs,
        { key: 'Dimensions', value: '45mm x 45mm x 20mm' },
      ]
    },
    {
      id: 10,
      name: 'Node CUR',
      image: productImages.module2,
      category: 'Control Modules',
      description: 'Compact modules for retrofit installations',
      features: insetModuleFeatures,
      specifications: [
        { key: 'Controls', value: 'Curtain Dimmer' },
        { key: 'Load Type', value: 'Inductive' },
        { key: 'Type', value: 'Relay Module' },
        ...commonSpecs,
        { key: 'Dimensions', value: '45mm x 45mm x 20mm' },
      ]
    }
  ],

  serviceInfo: {
    warranty: '1 Year Free Service',
    description: 'We provide comprehensive support and maintenance for 1 year absolutely free after installation',
    postWarranty: 'Affordable paid service plans available after the free period',
    features: [
      'Regular maintenance checks',
      'Software updates',
      '24/7 technical support',
      'Emergency repairs'
    ]
  },

  testimonials: [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      content: 'Mahadeva Systems transformed our home. The automation is seamless and the service is excellent!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Office Manager',
      content: 'Professional installation and great support. Our office is now completely automated.',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Villa Owner',
      content: 'The touch panels and lighting control exceeded our expectations. Highly recommended!',
      rating: 5
    }
  ],

  // Presence data for the India map
  presence: {
    states: [
      { 
        name: 'Telangana', 
        status: 'Active Operations',
        description: 'Headquarters & Primary Service Hub'
      },
      { 
        name: 'Andhra Pradesh', 
        status: 'Active Operations',
        description: 'Extended Service Coverage'
      }
    ],
    headquarters: {
      city: 'Hyderabad',
      state: 'Telangana'
    },
    referencePoint: {
      city: 'New Delhi',
      description: 'National Reference Point'
    }
  }
};
