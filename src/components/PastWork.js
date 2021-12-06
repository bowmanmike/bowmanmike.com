import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { FaEnvelopeOpen } from 'react-icons/fa';
import LHLLogo from '../assets/images/lighthouse-labs-logo.svg';
import TheScoreLogo from '../assets/images/thescore-logo.svg';
import PagerDutyLogo from '../assets/images/pagerduty-logo.svg';

const LogoCard = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a
      href={href}
      className="border border-gray-400 shadow-md p-4 w-full h-24 md:h-full"
    >
      <div
        className="h-full max-w-full p-2 rounded-md flex items-center"
        style={styles}
      >
        {children}
      </div>
    </a>
  );
};

const PastWork = () => (
  <div className="border border-gray-400 lg:p-4 lg:mx-0 shadow-md m-4 p-2">
    <h2 className="text-2xl border-sage border-b-4 max-w-max pr-8">
      Work Experience
    </h2>
    <div className="my-4 w-full">
      <p className="inline-block md:align-bottom w-1/2 md:w-max">
        Currently a Web Development Mentor at
      </p>
      <a
        href="https://lighthouselabs.ca"
        className="inline-block md:align-middle md:pl-2 w-1/2 max-w-max"
      >
        <LHLLogo className="" width="100%" height="2.5rem" />
      </a>
    </div>
    <div className="border-b-2 border-sage mb-2" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-items-center max-w-max mb-4 text-center md:text-left">
      <h3 className="inline-block col-span-1 md:col-span-3 justify-self-start">
        Previously learned at...
      </h3>{' '}
      <LogoCard href="https://pagerduty.com">
        <PagerDutyLogo width="100%" className="h-full" />
      </LogoCard>
      <LogoCard href="https://thescore.com" baseColour="#1a1a1c">
        <TheScoreLogo width="100%" className="h-full" />
      </LogoCard>
      <LogoCard href="https://zoocasa.com" baseColour="#171a1c">
        <StaticImage
          src="../assets/images/zoocasa-logo.png"
          alt="Zoocasa Logo"
          imgClassName="h-full"
        />
      </LogoCard>
    </div>
    <div className="border-b-2 border-sage mb-4" />
    <div className="text-center md:text-left p-2 md:p-4 max-w-max border border-gray-400 shadow-md mx-auto text-xl">
      <p className="inline-block mb-2">Next Adventure: You!</p>
      <a
        href="mailto:mike@mikebowman.dev"
        className="inline-block border border-gray-400 md:ml-4 w-full md:w-max"
      >
        <p className="sr-only">Email Address</p>
        <p className="text-lg bg-sage text-center py-2 px-4">
          <FaEnvelopeOpen className="inline-block mr-2" />
          mike@mikebowman.dev
        </p>
      </a>
    </div>
  </div>
);

export default PastWork;
