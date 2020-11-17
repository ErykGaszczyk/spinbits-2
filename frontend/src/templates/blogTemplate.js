import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const Template = ({ data }) => {
  const { title, created_at, picture, content } = data.cms.blogPost;

  const changeDate = (date) => {
    const currentDate = new Date(date);
    const year = currentDate.getFullYear();
    const monthsNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthsNames[currentDate.getMonth()];
    const day = currentDate.getDate();

    return <h2>{`${day} ${month} ${year}`}</h2>;
  };

  const renderArticleHeading = () => {
    if (picture !== null) {
      const { url, name, id } = picture;

      <div key={`${id}-${name}`}>
        <h1>{title}</h1>
        {/* TODO: from .env????? */}
        <img width="500" src={`${process.env.IMAGES_URL}${url}`} alt={name} />
        {changeDate(created_at)}
      </div>;
    }
    return null;
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
            <ReactMarkdown>{item.text}</ReactMarkdown>
          </div>
        );
      }
      return null;
    });
  };

  const renderArticle = () => {
    return [renderArticleHeading(), renderArticleContent()];
  };

  return (
    <>
      <ul>
        <li>
          <Link to="/">home</Link>
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
