import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import ThemeToggle from './navigation/ThemeToggle';
import MobileMenu from './navigation/MobileMenu';
import DesktopNav from './navigation/DesktopNav';
import { NavItem } from './navigation/types';

const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className={`font-bold text-xl transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              BCX
            </a>
          </div>
          
          <DesktopNav navItems={navItems} />
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(true)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navItems={navItems}
      />
    </nav>
  );
};

export default Navbar;