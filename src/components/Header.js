import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="mt-4">
    <div className="p-4 lg:px-0">
      <Link to="/">
        <p className="text-3xl font-semibold mb-2">Mike Bowman</p>
        <p className="font-mono text-xl italic border-sage border-b-4 max-w-max pr-8">
          Freelance Full-Stack Software Developer
        </p>
      </Link>
    </div>
  </header>
);

export default Header;
