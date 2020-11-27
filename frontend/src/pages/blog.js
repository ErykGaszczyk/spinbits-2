import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '@components/Layout';
import Title from '@components/typography/Title';
import { SpinContainer } from '@components/overrides';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import Paragraph from '@components/typography/Paragraph';
import { Row, Col } from '@bootstrap-styled/v4';
import FirstPostBg from '@images/blog/1st-blog-bg.webp';
import NextPostBox from '@components/NextPostBox';
import PostDate from '@helpers/PostDate';

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

const Blog = ({ data }) => {
  const { blogPosts } = data.cms;
  const blogPostsWithoutFirst = [...blogPosts];
  const firstPost = blogPostsWithoutFirst.shift();

  const renderColumns = () => {
    return blogPostsWithoutFirst.map((item, index) => {
      const { id, title, publishedAt } = item;

      return (
        <CustomCol
          key={`${id}-${publishedAt}`}
          lg="4"
          data-sal="slide-up"
          data-sal-easing="easeOutCubic"
          data-sal-delay={100 * index}
        >
          <NextPostBox id={id} title={title} date={publishedAt} />
        </CustomCol>
      );
    });
  };

  return (
    <Layout>
      <SpinContainer>
        <CustomRow>
          <Col sm="12" data-sal="slide-down" data-sal-easing="easeOutCubic">
            <SectionTopTitle>Blog</SectionTopTitle>
            <Link to="/blog/2">
              <FirstBlogBox>
                <Title hover>{firstPost.title}</Title>
                <Paragraph>{PostDate(firstPost.publishedAt)}</Paragraph>
              </FirstBlogBox>
            </Link>
          </Col>
        </CustomRow>
        <Row>{renderColumns()}</Row>
      </SpinContainer>
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
