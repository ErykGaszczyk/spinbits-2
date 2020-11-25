import React from 'react';
import styled from 'styled-components';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import SectionTitle from '@components/typography/SectionTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import Paragraph from '@components/typography/Paragraph';
import { P } from '@components/typography/Paragraph.styled';
import Testimonial from '@images/testimonials/testimo.webp';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Img = styled.img`
  width: 100%;
  margin: 3rem 0 0 0;
`;

const TestimonialBox = styled.div`
  padding: 25px 28px;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 17, 100, 0.1);
  border-radius: 8px;
  letter-spacing: -0.2px;
  margin: 0 0 1rem 0;
`;

const TestimonialParagraph = styled(P)`
  font-family: 'Playfair Display';
  font-weight: 400;
  line-height: 30px;
  color: var(--primary-font-color);
`;

const AuthorParagraph = styled(P)`
  font-weight: 700;
  color: var(--testimonial-author-color);
`;

const FontAwesome = styled(FontAwesomeIcon)`
  color: var(--testimonial-stars-color);
`;

const TestimonialsSection = () => {
  const testimonialData = [
    {
      id: 1,
      text: `We were looking for a company that will build our new website for many, long months. I am very pleased that this company was spinbits. I appreciate honesty, individual approach, budget, and technology consulting. We&apos;ve also received more features and updates than expected - as a bonus from spinbits. Eryk, as a Project Manager proposed solutions to our problems, shared his experience on IT and marketing during the project. We&apos;re very happy with the results and our cooperation. We can recommend spinbits`,
      author: `1`,
      position: `Founder, cos tam cos tam`,
      stars: 5,
    },
    {
      id: 2,
      text: `We were looking for a company that will build our new website for many, long months. I am very pleased that this company was spinbits. I appreciate honesty, individual approach, budget, and technology consulting. We&apos;ve also received more features and updates than expected - as a bonus from spinbits. Eryk, as a Project Manager proposed solutions to our problems, shared his experience on IT and marketing during the project. We&apos;re very happy with the results and our cooperation. We can recommend spinbits`,
      author: `2`,
      position: `Founder, cos tam cos tam`,
      stars: 5,
    },
    {
      id: 3,
      text: `We were looking for a company that will build our new website for many, long months. I am very pleased that this company was spinbits. I appreciate honesty, individual approach, budget, and technology consulting. We&apos;ve also received more features and updates than expected - as a bonus from spinbits. Eryk, as a Project Manager proposed solutions to our problems, shared his experience on IT and marketing during the project. We&apos;re very happy with the results and our cooperation. We can recommend spinbits`,
      author: `3`,
      position: `Founder, cos tam cos tam`,
      stars: 3,
    },
    {
      id: 4,
      text: `We were looking for a company that will build our new website for many, long months. I am very pleased that this company was spinbits. I appreciate honesty, individual approach, budget, and technology consulting. We&apos;ve also received more features and updates than expected - as a bonus from spinbits. Eryk, as a Project Manager proposed solutions to our problems, shared his experience on IT and marketing during the project. We&apos;re very happy with the results and our cooperation. We can recommend spinbits`,
      author: `4`,
      position: `Founder, cos tam cos tam`,
      stars: 5,
    },
    {
      id: 5,
      text: `We were looking for a company that will build our new website for many, long months. I am very pleased that this company was spinbits. I appreciate honesty, individual approach, budget, and technology consulting. We&apos;ve also received more features and updates than expected - as a bonus from spinbits. Eryk, as a Project Manager proposed solutions to our problems, shared his experience on IT and marketing during the project. We&apos;re very happy with the results and our cooperation. We can recommend spinbits`,
      author: `5`,
      position: `Founder, cos tam cos tam`,
      stars: 5,
    },
    {
      id: 6,
      text: `We were looking for a company that will build our new website for many, long months. I am very pleased that this company was spinbits. I appreciate honesty, individual approach, budget, and technology consulting. We&apos;ve also received more features and updates than expected - as a bonus from spinbits. Eryk, as a Project Manager proposed solutions to our problems, shared his experience on IT and marketing during the project. We&apos;re very happy with the results and our cooperation. We can recommend spinbits`,
      author: `6`,
      position: `Founder, cos tam cos tam`,
      stars: 5,
    },
    {
      id: 7,
      text: `We were looking for a company that will build our new website for many, long months. I am very pleased that this company was spinbits. I appreciate honesty, individual approach, budget, and technology consulting. We&apos;ve also received more features and updates than expected - as a bonus from spinbits. Eryk, as a Project Manager proposed solutions to our problems, shared his experience on IT and marketing during the project. We&apos;re very happy with the results and our cooperation. We can recommend spinbits`,
      author: `7`,
      position: `Founder, cos tam cos tam`,
      stars: 5,
    },
  ];

  const renderStars = (num) => {
    let n = 0;
    const arr = [];
    while (n < num) {
      n += 1;
      arr.push(n);
    }
    return arr.map(() => {
      return <FontAwesome icon={faStar} />;
    });
  };

  const renderTestimonials = () => {
    const rows = testimonialData.reduce((row, key, index) => {
      return (index % 2 === 0 ? row.push([key]) : row[row.length - 1].push(key)) && row;
    }, []);

    return rows.map((row) => {
      const { id, text, author, position, stars } = row[0] && row[0];
      const { id: id2, text: text2, author: author2, position: position2, stars: stars2 } =
        typeof row[1] !== 'undefined' && row[1];

      return (
        <Col lg={6} key={`${id}-${id2}`}>
          <TestimonialBox>
            <TestimonialParagraph>{text}</TestimonialParagraph>
            <AuthorParagraph>{author}</AuthorParagraph>
            <Paragraph>{position}</Paragraph>
            {renderStars(stars)}
          </TestimonialBox>
          {row[1] && (
            <TestimonialBox>
              <TestimonialParagraph>{text2}</TestimonialParagraph>
              <AuthorParagraph>{author2}</AuthorParagraph>
              <Paragraph>{position2}</Paragraph>
              {renderStars(stars2)}
            </TestimonialBox>
          )}
        </Col>
      );
    });
  };

  return (
    <SpinContainer>
      <Row>
        <Col lg={8}>
          <Row>
            {/* {renderTestimonials()} */}
            <Col lg={6}>
              <TestimonialBox>
                <TestimonialParagraph>
                  We were looking for a company that will build our new website for many, long
                  months. I am very pleased that this company was spinbits. I appreciate honesty,
                  individual approach, budget, and technology consulting. We&apos;ve also received
                  more features and updates than expected - as a bonus from spinbits. Eryk, as a
                  Project Manager proposed solutions to our problems, shared his experience on IT
                  and marketing during the project. We&apos;re very happy with the results and our
                  cooperation. We can recommend spinbits!
                </TestimonialParagraph>
                <AuthorParagraph>Dominik Groch</AuthorParagraph>
                <Paragraph>Founder, cos tam cos tam</Paragraph>
                <FontAwesome icon={faStar} />
              </TestimonialBox>
              <TestimonialBox>
                <TestimonialParagraph>
                  We were looking for a company that will build our new website for many, long
                  months. I am very pleased that this company was spinbits. I appreciate honesty,
                  individual approach, budget, and technology consulting. We&apos;ve also received
                  more features and updates than expected - as a bonus from spinbits. Eryk, as a
                  Project Manager proposed solutions to our problems, shared his experience on IT
                  and marketing during the project. We&apos;re very happy with the results and our
                  cooperation. We can recommend spinbits!
                </TestimonialParagraph>
                <AuthorParagraph>Dominik Groch</AuthorParagraph>
                <Paragraph>Founder, cos tam cos tam</Paragraph>
                <FontAwesome icon={faStar} />
              </TestimonialBox>
            </Col>
            <Col lg={6}>
              <TestimonialBox>
                <TestimonialParagraph>
                  We were looking for a company that will build our new website for many, long
                  months. I am very pleased that this company was spinbits. I appreciate honesty,
                  individual approach, budget, and technology consulting. We&apos;ve also received
                  more features and updates than expected - as a bonus from spinbits. Eryk, as a
                  Project Manager proposed solutions to our problems, shared his experience on IT
                  and marketing during the project. We&apos;re very happy with the results and our
                  cooperation. We can recommend spinbits!
                </TestimonialParagraph>
                <AuthorParagraph>Dominik Groch</AuthorParagraph>
                <Paragraph>Founder, cos tam cos tam</Paragraph>
                <FontAwesome icon={faStar} />
              </TestimonialBox>
              <TestimonialBox>
                <TestimonialParagraph>
                  We were looking for a company that will build our new website for many, long
                  months. I am very pleased that this company was spinbits. I appreciate honesty,
                  individual approach, budget, and technology consulting. We&apos;ve also received
                  more features and updates than expected - as a bonus from spinbits. Eryk, as a
                  Project Manager proposed solutions to our problems, shared his experience on IT
                  and marketing during the project. We&apos;re very happy with the results and our
                  cooperation. We can recommend spinbits!
                </TestimonialParagraph>
                <AuthorParagraph>Dominik Groch</AuthorParagraph>
                <Paragraph>Founder, cos tam cos tam</Paragraph>
                <FontAwesome icon={faStar} />
              </TestimonialBox>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <SectionTopTitle>Testimonials</SectionTopTitle>
          <SectionTitle coloredStrong>
            See what our customers and <strong>partners</strong> say about us
          </SectionTitle>
          <Img src={Testimonial} alt="Spinbits - Testimonial" />
        </Col>
      </Row>
    </SpinContainer>
  );
};

TestimonialsSection.propTypes = {};

TestimonialsSection.defaultProps = {};

export default TestimonialsSection;
