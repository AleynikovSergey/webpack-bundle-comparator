import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ListingSidebar from './ListingSidebar';
import ListingCategory from './ListingCategory';
import Pagination from 'src/components/Pagination';

const Job = () => {
  return (
    <Container className="pt-9">
      <Row>
        <Col
          lg={{ size: 3, order: 1 }}
          md={{ size: 12, order: 2 }}
          sm={{ size: 12, order: 2 }}
          xs={{ size: 12, order: 2 }}
        >
          <ListingSidebar />
        </Col>
        <Col
          lg={{ size: 9, order: 2 }}
          md={{ size: 12, order: 1 }}
          sm={{ size: 12, order: 1 }}
          xs={{ size: 12, order: 1 }}
        >
          <ListingCategory />
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default Job;
