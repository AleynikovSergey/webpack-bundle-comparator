import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useQuery } from '@apollo/client';

import SectionHeading from 'src/components/SectionHeading';
import { CATEGORY } from 'src/resolvers/category/query';
import JobCategoryItem from '../JobCategoryItem';
import LoadMore from '../LoadMoreButton';

const JobsCategory = () => {
  const { data, loading, error } = useQuery(CATEGORY);

  return (
    <>
      <SectionHeading
        title="Browse Jobs By Category"
        description="Your next level Product developemnt company assets"
      />
      <Container className="pb-6 pb-md-13">
        <Row className="justify-content-center">
          {!loading &&
            data?.category &&
            data.category.map(({ id, name, statics, image }) => (
              <Col lg={3} md={6} sm={12} key={id}>
                <JobCategoryItem
                  id={id}
                  name={name}
                  statics={statics}
                  image={image}
                />
              </Col>
            ))}
          {loading && (
            <>
              <Col lg={3} md={6} sm={12}>
                <JobCategoryItem loading={true} />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <JobCategoryItem loading={true} />
              </Col>
              <Col lg={3} md={6} sm={12}>
                <JobCategoryItem loading={true} />
              </Col>
            </>
          )}
          <LoadMore home />
        </Row>
      </Container>
    </>
  );
};

export default JobsCategory;
