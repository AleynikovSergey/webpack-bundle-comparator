import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Media } from 'reactstrap';
import {
  faDollarSign,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BestJobsCard = (props) => {
  const { jobimg, jobCategory, sallery, location, text } = props;
  return (
    <Link to="#">
      <Card className="my-3 bestjob-two-item text-left">
        <CardBody>
          <Media className="align-items-center d-block d-sm-flex text-center text-sm-left">
            <Media
              left
              href="#"
              className="border-right py-4 pr-0 pr-sm-5 mr-0 mr-sm-5"
            >
              <Media object src={jobimg} alt="Generic placeholder image" />
            </Media>
            <Media body className="mt-5 mt-sm-0">
              <Media heading>{jobCategory}</Media>
              <p className="mb-2 text-dark">
                <FontAwesomeIcon icon={faDollarSign} /> {sallery}{' '}
                <span className="ml-3">
                  {' '}
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                </span>
              </p>
              <p className="mb-0">{text}</p>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BestJobsCard;
