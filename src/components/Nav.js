import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ path, text }) => (
  <li className="inline-flex items-center rounded border border-gray-800 shadow-sm first:ml-0 ml-2">
    <Link
      to={path}
      className="h-full w-full inline-block px-2 py-1 md:px-4 md:py-2 hover:bg-sky-100"
      activeClassName="bg-sky-100"
    >
      {text}
    </Link>
  </li>
);

const Nav = () => (
  <nav>
    <ul className="mt-4 flex md:mt-0 md:ml-4">
      <NavItem path="/" text="Home" />
      <NavItem path="/about" text="About" />
      <NavItem path="/contact" text="Contact" />
      <NavItem path="/blog" text="Blog" />
    </ul>
  </nav>
);

export default Nav;
