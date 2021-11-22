import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <div className="max-w-6xl mx-auto text-gray-700">
      <Header />
      <main className="max-w-6xl mx-auto my-4">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
