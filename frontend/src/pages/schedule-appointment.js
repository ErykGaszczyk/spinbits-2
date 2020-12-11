import React from 'react';
import styled from 'styled-components';
import Layout from '@components/Layout';
import { Helmet } from 'react-helmet';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { SpinContainer } from '@components/overrides';
import { Row, Col } from '@bootstrap-styled/v4';
import { DEVICE } from '@assets/const';

const { MD, XL } = DEVICE;

const CustomCalendlyBox = styled.div`
  min-width: 320px;
  min-height: 100%;
  height: 64.375rem; // 1030px;

  @media ${MD} {
    height: 71.25rem; // 1140px;
  }

  @media ${XL} {
    height: 40.625rem; // 650px;
  }
`;

const scheduleAppointment = () => {
  return (
    <>
      <Helmet>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
        />
      </Helmet>
      <Layout>
        <SpinContainer>
          <Row>
            <Col>
              <SectionTopTitle>Schedule appointment</SectionTopTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomCalendlyBox
                className="calendly-inline-widget"
                data-url="https://calendly.com/spinbits/lets_meet"
              />
            </Col>
          </Row>
        </SpinContainer>
      </Layout>
    </>
  );
};

export default scheduleAppointment;
