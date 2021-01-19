import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Newsletter = () => {
  return (
    <Container className="pb-11 pt-6 pt-lg-11">
      <div className="newsletter border-bottom text-center text-lg-left border-bottom-md-0">
        <Row>
          <Col lg={8} md={12} sm={12} xs={12} className="mb-sm-3">
            <h2 className="text-capitalize font-weight-normal pb-2 m-0">
              {' '}
              Looking For A Job
            </h2>
            <p className="text-capitalize pb-3 m-0 text-muted">
              Your next level Product developemnt company assetsYour next level
              Product{' '}
            </p>
          </Col>
          <Col
            lg={{ size: 3, offset: 1 }}
            md={12}
            sm={12}
            xs={12}
            className="text-center text-lg-right mb-2"
          >
            <Button color="primary" className="outline-hover--effect">
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Newsletter;
