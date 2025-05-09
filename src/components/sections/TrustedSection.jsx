import React from 'react';
import StatCard from '../ui/StatCard';
import UptimeIcon from '../icons/UptimeIcon';
import UsersIcon from '../icons/UsersIcon';
import GlobeIcon from '../icons/GlobeIcon';
import CartIcon from '../icons/CartIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const TrustedSection = () => {
  const stats = [
    {
      icon: UptimeIcon,
      title: '99.99% uptime',
      description: 'For Landwind, with zero maintenance downtime'
    },
    {
      icon: UsersIcon,
      title: '600M+ Users',
      description: 'Trusted by over 600 million users around the world'
    },
    {
      icon: GlobeIcon,
      title: '100+ countries',
      description: 'Have used Landwind to create functional websites'
    },
    {
      icon: CartIcon,
      title: '5+ Million',
      description: 'Transactions per day'
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">Trusted Worldwide</p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Trusted by over 600 million users and 10,000 teams
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Explore Legality Guide
                <ArrowRightIcon className="w-5 h-5 ml-1" />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
              >
                Visit the Trust Center
                <ArrowRightIcon className="w-5 h-5 ml-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} title={stat.title} description={stat.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection; 