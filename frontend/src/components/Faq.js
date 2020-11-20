import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Collapse } from '@bootstrap-styled/v4';
import SectionTitle from '@components/typography/SectionTitle';
import { P } from '@components/typography/Paragraph.styled';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const MainTitle = styled(P)`
  font-size: 2.063rem;
  color: var(--primary-font-color);
`;

const SideButton = styled.button`
  background-color: var(--secondary-font-color);
  padding: 1.063rem 2.5rem; // 17px 40px
  border-radius: 0.313rem; // 5px
  transition: 0.5s;
  border: none;
  color: var(--white);
`;

const AccordionContainer = styled.div`
  margin: 0 0 1rem 0;
`;

const CustomButton = styled.button`
  color: var(--primary-font-color);
  background-color: var(--blog-list-box-bg);
  padding: 1.438rem; //23px;
  font-size: 1.25rem; //20px;
  font-weight: 800;
  width: 100%;
  border-radius: ${(props) => (props.isOpen ? '0.5rem 0.5rem 0 0' : '0.5rem')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    cursor: pointer;
    p {
      color: var(--secondary-font-color);
    }
  }

  p {
    margin: 0;
    transition: 0.5s;
  }
`;

const ContentParagraph = styled(ReactMarkdown)`
  background-color: var(--primary-font-color);
  border-radius: 0 0 8px 8px;
  color: var(--accordion-content-font-color);
  padding: 1rem;

  strong {
    font-weight: normal;
    color: var(--white);
  }
`;

const Faq = ({ data }) => {
  const renderAccordion = () => {
    const { faqs } = data.cms;

    return faqs.map((item) => {
      const [isOpen, setIsOpen] = useState(false);
      const { id, title, content } = item;
      return (
        <AccordionContainer key={`${id}-${title}`}>
          <CustomButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <p>{title}</p>
            <span>{isOpen ? '-' : '+'}</span>
          </CustomButton>
          <Collapse isOpen={isOpen}>
            <ContentParagraph>{content}</ContentParagraph>
          </Collapse>
        </AccordionContainer>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <SectionTitle>FAQ</SectionTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={5}>
          <MainTitle>
            Any <strong>questions?</strong> Don&apos;t hesitate to ask us
          </MainTitle>
          {/* {TODO: add <a href/>} */}
          <SideButton type="button">Ask a question</SideButton>
        </Col>
        <Col xs={12} lg={7}>
          {renderAccordion()}
        </Col>
      </Row>
    </Container>
  );
};

export default function MyFaq() {
  return (
    <StaticQuery
      query={graphql`
        query {
          cms {
            faqs {
              content
              title
              id
            }
          }
        }
      `}
      render={(data) => <Faq data={data} />}
    />
  );
}

Faq.propTypes = {
  data: PropTypes.shape({
    cms: PropTypes.shape({
      faqs: PropTypes.arrayOf(
        PropTypes.shape({
          content: PropTypes.string,
          title: PropTypes.string,
          id: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};

Faq.defaultProps = {};
