import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import SectionTitle from '@components/typography/SectionTitle';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import SpinButton from '@components/SpinButton';

const CustomColumn = styled(Col)`
  margin: 2rem 0;
`;

const CustomColumnFlexEnd = styled(CustomColumn)`
  margin: 2rem 0;
  display: flex;
  justify-content: flex-end;
`;

const ColumnBox = styled.div`
  background: var(--white);
  box-shadow: 0 0 1.563rem var(--shadow);
  border-radius: 0.5rem;
  padding: 1.875rem 1.438rem;
  height: 100%;
`;

const ColumnTitle = styled.h3`
  ${BasicText}
  font-size: 1.5rem;
  font-weight: 700;
`;

const Li = styled.li`
  ${BasicText}
`;

const ApproachSection = ({ data }) => {
  const renderColumnList = (listData) => {
    return (
      <ul key={listData}>
        {listData.map((item) => {
          return <Li key={`${item}`}>{item}</Li>;
        })}
      </ul>
    );
  };

  const renderColumns = () => {
    return data.map((item, index) => {
      const { id, title, description } = item;
      return (
        <CustomColumn
          md={6}
          lg={4}
          xl={3}
          key={`${id}-${title}`}
          data-sal="slide-up"
          data-sal-easing="easeOutCubic"
          data-sal-delay={100 * index}
        >
          <ColumnBox>
            <ColumnTitle primary>{title}</ColumnTitle>
            {description.map((el) => {
              return typeof el === 'string' ? (
                <Paragraph key={el}>{el}</Paragraph>
              ) : (
                renderColumnList(el)
              );
            })}
          </ColumnBox>
        </CustomColumn>
      );
    });
  };

  return (
    <SpinContainer>
      <Row>
        <Col>
          <SectionTopTitle>Approach</SectionTopTitle>
          <SectionTitle coloredStrong>
            How do we do <strong>it</strong>?
          </SectionTitle>
          <Paragraph>
            We&apos;ve learned to simplify complicated things as much as possible, yet to still
            maintain flexibility and attention to detail.
          </Paragraph>
        </Col>
      </Row>
      <Row>{renderColumns()}</Row>
      <Row>
        <Col>
          <Paragraph>
            In spinbits, we understand how important it is to be agile and open - that’s why we
            won’t impose any approach. If you would like to work on the project your way - we are
            ready to talk about that! We’ve worked on dozens of various projects - we are sure that
            we will find a common language.
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <CustomColumnFlexEnd>
          {/* TODO: url do modala */}
          <SpinButton url="/">Free project estimation</SpinButton>
        </CustomColumnFlexEnd>
      </Row>
    </SpinContainer>
  );
};

ApproachSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    })
  ).isRequired,
};

ApproachSection.defaultProps = {};

export default ApproachSection;
