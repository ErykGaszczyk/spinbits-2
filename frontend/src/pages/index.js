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

const Li = styled.li`
  margin: 0 0 2rem 0;

  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
`;

const Home = () => {
  const data = useStaticQuery(graphql`
    query getBlogPosts {
      cms {
        blogPosts {
          id
          title
          created_at
          test {
            ... on CMS_ComponentBlogCustomMeta {
              id
              key
              value
            }
            ... on CMS_ComponentBlogAuthor {
              picture {
                id
                url
              }
              Name
            }
          }
        }
      }
    }
  `);

  const { blogPosts } = data.cms;

  const renderCustomMeta = () => {
    return blogPosts.map((item) => {
      return (
        <PostDiv key={`${item.id}-${Math.random()}`}>
          <p>ID: {item.id}</p>
          <p>
            Post Title: {item.title}, Created {item.created_at}
          </p>
          <p>Post content:</p>
          <ul>
            {item.test
              .filter((el) => el.__typename === 'CMS_ComponentBlogCustomMeta')
              .map((filteredItems) => {
                return (
                  <Li key={`${item.id}-${Math.random()}`}>
                    <table>
                      <tbody>
                        <tr>
                          <th>id</th>
                          <th>key</th>
                          <th>value</th>
                        </tr>
                        <tr>
                          <td>{filteredItems.id}</td>
                          <td>{filteredItems.key}</td>
                          <td>{filteredItems.value}</td>
                        </tr>
                      </tbody>
                    </table>
                  </Li>
                );
              })}
          </ul>
          <>
            {item.test
              .filter((el) => el.__typename === 'CMS_ComponentBlogAuthor')
              .map((filteredItems) => {
                return (
                  <div key={`${filteredItems.Name}-${Math.random()}`}>
                    <p>Author Name: {filteredItems.Name}</p>
                    <img
                      src={
                        filteredItems.picture === null
                          ? `https://via.placeholder.com/600x200/000000/FFFFFF/?text=Author: ${filteredItems.Name}`
                          : `http://localhost:1337${filteredItems.picture.url}`
                      }
                      alt={filteredItems.Name}
                    />
                  </div>
                );
              })}
          </>
        </PostDiv>
      );
    });
  };

  return (
    <>
      <GlobalStyle />
      <Test title="Hello Mando!" />
      {renderCustomMeta()}
    </>
  );
};

export default Home;
