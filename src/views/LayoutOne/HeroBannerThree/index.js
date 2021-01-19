import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import RoundShapeAnimation from 'src/components/RoundShapeAnimation';
import BannerThreeItem from './BannerThreeItem';

// Slider Resposive data
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1199, min: 576 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HeroBannerThree = () => {
  return (
    <section className="hero-banner--three position-relative">
      <div className="hero-banner--bg position-absolute">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/slider_bg.png"
          alt="background"
        />
      </div>
      <RoundShapeAnimation className="round-shape1" />
      <div className="bubble bubble-1">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/bubble.png"
          alt="bubble"
          className="img-fluid"
        />
      </div>
      <Carousel
        className="hero-banner-slider position-static"
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        slidesToSlide={1}
        customTransition="transform 1000ms ease-in-out"
        transitionDuration={1000}
        arrows={true}
        itemClass="px-2"
      >
        <BannerThreeItem />
      </Carousel>
      <RoundShapeAnimation className="round-shape2" />
    </section>
  );
};

export default HeroBannerThree;
