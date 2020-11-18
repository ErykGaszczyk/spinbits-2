import React from 'react';
import Title from '@components/typography/Title';
import Layout from '@components/Layout';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import SectionTitle from '@components/typography/SectionTitle';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from '@bootstrap-styled/v4';
import styled from 'styled-components';
import Paragraph from '@components/typography/Paragraph';
// import PostDate from '../helpers/PostDate';

const ContentRow = styled(Row)`
  justify-content: space-between;
`;

const Template = ({ data }) => {
  const { title, picture } = data.cms.blogPost;

  const renderParagraphUnderTitle = () => {
    const { content } = data.cms.blogPost;

    if (content[0] && content[0].__typename === 'CMS_ComponentBlogSimpleText') {
      return <Paragraph>{content[0].text}</Paragraph>;
    }
    return null;
  };

  const renderArticleHeading = () => {
    const { name, id } = picture;

    return (
      <div key={`${id}-${name}`}>
        <Title customStyles={{ fontColor: 'var(--secondary-font-color)' }}>{title}</Title>
        {renderParagraphUnderTitle()}
      </div>
    );
  };

  const renderArticlePicture = () => {
    const { name, url } = picture;
    return <img width="100%" src={`${process.env.IMAGES_URL}${url}`} alt={name} />;
  };

  const renderArticleContent = () => {
    const { content } = data.cms.blogPost;
    const blogContentWithoutFirstSimpleText = [...content];

    if (content[0] && content[0].__typename === 'CMS_ComponentBlogSimpleText') {
      // eslint-disable-next-line
      const blogContent = blogContentWithoutFirstSimpleText.shift();
    }

    return blogContentWithoutFirstSimpleText.map((item) => {
      if (item.__typename === 'CMS_ComponentBlogSimpleText') {
        return <Paragraph key={`${item.__typename}-${item.id}`}>{item.text}</Paragraph>;
      }
      if (item.__typename === 'CMS_ComponentBlogParagraph') {
        return (
          <div key={`${item.__typename}-${item.id}`}>
            <h3>{item.title}</h3>
            <Paragraph>
              <ReactMarkdown>{item.text}</ReactMarkdown>
            </Paragraph>
          </div>
        );
      }
      return null;
    });
  };

  const renderArticle = () => {
    return (
      <Layout>
        <Container>
          <Row>
            <Col sm="12">
              <SectionTitle>Blog</SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col sm="6">{renderArticleHeading()}</Col>
            <Col sm="6">{renderArticlePicture()}</Col>
          </Row>
          <ContentRow>
            <Col sm={8}>{renderArticleContent()}</Col>
            <Col sm="3">
              <p>Inne artykuly</p>
            </Col>
          </ContentRow>
        </Container>
      </Layout>
    );
  };

  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
      </ul>
      <div>{renderArticle()}</div>
    </>
  );
};

export const pageQuery = graphql`
  query blogPost($id: ID!) {
    cms {
      blogPost(id: $id) {
        id
        title
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
  }
`;

Template.propTypes = {
  data: PropTypes.shape({
    cms: PropTypes.shape({
      blogPost: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        created_at: PropTypes.string,
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
  }).isRequired,
};

export default Template;
