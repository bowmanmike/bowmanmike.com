import React from 'react';

const Footer = () => (
  <footer className="bg-red-300 mx-auto">
    <p className="text-center">
      Mike Bowman &copy; 2016 - {new Date().getFullYear()}
    </p>
  </footer>
);
export default Footer;
