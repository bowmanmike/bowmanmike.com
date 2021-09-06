import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="max-w-4xl mx-auto mt-5 pt-6 text-gray-600">
    <Header />
    <main className="max-w-full mx-auto py-4 lg:py-4 lg:px-6">{children}</main>
    <Footer />
  </div>
);

export default Layout;
