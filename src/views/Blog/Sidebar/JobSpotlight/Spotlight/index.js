import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Spotlight = (props) => {
  const { img, position, experience, company, salary, location } = props;
  return (
    <Card className="border-0">
      <CardImg top width="100%" src={img} alt="spotlight" className="pb-1" />
      <CardBody className="p-0">
        <CardTitle tag="h6" className="pt-5 text-muted">
          {position} ({experience})
        </CardTitle>
        <Link to="#" className="pt-2 pb-2 text-primary">
          {company}
        </Link>
        <CardText tag="ul" className="p-0">
          <li className="pt-2 pb-2">
            <FontAwesomeIcon className="text-primary" icon={faMoneyBillAlt} />{' '}
            {salary}
          </li>
          <li className="text-muted pb-5">
            <FontAwesomeIcon className="text-primary" icon={faMapMarkerAlt} />{' '}
            {location}
          </li>
        </CardText>
      </CardBody>
      <Button color="primary" className="mt-2 outline-hover--effect">
        Apply Now
      </Button>
    </Card>
  );
};

export default Spotlight;
