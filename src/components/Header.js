import React from 'react';
import { Link } from 'gatsby';

import Nav from './Nav';

const Header = () => (
  <header className="md:flex md:items-center md:justify-between mb-2">
    <div className="flex-1 min-w-0">
      <Link to="/">
        <h1 className="text-2xl font-bold leading-7 sm:text-3xl">
          Mike Bowman
        </h1>
      </Link>
    </div>
    <Nav />
  </header>
);

export default Header;
