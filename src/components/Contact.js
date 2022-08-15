import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelopeOpen } from 'react-icons/fa';

const ContactMethod = ({ href, text, methodName, children }) => (
  <li className="m-4">
    <a href={href}>
      <div className="flex items-center justify-center mx-auto p-2 w-full border border-gray-400 shadow-lg md:w-1/2 bg-sage">
        {children}
        {text}
      </div>
      <p className="sr-only">{methodName}</p>
    </a>
  </li>
);

const Contact = () => (
  <div className="grid items-center">
    <h3 className="self-end pb-2 mx-auto w-1/2 text-3xl text-center border-b-4 border-sage">
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
