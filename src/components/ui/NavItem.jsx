import React from 'react';

const NavItem = ({ text, href = '#', isActive = false }) => {
  const baseClass = "block py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";
  
  const activeClass = "text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white";
  const inactiveClass = "text-gray-700";
  
  const className = isActive ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  
  return (
    <li>
      <a href={href} className={className} aria-current={isActive ? "page" : undefined}>
        {text}
      </a>
    </li>
  );
};

export default NavItem; 