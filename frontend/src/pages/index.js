import React from 'react';
import Test from '@components/Test';
import { useStaticQuery, graphql } from 'gatsby';
import GlobalStyle from '../styles';

const Home = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      cms {
        blogPosts {
          id
          title
          test {
            ... on CMS_ComponentBlogCustomMeta {
              id
              key
              value
            }
            ... on CMS_ComponentBlogAuthor {
              picture {
                id
              }
              Name
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <GlobalStyle />
      <Test title="Hello Mando!" />
      {console.log(data)}
    </div>
  );
};

export default Home;
