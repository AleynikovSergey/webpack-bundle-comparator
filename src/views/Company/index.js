import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CompaniesItem from 'src/components/CompaniesItem';
import CompaniesCategory from './CompaniesCategory';
import Pagination from 'src/components/Pagination';

const data = [
  {
    id: 1,
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp3.png',
  },
  {
    id: 2,
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp4.png',
  },
  {
    id: 3,
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp2.png',
  },
  {
    id: 4,
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp3.png',
  },
  {
    id: 5,
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp3.png',
  },
];

const Company = () => {
  return (
    <Container className="pt-11">
      <Row>
        <CompaniesCategory />
        {data &&
          data.map((item) => (
            <Col lg={3} md={4} key={item.id} className="mt-5">
              <CompaniesItem {...item} />
            </Col>
          ))}
      </Row>
      <Row>
        <Col>
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default Company;
