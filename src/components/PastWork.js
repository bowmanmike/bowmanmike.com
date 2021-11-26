import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { FaEnvelopeOpen } from 'react-icons/fa';
import LHLLogo from '../assets/images/lighthouse-labs-logo.svg';
import TheScoreLogo from '../assets/images/thescore-logo.svg';
import PagerDutyLogo from '../assets/images/pagerduty-logo.svg';

const LogoCard = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a href={href} className="max-w-max p-2" style={styles}>
      <div className="h-full max-w-full w-full">{children}</div>
    </a>
  );
};

const PastWork = () => (
  <div className="border border-gray-400 lg:p-4 lg:mx-0 shadow-md m-4 p-2">
    <h2 className="text-2xl border-sage border-b-4 max-w-max pr-8">
      Work Experience
    </h2>
    <div className="my-4 max-w-max">
      <p className="inline-block align-bottom">
        Currently a Web Development Mentor at
      </p>
      <a href="https://lighthouselabs.ca" className="inline-block align-middle">
        <LHLLogo className="" width="100%" height={50} />
      </a>
    </div>
    <div className="grid md:grid-cols-3 items-center justify-items-center gap-4 max-w-max mb-4 text-center md:text-left p-2">
      <h3 className="inline-block col-span-3 md:col-span-3 justify-self-start">
        Previously learned at...
      </h3>{' '}
      <LogoCard href="https://pagerduty.com">
        <PagerDutyLogo height="2.5rem" width="100%" />
      </LogoCard>
      <LogoCard href="https://thescore.com" baseColour="#1a1a1c">
        <TheScoreLogo height="2.5rem" width="100%" />
      </LogoCard>
      <LogoCard href="https://zoocasa.com" baseColour="#171a1c">
        <StaticImage
          src="../assets/images/zoocasa-logo.png"
          alt="Zoocasa Logo"
          height="2.5rem"
        />
      </LogoCard>
    </div>
    <div className="text-center md:text-left p-2 max-w-max">
      <p className="inline-block">Next Adventure: You!</p>
      <a href="mailto:mike@mikebowman.dev" className="inline-block">
        <p className="py-1 px-2 text-lg inline-block bg-sage w-full text-center mx-4">
          <FaEnvelopeOpen className="inline-block mr-2" />
          <p className="sr-only">Email Address</p>
          mike@mikebowman.dev
        </p>
        <p className="sr-only">Email Address</p>
      </a>
    </div>
  </div>
);

export default PastWork;
