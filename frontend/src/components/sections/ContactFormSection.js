import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
// import SectionTitle from '@components/typography/SectionTitle';
import { BasicText } from '@components/typography/Paragraph';
import { SpinContainer } from '@components/overrides';
import SpinButton from '@components/SpinButton';
import { Row, Col } from '@bootstrap-styled/v4';

const FormContainer = styled.form`
  background-color: var(--primary-font-color);
  border-radius: 0.5rem;
  padding: 3rem;
`;

const FormTitle = styled.h3`
  ${BasicText}
  font-size: 2.25rem;
  line-height: 3rem;
  color: var(--white);
`;

const ContactFormSection = () => {
  // TODOFIX: id="contact" || id="contact-form"
  return (
    <SpinContainer id="contact">
      <Row>
        <Col>
          <SectionTopTitle>Contact form</SectionTopTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormContainer>
            <Row>
              <Col xs={12}>
                <FormTitle center bold>
                  Let&apos;s build your business together
                </FormTitle>
              </Col>
              <Col md={5}>
                <input type="text" placeholder="1" />
                <input type="text" placeholder="2" />
              </Col>
              <Col md={7}>
                <textarea name="contack_message" placeholder="3" />
                <SpinButton>Send message</SpinButton>
              </Col>
            </Row>
          </FormContainer>
        </Col>
      </Row>
    </SpinContainer>
  );
};

ContactFormSection.propTypes = {};

ContactFormSection.defaultProps = {};

export default ContactFormSection;
