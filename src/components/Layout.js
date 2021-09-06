import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="max-w-4xl mx-auto mt-5 px-4 pt-6 text-gray-600">
    <Header />
    <main className="max-w-7xl mx-auto py-4 lg:py-2 lg:px-8">{children}</main>
    <Footer />
  </div>
);

export default Layout;
