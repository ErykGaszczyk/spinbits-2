import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const BasicText = css`
  font-size: 1rem;
  margin: 0 0 1rem 0;
  color: ${(props) => (props.primary ? 'var(--primary-font-color)' : 'var(--thirdary-font-color)')};
  font-weight: ${(props) => (!props.bold ? 'normal' : '800')};
  transition: 0.5s;
  ${(props) => props.center && `text-align: center`};

  strong {
    ${(props) => props.coloredStrong && `color: var(--light-font-color)`};
  }

  :hover {
    color: ${(props) => props.hover && `var(--secondary-font-color)`};
  }
`;

const P = styled.p`
  ${BasicText}
`;

const Paragraph = ({ children, bold, hover, coloredStrong, center, primary }) => (
  <P bold={bold} hover={hover} coloredStrong={coloredStrong} center={center} primary={primary}>
    {children}
  </P>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  hover: PropTypes.bool,
  coloredStrong: PropTypes.bool,
  center: PropTypes.bool,
  primary: PropTypes.bool,
};

Paragraph.defaultProps = {
  bold: false,
  hover: false,
  coloredStrong: false,
  center: false,
  primary: false,
};

export default Paragraph;
