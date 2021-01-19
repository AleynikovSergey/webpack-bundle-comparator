import React from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';

// Own Component
import StatisticalItem from '../StatisticalItem';

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
const StatisticsBanner = (props) => {
  const { banner1, banner3 } = props;
  return (
    <section
      className={`${
        banner1 && 'statics-banner overflow-hidden mb-6 mb-md-13'
      } ${banner3 && 'statics-banner-three'}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col
            md={12}
            lg={6}
            xs={12}
            sm={12}
            className="mb-md-6 mb-sm-6 mb-6 text-center"
          >
            {banner1 && (
              <div
                style={{ width: 75, height: 75 }}
                className="animation-ripple m-auto"
              >
                <i />
              </div>
            )}
            {banner1 && (
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
            )}
            {banner3 && (
              <div className="">
                <img
                  src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line2.png"
                  alt="statistics"
                  className="position-absolute round-bg d-none d-lg-block"
                  style={{ top: -90, left: -146 }}
                />
                <picture className="d-block animation-bounce">
                  <source
                    srcSet="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mockup6.png"
                    type="image/svg+xml/jpg"
                  />
                  <img
                    src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mockup6.png"
                    className="img-fluid"
                    alt="statistical"
                  />
                </picture>
              </div>
            )}
          </Col>
          <Col
            md={12}
            lg={6}
            xs={12}
            sm={12}
            className="text-center text-lg-left "
          >
            <h1 className={`${banner1 ? ' text-white' : 'text-dark'}  `}>
              Some Statistical Facts{' '}
            </h1>
            <ListGroup
              horizontal
              className="justify-content-center justify-content-lg-start"
            >
              {data &&
                data.map((item, i) => (
                  <StatisticalItem key={i} {...item} banner1={banner1} />
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StatisticsBanner;
