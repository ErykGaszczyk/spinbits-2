import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import SectionTitle from '@components/typography/SectionTitle';
import { P } from '@components/typography/Paragraph.styled';

const Title = styled(P)`
  font-size: 2.063rem;
  color: var(--primary-font-color);

  strong {
    font-weight: normal;
    color: var(--secondary-font-color);
  }
`;

const Button = styled.button`
  background-color: var(--secondary-font-color);
  padding: 1.063rem 2.5rem; // 17px 40px
  border-radius: 0.313rem; // 5px
  transition: 0.5s;
  border: none;
  color: #fff;
`;

const Faq = () => {
  return (
    <Container>
      <Row>
        <Col>
          <SectionTitle>FAQ</SectionTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Title>
            Any <strong>questions?</strong> Don&apos;t hesitate to ask us
          </Title>
          <Button type="button">Ask a question</Button>
        </Col>
        <Col xs={12} lg={6}>
          rigth
        </Col>
      </Row>
    </Container>
  );
};

Faq.propTypes = {};

Faq.defaultProps = {};

export default Faq;
