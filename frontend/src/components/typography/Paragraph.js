import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { P } from './Paragraph.styled';

export const BasicText = css`
  font-size: 1rem;
  margin: 0 0 1rem 0;
  color: var(--thirdary-font-color);
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

const Paragraph = ({ children, bold, hover, coloredStrong, center }) => (
  <P bold={bold} hover={hover} coloredStrong={coloredStrong} center={center}>
    {children}
  </P>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  hover: PropTypes.bool,
  coloredStrong: PropTypes.bool,
  center: PropTypes.bool,
};

Paragraph.defaultProps = {
  bold: false,
  hover: false,
  coloredStrong: false,
  center: false,
};

export default Paragraph;
