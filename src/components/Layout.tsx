import React from "react";

import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => (
  <main className="bg-gray-300 max-w-screen-lg mt-12 mb-16 mx-auto">
    <Nav />
    {children}
    <Footer />
  </main>
);

export default Layout;
