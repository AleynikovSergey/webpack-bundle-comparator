import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

const DownloadAppThree = () => {
  return (
    <section className="download-app--three position-relative">
      <div className="line-shape">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line.png"
          alt="line"
          className="img-fluid"
        />
      </div>
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="mockup">
              <img
                src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mockup7.png"
                alt="mockup"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <div className="app-store text-right">
              <h1 className="text-uppercase font-weight-bold m-0">Download</h1>
              <h2 className="text-uppercase font-weight-normal pb-3 m-0">
                Job Portal App Now!
              </h2>
              <p className="h6 m-0">
                All it takes is 30 seconds to Download. Your Mobile App for Job
                <br />
                Fast, Simple & Delightful.
              </p>
              <div className="app-store--btn d-flex justify-content-end">
                <Button
                  color="light"
                  className="m-2 app-button p-0 rounded-pill d-flex align-items-center"
                >
                  <i className="text-warning">
                    <FontAwesomeIcon icon={faApple} />
                  </i>
                  <span>App Store</span>
                </Button>
                <Button
                  color="light"
                  className="m-2 ml-5 app-button app-button--two p-0 rounded-pill d-flex align-items-center"
                >
                  <i className="text-primary">
                    <FontAwesomeIcon icon={faAndroid} />
                  </i>
                  <span>Play Store</span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadAppThree;
