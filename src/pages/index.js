import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';
import PastWork from '../components/PastWork';
import Contact from '../components/Contact';
import RailsLogo from '../assets/images/rails-logo.svg';
import ReactLogo from '../assets/images/react-icon.svg';
import GoLogo from '../assets/images/go-logo.svg';

const TechCard = ({ name, children }) => (
  <div className="border border-gray-500 rounded-lg shadow-lg bg-gray-200 bg-gradient-to-b from-gray-300 grid items-center justify-center">
    <p className="text-center text-lg">{name}</p>
    {children}
  </div>
);

const IndexPage = () => (
  <>
    <Seo />
    <div className="grid lg:grid-cols-2 mb-8">
      <StaticImage
        src="../assets/images/mike-headshot-cropped.png"
        alt="Mike Bowman Headshot"
        className="max-w-xs sm:max-w-sm rounded-full shadow-lg mx-auto my-8"
        imgClassName="rounded-full"
        aspectRatio={1}
        transformOptions={{ cropFocus: 'attention' }}
        placeholder="none"
      />
      <Contact />
    </div>
    <div>
      <div className="text-center border border-gray-400 p-2 lg:p-4 m-4 lg:m-0 rounded-lg shadow-sm">
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
      {/* TODO: Need to only be listing the margin and padding values in 1 place. Probably a top-level container */}
      <div className="border border-gray-400 p-2 lg:p-4 m-4 lg:mx-0 rounded-lg shadow-sm">
        <h3 className="text-2xl">I'm experienced with:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TechCard name="Ruby on Rails">
            <StaticImage
              src="../assets/images/ruby-logo.png"
              alt="Ruby Logo"
              width={100}
            />
            <RailsLogo width={100} alt="Rails Logo" />
          </TechCard>
          <TechCard name="Elixir & Phoenix">
            <StaticImage
              src="../assets/images/elixir-logo.png"
              alt="Elixir logo"
              width={100}
            />{' '}
            <StaticImage
              src="../assets/images/phoenix-logo.png"
              alt="Phoenix Logo"
              width={100}
            />{' '}
          </TechCard>
          <TechCard name="React">
            <ReactLogo alt="React Logo" width={100} />
          </TechCard>
          <TechCard name="Golang">
            <GoLogo alt="Golang Logo" width={100} />
          </TechCard>
        </div>
      </div>
    </div>
    <PastWork />
  </>
);

export default IndexPage;
