import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { TitleText } from '@components/typography/Title';
import Layout from '@components/Layout';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import NextPostBox from '@components/NextPostBox';
import ContactFormSection from '@components/sections/ContactFormSection';
import Faq from '@components/Faq';
import { SpinContainer } from '@components/overrides';
import ReactMarkdown from 'react-markdown';
import { Row, Col } from '@bootstrap-styled/v4';

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

const ArticleTitle = styled.h1`
  ${TitleText}
  color: var(--secondary-font-color);
`;

const BlogSubtitleParagraph = styled.h3`
  ${BasicText}
  color: var(--secondary-font-color);
  font-size: 1.2rem;
`;

const Template = ({ data }) => {
  const renderParagraphUnderTitle = () => {
    const { content } = data.cms.blogPost;

    if (content[0] && content[0].__typename === 'CMS_ComponentBlogSimpleText') {
      return <Paragraph>{content[0].text}</Paragraph>;
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
    return (
      <Paragraph key={`${id}-${__typename}`} data-sal="slide-up" data-sal-easing="easeOutCubic">
        {text}
      </Paragraph>
    );
  };

  const renderComponentBlogParagraph = (content) => {
    const { id, __typename, title, text } = content;
    return (
      <div key={`${id}-${__typename}`} data-sal="slide-up" data-sal-easing="easeOutCubic">
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
          <SidePostBox
            key={`${id}-${sidePostTitle}`}
            data-sal="slide-left"
            data-sal-easing="easeOutCubic"
          >
            <NextPostBox id={id} title={sidePostTitle} date={publishedAt} />
          </SidePostBox>
        );
      });
  };

  return (
    <Layout>
      <SpinContainer>
        <Row data-sal="slide-down" data-sal-easing="easeOutCubic">
          <Col sm="12">
            <SectionTopTitle>Blog</SectionTopTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} data-sal="slide-up" data-sal-easing="easeOutCubic">
            {renderArticleHeading()}
          </Col>
          <Col xs={12} lg={6} data-sal="slide-left" data-sal-easing="easeOutCubic">
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
      </SpinContainer>
      <Faq />
      <ContactFormSection />
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
