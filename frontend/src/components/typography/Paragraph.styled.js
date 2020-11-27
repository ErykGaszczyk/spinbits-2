import styled from 'styled-components';

export const P = styled.p`
  font-size: 1rem;
  margin: 0 0 1rem 0;
  color: var(--thirdary-font-color);
  font-weight: ${(props) => (!props.bold ? 'normal' : '800')};
  transition: 0.5s;
  ${(props) => props.center && `text-align: center`};

  strong {
    ${(props) => props.coloredStrong && `color: var(--light-font-color)`};
  }

  :hover {
    color: ${(props) => props.hover && `var(--secondary-font-color)`};
  }
`;

export default {};
