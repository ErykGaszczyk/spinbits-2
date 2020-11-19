import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph from '@components/typography/Paragraph';

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
          <Paragraph customStyles={{ fontSize: 2.063, fontColor: 'var(--primary-font-color)' }}>
            Any <strong>questions?</strong> Don&apos;t hesitate to ask us
          </Paragraph>
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
