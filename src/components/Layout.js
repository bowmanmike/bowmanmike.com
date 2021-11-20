import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <div className="max-w-full">
      <Header />
      <main className="max-w-6xl mx-auto bg-green-200 px-8 my-4">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
