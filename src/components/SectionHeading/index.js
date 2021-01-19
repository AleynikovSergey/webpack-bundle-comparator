import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const SectionHeading = (props) => {
  const { title, description } = props;

  return (
    <Container className="section-heading pb-6">
      <Row>
        <Col md={{ size: 10, offset: 1 }} className="text-center">
          <h2
            className="text-capitalize text-dark"
            style={{ fontSize: '36px' }}
          >
            {title}
          </h2>
          {description && <p className="text-muted">{description}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default SectionHeading;
