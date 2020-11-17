import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '@components/Layout';
import Title from '@components/typography/Title';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph from '@components/typography/Paragraph';
import { Container } from '@bootstrap-styled/v4';
import FirstPostBg from '@static/images/blog/1st-blog-bg.webp';

const FirstBlogBox = styled.div`
  background-image: url(${FirstPostBg});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 18.75rem; // 300px
  max-height: 31.25rem; // 500px
  padding: 4.375rem 2.188rem; // 70px 35px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Blog = () => {
  return (
    <Layout>
      <Container>
        <SectionTitle>Blog</SectionTitle>
        <Link to="/blog/2">
          <FirstBlogBox>
            <Title hover>
              Human-Centered Design in a pill and why it is the way to build websites and
              applications
            </Title>
            <Paragraph color={{ main: 'var(--primary-font-color)' }}>30 October 2020</Paragraph>
          </FirstBlogBox>
        </Link>
      </Container>
    </Layout>
  );
};

export default Blog;
