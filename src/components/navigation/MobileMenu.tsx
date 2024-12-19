import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
import { NavItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/30 z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div 
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-navy-900 shadow-2xl z-50 transform transition-all duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-navy-900 border-b border-gray-100 dark:border-gray-800">
          <div className="px-4 h-16 flex items-center justify-between">
            <a 
              href="#home" 
              className="text-gray-900 dark:text-white font-bold text-xl"
              onClick={onClose}
            >
              BCX
            </a>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-navy-800 transition-all duration-200"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="h-[calc(100vh-4rem)] overflow-y-auto py-2 bg-white dark:bg-navy-900">
          <div className="px-2 space-y-1">
            {navItems.map((item) => (
              <div key={item.href} className="px-2">
                <NavLink
                  {...item}
                  onClick={onClose}
                  mobile
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-navy-900">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              © {new Date().getFullYear()} BCX
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;