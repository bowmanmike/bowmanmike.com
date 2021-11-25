/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';

import Layout from './src/components/Layout.js';

import './src/styles/global.css';

require('prismjs/themes/prism-tomorrow.css');

export const onRouteUpdate = () => {
  if (
    process.env.NODE_ENV === `production` &&
    typeof window.plausible === `object`
  ) {
    window.plausible(`pageview`);
  }
};

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
