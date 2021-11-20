import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="grid grid-cols-2 gap-4">
      <StaticImage
        src="../assets/images/mike-headshot.png"
        alt="Mike Bowman Headshot"
        loading="eager"
        placeholder="blurred"
        className="max-w-sm"
      />
      <div>
        <h2>Hi! I'm Mike.</h2>
        <p>I'm a software developer based in Toronto.</p>
        <p>
          Right now, I work at <a href="https://pagerduty.com">PagerDuty</a>
        </p>
        <p>
          Previously, I've worked at {/* Should put in their logos here! */}
          <a href="https://thescore.com">theScore</a> and{' '}
          <a href="https://zoocasa.com">Zoocasa.</a>
        </p>
      </div>
    </div>
  </>
);

export default IndexPage;
