import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BasicText } from '@components/typography/Paragraph';
import { DEVICE } from '@assets/const';

const { MD } = DEVICE;

const Title = styled.h3`
  ${BasicText}
  font-size: 1.8rem;

  @media ${MD} {
    font-size: 2.25rem;
  }
`;

const SectionTitle = ({ children }) => (
  <Title coloredStrong primary>
    {children}
  </Title>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
