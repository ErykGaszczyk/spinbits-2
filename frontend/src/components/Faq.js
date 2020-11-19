import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col, Collapse } from '@bootstrap-styled/v4';
import SectionTitle from '@components/typography/SectionTitle';
import { P } from '@components/typography/Paragraph.styled';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const Title = styled(P)`
  font-size: 2.063rem;
  color: var(--primary-font-color);
`;

const SideButton = styled.button`
  background-color: var(--secondary-font-color);
  padding: 1.063rem 2.5rem; // 17px 40px
  border-radius: 0.313rem; // 5px
  transition: 0.5s;
  border: none;
  color: #fff;
`;

const AccordionBox = styled.div`
  margin: 0 0 1rem 0;
`;

const CustomButton = styled.button`
  background-color: #f1f5ff;
  padding: 23px;
  color: var(--primary-font-color);
  font-size: 20px;
  width: 100%;
  ${(props) => (props.isOpen ? 'border-radius: 8px 8px 0 0' : 'border-radius: 8px')};
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

const ContentParagraph = styled(ReactMarkdown)`
  background-color: var(--primary-font-color);
  border-radius: 0 0 8px 8px;
  /* color: var(--secondary-font-color); */
  color: #5acdfb;
  padding: 1rem;

  strong {
    font-weight: normal;
    color: white;
  }
`;

const Faq = ({ data }) => {
  const renderAccordion = () => {
    const { faqs } = data.cms;

    return faqs.map((item) => {
      const [isOpen, setIsOpen] = useState(false);
      const { id, title, content } = item;
      return (
        <AccordionBox key={`${id}-${title}`}>
          <CustomButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <p>{title}</p>
            <span>{isOpen ? '-' : '+'}</span>
          </CustomButton>
          <Collapse isOpen={isOpen}>
            <ContentParagraph>{content}</ContentParagraph>
          </Collapse>
        </AccordionBox>
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
          <Title>
            Any <strong>questions?</strong> Don&apos;t hesitate to ask us
          </Title>
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
