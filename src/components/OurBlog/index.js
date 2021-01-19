import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import BlogItem from 'src/components/BlogItem';
import SectionHeading from 'src/components/SectionHeading';
import RequestCall from './RequestCall';
import FrequentlyAsked from '../FrequentlyAsked';

const data = [
  {
    image:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/blog1.jpg',
    date: 'FEB 19, 2019',
    title: 'Want To Be An Ace Designer? Try Travelling The World',
  },
  {
    image:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/blog2.jpg',
    date: 'JAN 19, 2019',
    title: 'Hey Seeker, It’s Time To Try Travelling The World',
  },
];

const OurBlog = () => {
  return (
    <section className="our-blog">
      <SectionHeading
        title="From Our Blog"
        description="Your next level Product developemnt company assets"
      />
      <Container className="pt-1 pt-md-5 pb-7">
        <Row className="justify-content-center">
          <Col md={12} sm={12} lg={4} className="mb-md-6 mb-sm-6 mb-6">
            <RequestCall />
          </Col>
          <Col md={12} sm={12} lg={8}>
            <Row className="mb-5">
              {data &&
                data.map((item, i) => (
                  <Col md={6} key={i} className="mb-sm-6 mb-6">
                    <BlogItem {...item} />
                  </Col>
                ))}
            </Row>
            <FrequentlyAsked />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurBlog;
