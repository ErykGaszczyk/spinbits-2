import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const TitleText = css`
  font-size: 2.938rem; // 47px
  font-weight: 900;
  color: var(--primary-font-color);
  margin-top: 0;
  transition: 0.5s;

  :hover {
    color: ${(props) => props.hover && `var(--secondary-font-color)`};
  }
  strong {
    ${(props) => props.coloredStrong && `color: var(--light-font-color)`};
  }
`;

const H1 = styled.h1`
  ${TitleText}
`;

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
