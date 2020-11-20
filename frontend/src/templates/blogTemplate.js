import React from 'react';
import { H1 } from '@components/typography/Title.styled';
import Layout from '@components/Layout';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SectionTitle from '@components/typography/SectionTitle';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import { P } from '@components/typography/Paragraph.styled';
import NextPostBox from '@components/NextPostBox';

const ContentRow = styled(Row)`
  margin: 2rem 0 0 0;
  justify-content: space-between;
`;

const CustomMarkdown = styled(ReactMarkdown)`
  color: var(--thirdary-font-color);
`;

const SidePostBox = styled.div`
  margin: 0 0 2rem 0;
`;

const ArticleTitle = styled(H1)`
  color: var(--secondary-font-color);
`;

const SimpleTextParagraph = styled(P)`
  color: var(--thirdary-font-color);
`;

const BlogSubtitleParagraph = styled(P)`
  color: var(--secondary-font-color);
  font-size: 1.2rem;
`;

const Template = ({ data }) => {
  const renderParagraphUnderTitle = () => {
    const { content } = data.cms.blogPost;

    if (content[0] && content[0].__typename === 'CMS_ComponentBlogSimpleText') {
      return <SimpleTextParagraph>{content[0].text}</SimpleTextParagraph>;
    }
    return null;
  };

  const renderArticleHeading = () => {
    const { title, id } = data.cms.blogPost;

    return (
      <div key={`${id}-${title}`}>
        <ArticleTitle>{title}</ArticleTitle>
        {renderParagraphUnderTitle()}
      </div>
    );
  };

  const renderArticlePicture = () => {
    const { name, url } = data.cms.blogPost.picture;
    return <img width="100%" src={`${process.env.IMAGES_URL}${url}`} alt={name} />;
  };

  const renderComponentBlogSimpleText = (content) => {
    const { id, __typename, text } = content;
    return <SimpleTextParagraph key={`${id}-${__typename}`}>{text}</SimpleTextParagraph>;
  };

  const renderComponentBlogParagraph = (content) => {
    const { id, __typename, title, text } = content;
    return (
      <div key={`${id}-${__typename}`}>
        <BlogSubtitleParagraph>{title}</BlogSubtitleParagraph>
        <CustomMarkdown>{text}</CustomMarkdown>
      </div>
    );
  };

  const renderArticleContent = () => {
    const { content } = data.cms.blogPost;
    const blogContentWithoutFirstSimpleText = [...content];

    if (content[0] && content[0].__typename === 'CMS_ComponentBlogSimpleText') {
      blogContentWithoutFirstSimpleText.shift();
    }

    const functionMap = {
      CMS_ComponentBlogSimpleText: renderComponentBlogSimpleText,
      CMS_ComponentBlogParagraph: renderComponentBlogParagraph,
    };

    return blogContentWithoutFirstSimpleText.map((item) => {
      if (typeof functionMap[item.__typename] === 'undefined') {
        throw new Error(`${item.__typename} type is unsupported`);
      }
      const renderFunction = functionMap[item.__typename];
      const returnValue = renderFunction(item);

      return returnValue;
    });
  };

  const renderSidePosts = () => {
    const { title: currentPostTitle } = data.cms.blogPost;
    const { blogPosts: sidePosts } = data.nextPosts;
    return sidePosts
      .filter((item) => {
        return item.title !== currentPostTitle;
      })
      .map((el) => {
        const { id, title: sidePostTitle, publishedAt } = el;
        return (
          <SidePostBox key={`${id}-${sidePostTitle}`}>
            <NextPostBox id={id} title={sidePostTitle} date={publishedAt} />
          </SidePostBox>
        );
      });
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col sm="12">
            <SectionTitle>Blog</SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            {renderArticleHeading()}
          </Col>
          <Col xs={12} lg={6}>
            {renderArticlePicture()}
          </Col>
        </Row>
        <ContentRow>
          <Col lg={7} xl={8}>
            {renderArticleContent()}
          </Col>
          <Col lg={5} xl={4}>
            {renderSidePosts()}
          </Col>
        </ContentRow>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query blogPost($id: ID!) {
    cms {
      blogPost(id: $id) {
        id
        title
        publishedAt: published_at
        picture {
          url
          name
          id
        }
        content {
          ... on CMS_ComponentBlogParagraph {
            id
            text
            title
          }
          ... on CMS_ComponentBlogSimpleText {
            id
            text
          }
        }
        created_at
      }
    }
    nextPosts: cms {
      blogPosts(sort: "published_at:desc", limit: 4) {
        id
        title
        publishedAt: published_at
      }
    }
  }
`;

Template.propTypes = {
  data: PropTypes.shape({
    cms: PropTypes.shape({
      blogPost: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        publishedAt: PropTypes.string,
        content: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            __typename: PropTypes.string,
          })
        ),
        picture: PropTypes.shape({
          id: PropTypes.string,
          url: PropTypes.string,
          name: PropTypes.string,
        }),
      }),
    }),
    nextPosts: PropTypes.shape({
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

export default Template;
