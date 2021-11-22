import React from 'react';
import SiGatsby from '@react-icons/all-files/si/SiGatsby';
import SiTailwindcss from '@react-icons/all-files/si/SiTailwindcss';
import SiNetlify from '@react-icons/all-files/si/SiNetlify';

const LogoLink = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a
      href={href}
      className="text-gray-50 px-2 rounded-md shadow-md inline-flex items-center justify-center"
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
        <SiGatsby.SiGatsby /> GatsbyJS
      </LogoLink>{' '}
      and{' '}
      <LogoLink href="https://www.tailwindcss.com" baseColour="#52b3d1">
        <SiTailwindcss.SiTailwindcss /> TailwindCSS
      </LogoLink>
    </p>
    <p className="my-2">
      Hosted on{' '}
      <LogoLink href="https://www.netlify.com" baseColour="#4caa9f">
        <SiNetlify.SiNetlify /> Netlify
      </LogoLink>
    </p>
    <p className="my-2">Mike Bowman &copy; 2016 - {new Date().getFullYear()}</p>
  </footer>
);
export default Footer;
