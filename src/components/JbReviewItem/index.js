import React from 'react';
import { Card, CardBody, CardText, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Skeleton from '../Skeleton';

const JbReviewItem = (props) => {
  const { id, image, description, name, position, loading = false } = props;

  return (
    <Card className="mt-6 mb-3 job-review-card p-5 rounded-0">
      <Media>
        <Media left>
          {!loading ? (
            <Media
              className="rounded-circle"
              object
              src={image}
              alt="profile"
            />
          ) : (
            <Skeleton width={100} bottom={0} circle />
          )}
        </Media>
        <Media body className="text-right text-warning">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </Media>
      </Media>
      <CardBody className="p-0 font-italic text-dark">
        {!loading ? (
          <>
            <CardText>{description}</CardText>

            <h6 className="mb-0">
              <Link to="#" className="text-dark">
                {name}
              </Link>
            </h6>
            <p className="text-primary mb-0">{position}</p>
          </>
        ) : (
          <>
            <Skeleton width="90%" height={10} />
            <Skeleton width="90%" height={10} />
            <Skeleton width="70%" height={10} />
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default JbReviewItem;
