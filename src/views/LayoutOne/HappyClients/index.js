import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CustomButtonGroup from 'src/components/CustomButtonGroup';
import SectionHeading from 'src/components/SectionHeading';
import ClientsItem from './ClientsItem';
import RoundShapeAnimation from 'src/components/RoundShapeAnimation';

const data = [
  {
    title: ' Marita Irene',
    category: 'Business',
    text:
      'Packages and web page editors now use Lorem Ipsum as their am efault model text yr,and a search.',
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/vv.png',
  },
];

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
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const HappyClients = () => {
  return (
    <section className="happy-clients position-relative overflow-hidden my-6 my-md-13">
      <SectionHeading
        title="Our Happy Clients"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          <Col>
            <Carousel
              className="happy-client-slider position-static"
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={4000}
              slidesToSlide={1}
              customTransition="transform 1000ms ease-in-out"
              transitionDuration={1000}
              arrows={false}
              customButtonGroup={<CustomButtonGroup />}
            >
              {data && data.map((item, i) => <ClientsItem key={i} {...item} />)}
            </Carousel>
          </Col>
        </Row>
      </Container>
      <RoundShapeAnimation />
    </section>
  );
};

export default HappyClients;
