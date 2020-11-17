import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import GlobalStyle from '../styles';

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
