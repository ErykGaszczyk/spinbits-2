import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2.938rem; // 47px
  font-weight: 900;
  color: var(--primary-font-color);
  margin-top: 0;
  transition: 0.5s;

  :hover {
    color: ${(props) => props.hover && `var(--secondary-font-color)`};
  }
  strong {
    ${(props) => props.coloredStrong && `color: var(--light-font-color)`};
  }
`;

export default {};
