import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ path, text }) => (
  <li className="inline-flex items-center ml-2 rounded border border-gray-800 shadow-sm">
    <Link
      to={path}
      className="h-full w-full inline-block px-4 py-2 hover:bg-indigo-700 hover:text-gray-200"
    >
      {text}
    </Link>
  </li>
);

const Nav = () => (
  <nav className="flex">
    <ul className="">
      <NavItem path="/" text="Home" />
      <NavItem path="/about" text="About" />
      <NavItem path="/contact" text="Contact" />
      <NavItem path="/blog" text="Blog" />
    </ul>
  </nav>
);

export default Nav;
