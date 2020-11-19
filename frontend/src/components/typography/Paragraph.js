import React from 'react';
import PropTypes from 'prop-types';
import { P } from './Paragraph.styled';

const Paragraph = ({ children }) => <P>{children}</P>;

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
