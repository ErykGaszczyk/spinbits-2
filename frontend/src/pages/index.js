import React from 'react';
import Test from '@components/Test';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../styles';

const randomColor = Math.floor(Math.random() * 16777215).toString(16);

const PostDiv = styled.div`
  margin: 0 0 5rem 0;
  background-color: #${randomColor};
`;

const Home = () => {
  const data = useStaticQuery(graphql`
    query getBlogPosts {
      cms {
        blogPosts {
          id
          title
          created_at
        }
      }
    }
  `);

  const { blogPosts } = data.cms;

  const renderMenu = () => {
    return (
      <ul>
        {blogPosts.map((item) => {
          return (
            <li key={`${item.id}-${Math.random()}`}>
              <a href={`/blog/${item.id}`}>{`blog article: ${item.title}`}</a>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderCustomMeta = () => {
    return blogPosts.map((item) => {
      return (
        <PostDiv key={`${item.id}-${Math.random()}`}>
          <p>ID: {item.id}</p>
          <p>
            Post Title: {item.title}, Created {item.created_at}
          </p>
        </PostDiv>
      );
    });
  };

  return (
    <>
      <GlobalStyle />
      {renderMenu()}
      <Test title="Hello Mando!" />
      {renderCustomMeta()}
    </>
  );
};

export default Home;
