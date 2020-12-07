import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import Check from '@images/stepper/check.webp';
import CustomProject from '@images/stepper/custom_project.webp';
import DigitalMarketing from '@images/stepper/digital_marketing.webp';
import StaffOutsourcing from '@images/stepper/staff_outsourcing.webp';
import SupportMaintenance from '@images/stepper/support_maintenance.webp';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const [modalIsOpen, setIsOpen] = useState(openFromParent);
  const [serviceCheckbox, setServiceCheckbox] = useState(false);
  console.log('serviceCheckbox: ', serviceCheckbox);

  useEffect(() => {
    Modal.setAppElement('body');
  }, [setIsOpen]);

  const closeModal = () => {
    setIsOpen(false);
    parentCallback(false);
  };

  return (
    <div>
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
          },
        }}
      >
        <button type="button" onClick={closeModal}>
          close
        </button>
        <Container>
          <Row>
            <Col>
              <Title coloredStrong center bold>
                Get a <strong>free</strong> estimation in <strong>24 hours</strong>
              </Title>
              <Subtitle center>Let us know about your idea or how can we help you.</Subtitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <Paragraph bold>Service</Paragraph>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <ServiceBox serviceCheckbox={serviceCheckbox}>
                <Checkbox
                  serviceCheckbox={serviceCheckbox}
                  onClick={() => setServiceCheckbox((origin) => !origin)}
                >
                  {serviceCheckbox && <FontAwesome icon={faCheck} />}
                </Checkbox>
                <img src={CustomProject} alt="Spinbits - Custom Projects" />
                <BoxTitle serviceCheckbox={serviceCheckbox} center primary bold>
                  Website
                </BoxTitle>
              </ServiceBox>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
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
