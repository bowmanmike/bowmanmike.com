import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import TheScoreLogo from '../assets/images/thescore-logo.svg';
import PagerDutyLogo from '../assets/images/pagerduty-logo.svg';

export const jobs = [
  {
    company: 'Pager Duty',
    logo: <PagerDutyLogo width="100%" className="h-full" />,
    href: 'https://pagerduty.com',
    startDate: 'April, 2021',
    endDate: 'October, 2021',
    bulletPoints: [
      'Worked to launch a customer notification system in a new service region.',
      'Helped to onboard new team members.',
      'Updated and maintained multiple legacy services in Ruby, Elixir, and Scala.',
    ],
  },
  {
    company: 'theScore',
    logo: <TheScoreLogo width="100%" className="h-full" />,
    href: 'https://thescore.com',
    startDate: 'April, 2018',
    endDate: 'March, 2021',
    colour: '#1a1a1c',
    bulletPoints: [
      'Maintained significant legacy Rails codebase to power main API, data ingestion, and push notifications.',
      'Designed and built two new data ingestion services using HTTP polling and socket connections, using Ruby and Elixir.',
      'Helped design and develop a payments gateway using Elixir and Phoenix.',
    ],
  },
  {
    company: 'Zoocasa',
    logo: (
      <StaticImage
        src="../assets/images/zoocasa-logo.png"
        alt="Zoocasa Logo"
        imgClassName="h-full"
      />
    ),
    href: 'https://zoocasa.com',
    startDate: 'May, 2016',
    endDate: 'March, 2018',
    colour: '#171a1c',
    bulletPoints: [
      'Design, build, and maintain tools to process data.',
      'Architect and scale APIs to power front-end features.',
      'Ensure high levels of testing and documentation.',
      'Utilize primarily Go, Ruby, and RethinkDB.',
    ],
  },
];
