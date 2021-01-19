import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useQuery } from '@apollo/client';

import { SKILL } from 'src/resolvers/skill/query';
import SkillItem from 'src/components/SkillItem';

const TopJobs = () => {
  const { data, loading, error } = useQuery(SKILL);

  return (
    <Container className="top-jobs--wrapper">
      <Row className="p-xl-0 p-lg-0 p-md-0 pt-sm-6 pb-sm-6 d-flex justify-content-center">
        {!loading ? (
          data?.skill &&
          data.skill.map(({ id, name, image }) => (
            <Col lg={2} md={4} sm={4} xs={12} key={id} className="top-jobs">
              <SkillItem id={id} name={name} image={image} />
            </Col>
          ))
        ) : (
          <>
            <Col lg={2} md={4} sm={4} xs={12} className="top-jobs">
              <SkillItem loading />
            </Col>
            <Col lg={2} md={4} sm={4} xs={12} className="top-jobs">
              <SkillItem loading />
            </Col>
            <Col lg={2} md={4} sm={4} xs={12} className="top-jobs">
              <SkillItem loading />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default TopJobs;
