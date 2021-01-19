import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import BestJobsCard from './BestJobsCard';

const data = [
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    jobCategory: 'Web Designer',
    sallery: '12K - 15k P.A.',
    location: '  RG40, Wokingham',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Web Designer',
    sallery: '12K - 15k P.A.',
    location: '  RG40, Wokingham',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    company: 'Google',
    jobCategory: 'Web Designer',
    sallery: '12K - 15k P.A.',
    location: '  RG40, Wokingham',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Web Designer',
    sallery: '12K - 15k P.A.',
    location: '  RG40, Wokingham',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Web Designer',
    sallery: '12K - 15k P.A.',
    location: '  RG40, Wokingham',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    company: 'Google',
    jobCategory: 'Web Designer',
    sallery: '12K - 15k P.A.',
    location: '  RG40, Wokingham',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];
const BestJobItems = () => {
  return (
    <Row>
      {data &&
        data.map((item, i) => (
          <Col md={12} lg={6} key={i}>
            <BestJobsCard {...item} />
          </Col>
        ))}
      <Col lg={12} className="text-center mt-4 mt-md-7">
        <Button className="rounded-pill gradient-button border-0">
          View All
        </Button>
      </Col>
    </Row>
  );
};

export default BestJobItems;
