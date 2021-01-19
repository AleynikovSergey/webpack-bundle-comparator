import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const HeroBanner = () => {
  return (
    <div className="hero-banner border-bottom positon-relative h-100 position-relative overflow-hidden">
      <Container>
        <Row>
          <Col xl={7} md={12} sm={12} xs={12} className="pr-6">
            <BannerLeft />
          </Col>
          <Col xl={5}>
            <BannerRight />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
