import React from 'react';
import styled from 'styled-components';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PortfolioButton = styled.button`
  border-bottom: 2px solid var(--light-font-color);
  background-color: transparent;
  padding: 1.063rem 0; // 17px
  border-radius: 0;
  margin: 0 0 0 2rem;

  &:hover {
    bottom: 2px solid var(--light-font-color);
    a {
      color: var(--light-font-color);
    }
  }

  a {
    font-weight: 800;
    color: var(--primary-font-color);
    transition: 0.3s;
  }
`;

const DownloadButton = () => {
  return (
    <PortfolioButton>
      <a href="@static/Portfolio.pdf" download>
        Download portfolio <FontAwesomeIcon icon={faLongArrowAltRight} />
      </a>
    </PortfolioButton>
  );
};

DownloadButton.propTypes = {};

DownloadButton.defaultProps = {};

export default DownloadButton;
