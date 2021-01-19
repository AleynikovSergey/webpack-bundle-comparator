import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

import TestimonialCard from './TestimonialCard';

const testimonial = [
  {
    id: 1,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/ct.png',
    text:
      'I am very gretfull with it, and features you didn’t know would be useful are ready when you are.',
    name: 'Niklas Bruie',
    to: '',
  },
  {
    id: 2,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/ct.png',
    text:
      'I am very gretfull with it, and features you didn’t know would be useful are ready when you are.',
    name: 'Niklas Bruie',
    to: '',
  },
  {
    id: 3,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/ct.png',
    text:
      'I am very gretfull with it, and features you didn’t know would be useful are ready when you are.',
    name: 'Niklas Bruie',
    to: '',
  },
  {
    id: 4,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/ct.png',
    text:
      'I am very gretfull with it, and features you didn’t know would be useful are ready when you are.',
    name: 'Niklas Bruie',
    to: '',
  },
];

const Testimonial = (props) => {
  const { to } = props;
  return (
    <section className="testimonial bg-light pt-3 pb-13">
      <div className="testimonial-shape position-relative">
        <div className="testimonial-content--wrapper position-relative">
          <Container>
            <Row>
              <Col lg={4} sm={12} className="d-flex align-items-center">
                <div className="testimonial-heading">
                  <h2 className="text-white text-capitalize">
                    What People Has to say About us and our Service
                  </h2>
                  <Button
                    color="light"
                    className="outline-hover--effect white mt-5"
                  >
                    <Link to={to || '#'}>more testimonials</Link>
                  </Button>
                </div>
              </Col>
              <Col lg={8} sm={12} className="mt-sm-6">
                <Row>
                  {Array.isArray(testimonial) &&
                    testimonial.map((item) => {
                      if (item.id > 4) return false;
                      return (
                        <Col md={6} key={item.id}>
                          <TestimonialCard
                            {...item}
                            className={`${item.id === 1 && 'mt-lg-13'}`}
                          />
                        </Col>
                      );
                    })}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
