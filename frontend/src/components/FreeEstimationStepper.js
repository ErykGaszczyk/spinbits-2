import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import { Button } from '@components/SpinButton';
import CustomProject from '@images/stepper/custom_project.webp';
import DigitalMarketing from '@images/stepper/digital_marketing.webp';
import StaffOutsourcing from '@images/stepper/staff_outsourcing.webp';
import SupportMaintenance from '@images/stepper/support_maintenance.webp';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from '@bootstrap-styled/v4';

const CustomRow = styled(Row)`
  margin: 0 0 2rem 0;
`;

const CustomColButton = styled(Col)`
  display: flex;
  justify-content: flex-end;
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

const BoxTitle = styled.p`
  ${BasicText}
  ${(props) => props.serviceCheckbox && 'color: var(--white)'};
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
  background-color: ${(props) =>
    !props.serviceCheckbox ? 'var(--white)' : 'var(--light-font-color)'};
  transition: 0.3s;

  img {
    height: auto;
    max-width: 60px;
    transition: 0.3s;
    ${(props) => props.serviceCheckbox && 'filter: brightness(0) invert(1)'};
  }
`;

const Checkbox = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  border-radius: 50%;
  background-color: var(--white);
  cursor: pointer;
  margin: 0.5rem 0.5rem 0 0;
  transition: 0.3s;
  border: 2px solid
    ${(props) => (!props.serviceCheckbox ? 'var(--thirdary-font-color)' : 'var(--white)')};
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: var(--light-font-color);
`;

const FreeEstimationStepper = ({ openFromParent, parentCallback }) => {
  const serviceData = [
    {
      id: 1,
      img: `${CustomProject}`,
      title: `Custom Project`,
      slug: `custom-project`,
    },
    {
      id: 2,
      img: `${SupportMaintenance}`,
      title: `Support & Maintenance`,
      slug: `support-maintenance`,
    },
    {
      id: 3,
      img: `${StaffOutsourcing}`,
      title: `Staff Outsourcing`,
      slug: `staff-outsourcing`,
    },
    {
      id: 4,
      img: `${DigitalMarketing}`,
      title: `Digital Marketing`,
      slug: `digital-marketing`,
    },
  ];
  const [step, setStep] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(openFromParent);

  useEffect(() => {
    Modal.setAppElement('body');
  }, [modalIsOpen, setModalIsOpen]);

  const closeModal = () => {
    setModalIsOpen(false);
    parentCallback(false);
  };

  console.log('step', step);

  const nextStep = () => {
    if (step < 4) setStep((origin) => origin + 1);
  };

  const renderServicesCheckbox = () => {
    return serviceData.map((item) => {
      const [serviceCheckbox, setServiceCheckbox] = useState(false);
      const { id, img, title, slug } = item;
      return (
        <Col lg={3} key={`${id}-${slug}`}>
          <ServiceBox serviceCheckbox={serviceCheckbox}>
            <Checkbox
              serviceCheckbox={serviceCheckbox}
              onClick={() => setServiceCheckbox((origin) => !origin)}
            >
              {serviceCheckbox && <FontAwesome icon={faCheck} />}
            </Checkbox>
            <img src={img} alt="Spinbits - Custom Projects" />
            <BoxTitle serviceCheckbox={serviceCheckbox} center primary bold>
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
          <Paragraph bold>Service</Paragraph>
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
            <Paragraph bold>Service</Paragraph>
          </Col>
          <Col xs={12}>
            <Paragraph>rande slider</Paragraph>
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
            <Paragraph bold>Contact Details</Paragraph>
          </Col>
          <Col xs={12}>
            <Paragraph>inputy</Paragraph>
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
            <Paragraph bold>Additional info (optional)</Paragraph>
          </Col>
          <Col xs={12}>
            <Paragraph>pliki</Paragraph>
          </Col>
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
          {step < 4 && <NextStepButton onClick={() => nextStep()}>Next Step</NextStepButton>}
          {step === 4 && <NextStepButton onClick={() => nextStep()}>Send request</NextStepButton>}
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
        {handleStepRender()}
        {renderButtons()}
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
