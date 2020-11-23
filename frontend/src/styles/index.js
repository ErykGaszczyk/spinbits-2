import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --primary-font-color: #1a0b60;
    --secondary-font-color: #007bff;
    --thirdary-font-color: #8087a3;
    --blog-list-box-bg: #f1f5ff;
    --accordion-content-font-color: #5acdfb;
    --white: #ffffff;
    --menu-shadow: #dadada;
  }

  html {
    height: 100%;
    font-size: 16px;
    font-family: 'Nunito', sans-serif; 

    body {}

    button {
      border: none;
    }
    
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
