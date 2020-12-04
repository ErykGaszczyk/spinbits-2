import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Modal from 'react-modal';

const FreeEstimationStepper = ({ openFromParent, parentCallback }) => {
  const [modalIsOpen, setIsOpen] = useState(openFromParent);

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
        <h2 ref={(_subtitle) => _subtitle}>Hello</h2>
        <button type="button" onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
        <form>
          <input />
          <button type="button">tab navigation</button>
          <button type="button">stays</button>
          <button type="button">inside</button>
          <button type="button">the modal</button>
        </form>
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
