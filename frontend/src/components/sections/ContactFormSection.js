import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { BasicText } from '@components/typography/Paragraph';
import { SpinContainer } from '@components/overrides';
import { Button } from '@components/SpinButton';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, InputGroup, InputGroupAddon } from '@bootstrap-styled/v4';
import { DEVICE } from '@assets/const';

const { XS } = DEVICE;

const axios = require('axios');

const FormBox = css`
  background-color: var(--primary-font-color);
  border-radius: 0.5rem;
  padding: 3rem;
`;

const FormContainer = styled.form`
  ${FormBox}
`;

const FormTitle = styled.h3`
  ${BasicText}
  font-size: 2.25rem;
  line-height: 3rem;
  color: var(--white);
`;

const GreetingsBox = styled.div`
  ${FormBox}
  ${FormTitle} {
    margin-bottom: 0;
  }
`;

const CustomInputGroup = styled(InputGroup)`
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  .input-group-addon {
    background-color: var(--white);
    height: 2.5rem;
    width: 2.5rem;
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

const InputFlexBox = styled.div`
  display: flex;
`;

const SpinInput = css`
  border-radius: 0.25rem;
  border: 1px solid var(--white);
  padding: 0.5rem 0.75rem 0.5rem 0;

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  ${SpinInput}
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  width: 100%;

  @media ${XS} {
    width: calc(100% - 2.5rem);
  }
`;

const Textarea = styled.textarea`
  ${SpinInput}
  padding: 0.5rem 0.75rem;
  height: 6rem;

  &:focus {
    border-color: var(--white);
  }
`;

const ErrorMessage = styled.p`
  ${BasicText}
  margin: 1rem 0 0 0;
  color: var(--secondary-font-color);
`;

const ContactFormSection = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [showGreetings, setShowGreetings] = useState(false);

  const errorHandler = (message) => {
    return <ErrorMessage bold>{message}</ErrorMessage>;
  };

  const onSubmit = (data) => {
    axios({
      method: 'post',
      url: `https://api.spinbits.io/emails/contact`,
      data,
    })
      .then((response) => {
        if (response.status === 200) {
          setShowGreetings(true);
          reset();
        }
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  };

  const renderForm = () => {
    return (
      <FormContainer
        onSubmit={handleSubmit(onSubmit)}
        data-sal="slide-up"
        data-sal-easing="easeOutCubic"
      >
        <Row>
          <Col xs={12}>
            <FormTitle center bold>
              Let&apos;s build your business together
            </FormTitle>
          </Col>
          <Col md={5}>
            <CustomInputGroup>
              <InputFlexBox>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faUser} />
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Name and surname"
                  name="name_surname"
                  ref={register({
                    required: { value: true, message: '*This field is required.' },
                    minLength: { value: 3, message: '*Min 3 characters' },
                    maxLength: { value: 20, message: '*Max 20 characters' },
                  })}
                />
              </InputFlexBox>
              {errors.name_surname !== undefined && errorHandler(errors.name_surname.message)}
            </CustomInputGroup>

            <CustomInputGroup>
              <InputFlexBox>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: { value: true, message: '*This field is required.' },
                    pattern: { value: /^\S+@\S+$/i, message: '*Inccorect email' },
                  })}
                />
              </InputFlexBox>
              {errors.email !== undefined && errorHandler(errors.email.message)}
            </CustomInputGroup>
          </Col>
          <Col md={7}>
            <CustomInputGroup>
              <Textarea
                name="message"
                placeholder="Message"
                ref={register({
                  required: { value: true, message: '*This field is required.' },
                  minLength: { value: 3, message: '*Min 3 characters' },
                  maxLength: { value: 250, message: '*Max 250 characters' },
                })}
              />
              {errors.message !== undefined && errorHandler(errors.message.message)}
            </CustomInputGroup>
            <SendButton type="submit">Send message</SendButton>
          </Col>
        </Row>
      </FormContainer>
    );
  };

  const renderGreetings = () => {
    return (
      <GreetingsBox>
        <FormTitle bold center>
          Email was send
        </FormTitle>
      </GreetingsBox>
    );
  };

  const renderContent = () => {
    if (showGreetings) {
      return renderGreetings();
    }

    return renderForm();
  };

  return (
    // TODOFIX: id="contact" || id="contact-form"
    <SpinContainer id="contact">
      <Row>
        <Col>
          <SectionTopTitle>Contact form</SectionTopTitle>
        </Col>
      </Row>
      <Row>
        <Col>{renderContent()}</Col>
      </Row>
    </SpinContainer>
  );
};

export default ContactFormSection;
