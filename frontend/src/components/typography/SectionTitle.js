import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BasicText } from '@components/typography/Paragraph';

const Title = styled.h3`
  ${BasicText}
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--primary-font-color);
`;

const SectionTitle = ({ children }) => <Title coloredStrong>{children}</Title>;

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
