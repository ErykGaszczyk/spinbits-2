import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '@components/menu/Menu';
import Faq from '@components/Faq';
import Footer from '@components/Footer';
import GlobalStyle from '../styles';

const ChildrenContainter = styled.div`
  padding: 7rem 0 0 0;
`;

const Layout = ({ children }) => {
  const url = window.location.pathname;
  return (
    <>
      <GlobalStyle />
      <Menu />
      <ChildrenContainter>{children}</ChildrenContainter>
      {url !== '/terms-of-use' && <Faq />}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
