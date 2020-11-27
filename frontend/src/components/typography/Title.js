import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from './Title.styled';

const Title = ({ children, hover, coloredStrong }) => (
  <H1 hover={hover} coloredStrong={coloredStrong}>
    {children}
  </H1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
  coloredStrong: PropTypes.bool,
};

Title.defaultProps = {
  hover: false,
  coloredStrong: false,
};

export default Title;
