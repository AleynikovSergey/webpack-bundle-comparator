import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import FrequentlyAsked from 'src/components/FrequentlyAsked';
import LoadMore from 'src/components/LoadMoreButton';
import SectionHeading from 'src/components/SectionHeading';
import BlogCard from './BlogCard';

const blogData = [
  {
    id: 1,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/blog22.jpg',
    title: 'The News of theater',
    date: 'FEb 19, 2019',
    text:
      'Lorem ipsum dolor sit amet,tuiradig elit, sed do eiusmod tempor incididunt ut labore. incididunt ut labore.',
    to: '',
  },
  {
    id: 2,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/blog11.jpg',
    title: 'the job of india',
    date: 'jan 19, 2019',
    text:
      'Lorem ipsum dolor sit amet,tuiradig elit, sed do eiusmod tempor incididunt ut labore. incididunt ut labore.',
    to: '',
  },
];

const OurBlogTwo = () => {
  return (
    <section className="our-blog bg-light pb-13">
      <div className="blog-content--wrapper">
        <SectionHeading
          title="From Our Blog"
          description="Your next level Product developemnt company assets"
        />
        <Container>
          <Row>
            <Col lg={6}>
              <FrequentlyAsked home2 />
            </Col>
            <Col lg={6}>
              <Row>
                {Array.isArray(blogData) &&
                  blogData.map((item) => {
                    if (item.id > 2) return false;
                    return (
                      <Col sm={12} key={item.id}>
                        <BlogCard {...item} />
                      </Col>
                    );
                  })}
              </Row>
            </Col>
            <Col>
              <LoadMore />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog-after--img">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/shape3.png"
          alt="after img"
        />
      </div>
    </section>
  );
};

export default OurBlogTwo;
