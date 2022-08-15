import React from 'react';
import { FaEnvelopeOpen } from 'react-icons/fa';

import { jobs } from '../lib/jobs';

const LogoCard = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a href={href} className="">
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
    <div className="flex justify-between">
      <div className="w-24">
        <LogoCard href={job.href} baseColour={job.colour}>
          {job.logo}
        </LogoCard>
      </div>
      <ul>
        {job.bulletPoints.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

const PastWork = () => (
  // TODO: Want to make this section more resume-like
  <>
    <h2 className="pr-8 mb-4 max-w-max text-2xl border-b-4 border-sage">
      Work Experience
    </h2>
    {jobs.map(job => {
      return <JobSection job={job} key={job.company} />;
    })}
    <div className="m-4 border-b-2 border-sage" />
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
