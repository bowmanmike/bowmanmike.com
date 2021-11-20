import React from 'react';

const Contact = () => (
  <div className="bg-orange-200 grid grid-cols-1">
    <div className="text-center text-2xl h-auto flex items-end pb-4">
      <p>Find me at...</p>
    </div>
    <ul className="h-auto text-lg">
      <li className="">
        <p>
          <a href="mailto:mike@mikebowman.dev">mike@mikebowman.dev</a> by Email
        </p>
      </li>
      <li className="">
        <p className="">
          <a href="https://github.com/bowmanmike">bowmanmike</a> on Github
        </p>
      </li>
      <li className="">
        <p className="">
          <a href="https://www.linkedin.com/in/bowmanmike1/">mikebowman</a> on
          Linkedin
        </p>
      </li>
    </ul>
  </div>
);

export default Contact;
