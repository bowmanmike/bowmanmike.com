/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import Helmet from 'react-helmet';

import Layout from './src/components/Layout.js';

import './src/styles/global.css';

const SITE_DOMAIN = 'mikebowman.dev';
const PLAUSIBLE_DOMAIN = 'plausible.io';
const SCRIPT_URI = '/js/script.js';

export const onRenderBody = ({ setHeadComponents }) => {
  if (process.env.NODE_ENV === `production`) {
    const scriptProps = {
      'data-domain': SITE_DOMAIN,
      src: SCRIPT_URI,
    };

    return setHeadComponents([
      <link
        key="plausible-preconnect"
        rel="preconnect"
        href={`http://${PLAUSIBLE_DOMAIN}`}
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
  return (
    <Layout {...props}>
      {/* <Helmet> */}
      {/*   <script defer data-domain="mikebowman.dev" src="/js/script.js" /> */}
      {/* </Helmet> */}
      {element}
    </Layout>
  );
}
