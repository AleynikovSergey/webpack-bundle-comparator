import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const SingleJob = (props) => {
  const { id, name, image } = props;
  return (
    <Card className="single-job text-center rounded-0 mb-5">
      <CardBody className="pl-2 pr-2">
        <CardTitle tag="h5" className="text-uppercase font-weight-normal h6">
          <Link to="#">{name}</Link>
        </CardTitle>
        <img className="img-fluid" src={image} alt="job-img" />
      </CardBody>
    </Card>
  );
};

export default SingleJob;
