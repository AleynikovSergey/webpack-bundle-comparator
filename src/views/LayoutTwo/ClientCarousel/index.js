import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from 'reactstrap';

const data = [
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/pt1.png',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/pt2.png',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/pt4.png',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/pt5.png',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/pt4.png',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/pt5.png',
  },
];

// Slider Resposive data
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1199, min: 576 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const ClientCarousel = () => {
  return (
    <Container className="mt-10">
      <Row>
        <Col lg={12}>
          <Carousel
            className="owl-carousel position-static"
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            slidesToSlide={2}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            arrows={false}
            itemClass="p-2"
          >
            {data &&
              data.map((item, i) => (
                <img src={item.img} alt="carousel" style={{ width: '100%' }} />
              ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ClientCarousel;
