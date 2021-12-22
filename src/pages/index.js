import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/Seo';
import PastWork from '../components/PastWork';
import Contact from '../components/Contact';
import BlogHighlight from '../components/BlogHighlight';
import ContactForm from '../components/ContactForm';
import IndexContainer from '../components/IndexContainer';

import RailsLogo from '../assets/images/rails-logo.svg';
import ReactLogo from '../assets/images/react-icon.svg';
import GoLogo from '../assets/images/go-logo.svg';

const TechCard = ({ name, href, children }) => (
  <a href={href} className="border border-gray-400 shadow-md hover:underline">
    <div className="p-4 h-full min-h-full grid justify-center items-center grid-rows-1">
      {children}
      <p className="text-center text-lg self-end">{name}</p>
    </div>
  </a>
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
    <IndexContainer headerText="Hi! I'm Mike, and I'm here to help">
      <p>
        I'm a software developer based in Toronto, and available to improve your
        business's online presence. Whether you need a custom e-commerce
        solution, a back-end framework migration, or a slick new front-end, I
        can help.
      </p>
      <p>
        I have {new Date().getFullYear() - 2016}+ years of experience as a
        Full-Stack Developer. I've worked with a wide variety of modern web
        technologies, as seen below. I have worked in companies of all sizes,
        from a tiny real-estate startup, to a mid-size media company, all the
        way to a large Silicon Valley B2B company.
      </p>
      <p>
        I am passionate about clean code, testing, new technology, and cold brew
        coffee. I am available on a freelance or contract basis to work with
        your team and improve your web presence.
      </p>
    </IndexContainer>
    <IndexContainer headerText="My Toolbelt">
      <p>
        While I'll use whichever tool is best for the job, I have significant
        experience with these particular tools
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        <TechCard name="Ruby on Rails" href="https://rubyonrails.org">
          <RailsLogo className="w-full" alt="Rails Logo" />
        </TechCard>
        <TechCard name="Elixir & Phoenix" href="https://phoenixframework.com">
          <StaticImage
            src="../assets/images/phoenix-logo.png"
            alt="Phoenix Logo"
            className="w-full"
          />{' '}
        </TechCard>
        <TechCard name="React" href="https://reactjs.org">
          <ReactLogo alt="React Logo" className="w-full" />
        </TechCard>
        <TechCard name="Golang" href="https://golang.org">
          <GoLogo alt="Golang Logo" className="w-full" />
        </TechCard>
      </div>
    </IndexContainer>
    <PastWork />
    <BlogHighlight />
    <ContactForm />
  </>
);

export default IndexPage;
