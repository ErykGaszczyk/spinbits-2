import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const P = styled.p`
  font-size: ${(props) =>
    !props.theme.customStyles ? `${props.theme.fontSize}rem` : `${props.theme.customStyles}rem`};
  margin: 0;
  margin-bottom: ${(props) =>
    !props.theme.customStyles ? `${props.theme.mb}rem` : `${props.theme.customStyles}rem`};
  color: ${(props) =>
    !props.theme.customStyles ? props.theme.fontColor : props.theme.customStyles};
  font-weight: ${(props) => (!props.bold ? 'normal' : '800')};
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

const Paragraph = ({ children, customStyles, bold, hover }) => (
  <ThemeProvider theme={theme}>
    <P theme={customStyles} customStyles={customStyles} hover={hover} bold={bold}>
      {children}
    </P>
  </ThemeProvider>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.shape({}),
  bold: PropTypes.bool,
  hover: PropTypes.bool,
};

Paragraph.defaultProps = {
  customStyles: null,
  bold: false,
  hover: false,
};

export default Paragraph;
