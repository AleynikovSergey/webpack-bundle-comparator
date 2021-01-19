import React from 'react';
import { Col, Row } from 'reactstrap';
import JobsCard from './JobsCard';

const data = [
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
];
const BestJobItems = () => {
  return (
    <Row>
      {data &&
        data.map((item, i) => (
          <Col md={12} lg={6} key={i}>
            <JobsCard {...item} />
          </Col>
        ))}
    </Row>
  );
};

export default BestJobItems;
