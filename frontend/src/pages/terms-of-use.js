import React from 'react';
import styled from 'styled-components';
import Layout from '@components/Layout';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import { data } from '@utils/pages/terms-of-use-data';
import { DEVICE } from '@assets/const';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const { LG } = DEVICE;

const SideBox = styled.div`
  @media ${LG} {
    position: sticky;
    top: 7rem; // Layout -> ChildrenContainter -> padding
  }
`;

const MenuItem = styled(AnchorLink)`
  ${BasicText}
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  display: block;
`;

const ContentBox = styled.div`
  :not(:last-child) {
    margin: 0 0 3rem 0;
  }
`;

const termsOfUse = () => {
  const renderSideMenu = () => {
    return data.map((item) => {
      const { id, menuTitle, title, anchor } = item;
      return (
        menuTitle !== '' &&
        menuTitle !== undefined && (
          <MenuItem to={`/terms-of-use#${anchor}`} key={`${id}-${title}`} hover primary>
            {menuTitle}
          </MenuItem>
        )
      );
    });
  };

  const renderTermsContent = () => {
    return data.map((item) => {
      const { id, title, description, anchor } = item;
      const anchorId = anchor !== '' && anchor !== undefined ? anchor : undefined;
      return (
        <ContentBox key={`${id}-${title}`} id={anchorId}>
          <Paragraph bold primary>
            {title}
          </Paragraph>
          <Paragraph>{description}</Paragraph>
        </ContentBox>
      );
    });
  };

  return (
    <Layout>
      <SpinContainer>
        <Row>
          <Col lg={5} xl={4}>
            <SideBox>
              <SectionTopTitle>Menu</SectionTopTitle>
              {renderSideMenu()}
            </SideBox>
          </Col>
          <Col lg={7} xl={8}>
            <Paragraph>Website Terms and Conditions of Use</Paragraph>
            {renderTermsContent()}
          </Col>
        </Row>
      </SpinContainer>
    </Layout>
  );
};

export default termsOfUse;
