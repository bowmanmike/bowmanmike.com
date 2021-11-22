import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaEnvelopeOpen } from '@react-icons/all-files/fa/FaEnvelopeOpen';

const ContactMethod = ({ href, text, children }) => (
  <li className="my-2">
    <a href={href}>
      <p className="border border-gray-400 shadow-sm rounded-md p-2 inline-block hover:bg-gray-100 w-1/2 text-center">
        {children}
        {text}
      </p>
    </a>
  </li>
);

const Contact = () => (
  <div className="grid items-center">
    <ul className="text-lg text-center">
      <ContactMethod
        text="mike@mikebowman.dev"
        href="mailto:mike@mikebowman.dev"
      >
        <FaEnvelopeOpen className="inline-block mr-2" />
      </ContactMethod>
      <ContactMethod text="bowmanmike" href="https://github.com/bowmanmike">
        <FaGithub className="inline-block mr-2" />
      </ContactMethod>
      <ContactMethod
        href="https://www.linkedin.com/in/bowmanmike1/"
        text="Mike Bowman"
      >
        <FaLinkedin className="inline-block mr-2" />
      </ContactMethod>
    </ul>
  </div>
);

export default Contact;
