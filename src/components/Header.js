import React from 'react';
import { Link } from 'gatsby';

import Nav from './Nav';

const Header = () => (
  <header className="flex items-center justify-between">
    <Link to="/">
      <h1 className="text-4xl font-bold leading-7">Mike Bowman</h1>
    </Link>
    <Nav />
  </header>
);

export default Header;
