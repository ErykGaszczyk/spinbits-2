import React from 'react';
import Layout from '@components/Layout';
import SectionTitle from '@components/typography/SectionTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import Title from '@components/typography/Title';
import Paragraph from '@components/typography/Paragraph';
import { SpinContainer } from '@components/overrides';
import SpinButton from '@components/SpinButton';
// import styled from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <SpinContainer>
        <Row>
          <Col>
            <SectionTitle>Who we are</SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Title coloredStrong hover>
              <strong>IT specialist</strong> that understand your <strong>business</strong> and will
              help you <strong>grow</strong>
            </Title>
            <Paragraph>
              We are a passionate group of specialists that love to create, build and deliver
              tailor-made IT solutions. Creating our own products and building business with our
              partners give us best understanding of your needs.
            </Paragraph>
            <Paragraph>Let&apos;s talk and make the bits spin :-)</Paragraph>
            {/* TODO: url */}
            <SpinButton url="/">Free estimation</SpinButton>
          </Col>
        </Row>
      </SpinContainer>
    </Layout>
  );
};

export default Home;
