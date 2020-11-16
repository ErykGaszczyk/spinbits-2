import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
  const { title, created_at, picture } = data.cms.blogPost;

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

  return (
    <>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
      </ul>
      <div>
        <div />
      </div>
      <div />
      <div>{renderArticleHeading()}</div>
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
