import React from 'react';
import { useQuery } from '@apollo/client';
import { Row, Col, Container } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { TESTIMONIAL } from 'src/resolvers/testimonial/query';
import image from 'src/assets/images/ourJobReview/mockup3.png';
import CustomButtonGroup from 'src/components/CustomButtonGroup';

import JbReviewItem from '../JbReviewItem';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1199, min: 576 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const JobReview = () => {
  const { data, loading, error } = useQuery(TESTIMONIAL);

  return (
    <Container
      fluid
      className="py-6 py-md-13 job-review text-center text-lg-left"
    >
      <Row className="align-items-center">
        <Col lg={5} className="d-lg-block d-none">
          <img src={image} alt="mockup" className="pl-5 pt-4 img-fluid" />
        </Col>
        <Col lg={7}>
          <div className="job-review--title text-center text-lg-left">
            <h2>Our Job Rivew</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            slidesToSlide={1}
            customTransition=" transform 1000ms ease-in-out"
            transitionDuration={1000}
            arrows={false}
            customButtonGroup={<CustomButtonGroup />}
            className="job-review-slider position-static mb-9"
            itemClass="px-2"
          >
            {!loading ? (
              data?.testimonial &&
              data.testimonial.map(
                ({ id, name, image, description, position }) => (
                  <JbReviewItem
                    key={id}
                    name={name}
                    image={image}
                    description={description}
                    position={position}
                  />
                )
              )
            ) : (
              <JbReviewItem loading={loading} />
            )}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default JobReview;
