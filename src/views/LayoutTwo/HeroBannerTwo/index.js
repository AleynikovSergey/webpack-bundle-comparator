import React from 'react';
import { Col, Row } from 'reactstrap';
import LocationMap from 'src/components/LocationMap';
import Filters from './Filters';
import TopJobsSlider from './TopJobsSlider';

const HeroBannerTwo = () => {
  return (
    <section className="hero-banner-two position-relative overflow-hidden">
      <Row>
        <Col lg={12} xs={{ size: 12, order: 2 }}>
          <LocationMap height={850} />
        </Col>
        <Col
          lg={4}
          xs={{ size: 12, order: 1 }}
          className="position-absolute filters-item"
          style={{ zIndex: 999, top: 0 }}
        >
          <Filters />
        </Col>
        <Col
          lg={8}
          xs={{ size: 12, order: 3 }}
          className="position-absolute job-category-item mb-6 mb-lg-0"
          style={{ zIndex: 999, bottom: -30, right: 0 }}
        >
          <TopJobsSlider />
        </Col>
      </Row>
    </section>
  );
};

export default HeroBannerTwo;
