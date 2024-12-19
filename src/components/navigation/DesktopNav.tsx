import React from 'react';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';
import { NavItem } from './types';

interface DesktopNavProps {
  navItems: NavItem[];
}

const DesktopNav = ({ navItems }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      <div className="flex items-baseline space-x-4">
        {navItems.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </div>
      <ThemeToggle />
    </div>
  );
};

export default DesktopNav;