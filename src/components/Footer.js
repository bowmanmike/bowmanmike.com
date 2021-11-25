import React from 'react';
import {
  SiGatsby,
  SiTailwindcss,
  SiNetlify,
  SiPlausibleanalytics,
} from 'react-icons/si';

const LogoLink = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a
      href={href}
      className="text-gray-50 px-2 rounded-md shadow-md inline-flex items-center justify-center gap-1"
      style={styles}
    >
      {children}
    </a>
  );
};

const Footer = () => (
  <footer className="mb-8 mx-auto text-md text-center p-2 lg:p-4 m-4 lg:mx-0">
    <p className="my-2">
      This site was built by hand with{' '}
      <LogoLink href="https://www.gatsbyjs.com" baseColour="#672ab2">
        <SiGatsby /> GatsbyJS
      </LogoLink>{' '}
      and{' '}
      <LogoLink href="https://www.tailwindcss.com" baseColour="#52b3d1">
        <SiTailwindcss /> TailwindCSS
      </LogoLink>
    </p>
    <p className="my-2">
      Hosted on{' '}
      <LogoLink href="https://www.netlify.com" baseColour="#4caa9f">
        <SiNetlify /> Netlify
      </LogoLink>
      , with privacy-friendly analytics provided by{' '}
      <LogoLink href="https://plausible.io" baseColour="#453ddb">
        <SiPlausibleanalytics /> Plausible.io
      </LogoLink>
    </p>
    <p className="my-2">Mike Bowman &copy; 2016 - {new Date().getFullYear()}</p>
  </footer>
);
export default Footer;
