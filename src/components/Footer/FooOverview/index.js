import React from 'react';
import {
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import fooLogo from 'src/assets/images/Footer/foo-logo.png';
import SocialLink from 'src/components/SocialLink';

const FooOverview = ({ to }) => {
  return (
    <Col lg={3} sm={6}>
      <Card className="foo-overview bg-transparent border-0 text-capitalize">
        <CardHeader className="bg-transparent m-0 border-0">
          <Link to="/">
            <img src={fooLogo} alt="logo" />
          </Link>
        </CardHeader>
        <CardBody>
          <div className="d-flex">
            <FontAwesomeIcon
              className="mt-2 text-primary h4"
              icon={faMapMarkerAlt}
            />
            <CardText tag="p" className="m-0 text-muted ml-4 pb-5">
              123 City Avenue, Floor 10, Malbourne, Australia.
            </CardText>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              className="mt-2 text-primary h4"
              icon={faPhoneAlt}
            />
            <CardText tag="p" className="m-0 text-muted ml-4 pb-5">
              1 -234 -456 -7890
              <br /> 1 -234 -456 -7890
            </CardText>
          </div>
          <div className="d-flex">
            <FontAwesomeIcon
              className="mt-2 text-primary h4"
              icon={faEnvelope}
            />
            <CardText tag="li" className="m-0 text-muted ml-4 pb-5">
              <Link className="text-muted" to={to || '#'}>
                info@Jbdesks.com
              </Link>
              <br />
              <Link className="text-muted" to={to || '#'}>
                support@Jbdesks.com
              </Link>
            </CardText>
          </div>
        </CardBody>
        <CardFooter className="bg-transparent m-0 border-0 pb-0 pt-0">
          <SocialLink childClass="btn btn-icon btn-sm btn-outline-primary rounded-circle" />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default FooOverview;
