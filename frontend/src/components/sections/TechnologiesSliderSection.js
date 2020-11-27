import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import { SpinContainer } from '@components/overrides';
import Blockchain from '@images/technologies/blockchain.webp';
import Css3 from '@images/technologies/css3.webp';
import Flutter from '@images/technologies/flutter.webp';
import Html5 from '@images/technologies/html5.webp';
import Javascript from '@images/technologies/javascript.webp';
import Php from '@images/technologies/php.webp';
import Python from '@images/technologies/python.webp';
import ReactLogo from '@images/technologies/react.webp';
import Symfony from '@images/technologies/symfony.webp';
import Wordpress from '@images/technologies/wordpress.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'gatsby';
import { MOBILE_BREAKPOINT } from '@assets/const';

const { sm, md, lg } = MOBILE_BREAKPOINT;

const ImgWrapper = styled(Link)`
  img {
    min-height: 65px;
    height: 65px;
    max-width: 100%;
    filter: grayscale(100%);
    transition: 0.5s;
  }

  &:hover {
    img {
      filter: grayscale(0);
    }
  }
`;

const TechnologiesSliderSection = () => {
  const technologies = [
    {
      id: 1,
      icon: `${Blockchain}`,
      slug: `blockchain`,
      url: `https://www.blockchain.com/`,
    },
    {
      id: 2,
      icon: `${Css3}`,
      slug: `css3`,
      url: `https://developer.mozilla.org/en-US/docs/Archive/CSS3`,
    },
    {
      id: 3,
      icon: `${Flutter}`,
      slug: `flutter`,
      url: `https://flutter.dev/`,
    },
    {
      id: 4,
      icon: `${Html5}`,
      slug: `html5`,
      url: `https://developer.mozilla.org/en-US/docs/Web/HTML`,
    },
    {
      id: 5,
      icon: `${Javascript}`,
      slug: `javascript`,
      url: `https://developer.mozilla.org/en-US/docs/Web/JavaScript`,
    },
    {
      id: 6,
      icon: `${Php}`,
      slug: `php`,
      url: `https://www.php.net/`,
    },
    {
      id: 7,
      icon: `${Python}`,
      slug: `python`,
      url: `https://www.python.org/`,
    },
    {
      id: 8,
      icon: `${ReactLogo}`,
      slug: `react`,
      url: `https://reactjs.org/`,
    },
    {
      id: 9,
      icon: `${Symfony}`,
      slug: `symfony`,
      url: `https://symfony.com/`,
    },
    {
      id: 10,
      icon: `${Wordpress}`,
      slug: `wordpress`,
      url: `https://wordpress.com/`,
    },
  ];

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: lg,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: md,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: sm,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const renderTechnologisIcon = () => {
    return technologies.map((item) => {
      const { id, icon, slug, url } = item;
      return (
        <ImgWrapper to={url} key={`${id}-${slug}`}>
          <img src={icon} alt={`Spinbits - ${slug}`} />
        </ImgWrapper>
      );
    });
  };
  return (
    <SpinContainer data-sal="slide-up" data-sal-easing="easeOutCubic">
      <Row>
        <Col>
          <Slider {...settings}>{renderTechnologisIcon()}</Slider>
        </Col>
      </Row>
    </SpinContainer>
  );
};

export default TechnologiesSliderSection;
