import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const H1 = styled.h1`
  font-size: 2.938rem; // 47px
  font-weight: 800;
  color: ${(props) =>
    !props.theme.customStyles ? props.theme.fontColor : props.theme.customStyles};
  margin: 0;
  transition: 0.5s;

  :hover {
    color: ${(props) => props.hover && `var(--secondary-font-color)`};
  }
`;

const theme = {
  fontColor: 'var(--thirdary-font-color)',
  fontSize: 1,
  mb: 0,
};

const Title = ({ children, hover, customStyles }) => (
  <ThemeProvider theme={theme}>
    <H1 hover={hover} theme={customStyles} customStyles={customStyles}>
      {children}
    </H1>
  </ThemeProvider>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  customStyles: PropTypes.shape({}),
};

Title.defaultProps = {
  hover: false,
  customStyles: null,
};

export default Title;
