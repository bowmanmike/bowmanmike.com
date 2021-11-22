import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaEnvelopeOpen } from '@react-icons/all-files/fa/FaEnvelopeOpen';

const ContactMethod = ({ href, text, children }) => (
  <li className="m-4">
    <a href={href}>
      <p className="border border-gray-400 shadow-lg p-2 inline-block hover:bg-gray-100 w-full md:w-1/2 text-center">
        {children}
        {text}
      </p>
    </a>
  </li>
);

const Contact = () => (
  <div className="grid items-center">
    <h3 className="text-3xl text-center self-end">Find Me Here!</h3>
    <ul className="text-lg text-center">
      <ContactMethod
        text="mike@mikebowman.dev"
        href="mailto:mike@mikebowman.dev"
      >
        <p className="sr-only">Email Address</p>
        <FaEnvelopeOpen className="inline-block mr-2" />
      </ContactMethod>
      <ContactMethod text="bowmanmike" href="https://github.com/bowmanmike">
        <p className="sr-only">Github Profile</p>
        <FaGithub className="inline-block mr-2" />
      </ContactMethod>
      <ContactMethod
        href="https://www.linkedin.com/in/bowmanmike1/"
        text="Mike Bowman"
      >
        <p className="sr-only">LinkedIn Profile</p>
        <FaLinkedin className="inline-block mr-2" />
      </ContactMethod>
    </ul>
  </div>
);

export default Contact;
