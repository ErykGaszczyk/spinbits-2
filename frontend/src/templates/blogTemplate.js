import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
  const { title, created_at, picture, content } = data.cms.blogPost;

  const renderArticleHeading = () => {
    const { url, name } = picture;
    return (
      <div>
        <h1>{title}</h1>
        {/* TODO: from .env????? */}
        <img width="500" src={`${process.env.IMAGES_URL}${url}`} alt={name} />
        <p>{created_at}</p>
      </div>
    );
  };

  const renderArticleContent = () => {
    return content.map((item) => {
      if (item.__typename === 'CMS_ComponentBlogSimpleText') {
        return <p key={`${item.__typename}-${item.id}`}>{item.text}</p>;
      }
      if (item.__typename === 'CMS_ComponentBlogParagraph') {
        return (
          <div key={`${item.__typename}-${item.id}`}>
            <h3>{item.title}</h3>
            <p markdown="1">{item.text}</p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
      <div>
        {renderArticleHeading()}
        {renderArticleContent()}
      </div>
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
