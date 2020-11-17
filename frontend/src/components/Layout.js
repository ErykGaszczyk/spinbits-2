import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import GlobalStyle from '../styles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
