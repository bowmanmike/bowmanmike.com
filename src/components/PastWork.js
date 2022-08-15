import React from 'react';
import { FaEnvelopeOpen } from 'react-icons/fa';

import { jobs } from '../lib/jobs';

const LogoCard = ({ href, baseColour, children }) => {
  const styles = { backgroundColor: baseColour };
  return (
    <a href={href} className="">
      <div
        className={`flex items-center ${
          baseColour && 'p-2'
        } max-w-full h-full rounded-md`}
        style={styles}
      >
        {children}
      </div>
    </a>
  );
};

const JobSection = ({ job }) => {
  return (
    <>
      <div className="flex gap-x-4 mb-6">
        <div className="w-1/4">
          <div className="w-1/2 mb-1">
            <LogoCard href={job.href} baseColour={job.colour}>
              {job.logo}
            </LogoCard>
          </div>
          <p className="italic text-sm font-thin">
            {job.startDate} - {job.endDate}
          </p>
        </div>
        <ul>
          {job.bulletPoints.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <div className="my-4 border-b-2 border-sage" />
    </>
  );
};

const PastWork = () => (
  // TODO: Want to make this section more resume-like
  <>
    <h2 className="pr-8 mb-4 max-w-max text-2xl border-b-4 border-sage">
      Work Experience
    </h2>
    <div className="pt-2">
      {jobs.map(job => {
        return <JobSection job={job} key={job.company} />;
      })}
    </div>
    <div className="p-2 mx-auto max-w-max text-xl text-center border border-gray-400 shadow-md md:p-4 md:text-left">
      <p className="inline-block mb-2">Next Adventure: You!</p>
      <a
        href="mailto:mike@mikebowman.dev"
        className="inline-block w-full border border-gray-400 md:ml-4 md:w-max"
      >
        <p className="sr-only">Email Address</p>
        <p className="py-2 px-4 text-lg text-center bg-sage flex items-center">
          <FaEnvelopeOpen className="inline-block mr-2" />
          mike@mikebowman.dev
        </p>
      </a>
    </div>
  </>
);

export default PastWork;
