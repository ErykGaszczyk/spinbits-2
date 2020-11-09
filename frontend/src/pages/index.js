import React from 'react';
import Test from '@components/Test';
import GlobalStyle from '../styles';

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Test title="Hello Mando!" />
    </div>
  );
}
