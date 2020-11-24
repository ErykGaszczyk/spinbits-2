import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const Button = styled.button`
  background-color: var(--secondary-font-color);
  padding: 1.063rem 2.5rem; // 17px 40px
  border-radius: 0.313rem; // 5px
  transition: 0.5s;

  &:hover {
    cursor: pointer;
  }
`;

const SpinLink = styled(Link)`
  color: var(--white);
`;

const SpinButton = ({ children, url }) => {
  return (
    <Button Button type="button">
      <SpinLink to={url}>{children}</SpinLink>
    </Button>
  );
};

SpinButton.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
};

export default SpinButton;
