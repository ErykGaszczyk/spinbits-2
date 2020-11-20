import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../styles';

const LayoutBox = styled.div`
  padding: 0 0 5rem 0;
`;

const Layout = ({ children }) => {
  return (
    <LayoutBox>
      <GlobalStyle />
      {children}
    </LayoutBox>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
