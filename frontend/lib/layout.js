import { hydrate } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import Head from 'next/head';
import React from 'react';
import { theme } from './theme';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

export default ({ children, title = 'Headless Wordpress' }) => (
  <ThemeProvider theme={theme}>
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      {children}
    </>
  </ThemeProvider>
);
