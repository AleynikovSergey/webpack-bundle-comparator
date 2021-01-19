import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

import RoundShapeAnimation from 'src/components/RoundShapeAnimation';
import SectionHeading from 'src/components/SectionHeading';
import ResumeCard from './ResumeCard';

const recentResumes = [
  {
    id: 1,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmnt4.jpg',
    name: 'Akshay Handge',
    position: 'UI Designer',
  },
  {
    id: 2,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmnt1.jpg',
    name: 'aditi S.',
    position: 'UI Designer',
  },
  {
    id: 3,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmnt2.jpg',
    name: 'Merry Foster',
    position: 'UI Designer',
  },
  {
    id: 4,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmnt3.jpg',
    name: 'joahn due',
    position: 'UI Designer',
  },
];

const RecentResumeThree = () => {
  return (
    <section className="recent-resume--three position-relative pt-7 pb-7 pt-sm-13 pb-sm-13">
      <SectionHeading
        title="Recent Resume"
        description="Your next level Product developemnt company assets"
      />
      <RoundShapeAnimation className="shape1" />
      <Container>
        <Row>
          {Array.isArray(recentResumes) &&
            recentResumes.map((item) => {
              if (item.id > 4) return false;
              return (
                <Col lg={6} sm={12} xs={12} key={item.id}>
                  <ResumeCard {...item} />
                </Col>
              );
            })}
        </Row>
        <Row>
          <Col className="text-center mt-0 mt-sm-7">
            <Button className="rounded-pill gradient-button border-0" size="lg">
              <Link to="#">View All</Link>
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="line3">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line3.png"
          alt="line"
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default RecentResumeThree;
