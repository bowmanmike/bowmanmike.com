import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';
import PastWork from '../components/PastWork';
import Contact from '../components/Contact';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <div className="grid lg:grid-cols-2 mb-8">
      <StaticImage
        src="../assets/images/mike-headshot-cropped.png"
        alt="Mike Bowman Headshot"
        className="max-w-sm rounded-full shadow-lg mx-auto my-8"
        imgClassName="rounded-full"
        aspectRatio={1}
        transformOptions={{ cropFocus: 'attention' }}
        placeholder="none"
      />
      <Contact />
    </div>
    <div>
      <div className="text-center border border-gray-400 p-2 lg:p-4 my-4 lg:m-4 rounded-lg shadow-sm">
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
      <div className="border border-gray-400 p-2 lg:p-4 my-4 lg:m-4 rounded-lg shadow-sm">
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
