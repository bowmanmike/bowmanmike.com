import React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <div className="max-w-full text-gray-700">
      <Header />
      <main className="max-w-6xl mx-auto px-8 my-4">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
