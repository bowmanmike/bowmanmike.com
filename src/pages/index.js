import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';
import PastWork from '../components/PastWork';
import Contact from '../components/Contact';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="grid grid-cols-2 gap-4 mb-8">
      <StaticImage
        src="../assets/images/mike-headshot-cropped.png"
        alt="Mike Bowman Headshot"
        loading="eager"
        placeholder="blurred"
        className="max-w-sm rounded-full shadow-lg"
        aspectRatio={1}
        transformOptions={{ cropFocus: 'attention' }}
      />
      <Contact />
    </div>
    <div>
      <div className="text-center border border-gray-400 p-4 m-4 rounded-lg shadow-sm">
        <h2 className="text-2xl text-center">Hi! I'm Mike.</h2>
        <p>I'm a software developer based in Toronto.</p>
        <p>
          I have {new Date().getFullYear() - 2016}+ years of experience as a
          Full-Stack Developer.
        </p>
        <p>I'm a software developer based in Toronto.</p>
        <p>I'm a software developer based in Toronto.</p>
        <p>I'm a software developer based in Toronto.</p>
      </div>
      <div className="border border-gray-400 p-4 m-4 rounded-lg shadow-sm">
        <h3>I'm experienced with:</h3>
        <ul>
          <li>Ruby on Rails</li>
          <li>Elixir and Phoenix</li>
          <li>React</li>
          <li>Golang</li>
        </ul>
      </div>
    </div>
    <PastWork />
  </>
);

export default IndexPage;
