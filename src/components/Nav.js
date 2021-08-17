import React from 'react';
import { Link } from 'gatsby';

const NavItem = ({ path, text }) => (
  <li className="bg-green-200">
    <Link to={path}>{text}</Link>
  </li>
);
const Nav = () => (
  <nav className="bg-blue-200">
    <ul className="flex justify-around">
      <NavItem path="/" text="Mike Bowman" />
      <NavItem path="/about" text="About" />
      <NavItem path="/contact" text="Contact" />
      <NavItem path="/blog" text="Blog" />
    </ul>
  </nav>
);

export default Nav;
