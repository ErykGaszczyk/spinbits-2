import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '@components/menu/Menu';
import GlobalStyle from '../styles';

const LayoutBox = styled.div`
  padding: 0 0 5rem 0;
`;

const ChildrenContainter = styled.div`
  padding: 7rem 0 0 0;
`;

const Layout = ({ children }) => {
  return (
    <LayoutBox>
      <GlobalStyle />
      <Menu />
      <ChildrenContainter>{children}</ChildrenContainter>
    </LayoutBox>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
