import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-navy-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center space-x-6 md:space-x-12">
          {['Privacy Policy', 'Terms of Service', 'Imprint'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
        <p className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm transition-colors duration-200">
          © {new Date().getFullYear()} BCX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;