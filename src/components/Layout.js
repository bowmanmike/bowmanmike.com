import React from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <script defer data-domain="mikebowman.dev" src="/js/script.js" />
    </Helmet>
    <div className="max-w-6xl mx-auto text-gray-700">
      <Header />
      <main className="max-w-6xl mx-auto my-4">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
