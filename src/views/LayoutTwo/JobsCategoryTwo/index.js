import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';

import LoadMore from 'src/components/LoadMoreButton';
import SectionHeading from 'src/components/SectionHeading';
import JobsCard from './JobsCard';

const JobsCategoryTwo = () => {
  const jobsCtg = useSelector((store) => store.jobsCtg);
  return (
    <section className="jobs-category--two bg-light pt-md-13 pb-md-13 pt-sm-9 pb-sm-9 pt-6 pb-6">
      <SectionHeading
        title="Browse Jobs By Category"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          {Array.isArray(jobsCtg) &&
            jobsCtg.map((item) => {
              if (item.id > 8) return false;
              return (
                <Col lg={3} md={6} sm={12} xs={12} key={item.id}>
                  <JobsCard {...item} className={item.id < 9 && 'mb-5'} />
                </Col>
              );
            })}
          <LoadMore />
        </Row>
      </Container>
    </section>
  );
};

export default JobsCategoryTwo;
