import React from 'react';

const StatCard = ({ icon: Icon, title, description }) => {
  return (
    <div>
      <Icon className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" />
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default StatCard; 