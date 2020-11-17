import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2.938rem; // 47px
  font-weight: 800;
  color: var(--primary-font-color);
  margin: 0;
  transition: 0.5s;

  :hover {
    color: ${(props) => props.hover && `var(--secondary-font-color)`};
  }
`;

const Title = ({ children, hover }) => <H1 hover={hover}>{children}</H1>;

Title.propTypes = {
  children: PropTypes.node.isRequired,
  hover: PropTypes.bool,
};

Title.defaultProps = {
  hover: false,
};

export default Title;
