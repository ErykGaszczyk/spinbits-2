import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TestTitle = styled.p`
  color: red;
`;

const Test = ({ title }) => (
  <>
    <TestTitle>{title}</TestTitle>
  </>
);

Test.propTypes = {
  title: PropTypes.string,
};

Test.defaultProps = {
  title: '',
};

export default Test;
