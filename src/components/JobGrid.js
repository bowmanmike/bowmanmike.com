import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const JobGrid = () => {
  const cardStyles = 'text-center';
  return (
    <div className="py-4 grid grid-cols-3 gap-4">
      <a href="http://zoocasa.com" className={cardStyles}>
        <div>
          Zoocasa{' '}
          <StaticImage
            src="../assets/images/zoocasa-logo.png"
            alt="Zoocasa Logo"
            className="bg-black"
          />
        </div>
      </a>
      <a href="http://thescore.com" className={cardStyles}>
        <div>
          theScore{' '}
          <StaticImage
            src="../assets/images/thescore-logo.jpg"
            alt="theScore Logo"
          />
        </div>
      </a>
      <a href="http://pagerduty.com" className={cardStyles}>
        <div>
          PagerDuty{' '}
          <StaticImage
            src="../assets/images/pagerduty-logo.webp"
            alt="PagerDuty Logo"
          />
        </div>
      </a>
    </div>
  );
};
export default JobGrid;
