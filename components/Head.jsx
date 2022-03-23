import React from 'react';
import NextHead from 'next/head';

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>
        Ninja List {title ? '| ' : ''} {title}
      </title>
      <meta name="description" content="Free Web tutorials" />
      <meta name="keywords" content="HTML, CSS, JavaScript" />
      <meta name="author" content="Net Ninja | Huri Dev" />
      <link rel="icon" href="/assets/img/favicon.ico" />
    </NextHead>
  );
};

export default Head;
