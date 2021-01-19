import React from 'react';
import {
  Media,
  Row,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faNewspaper,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';

const JobsCard = (props) => {
  const { jobimg, company, jobCategory, sallery, location } = props;

  return (
    <Card className=" p-2 mt-5 rounded-0">
      <Media className="p-0 p-sm-2 d-block d-sm-flex text-center text-sm-left">
        <Media left>
          <Media className="d-inline-block" object src={jobimg} alt="job" />
          <span className="d-block">{company}</span>
        </Media>
        <Media body className="pl-0 pl-sm-5 align-self-center">
          <Row>
            <Col lg={9} md={9} xs={12} sm={9}>
              <Link to="#">{jobCategory}</Link>
              <ul className="m-0 mt-2 p-0">
                <li className="mr-3">
                  <FontAwesomeIcon
                    className="pr-1 text-primary"
                    icon={faNewspaper}
                  />
                  ${sallery}
                </li>
                <li className=" mt-2">
                  <FontAwesomeIcon
                    className="pr-1 text-primary"
                    icon={faMapMarker}
                  />
                  {location}
                </li>
              </ul>
            </Col>
            <Col
              lg={3}
              md={3}
              xs={12}
              sm={3}
              className="text-center mt-3 mt-sm-0"
            >
              <Button size="sm" outline color="primary" className="btn-icon">
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </Col>
          </Row>
        </Media>
      </Media>
      <ListGroup className="d-block border-0 text-center text-sm-left">
        <ListGroupItem className=" p-3 d-inline-block">
          <Button
            size="sm"
            outline
            color="primary"
            className="default-hover--effect"
          >
            Part Time
          </Button>
        </ListGroupItem>
        <ListGroupItem className=" p-2 d-inline-block">
          <Button size="sm" color="primary" className="outline-hover--effect">
            Applied
          </Button>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default JobsCard;
