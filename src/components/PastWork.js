import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { FaEnvelopeOpen } from 'react-icons/fa';
import LHLLogo from '../assets/images/lighthouse-labs-logo.svg';
import TheScoreLogo from '../assets/images/thescore-logo.svg';
import PagerDutyLogo from '../assets/images/pagerduty-logo.svg';

const jobInfo = [
  {
    company: 'Pager Duty',
    logo: <PagerDutyLogo width="100%" className="h-full" />,
    href: 'https://pagerduty.com',
    startDate: 'April, 2021',
    endDate: 'October, 2021',
  },
  {
    company: 'theScore',
    logo: <TheScoreLogo width="100%" className="h-full" />,
    href: 'https://thescore.com',
    startDate: 'April, 2018',
    endDate: 'March, 2021',
    colour: '#1a1a1c',
  },
  {
    company: 'Zoocasa',
    logo: (
      <StaticImage
        src="../assets/images/zoocasa-logo.png"
        alt="Zoocasa Logo"
        imgClassName="h-full"
      />
    ),
    href: 'https://zoocasa.com',
    startDate: 'May, 2016',
    endDate: 'March, 2018',
    colour: '#171a1c',
  },
];

const LogoCard = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a href={href} className="p-4 border border-gray-400 shadow-md md:h-full">
      <div
        className="flex items-center p-2 max-w-full h-full rounded-md"
        style={styles}
      >
        {children}
      </div>
    </a>
  );
};

const JobSection = ({ job }) => {
  return (
    <div className="max-w-max">
      <LogoCard href={job.href} baseColour={job.colour}>
        {job.logo}
      </LogoCard>
    </div>
  );
};

const PastWork = () => (
  // TODO: Want to make this section more resume-like
  <>
    <h2 className="pr-8 mb-4 max-w-max text-2xl border-b-4 border-sage">
      Work Experience
    </h2>
    {jobInfo.map(job => {
      return <JobSection job={job} key={job.company} />;
    })}
    {/* <div className="grid grid-cols-1 gap-4 justify-items-center items-center mb-4 max-w-max text-center md:grid-cols-3 md:text-left"> */}
    {/*   <h3 className="inline-block col-span-1 justify-self-start md:col-span-3 text-lg"> */}
    {/*     Previously learned at... */}
    {/*   </h3>{' '} */}
    {/*   <LogoCard href="https://pagerduty.com"> */}
    {/*     <PagerDutyLogo width="100%" className="h-full" /> */}
    {/*   </LogoCard> */}
    {/*   <LogoCard href="https://thescore.com" baseColour="#1a1a1c"> */}
    {/*     <TheScoreLogo width="100%" className="h-full" /> */}
    {/*   </LogoCard> */}
    {/*   <LogoCard href="https://zoocasa.com" baseColour="#171a1c"> */}
    {/*     <StaticImage */}
    {/*       src="../assets/images/zoocasa-logo.png" */}
    {/*       alt="Zoocasa Logo" */}
    {/*       imgClassName="h-full" */}
    {/*     /> */}
    {/*   </LogoCard> */}
    {/* </div> */}
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
