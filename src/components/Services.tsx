import React from 'react';
import WebDevelopment from './services/WebDevelopment';
import PricingPlans from './pricing/PricingPlans';

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 dark:bg-navy-800 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-200">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Professional web development and management solutions
          </p>
        </div>

        <div className="mt-20">
          <WebDevelopment />
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center transition-colors duration-200">
            Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 text-center transition-colors duration-200">
            Affordable solutions for every budget
          </p>
          <PricingPlans />
        </div>
      </div>
    </div>
  );
};

export default Services;