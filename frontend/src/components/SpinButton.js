import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const Button = css`
  background-color: var(--secondary-font-color);
  padding: 1.063rem 2.5rem; // 17px 40px
  border-radius: 0.313rem; // 5px
  transition: 0.5s;
  color: var(--white);

  &:hover {
    cursor: pointer;
    background-color: var(--primary-font-color);
  }
`;

const SpinLink = styled(Link)`
  color: var(--white);
`;

const SpinBtn = styled.button`
  ${Button}
`;

const SpinButton = ({ children, url }) => {
  return (
    <SpinBtn type="button">
      <SpinLink to={url}>{children}</SpinLink>
    </SpinBtn>
  );
};

SpinButton.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

export default SpinButton;
