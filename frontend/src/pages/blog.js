import React from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '@components/Layout';
import Title from '@components/typography/Title';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph from '@components/typography/Paragraph';
import { Container } from '@bootstrap-styled/v4';
import FirstPostBg from '@static/images/blog/1st-blog-bg.webp';
import PostDate from '../helpers/PostDate';

const FirstBlogBox = styled.div`
  background-image: url(${FirstPostBg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 18.75rem; // 300px
  max-height: 31.25rem; // 500px
  padding: 4.375rem 2.188rem; // 70px 35px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Blog = ({ data }) => {
  const { blogPosts } = data.cms;

  return (
    <Layout>
      <Container>
        <SectionTitle>Blog</SectionTitle>
        <Link to="/blog/2">
          <FirstBlogBox>
            <Title hover>{blogPosts[0].title}</Title>
            <Paragraph color={{ main: 'var(--primary-font-color)' }}>
              {PostDate(blogPosts[0].created_at)}
            </Paragraph>
          </FirstBlogBox>
        </Link>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogPostHeading {
    cms {
      blogPosts(sort: "created_at:desc", limit: 1) {
        id
        created_at
        title
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    cms: PropTypes.shape({
      blogPosts: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        created_at: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Blog;
