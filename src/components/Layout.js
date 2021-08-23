import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <main className="max-w-6xl mx-auto px-4 pt-6 text-gray-800">
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
