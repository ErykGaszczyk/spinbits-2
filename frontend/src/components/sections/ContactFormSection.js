import React from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
// import SectionTitle from '@components/typography/SectionTitle';
import { BasicText } from '@components/typography/Paragraph';
import { SpinContainer } from '@components/overrides';
import { Button } from '@components/SpinButton';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, InputGroup, InputGroupAddon } from '@bootstrap-styled/v4';

// const axios = require('axios');

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
  display: flex;
  flex-direction: column;
  .input-group-addon {
    background-color: var(--white);
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
  width: 100%;
`;
const Input = styled.input`
  ${SpinInput}
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
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
  const { register, handleSubmit, errors } = useForm();
  if (errors) console.log(errors);

  const errorMessages = {
    name_surname: {
      required: '*This field is required.',
      minLength: '*Min length: 2',
    },
  };

  const errorHandler = (field, type) => {
    const fieldName = errorMessages[field];
    const message = fieldName[type];
    // console.log('fieldName', fieldName);
    // console.log('message', message);

    return <ErrorMessage bold>{message}</ErrorMessage>;
  };

  const onSubmit = (data) => console.log('data');
  // TODOFIX: id="contact" || id="contact-form"

  // const reset = () => {
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  // };

  // const onSumbit = () => {
  //   // event.preventDefault();
  //   // console.log('Name: ', name);
  //   // console.log('Email: ', email);
  //   // console.log('Message: ', message);

  //   axios({
  //     method: 'post',
  //     url: `https://api.spinbits.io/emails/contact`,
  //     data: {
  //       name_surname: name,
  //       email,
  //       message,
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.status);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <SpinContainer id="contact">
      <Row>
        <Col>
          <SectionTopTitle>Contact form</SectionTopTitle>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
                      ref={register({ required: true, minLength: 3, maxLength: 20 })}
                    />
                  </InputFlexBox>
                  {errors.name_surname !== undefined &&
                    errorHandler(errors.name_surname.ref.name, errors.name_surname.type)}
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
                      ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                  </InputFlexBox>
                  {errors.email && <ErrorMessage bold>*This is required.</ErrorMessage>}
                </CustomInputGroup>
              </Col>
              <Col md={7}>
                <CustomInputGroup>
                  <Textarea name="message" placeholder="Message" ref={register} />
                  {errors.message && <ErrorMessage bold>*This is required.</ErrorMessage>}
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
