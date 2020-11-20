import React from 'react';
import PropTypes from 'prop-types';
import { H1 } from './Title.styled';

const Title = ({ children }) => <H1>{children}</H1>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
