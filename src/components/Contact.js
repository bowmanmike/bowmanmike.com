import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaEnvelopeOpen } from '@react-icons/all-files/fa/FaEnvelopeOpen';

const ContactMethod = ({ href, text, methodName, children }) => (
  <li className="m-4">
    <a href={href}>
      <p className="border border-gray-400 shadow-lg p-2 inline-block bg-sage w-full md:w-1/2 text-center">
        {children}
        {text}
      </p>
      <p className="sr-only">{methodName}</p>
    </a>
  </li>
);

const Contact = () => (
  <div className="grid items-center">
    <h3 className="text-3xl text-center self-end border-sage border-b-4 w-1/2 mx-auto pb-2">
      Find Me Here!
    </h3>
    <ul className="text-lg text-center">
      <ContactMethod
        text="mike@mikebowman.dev"
        href="mailto:mike@mikebowman.dev"
        methodName="Email Address"
      >
        <FaEnvelopeOpen className="inline-block mr-2" />
      </ContactMethod>
      <ContactMethod
        text="bowmanmike"
        href="https://github.com/bowmanmike"
        methodName="Github Profile"
      >
        <FaGithub className="inline-block mr-2" />
      </ContactMethod>
      <ContactMethod
        href="https://www.linkedin.com/in/bowmanmike1/"
        text="Mike Bowman"
        methodName="LinkedIn Profile"
      >
        <FaLinkedin className="inline-block mr-2" />
      </ContactMethod>
    </ul>
  </div>
);

export default Contact;
