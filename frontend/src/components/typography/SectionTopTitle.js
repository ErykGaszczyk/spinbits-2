import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
  font-style: italic;
  font-weight: 800;
  font-size: 1rem;
  margin-top: 0;
  padding: 0 0 0 3.125rem; // 50px
  position: relative;
  color: var(--light-font-color);

  ::before {
    content: '';
    position: absolute;
    height: 0.125rem;
    width: 2.188rem;
    left: 0;
    background-color: var(--light-font-color);
    top: calc(50% - 1px);
  }
`;

const SectionTopTitle = ({ children }) => {
  return <P>{children}</P>;
};

SectionTopTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTopTitle;
