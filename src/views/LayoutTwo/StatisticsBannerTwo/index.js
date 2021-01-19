import React from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';

// Own Component
import StatisticalItem from 'src/components/StatisticalItem';

const data = [
  {
    counterNumber: 2500,
    counterName: 'Happy Customers',
  },
  {
    counterNumber: 9424,
    counterName: 'Ticket Solved',
  },
  {
    counterNumber: '9+',
    counterName: 'Average Rating',
  },
];

const StatisticsBannerTwo = () => {
  return (
    <section className="statics-banner-two">
      <Container>
        <Row className="align-items-center">
          <Col
            md={12}
            lg={6}
            xs={12}
            sm={12}
            className="text-center text-lg-left position-relative "
          >
            <img
              src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/round.png"
              alt="round"
              className="position-absolute d-none d-lg-block round-bg"
              style={{ top: -182, left: -146 }}
            />
            <h1 className="text-white position-relative">
              Some Statistical Facts{' '}
            </h1>
            <ListGroup
              horizontal
              className="justify-content-center justify-content-lg-start"
            >
              {data &&
                data.map((item, i) => <StatisticalItem key={i} {...item} />)}
            </ListGroup>
          </Col>
          <Col md={12} lg={6} xs={12} sm={12} className="mb-md-6 mb-sm-6 mb-6">
            <picture className="d-block animation-bounce">
              <source
                srcSet="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mockup2.png"
                type="image/svg+xml/jpg"
              />
              <img
                src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mockup2.png"
                className="img-fluid"
                alt="statistical"
              />
            </picture>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StatisticsBannerTwo;
