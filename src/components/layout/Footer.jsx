import React from 'react';
import FooterColumn from '../ui/FooterColumn';
import Logo from '../icons/Logo';
import SocialIcon from '../icons/SocialIcon';

const Footer = () => {
  const footerColumns = [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Brand Center', href: '#' },
        { text: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Help center',
      links: [
        { text: 'Discord Server', href: '#' },
        { text: 'Twitter', href: '#' },
        { text: 'Facebook', href: '#' },
        { text: 'Contact Us', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '#' },
        { text: 'Licensing', href: '#' },
        { text: 'Terms', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Brand Center', href: '#' },
        { text: 'Blog', href: '#' }
      ]
    },
    {
      title: 'Download',
      links: [
        { text: 'iOS', href: '#' },
        { text: 'Android', href: '#' },
        { text: 'Windows', href: '#' },
        { text: 'MacOS', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { type: 'facebook', href: '#' },
    { type: 'instagram', href: '#' },
    { type: 'twitter', href: '#' },
    { type: 'github', href: '#' },
    { type: 'dribbble', href: '#' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column, index) => (
            <FooterColumn key={index} title={column.title} links={column.links} />
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* Footer Bottom */}
        <div className="text-center">
          <a href="#" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
            <Logo className="h-6 mr-3 sm:h-9" />
            Learn with Sumit
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{' '}
            <a href="#" target="_blank" className="text-purple-600 hover:underline dark:text-purple-500">
              Flowbite
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-600 hover:underline dark:text-purple-500">
              Tailwind CSS
            </a>
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                  <SocialIcon type={social.type} className="w-5 h-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 