import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Collapse } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { P } from '@components/typography/Paragraph.styled';
import { StaticQuery, graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import SpinButton from '@components/SpinButton';

const MainTitle = styled(P)`
  font-size: 2.063rem;
  font-weight: 900;
  color: var(--primary-font-color);

  strong {
    color: var(--light-font-color);
  }
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

  :focus {
    outline: none;
  }

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
  color: var(--light-font-color);
  padding: 1rem;

  strong {
    font-weight: normal;
    color: var(--white);
  }
`;

const Faq = ({ data }) => {
  const renderAccordion = () => {
    const { faqs } = data.cms;

    return faqs.map((item, index) => {
      const [isOpen, setIsOpen] = useState(false);
      const { id, title, content } = item;
      return (
        <AccordionContainer
          key={`${id}-${title}`}
          data-sal="slide-up"
          data-sal-easing="easeOutCubic"
          data-sal-delay={100 * index}
        >
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
    <SpinContainer id="faq">
      <Row>
        <Col data-sal="slide-down" data-sal-easing="easeOutCubic">
          <SectionTopTitle>FAQ</SectionTopTitle>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={5} data-sal="slide-right" data-sal-easing="easeOutCubic">
          <MainTitle>
            Any <strong>questions?</strong> Don&apos;t hesitate to ask us
          </MainTitle>
          {/* {TODO: add <a href/>} */}
          <SpinButton url="/">Ask a question</SpinButton>
        </Col>
        <Col xs={12} lg={7}>
          {renderAccordion()}
        </Col>
      </Row>
    </SpinContainer>
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
