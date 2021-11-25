/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

import Layout from './src/components/Layout.js';

import './src/styles/global.css';

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <link
        key="plausible-preconnect"
        rel="preconnect"
        href="https://plausible.io"
      />,
      <script
        key="plausible-script"
        defer
        data-domain="mikebowman.dev"
        src="/js/script.js"
      />,
    ]);
  }
  return null;
};

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
