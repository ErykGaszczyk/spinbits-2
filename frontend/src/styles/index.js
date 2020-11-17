import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* --primary-font-color: #ffffff; */
    --secondary-font-color: #5acdfb;
  }

  html {
    height: 100%;
    font-size: 16px;
    font-family: 'Nunito', sans-serif; 

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
