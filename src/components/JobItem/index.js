import React from 'react';
import { Media, Row, ListGroup, ListGroupItem, Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faNewspaper,
  faMapMarker,
} from '@fortawesome/free-solid-svg-icons';

const JobItem = (props) => {
  const {
    jobimg,
    company,
    jobCategory,
    sallery,
    location,
    firstColmn,
    secondColmn,
    textPositon,
  } = props;

  return (
    <Card className="p-5 d-p-sm-0 mt-5 rounded-0 job-item">
      <Row className="pl-2">
        <div className={`${firstColmn}`}>
          <Media className="p-2">
            <Media left className="text-center">
              <Media className="d-block" object src={jobimg} alt="job" />
              <span>{company}</span>
            </Media>
            <Media body className="pl-5 pr-5 align-self-center">
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
            </Media>
          </Media>
        </div>
        <div className={` ${secondColmn} `}>
          <ListGroup className={`d-block ${textPositon}`}>
            <ListGroupItem className="pl-0   p-2 d-inline-block ">
              <Button size="sm" color="primary" className="btn-icon border-0">
                <FontAwesomeIcon icon={faHeart} />
              </Button>
            </ListGroupItem>
            <ListGroupItem className=" p-2 d-inline-block">
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
              <Button
                size="sm"
                color="primary"
                className="outline-hover--effect"
              >
                Applied
              </Button>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Row>
    </Card>
  );
};

export default JobItem;
