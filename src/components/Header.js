import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="mt-4">
    <div className="p-4 lg:px-0">
      <Link to="/">
        <p className="mb-2 text-3xl font-semibold">Mike Bowman</p>
        <p className="pr-8 max-w-max font-mono text-xl italic border-b-4 border-sage">
          Freelance Software Developer
        </p>
      </Link>
    </div>
  </header>
);

export default Header;
