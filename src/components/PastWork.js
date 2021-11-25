import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { FaEnvelopeOpen } from 'react-icons/fa';
import LHLLogo from '../assets/images/lighthouse-labs-logo.svg';
import TheScoreLogo from '../assets/images/thescore-logo.svg';
import PagerDutyLogo from '../assets/images/pagerduty-logo.svg';

const LogoCard = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a href={href} className="border border-gray-400" style={styles}>
      <div className="h-full">{children}</div>
    </a>
  );
};

const PastWork = () => (
  <div className="border border-gray-400 lg:p-4 lg:mx-0 shadow-md m-4 p-2">
    <h2 className="text-2xl">Work Experience</h2>
    <div className="mb-4">
      <p className="inline-block align-bottom">
        Currently a Web Development Mentor at
      </p>
      <a href="https://lighthouselabs.ca" className="inline-block align-middle">
        <LHLLogo className="" width={250} height={50} />
      </a>
    </div>
    <div className="md:grid-cols-4 grid items-center justify-center gap-4">
      <h3 className="inline-block">Previously learned at...</h3>{' '}
      <LogoCard href="https://pagerduty.com">
        <PagerDutyLogo />
      </LogoCard>
      <LogoCard href="https://thescore.com" baseColour="#1a1a1c">
        <TheScoreLogo />
      </LogoCard>
      <LogoCard href="https://zoocasa.com" baseColour="#171a1c">
        <StaticImage
          src="../assets/images/zoocasa-logo.png"
          alt="Zoocasa Logo"
        />
      </LogoCard>
    </div>
    <div className="grid">
      <p>Next Adventure: You!</p>
      <a href="mailto:mike@mikebowman.dev" className="inline-block">
        <p className="border border-gray-400 shadow-lg p-2 inline-block bg-sage w-full md:w-1/2 text-center">
          <FaEnvelopeOpen className="inline-block mr-2" />
          mike@mikebowman.dev
        </p>
        <p className="sr-only">Email Address</p>
      </a>
    </div>
  </div>
);

export default PastWork;
