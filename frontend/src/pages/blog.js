import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Layout from '@components/Layout';
import SectionTitle from '@components/typography/SectionTitle';
import { Container } from '@bootstrap-styled/v4';

const Blog = () => {
  return (
    <Layout>
      <Container>
        <SectionTitle>Blog</SectionTitle>
      </Container>
    </Layout>
  );
};

// Blog.propTypes = {};

// Blog.defaultProps = {};

export default Blog;
