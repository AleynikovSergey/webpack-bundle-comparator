import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import errorImg from 'src/assets/images/Error/error.png';

const NotFound = () => {
  return (
    <Container className="pt-5">
      <Row>
        <Col>
          <img className="img-fluid" src={errorImg} alt="error" />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
