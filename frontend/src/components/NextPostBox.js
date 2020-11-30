import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import { Link } from 'gatsby';
import PostDate from '@helpers/PostDate';

const TagParagraph = styled.p`
  ${BasicText}
  color: var(--secondary-font-color);
`;

const TitleParagraph = styled.h3`
  ${BasicText}
  color: var(--primary-font-color);
  font-size: 1.75rem;
`;

const ColumnBox = styled.div`
  min-height: 21.875rem; // 350px
  padding: 3.75rem 2.188rem; // 60px 35px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--blog-list-box-bg);
`;

const NextPostBox = ({ id, title, date }) => {
  return (
    <Link to={`/blog/${id}`}>
      <ColumnBox>
        <div>
          <TagParagraph>
            {/* TODO: */}
            {/* Technologie trzeba dorobić w strapi */}
          </TagParagraph>
          <TitleParagraph bold hover>
            {title}
          </TitleParagraph>
        </div>
        <Paragraph>{PostDate(date)}</Paragraph>
      </ColumnBox>
    </Link>
  );
};

NextPostBox.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

NextPostBox.defaultProps = {
  id: '',
  title: '',
  date: '',
};

export default NextPostBox;
