import React from 'react';
import PropTypes from 'prop-types';
import { P } from './Paragraph.styled';

const Paragraph = ({ children, bold, hover, coloredStrong }) => (
  <P bold={bold} hover={hover} coloredStrong={coloredStrong}>
    {children}
  </P>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  hover: PropTypes.bool,
  coloredStrong: PropTypes.bool,
};

Paragraph.defaultProps = {
  bold: false,
  hover: false,
  coloredStrong: false,
};

export default Paragraph;
