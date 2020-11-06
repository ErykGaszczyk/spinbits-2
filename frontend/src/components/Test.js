import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Test = ({ title }) => <p>{title}</p>;

Test.propTypes = {
  title: PropTypes.string,
};

Test.defaultProps = {
  title: '',
};

export default Test;
