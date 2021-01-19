import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import SectionHeading from 'src/components/SectionHeading';
import ServiceCard from './ServiceCard';

const service = [
  {
    id: 1,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/s1.png',
    title: 'search a jobs',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 2,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/s2.png',
    title: 'Apply a Good Job',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 3,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/s3.png',
    title: 'job security',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 4,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/s4.png',
    title: 'job notifications',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 5,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/s5.png',
    title: 'eassy pay money',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 6,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/s6.png',
    title: 'happy support',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

const OurServices = () => {
  return (
    <section className="our-services bg-light pt-md-13 pb-md-13 pt-sm-7 pb-sm-7 pt-5 pb-5">
      <SectionHeading
        title="Our Services"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          {Array.isArray(service) &&
            service.map((item) => {
              if (item.id > 6) return false;
              return (
                <Col lg={4} md={6} sm={12} xs={12} key={item.id}>
                  <ServiceCard {...item} className={item.id < 7 && 'mb-5'} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
