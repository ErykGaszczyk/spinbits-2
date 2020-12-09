import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import { SpinInput } from '@components/sections/ContactFormSection';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import { Button } from '@components/SpinButton';
import CustomProject from '@images/stepper/custom_project.webp';
import DigitalMarketing from '@images/stepper/digital_marketing.webp';
import StaffOutsourcing from '@images/stepper/staff_outsourcing.webp';
import SupportMaintenance from '@images/stepper/support_maintenance.webp';
import { faUser, faEnvelope, faPhoneAlt, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, InputGroup, InputGroupAddon } from '@bootstrap-styled/v4';

const axios = require('axios');

const CustomInputGroup = styled(InputGroup)`
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  .input-group-addon {
    background-color: #f8f8f8;
    border: none;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const InputFlexBox = styled.div`
  display: flex;
`;

const Input = styled.input`
  ${SpinInput}
  background-color: #f8f8f8;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  width: 100%;
`;

const ErrorMessage = styled.p`
  ${BasicText}
  margin: 1rem 0 0 0;
  color: var(--secondary-font-color);
`;

const CustomRow = styled(Row)`
  margin: 0 0 2rem 0;
`;

const CustomColButton = styled(Col)`
  display: flex;
  justify-content: flex-end;
  padding: 0 0 2rem 0;
`;

const NextStepButton = styled.button`
  ${Button}
`;

const Title = styled.p`
  ${BasicText}
  font-size: 2.25rem;
  color: var(--primary-font-color);
`;

const Subtitle = styled.p`
  ${BasicText}
  font-size: 1.25rem;
  color: var(--secondary-font-color);
`;

const StepTitle = styled.p`
  ${BasicText}
  color: var(--light-font-color);
`;

const BoxTitle = styled.p`
  ${BasicText}
  ${(props) => props.checked && 'color: var(--white)'};
`;

const ServiceBox = styled.div`
  box-shadow: -15px 15px 54px rgba(0, 17, 100, 0.1);
  border-radius: 0.5rem;
  text-align: center;
  min-height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (!props.checked ? 'var(--white)' : 'var(--light-font-color)')};
  transition: 0.3s;

  &:hover {
    cursor: pointer;
  }

  img {
    height: auto;
    max-width: 60px;
    transition: 0.3s;
    ${(props) => props.checked && 'filter: brightness(0) invert(1)'};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  align-self: flex-end;
  margin: 0.5rem 0.5rem 0 0;
`;

const Icon = styled.svg`
  fill: none;
  stroke: var(--light-font-color);
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: var(--white);
  border: 2px solid ${(props) => (!props.checked ? 'var(--thirdary-font-color)' : 'var(--white)')};
  border-radius: 50%;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Textarea = styled.textarea`
  ${SpinInput}
  background-color: #f8f8f8;
  width: 100%;
  padding: 0.5rem 0.75rem;
  height: 6rem;

  &:focus {
    border-color: var(--white);
  }
`;

const FreeEstimationStepper = ({ openFromParent, parentCallback }) => {
  const serviceData = [
    {
      id: 1,
      img: `${CustomProject}`,
      title: `Custom Project`,
      name: `custom_project`,
      slug: `custom-project`,
    },
    {
      id: 2,
      img: `${SupportMaintenance}`,
      title: `Support & Maintenance`,
      name: `support_maintenance`,
      slug: `support-maintenance`,
    },
    {
      id: 3,
      img: `${StaffOutsourcing}`,
      title: `Staff Outsourcing`,
      name: `staff_outsourcing`,
      slug: `staff-outsourcing`,
    },
    {
      id: 4,
      img: `${DigitalMarketing}`,
      title: `Digital Marketing`,
      name: `digital_marketing`,
      slug: `digital-marketing`,
    },
  ];
  const [step, setStep] = useState(4);
  const [modalIsOpen, setModalIsOpen] = useState(openFromParent);
  const { register, handleSubmit, errors } = useForm();

  const [filesToSend, setFilesToSend] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFilesToSend([...filesToSend, ...acceptedFiles]);
    },
    [filesToSend]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const removeFile = (file) => {
    const newFiles = [...filesToSend];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFilesToSend(newFiles);
  };

  const renderFileList = () => {
    return filesToSend.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <button type="button" onClick={() => removeFile(file)}>
          REMOVE
        </button>
      </li>
    ));
  };

  const renderDropzone = () => {
    return (
      <section>
        {/* eslint-disable-next-line */}
        <div {...getRootProps()}>
          {/* eslint-disable-next-line */}
          <input {...getInputProps()} />
          <p>Drag n drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{renderFileList()}</ul>
        </aside>
      </section>
    );
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, [modalIsOpen, setModalIsOpen]);

  const onSubmit = (data) => {
    const customData = {
      ...data,
      files: filesToSend,
    };
    axios({
      method: 'post',
      // url: `https://api.spinbits.io/emails/estimation`,
      url: `https://httpbin.org/post`,
      customData,
    })
      .then((response) => {
        // eslint-disable-next-line
        console.log('customData', customData);
        if (response.status === 200) {
          // reset();
        }
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    parentCallback(false);
  };

  const nextStep = (event) => {
    event.preventDefault();
    if (step < 4) setStep((origin) => origin + 1);
  };

  // eslint-disable-next-line
  const CustomCheckbox = ({ checked, name, value, onChange }) => {
    return (
      <CheckboxContainer>
        <HiddenCheckbox
          ref={register}
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    );
  };

  const renderServicesCheckbox = () => {
    return serviceData.map((item) => {
      const [checked, setChecked] = useState(false);

      const handleServiceBoxes = (event) => {
        event.preventDefault();
        setChecked((origin) => !origin);
      };

      const handleCheckboxChange = (event) => {
        setChecked(event.target.checked[0]);
      };

      const { id, img, title, name, slug } = item;
      return (
        <Col lg={3} key={`${id}-${slug}`}>
          <ServiceBox checked={checked} onClick={(event) => handleServiceBoxes(event)}>
            <CustomCheckbox
              name="service"
              value={name}
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <img src={img} alt={`Spinbits - ${name}`} />
            <BoxTitle checked={checked} center primary bold>
              {title}
            </BoxTitle>
          </ServiceBox>
        </Col>
      );
    });
  };

  const renderServices = () => {
    return (
      <CustomRow>
        <Col xs={12}>
          <StepTitle bold>Service</StepTitle>
        </Col>
        {renderServicesCheckbox()}
      </CustomRow>
    );
  };

  const renderBudget = () => {
    return (
      <>
        <CustomRow>
          <Col xs={12}>
            <StepTitle bold>Budget</StepTitle>
          </Col>
          <Col xs={12}>
            <Paragraph>rander slider</Paragraph>
          </Col>
        </CustomRow>
      </>
    );
  };

  const errorHandler = (message) => {
    return <ErrorMessage bold>{message}</ErrorMessage>;
  };

  const renderContactDetails = () => {
    return (
      <>
        <CustomRow>
          <Col xs={12}>
            <StepTitle bold>Contact Details</StepTitle>
          </Col>
          <Col md={6}>
            <CustomInputGroup>
              <InputFlexBox>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faUser} />
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Name and surname"
                  // TODOFIX:
                  name="name_surname"
                  defaultValue="aaasd@asd.asd"
                  ref={register({
                    required: { value: true, message: '*This field is required.' },
                    minLength: { value: 3, message: '*Min 3 characters' },
                    maxLength: { value: 20, message: '*Max 20 characters' },
                  })}
                />
              </InputFlexBox>
              {errors.name_surname !== undefined && errorHandler(errors.name_surname.message)}
            </CustomInputGroup>
          </Col>

          <Col md={6}>
            <CustomInputGroup>
              <InputFlexBox>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faCalculator} />
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Company name"
                  // TODOFIX:
                  name="name_surname"
                  defaultValue="asd@asd.asd"
                  ref={register({
                    required: { value: true, message: '*This field is required.' },
                    minLength: { value: 3, message: '*Min 3 characters' },
                    maxLength: { value: 20, message: '*Max 20 characters' },
                  })}
                />
              </InputFlexBox>
              {errors.name_surname !== undefined && errorHandler(errors.name_surname.message)}
            </CustomInputGroup>
          </Col>

          <Col md={6}>
            <CustomInputGroup>
              <InputFlexBox>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Phone"
                  // TODOFIX:
                  name="phone"
                  defaultValue="asd@asd.asd"
                  ref={register({
                    required: { value: true, message: '*This field is required.' },
                    pattern: { value: /^\S+@\S+$/i, message: '*Inccorect email' },
                  })}
                />
              </InputFlexBox>
              {errors.email !== undefined && errorHandler(errors.email.message)}
            </CustomInputGroup>
          </Col>

          <Col md={6}>
            <CustomInputGroup>
              <InputFlexBox>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="E-mail"
                  // TODOFIX:
                  name="email"
                  defaultValue="asd@asd.asd"
                  ref={register({
                    required: { value: true, message: '*This field is required.' },
                    pattern: { value: /^\S+@\S+$/i, message: '*Inccorect email' },
                  })}
                />
              </InputFlexBox>
              {errors.email !== undefined && errorHandler(errors.email.message)}
            </CustomInputGroup>
          </Col>
        </CustomRow>
      </>
    );
  };

  const renderAdditionalInfo = () => {
    return (
      <>
        <CustomRow>
          <Col xs={12}>
            <StepTitle bold>Additional info (optional)</StepTitle>
          </Col>
          <Col xs={12}>
            <CustomInputGroup>
              <InputFlexBox>
                <Textarea
                  type="text"
                  placeholder="Message"
                  // TODOFIX:
                  name="message"
                  defaultValue="Message"
                  ref={register}
                />
              </InputFlexBox>
              {errors.name_surname !== undefined && errorHandler(errors.name_surname.message)}
            </CustomInputGroup>
          </Col>
          <Col xs={12}>{renderDropzone()}</Col>
        </CustomRow>
      </>
    );
  };

  const handleStepRender = () => {
    return (
      <>
        {step >= 1 && renderServices()}
        {step >= 2 && renderBudget()}
        {step >= 3 && renderContactDetails()}
        {step >= 4 && renderAdditionalInfo()}
      </>
    );
  };

  const renderButtons = () => {
    return (
      <Row>
        <CustomColButton>
          {step < 4 && <NextStepButton onClick={(e) => nextStep(e)}>Next Step</NextStepButton>}
          {step === 4 && <NextStepButton onClick={() => onSubmit()}>Send request</NextStepButton>}
        </CustomColButton>
      </Row>
    );
  };

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            zIndex: 99999,
            backgroundColor: 'rgba(85, 77, 126, 0.8)',
          },
          content: {
            maxWidth: '65%',
            margin: '0 auto',
            overflowX: 'hidden',
          },
        }}
      >
        <button type="button" onClick={closeModal}>
          close
        </button>
        <CustomRow>
          <Col>
            <Title coloredStrong center bold>
              Get a <strong>free</strong> estimation in <strong>24 hours</strong>
            </Title>
            <Subtitle center>Let us know about your idea or how can we help you.</Subtitle>
          </Col>
        </CustomRow>
        <form onSubmit={handleSubmit(onSubmit)}>
          {handleStepRender()}
          {renderButtons()}
        </form>
      </Modal>
    </Container>
  );
};

FreeEstimationStepper.propTypes = {
  openFromParent: PropTypes.bool,
  parentCallback: PropTypes.func.isRequired,
};

FreeEstimationStepper.defaultProps = {
  openFromParent: false,
};

export default FreeEstimationStepper;
