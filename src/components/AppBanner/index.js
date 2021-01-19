import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

const AppBanner = () => {
  return (
    <section className="banner app-banner mb-6 mb-md-13 ">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} sm={12}>
            <div className="app-banner-image position-absolute d-lg-block d-md-none d-sm-none d-none">
              <div
                style={{ width: 65, height: 65 }}
                className="animation-ripple m-auto"
              >
                <i />
              </div>
              <picture className="d-block mt-14 animation-bounce">
                <source
                  srcSet="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mockup5.pn"
                  type="image/svg+xml/jpg"
                />
                <img
                  src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mockup5.png"
                  className="img-fluid"
                  alt="app preview"
                />
              </picture>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            className="text-center text-lg-right pt-md-0"
          >
            <h1 className="text-white font-weight-bold text-uppercase">
              Download
            </h1>
            <h1 className="text-white font-weight-normal text-uppercase mb-3">
              Job Portal App Now!
            </h1>
            <p className="text-white mb-6">
              All it takes is 30 seconds to Download. Your Mobile App for Job
              Fast, Simple Delightful.
            </p>
            <Button color="light" className="m-2 app-button p-0">
              <i className="d-inline-block text-primary">
                <FontAwesomeIcon icon={faApple} />
              </i>
              <span>App Store</span>
            </Button>
            <Button color="light" className="m-2 app-button p-0">
              <i className="d-inline-block text-primary">
                <FontAwesomeIcon icon={faAndroid} />
              </i>
              <span>Play Store</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppBanner;
