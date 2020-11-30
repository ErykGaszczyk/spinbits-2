import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from '@bootstrap-styled/v4';
import ReactMarkdown from 'react-markdown';

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

const SpinAccordion = ({ data }) => {
  return data.map((item, index) => {
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
          {content && <span>{isOpen ? '-' : '+'}</span>}
        </CustomButton>
        {content && (
          <Collapse isOpen={isOpen}>
            <ContentParagraph>{content}</ContentParagraph>
          </Collapse>
        )}
      </AccordionContainer>
    );
  });
};

export default SpinAccordion;
