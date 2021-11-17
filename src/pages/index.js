import React from 'react';

import Seo from '../components/Seo';
import JobGrid from '../components/JobGrid';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <h2>Hi! I'm Mike.</h2>
    <p>I'm a software developer based in Toronto.</p>
    <p>
      Right now, I'm working as a Web Development Mentor at{' '}
      <a href="https://lighthouselabs.ca">Lighthouse Labs</a>, and as a
      Freelance Full-Stack Developer.
    </p>
    <p>Previously, I've worked at... {/* Should put in their logos here! */}</p>
    <JobGrid />
  </>
);

export default IndexPage;
