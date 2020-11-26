import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '@components/Logo';
import { P } from '@components/typography/Paragraph.styled';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { facebookAddress, linkedinAddress } from '@utils/variables';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';

import { Container, Row, Col } from '@bootstrap-styled/v4';

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 1.5rem 0;
  border-bottom: 1px solid var(--shadow);
`;

const FontawesomeContainer = styled.div`
  a {
    margin: 0 1rem 0 0;
    color: var(--thirdary-font-color);
    transition: 0.3s;

    &:hover {
      color: var(--primary-font-color);
    }
  }
`;

const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
`;

const CopyParagraph = styled(P)`
  font-weight: 600;
  color: var(--primary-font-color);
  margin: 0;
`;

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <FooterContainer>
            <Logo />
            {/* // TODO: tu jeszcze coś będzie */}
            <FontawesomeContainer>
              <Link to={facebookAddress}>
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to={linkedinAddress}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </FontawesomeContainer>
          </FooterContainer>
          <CopyrightContainer>
            <CopyParagraph>Copyright © 2020 spinbits.io</CopyParagraph>
          </CopyrightContainer>
        </Col>
      </Row>
    </Container>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
