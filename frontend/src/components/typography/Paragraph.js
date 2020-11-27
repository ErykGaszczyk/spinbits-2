import React from 'react';
import PropTypes from 'prop-types';
import { P } from './Paragraph.styled';

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
