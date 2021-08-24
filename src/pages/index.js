import React from 'react';

import Seo from '../components/Seo';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <h2>Hi! I'm Mike.</h2>
    <p>I'm a software developer based in Toronto.</p>
    <p>
      Right now, I work at <a href="https://pagerduty.com">PagerDuty</a>
    </p>
    <p>
      Previously, I've worked at <a href="https://thescore.com">theScore</a> and{' '}
      <a href="https://zoocasa.com">Zoocasa.</a>
    </p>
  </>
);

export default IndexPage;
