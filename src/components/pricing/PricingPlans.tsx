import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      price: "499",
      features: [
        "Simple Landing Page",
        "Mobile Responsive",
        "Contact Form",
        "3 Content Updates/Month",
        "Basic SEO Setup",
        "1 Month Free Support"
      ]
    },
    {
      name: "Professional",
      price: "999",
      features: [
        "Up to 5 Pages",
        "Custom Design",
        "Mobile Responsive",
        "Contact Form",
        "5 Content Updates/Month",
        "Advanced SEO Setup",
        "Social Media Integration",
        "3 Months Free Support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited Pages",
        "Custom Design",
        "E-commerce Integration",
        "Mobile Responsive",
        "Advanced Features",
        "Unlimited Updates",
        "Premium SEO Setup",
        "12 Months Free Support"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-12">
      {plans.map((plan, index) => (
        <div key={index} className="bg-navy-900/50 backdrop-blur-sm rounded-lg p-8 hover:transform hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white text-center">{plan.name}</h3>
          <div className="mt-4 text-center">
            <span className="text-4xl font-bold text-white">{plan.price === "Custom" ? "Custom" : `$${plan.price}`}</span>
            {plan.price !== "Custom" && <span className="text-gray-300 ml-2">/once</span>}
          </div>
          <ul className="mt-8 space-y-4">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-300">
                <Check className="h-5 w-5 text-blue-400 mr-3" />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-8 block w-full text-center px-6 py-3 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;