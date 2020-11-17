import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const P = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => (!props.theme.color ? props.theme.main : props.theme.color)};
`;

const theme = {
  main: 'var(--thirdary-font-color)',
};

const Paragraph = ({ children, color }) => (
  <ThemeProvider theme={theme}>
    <P theme={color} color={color}>
      {children}
    </P>
  </ThemeProvider>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Paragraph.defaultProps = {
  color: '',
};

export default Paragraph;
