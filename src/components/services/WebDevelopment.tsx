import React from 'react';
import { Code, Globe, Settings } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const WebDevelopment = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Custom Website Development",
      description: "Professional, responsive websites tailored to your business needs. Affordable solutions for small businesses and entrepreneurs.",
      features: ["Modern Design", "Mobile Responsive", "SEO Friendly"]
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: "Website Management",
      description: "Comprehensive website maintenance and updates to keep your site running smoothly and securely.",
      features: ["Regular Updates", "Content Management", "Security Monitoring"]
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-400" />,
      title: "Technical Support",
      description: "Ongoing technical support and maintenance for your website, ensuring optimal performance.",
      features: ["24/7 Monitoring", "Performance Optimization", "Regular Backups"]
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default WebDevelopment;