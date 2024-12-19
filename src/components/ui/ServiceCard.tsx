import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-navy-900/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-navy-800 mx-auto">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-medium text-white text-center">
        {title}
      </h3>
      <p className="mt-2 text-gray-300 text-center">
        {description}
      </p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="h-4 w-4 text-blue-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};