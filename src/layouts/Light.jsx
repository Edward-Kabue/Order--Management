/* eslint-disable @next/next/no-css-tags */
import React from 'react';
import Head from 'next/head';

const LightTheme = ({ children, bdOn }) => {
  if (bdOn) {
    React.useEffect(() => {
      document.querySelector('body').classList.add('bd-');
      return () => {
        document.querySelector('body').classList.remove('bd-');
      };
    });
  }
  return (
    <>
      <Head>
        <link rel='stylesheet' href='/css/light.css' />
      </Head>
      {children}
    </>
  );
};

export default LightTheme;
