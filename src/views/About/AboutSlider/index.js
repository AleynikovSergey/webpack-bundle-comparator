import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from 'src/assets/images/AboutSlider/about1.jpg';
import img2 from 'src/assets/images/AboutSlider/about2.jpg';
import img3 from 'src/assets/images/AboutSlider/about3.jpg';

const items = [
  {
    src: img1,
    altText: 'Slide 1',
  },
  {
    src: img2,
    altText: 'Slide 2',
  },
  {
    src: img3,
    altText: 'Slide 3',
  },
  {
    src: img1,
    altText: 'Slide 1',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const AboutSlider = () => {
  return (
    <Container className="pt-13">
      <Row>
        <Col>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={5000}
            slidesToSlide={1}
            customTransition=" transform 1000ms ease-in-out"
            transitionDuration={1000}
            arrows={false}
            showDots
            className="team-expert-slider position-static"
          >
            {items &&
              items.map((item, i) => (
                <img key={i} width="100%" src={item.src} alt={item.altText} />
              ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSlider;
