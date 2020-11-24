import React from 'react';
import PropTypes from 'prop-types';
import { P } from './Paragraph.styled';

const Paragraph = ({ children, bold, hover }) => (
  <P bold={bold} hover={hover}>
    {children}
  </P>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  bold: PropTypes.bool,
  hover: PropTypes.bool,
};

Paragraph.defaultProps = {
  bold: false,
  hover: false,
};

export default Paragraph;
