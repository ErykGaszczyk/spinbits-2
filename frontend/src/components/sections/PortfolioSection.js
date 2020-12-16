import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import SectionTopTitle from '@components/typography/SectionTopTitle';
import SectionTitle from '@components/typography/SectionTitle';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import Paragraph, { BasicText } from '@components/typography/Paragraph';
import Portfolio from '@images/portfolio/portfolio.webp';
import AutomatedGaming from '@images/portfolio/automated-gameing.webp';
import CrmSolutions from '@images/portfolio/crm-solutions.webp';
import Legumi from '@images/portfolio/legumi.webp';
import Fintech from '@images/portfolio/p_1.webp';
import Ecommerce from '@images/portfolio/p_3.webp';
import EcoFriendly from '@images/portfolio/p_4.webp';
import ScreenLeagueApp from '@images/portfolio/screen_league_app.webp';
import Landing from '@images/portfolio/shell.webp';
import Plants from '@images/portfolio/plants.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MOBILE_BREAKPOINT } from '@assets/const';

const { md } = MOBILE_BREAKPOINT;

const Img = styled.img`
  width: 100%;
  margin: 3rem 0 0 0;
`;

const ItemBox = styled.div`
  background: var(--blog-list-box-bg);
  border-radius: 0.5rem;
  padding: 2.813rem 2.813rem 0;
  transition: 0.4s;
  margin: 0 0 2rem 0;

  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(1rem);
    border-radius: 1rem;
    max-width: 100%;
    height: auto;
  }
`;

const TechnologiesParagraph = styled.p`
  ${BasicText}
  font-size: 0.875rem; // 14px
  color: var(--secondary-font-color);
`;

const TechnologiesTitleParagraph = styled.h3`
  ${BasicText}
  font-size: 1.5rem; // 24px
  font-weight: 800;
`;

const TechnologiesColumn = styled.div`
  padding: 1rem;
`;

const TechnologiesLink = styled(Link)`
  &:hover {
    ${ItemBox} {
      background-color: var(--secondary-font-color);
    }
    ${TechnologiesParagraph} {
      color: var(--light-font-color);
    }
    ${TechnologiesTitleParagraph} {
      color: var(--white);
    }
  }
`;

const PortfolioSection = () => {
  const portfolioiData = [
    {
      id: 1,
      technologies: `PHP, Symfony, JavaScript, HTML, Figma, AWS`,
      title: `Fintech solution between the e-commerce platforms, customers and banks that lower payment fraud risks.`,
      img: `${Fintech}`,
    },
    {
      id: 2,
      technologies: `Fintech solution between the e-commerce platforms, customers and banks that lower payment fraud risks.`,
      title: `E-commerce for construction companies, hosting, support and maintenance.`,
      img: `${Ecommerce}`,
    },
    {
      id: 3,
      technologies: `PHP, Symfony, HTML, JavaScript`,
      title: `Age/grade verification for youth sports and efficient management tools protecting the integrity of teams, tournaments and leagues.`,
      img: `${ScreenLeagueApp}`,
    },
    {
      id: 4,
      technologies: `Wordpress, PHP, HTML/CSS`,
      title: `Eco friendly products e-commerce website.`,
      img: `${EcoFriendly}`,
    },
    {
      id: 5,
      technologies: `JavaScript, Node.js, Flutter, Figma, AWS`,
      title: `Mobile application serving as a multi-brand shopping basket.`,
      img: `${Legumi}`,
    },
    {
      id: 6,
      technologies: `PHP, WP, MySQL, HTML/CSS`,
      title: `Landing and marketing website for law firm located in Warsaw, Poland.`,
      img: `${Landing}`,
    },
    {
      id: 7,
      technologies: `PHP, JS, GraphQL, AWS`,
      title: `Sustainable plant and home decor e-commerce.`,
      img: `${Plants}`,
    },
    {
      id: 8,
      technologies: `PHP, Wordpress, JS, AWS, C#, .net`,
      title: `Automated gaming platform integrated with multiple vendors and services.`,
      img: `${AutomatedGaming}`,
    },
    {
      id: 9,
      technologies: `Java, C#, .net, JS`,
      title: `CRM/ERP solution + integration with various existing platforms and services.`,
      img: `${CrmSolutions}`,
    },
  ];

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: md,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderPortfolioCols = () => {
    const rows = portfolioiData.reduce((row, key, index) => {
      return (index % 2 === 0 ? row.push([key]) : row[row.length - 1].push(key)) && row;
    }, []);

    return rows.map((row) => {
      const { id, technologies, title, img } = row[0];
      const { technologies: technologies2, title: title2, img: img2 } =
        typeof row[1] !== 'undefined' && row[1];

      return (
        <TechnologiesColumn key={id}>
          <TechnologiesLink
            to="/custom-projects"
            data-sal="slide-up"
            data-sal-easing="easeOutCubic"
          >
            <ItemBox>
              <TechnologiesParagraph>{technologies}</TechnologiesParagraph>
              <TechnologiesTitleParagraph primary>{title}</TechnologiesTitleParagraph>
              <img src={img} alt={`Spinbits - ${title}`} />
            </ItemBox>
          </TechnologiesLink>
          {row[1] && (
            <TechnologiesLink to="/projects" data-sal="slide-up" data-sal-easing="easeOutCubic">
              <ItemBox>
                <TechnologiesParagraph>{technologies2}</TechnologiesParagraph>
                <TechnologiesTitleParagraph primary>{title2}</TechnologiesTitleParagraph>
                <img src={img2} alt={`Spinbits - ${title2}`} />
              </ItemBox>
            </TechnologiesLink>
          )}
        </TechnologiesColumn>
      );
    });
  };

  return (
    <SpinContainer id="portfolio">
      <Row>
        <Col lg={4} data-sal="slide-right" data-sal-easing="easeOutCubic">
          <SectionTopTitle>Portfolio</SectionTopTitle>
          <SectionTitle coloredStrong>
            Check out what we have <strong>built together</strong> with our great customers
          </SectionTitle>
          <Paragraph>
            There&apos;s no better feeling than using something that some time ago was just an idea.
            Thanks to our awesome customers and their trust we were able to take part in making
            their ideas real.
          </Paragraph>
          <Img src={Portfolio} alt="Spinbits - Portfolio" />
        </Col>
        <Col lg={8}>
          <Slider {...settings}>{renderPortfolioCols()}</Slider>
        </Col>
      </Row>
    </SpinContainer>
  );
};

export default PortfolioSection;
