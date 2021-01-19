import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import Skeleton from 'src/components/Skeleton';

const JobCategoryItem = (props) => {
  const { id, name, statics, image, loading = false } = props;

  return (
    <Link to="#">
      <Card className="text-center pt-4 pb-4 mb-5 overflow-hidden position-relative job-category rounded-0">
        <div className="hover-block" />
        <CardBody className="d-flex flex-column align-items-center">
          {!loading ? (
            <img src={image} alt="category" />
          ) : (
            <Skeleton width={30} height={30} />
          )}

          {!loading ? (
            <CardTitle
              tag="h5"
              className="text-capitalize font-weight-normal text-dark m-0"
            >
              {name}
            </CardTitle>
          ) : (
            <Skeleton width="60%" />
          )}
          {!loading ? (
            <CardText className="text-capitalize text-muted">
              ({statics} jobs)
            </CardText>
          ) : (
            <Skeleton width="30%" />
          )}
        </CardBody>
      </Card>
    </Link>
  );
};

export default JobCategoryItem;
