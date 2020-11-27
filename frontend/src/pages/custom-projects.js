import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '@components/Layout';
import OurExpertise from '@components/sections/OurExpertise';

const customProjects = () => {
  const renderSections = () => {
    return [OurExpertise()];
  };

  return (
    <Layout>
      <h1>Custom projects</h1>
      {renderSections()}
    </Layout>
  );
};

customProjects.propTypes = {};

customProjects.defaultProps = {};

export default customProjects;
