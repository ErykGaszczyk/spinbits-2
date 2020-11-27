import React from 'react';
import styled from 'styled-components';
import SpinbitsLogo from '@images/logo/logo.webp';

const SpinLogo = styled.img`
  max-height: 3.125rem; ;
`;
const Logo = () => <SpinLogo src={SpinbitsLogo} alt="Spinbits - logo" />;

export default Logo;
