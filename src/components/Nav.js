import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ path, text }) => (
  <li className="inline-flex items-center ml-2 rounded border border-gray-800 shadow-sm first:ml-0 hover:bg-sky-100">
    <Link
      to={path}
      className="inline-block py-1 px-2 w-full h-full rounded md:py-2 md:px-4"
      activeClassName="bg-sky-100"
    >
      {text}
    </Link>
  </li>
);

const Nav = () => (
  <nav>
    <ul className="flex mt-4 md:mt-0 md:ml-4">
      <NavItem path="/" text="Home" />
      <NavItem path="/about" text="About" />
      <NavItem path="/contact" text="Contact" />
      <NavItem path="/blog" text="Blog" />
    </ul>
  </nav>
);

export default Nav;
