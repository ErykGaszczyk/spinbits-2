import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 2.938rem; // 47px
  font-weight: 800;
  color: var(--primary-font-color);
  margin-top: 0;
  transition: 0.5s;

  :hover {
    color: ${(props) => props.hover && `var(--secondary-font-color)`};
  }
`;

export default {};
