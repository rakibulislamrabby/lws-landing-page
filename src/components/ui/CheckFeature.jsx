import React from 'react';
import GreenCheckIcon from '../icons/GreenCheckIcon';

const CheckFeature = ({ text }) => {
  return (
    <li className="flex items-center space-x-3">
      <GreenCheckIcon className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
      <span>{text}</span>
    </li>
  );
};

export default CheckFeature; 