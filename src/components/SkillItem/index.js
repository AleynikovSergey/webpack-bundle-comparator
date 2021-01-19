import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import Skeleton from '../Skeleton';

const SkillItem = (props) => {
  const { id, name, image, loading = false } = props;
  return (
    <Card className="single-job text-center rounded-0 mb-5">
      <CardBody className="pl-2 pr-2 d-flex flex-column align-items-center">
        {!loading ? (
          <CardTitle tag="h5" className="text-uppercase font-weight-normal h6">
            <Link to="#">{name}</Link>
          </CardTitle>
        ) : (
          <Skeleton width="80%" bottom={18} />
        )}
        {!loading ? (
          <img className="img-fluid" src={image} alt="job-img" />
        ) : (
          <Skeleton width={70} height={60} />
        )}
      </CardBody>
    </Card>
  );
};

export default SkillItem;
