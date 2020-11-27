import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { P } from '@components/typography/Paragraph.styled';

const Title = styled(P)`
  font-size: 2.25rem;
  color: var(--primary-font-color);
  font-weight: 800;
  strong {
    ${(props) => props.coloredStrong && `color: var(--light-font-color)`};
  }
`;

const SectionTitle = ({ children, coloredStrong }) => (
  <Title coloredStrong={coloredStrong}>{children}</Title>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  coloredStrong: PropTypes.bool,
};

SectionTitle.defaultProps = {
  coloredStrong: false,
};

export default SectionTitle;
