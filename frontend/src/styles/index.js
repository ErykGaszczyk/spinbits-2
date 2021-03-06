import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    --primary-font-color: #1a0b60;
    --secondary-font-color: #007bff;
    --thirdary-font-color: #8087a3;
    --blog-list-box-bg: #f1f5ff;
    --light-font-color: #5acdfb;
    --white: #ffffff;
    --shadow: rgba(0, 17, 100, 0.1);
    --testimonial-author-color: #0c2d67;
    --testimonial-stars-color: #ffc700;
  }

  html {
    
    height: 100%;
    font-size: 16px;
    font-family: 'Nunito', sans-serif; 
    height: auto !important; /* reset default to allow scroll navigation */
    
    .calendly-page-scroll-locked {
      height: 100% !important;  /* set height when popup is active */
    }

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
