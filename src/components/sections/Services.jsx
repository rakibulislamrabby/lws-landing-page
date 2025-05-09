import React from 'react';
import FeatureSection from './FeatureSection';

const Services = () => {
  const serviceData = [
    {
      title: 'Work with tools you already use',
      description: 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
      features: [
        'Continuous integration and deployment',
        'Development workflow',
        'Knowledge management'
      ],
      image: '/src/assets/features/feature-1.png',
      imageAlt: 'dashboard feature image',
      isReversed: false
    },
    {
      title: "We invest in the world's potential",
      description: 'Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.',
      features: [
        'Dynamic reports and dashboards',
        'Templates for everyone',
        'Development workflow',
        'Limitless business automation',
        'Knowledge management'
      ],
      image: '/src/assets/features/feature-2.png',
      imageAlt: 'feature image 2',
      isReversed: true
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        {serviceData.map((service, index) => (
          <FeatureSection
            key={index}
            title={service.title}
            description={service.description}
            features={service.features}
            image={service.image}
            imageAlt={service.imageAlt}
            isReversed={service.isReversed}
          />
        ))}
      </div>
    </section>
  );
};

export default Services; 