import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <main className="max-w-4xl mx-auto mt-5 px-4 pt-6 text-gray-600">
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
