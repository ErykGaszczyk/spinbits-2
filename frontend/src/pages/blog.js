import React from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '@components/Layout';
import Title from '@components/typography/Title';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph from '@components/typography/Paragraph';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import FirstPostBg from '@static/images/blog/1st-blog-bg.webp';
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

export const ColumnBox = styled.div`
  min-height: 21.875rem; // 350px
  padding: 3.75rem 2.188rem; // 60px 35px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--blog-list-box-bg);
`;

const CustomRow = styled(Row)`
  margin: 0 0 1rem 0;
`;

const CustomCol = styled(Col)`
  margin: 0 0 1rem 0;
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
          <Link to={`/blog/${id}`}>
            <ColumnBox>
              <div>
                <Paragraph customStyles={{ fontColor: 'var(--secondary-font-color)', mb: 1 }}>
                  {/* TODO: */}
                  Technologie trzeba dorobić w strapi
                </Paragraph>
                <Paragraph
                  bold
                  hover
                  customStyles={{ fontColor: 'var(--primary-font-color)', fontSize: 1.75 }}
                >
                  {title}
                </Paragraph>
              </div>
              <Paragraph>{PostDate(publishedAt)}</Paragraph>
            </ColumnBox>
          </Link>
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
                <Title hover customStyles={{ fontColor: 'var(--primary-font-color)' }}>
                  {firstPost.title}
                </Title>
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
