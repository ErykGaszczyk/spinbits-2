import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {}

  html {
    height: 100%;
    font-size: 16px;

    body {}
    
    ul {
      margin: 0;
      padding: 0;

      li {
        list-style: none;
      }
    }

    a {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
