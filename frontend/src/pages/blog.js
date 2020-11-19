import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '@components/Layout';
import { H1 } from '@components/typography/Title.styled';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph from '@components/typography/Paragraph';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import FirstPostBg from '@static/images/blog/1st-blog-bg.webp';
import NextPostBox from '@components/NextPostBox';
import PostDate from '../helpers/PostDate';

const FirstBlogBox = styled.div`
  background-image: url(${FirstPostBg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 25rem; // 400px
  height: 25rem; // 400px
  padding: 4.375rem 2.188rem; // 70px 35px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CustomRow = styled(Row)`
  margin: 0 0 1rem 0;
`;

const CustomCol = styled(Col)`
  margin: 0 0 1rem 0;
`;

const FirstPostTitle = styled(H1)`
  color: var(--primary-font-color);
`;

const Blog = ({ data }) => {
  const { blogPosts } = data.cms;
  const blogPostsWithoutFirst = [...blogPosts];
  const firstPost = blogPostsWithoutFirst.shift();

  const renderColumns = () => {
    return blogPostsWithoutFirst.map((item) => {
      const { id, title, publishedAt } = item;

      return (
        <CustomCol key={`${id}-${publishedAt}`} lg="4">
          <NextPostBox id={id} title={title} date={publishedAt} />
        </CustomCol>
      );
    });
  };

  return (
    <Layout>
      <Link to="/">home</Link>
      <Container>
        <CustomRow>
          <Col sm="12">
            <SectionTitle>Blog</SectionTitle>
            <Link to="/blog/2">
              <FirstBlogBox>
                <FirstPostTitle hover>{firstPost.title}</FirstPostTitle>
                <Paragraph>{PostDate(firstPost.publishedAt)}</Paragraph>
              </FirstBlogBox>
            </Link>
          </Col>
        </CustomRow>
        <Row>{renderColumns()}</Row>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogPostHeading {
    cms {
      blogPosts(sort: "published_at:desc") {
        id
        publishedAt: published_at
        title
      }
    }
  }
`;

Blog.propTypes = {
  data: PropTypes.shape({
    cms: PropTypes.shape({
      blogPosts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          publishedAt: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

export default Blog;
