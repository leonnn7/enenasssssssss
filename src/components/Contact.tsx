import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 dark:bg-navy-800 py-24 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl transition-colors duration-200">
            Let's Build Your Website
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Ready to take your business online? Get in touch with us today.
          </p>
        </div>

        <div className="mt-20">
          <div className="bg-white dark:bg-navy-900/50 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto shadow-lg transition-colors duration-200">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="bg-blue-100 dark:bg-blue-600/10 p-4 rounded-full transition-colors duration-200">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                  Send us your project details and we'll get back to you within 24 hours
                </p>
                <a 
                  href="mailto:huslert292@gmail.com"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 group"
                >
                  Contact Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 transition-colors duration-200">Working Hours</h3>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Response within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;