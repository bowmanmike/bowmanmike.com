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
      className="p-4 w-full h-24 border border-gray-400 shadow-md md:h-full"
    >
      <div
        className="flex items-center p-2 max-w-full h-full rounded-md"
        style={styles}
      >
        {children}
      </div>
    </a>
  );
};

const PastWork = () => (
  <>
    <h2 className="pr-8 mb-4 max-w-max text-2xl border-b-4 border-sage">
      Work Experience
    </h2>
    <div className="my-4 w-full">
      <p className="inline-block w-1/2 md:w-max md:align-bottom">
        Currently a Web Development Mentor at
      </p>
      <a
        href="https://lighthouselabs.ca"
        className="inline-block w-1/2 max-w-max md:pl-2 md:align-middle"
      >
        <LHLLogo className="" width="100%" height="2.5rem" />
      </a>
    </div>
    <div className="mb-2 border-b-2 border-sage" />
    <div className="grid grid-cols-1 gap-4 justify-items-center items-center mb-4 max-w-max text-center md:grid-cols-3 md:text-left">
      <h3 className="inline-block col-span-1 justify-self-start md:col-span-3">
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
    <div className="mb-4 border-b-2 border-sage" />
    <div className="p-2 mx-auto max-w-max text-xl text-center border border-gray-400 shadow-md md:p-4 md:text-left">
      <p className="inline-block mb-2">Next Adventure: You!</p>
      <a
        href="mailto:mike@mikebowman.dev"
        className="inline-block w-full border border-gray-400 md:ml-4 md:w-max"
      >
        <p className="sr-only">Email Address</p>
        <p className="py-2 px-4 text-lg text-center bg-sage">
          <FaEnvelopeOpen className="inline-block mr-2" />
          mike@mikebowman.dev
        </p>
      </a>
    </div>
  </>
);

export default PastWork;
