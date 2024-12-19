import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink = ({ href, label, onClick, mobile = false }: NavLinkProps) => {
  const baseStyles = mobile
    ? "block w-full text-gray-800 dark:text-gray-100 text-base font-medium rounded-lg px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-navy-800 transition-all duration-200"
    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      className={baseStyles}
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

export default NavLink;