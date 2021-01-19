import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import JobsOverview from './JobsOverview';
import JobDescription from './JobDescription';

const JobDetails = () => {
  return (
    <Container className="pt-8">
      <Row>
        <Col md={12} sm={12} lg={4} className="mb-6 mb-lg-0">
          <JobsOverview />
        </Col>
        <Col md={12} sm={12} lg={8}>
          <JobDescription />
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
