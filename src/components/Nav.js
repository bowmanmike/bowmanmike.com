import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav className="bg-blue-200">
    <ul>
      <li>
        <Link to="/">Mike Bowman</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
