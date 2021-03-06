import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import ReactSlider from 'react-slider';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import { SpinInput } from '@components/sections/ContactFormSection';
import { BasicText } from '@components/typography/Paragraph';
import { Button } from '@components/SpinButton';
import CustomProject from '@images/stepper/custom_project.webp';
import DigitalMarketing from '@images/stepper/digital_marketing.webp';
import StaffOutsourcing from '@images/stepper/staff_outsourcing.webp';
import SupportMaintenance from '@images/stepper/support_maintenance.webp';
import {
  faUser,
  faEnvelope,
  faPhoneAlt,
  faCalculator,
  faTrashAlt,
  faFile,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, InputGroup, InputGroupAddon } from '@bootstrap-styled/v4';

const axios = require('axios');

const CloseButton = styled.button`
  color: var(--secondary-font-color);
  background: none;
  float: right;

  &:hover {
    cursor: pointer;
  }
`;

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
  color: var(--thirdary-font-color);
`;

const PrimaryInput = styled(Input)`
  border: 1px solid #f1f5ff;
  background-color: #f1f5ff;
  color: var(--primary-font-color);
  font-weight: 800;

  &::placeholder {
    color: var(--primary-font-color);
    font-weight: 800;
  }
`;

const PrimaryInputGroupAddon = styled(InputGroupAddon)`
  background: #f1f5ff !important;
  color: var(--primary-font-color) !important;
`;

const ErrorMessage = styled.p`
  ${BasicText}
  margin: 1rem 0 0 0;
  color: var(--secondary-font-color);
  font-size: 12px;
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
  margin: 1rem 0 0 0;

  &:disabled {
    background-color: var(--thirdary-font-color);
    &:hover {
      cursor: not-allowed;
    }
  }
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

const PrivacyBox = styled.div`
  display: flex;
  align-items: center;
`;

const PrivacyCheckboxContainer = styled(CheckboxContainer)`
  margin: 0 0.5rem 0 0;
`;

const PrivacyStyledCheckbox = styled(StyledCheckbox)`
  border-radius: 20%;
  border-color: var(--secondary-font-color);
  ${Icon} {
    stroke: var(--secondary-font-color);
  }
`;

const PrivacyText = styled.p`
  ${BasicText}
  margin: 0;
`;

const Textarea = styled.textarea`
  ${SpinInput}
  background-color: #f8f8f8;
  width: 100%;
  padding: 0.5rem 0.75rem;
  height: 6rem;
  color: var(--thirdary-font-color);

  &:focus {
    border-color: var(--white);
  }
`;

const DropArea = styled.p`
  ${BasicText}
  border: 2px dashed var(--shadow);
  padding: 1rem;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const RemoveItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p,
  label {
    display: inline-block;
    color: var(--primary-font-color);
    font-weight: 800;
    padding: 0 0 0 0.5rem;
  }

  button {
    background: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

const RemoveItemFontAwesome = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.primary ? 'var(--secondary-font-color)' : 'var(--thirdary-font-color)'};
`;

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 0.438rem; // 7px
  margin: 3rem 0 0 0;
`;

const StyledThumb = styled.div`
  height: 1.313rem;
  width: 1.313rem;
  text-align: center;
  background-color: var(--white);
  border: 3px solid var(--light-font-color);
  border-radius: 50%;
  color: var(--white);
  cursor: grab;
  top: calc(50% - 1.313rem / 2);
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => (props.index === 1 ? 'var(--light-font-color)' : '#f8f8f8')};
  border-radius: 999px;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -2.813rem;
  left: calc(100% - 1.313rem / 2);
  margin: 0 0 0 -1.5rem;
  text-align: center;
  display: block;
  font-size: 0.75rem;
  color: var(--white);
  background: var(--primary-font-color);
  width: 3.125rem;
  padding: 0.438rem;
  border-radius: 0.313rem;

  &:after {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--primary-font-color);
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
  const [step, setStep] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(openFromParent);
  const { register, handleSubmit, errors, control } = useForm();

  const [filesToSend, setFilesToSend] = useState([]);
  const [budgetRange, setBudgetRange] = useState([1, 10]);
  const [privacyCheck, setPrivacyCheck] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFilesToSend([...filesToSend, ...acceptedFiles]);
    },
    [filesToSend]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const errorHandler = (message) => {
    return <ErrorMessage>{message}</ErrorMessage>;
  };

  const removeFile = (file) => {
    const newFiles = [...filesToSend];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFilesToSend(newFiles);
  };

  const renderFileList = () => {
    return filesToSend.map((file) => {
      const { path, name } = file;
      return (
        <Col md={8} key={path}>
          <RemoveItemBox>
            <div>
              <p>
                <RemoveItemFontAwesome primary icon={faFile} />
              </p>
              <label htmlFor={name}>
                {name}
                <input
                  id={name}
                  value={filesToSend.length}
                  ref={register}
                  name="attachments_qty"
                  style={{ display: 'none' }}
                  defaultValue="0"
                />
              </label>
            </div>

            <button type="button" onClick={() => removeFile(file)}>
              <RemoveItemFontAwesome icon={faTrashAlt} />
            </button>
          </RemoveItemBox>
        </Col>
      );
    });
  };

  const renderDropzone = () => {
    return (
      <section>
        {/* eslint-disable-next-line */}
        <div {...getRootProps()}>
          {/* eslint-disable-next-line */}
          <input {...getInputProps()} />
          <DropArea coloredStrong>
            Drag your file here or <strong>browse</strong>
          </DropArea>
        </div>
        {filesToSend.length > 0 && (
          <aside>
            <h4>Files</h4>
            <div>{renderFileList()}</div>
          </aside>
        )}
      </section>
    );
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, [modalIsOpen, setModalIsOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
    parentCallback(false);
  };

  const onSubmit = (data) => {
    let price_range = '';
    let service = '';
    if (data !== undefined) {
      price_range = `$${data.price_range[0]}K - $${data.price_range[1]}K`;
      service = data.service.join();
    }
    axios({
      method: 'post',
      url: `https://api.spinbits.io/emails/estimation`,
      data: {
        ...data,
        price_range,
        service,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          closeModal();
        }
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
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
            <Controller
              as={
                <StyledSlider
                  className="horizontal-slider"
                  defaultValue={budgetRange}
                  max={50}
                  ariaLabel={['Leftmost thumb', 'Middle thumb', 'Rightmost thumb']}
                  onAfterChange={(state) => setBudgetRange([state[0], state[1]])}
                  renderTrack={(props, state) => <StyledTrack {...props} index={state.index} />}
                  renderThumb={(props, state) => (
                    <StyledThumb {...props}>
                      <Tooltip>${state.valueNow}K</Tooltip>
                    </StyledThumb>
                  )}
                  pearling
                  minDistance={1}
                />
              }
              name="price_range"
              defaultValue={budgetRange}
              control={control}
            />
          </Col>
        </CustomRow>
      </>
    );
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
          </Col>

          <Col md={6}>
            <CustomInputGroup>
              <InputFlexBox>
                <PrimaryInputGroupAddon>
                  <FontAwesomeIcon icon={faCalculator} />
                </PrimaryInputGroupAddon>
                <PrimaryInput
                  type="text"
                  placeholder="Company name"
                  name="company_name"
                  ref={register({
                    required: { value: true, message: '*This field is required.' },
                    minLength: { value: 3, message: '*Min 3 characters' },
                    maxLength: { value: 20, message: '*Max 20 characters' },
                  })}
                />
              </InputFlexBox>
              {errors.company_name !== undefined && errorHandler(errors.company_name.message)}
            </CustomInputGroup>
          </Col>

          <Col md={6}>
            <CustomInputGroup>
              <InputFlexBox>
                <InputGroupAddon>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </InputGroupAddon>
                <Input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  ref={register({
                    required: { value: false, message: '*This field is required.' },
                  })}
                />
              </InputFlexBox>
              {errors.phone !== undefined && errorHandler(errors.phone.message)}
            </CustomInputGroup>
          </Col>

          <Col md={6}>
            <CustomInputGroup>
              <InputFlexBox>
                <PrimaryInputGroupAddon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </PrimaryInputGroupAddon>
                <PrimaryInput
                  type="text"
                  placeholder="E-mail"
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
                <Textarea type="text" placeholder="Message" name="additional_info" ref={register} />
              </InputFlexBox>
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

  const renderPrivacyCheckbox = () => {
    const handleServiceBoxes = (event) => {
      event.preventDefault();
      setPrivacyCheck((origin) => !origin);
    };

    return (
      <PrivacyBox>
        <PrivacyCheckboxContainer onClick={(event) => handleServiceBoxes(event)}>
          <HiddenCheckbox name="privacy_policy" checked={privacyCheck} />
          <PrivacyStyledCheckbox checked={privacyCheck}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </PrivacyStyledCheckbox>
        </PrivacyCheckboxContainer>
        <PrivacyText>
          By sending request, you agree to the <strong>Terms and Conditions</strong> and{' '}
          <strong>Privacy Policy</strong>
        </PrivacyText>
      </PrivacyBox>
    );
  };

  const renderButtons = () => {
    return (
      <>
        {step === 4 && (
          <Row>
            <Col>{renderPrivacyCheckbox()}</Col>
          </Row>
        )}

        <Row>
          <CustomColButton>
            {step < 4 && <NextStepButton onClick={(e) => nextStep(e)}>Next Step</NextStepButton>}
            {step === 4 && (
              <NextStepButton onClick={() => onSubmit()} disabled={!privacyCheck}>
                Send request
              </NextStepButton>
            )}
          </CustomColButton>
        </Row>
      </>
    );
  };

  const renderModalForm = () => {
    return (
      <>
        <Row>
          <Col>
            <CloseButton type="button" onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </CloseButton>
          </Col>
        </Row>
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
      </>
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
        {renderModalForm()}
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
