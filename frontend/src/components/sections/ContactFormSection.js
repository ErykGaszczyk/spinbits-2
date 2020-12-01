import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
// import SectionTitle from '@components/typography/SectionTitle';
import { BasicText } from '@components/typography/Paragraph';
import { SpinContainer } from '@components/overrides';
import { Button } from '@components/SpinButton';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, InputGroup, Input, InputGroupAddon } from '@bootstrap-styled/v4';

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

const CustomInputGroup = styled(InputGroup)`
  margin: 0 0 1rem 0;

  .input-group-addon {
    background-color: var(--white);
  }

  .form-control {
    padding: 0.5rem 0.75rem 0.5rem 0;
    border-color: var(--white);

    &--textarea {
      padding: 0.5rem 0.75rem;
      height: 6rem;
    }

    &:focus {
      border-color: var(--white);
    }
  }
`;

const SendButton = styled.button`
  ${Button}

  &:hover {
    cursor: pointer;
    background-color: var(--white);
    color: var(--secondary-font-color);
  }
`;

const ContactFormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // TODOFIX: id="contact" || id="contact-form"

  console.log('Name: ', name.length);
  console.log('Email: ', email);
  console.log('Message: ', message);

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    alert('Dupa');
    reset();
  };

  return (
    <SpinContainer id="contact">
      <Row>
        <Col>
          <SectionTopTitle>Contact form</SectionTopTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormContainer onSubmit={handleSumbit}>
            <Row>
              <Col xs={12}>
                <FormTitle center bold>
                  Let&apos;s build your business together
                </FormTitle>
              </Col>
              <Col md={5}>
                <CustomInputGroup>
                  <InputGroupAddon>
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroupAddon>
                  <Input
                    type="text"
                    id="inlineFormInputGroup"
                    placeholder="Name and surname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </CustomInputGroup>

                <CustomInputGroup>
                  <InputGroupAddon>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroupAddon>
                  <Input
                    type="text"
                    id="inlineFormInputGroup"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </CustomInputGroup>
              </Col>
              <Col md={7}>
                <CustomInputGroup>
                  <textarea
                    className="form-control form-control--textarea"
                    name="contack_message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </CustomInputGroup>
                <SendButton type="submit">Send message</SendButton>
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
