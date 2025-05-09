import React from 'react';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import GithubFooterIcon from './GithubFooterIcon';
import DribbbleIcon from './DribbbleIcon';

const SocialIcon = ({ type, ...props }) => {
  const icons = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: TwitterIcon,
    github: GithubFooterIcon,
    dribbble: DribbbleIcon
  };

  const Icon = icons[type];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
};

export default SocialIcon; 