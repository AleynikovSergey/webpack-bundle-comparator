import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  ListGroup,
  ListGroupItem,
  Progress,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faEdit,
  faFile,
  faHeart,
  faCheckSquare,
  faTag,
  faPowerOff,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';

const CandidateSidebar = () => {
  return (
    <Card className="sidebar-nav mb-6">
      <CardImg src="https://webstrot.com/html/jbdesk/main_version/dashboard/images/profile.jpg" />
      <CardBody className="text-center">
        <CardTitle tag="h5">Luca Wallace</CardTitle>
        <p className="text-primary m-0">@username</p>
      </CardBody>
      <CardBody>
        <div className="d-flex justify-content-between">
          {' '}
          <h6>Profile</h6>
          <h6>70%</h6>
        </div>
        <Progress color="primary" animated value={70} />
      </CardBody>
      <CardBody className="p-0">
        <ListGroup>
          <ListGroupItem className="p-0">
            <NavLink exact to="/candidate">
              <FontAwesomeIcon
                className="text-primary mr-2"
                icon={faTachometerAlt}
              />
              Dashboard
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/candidate/profile">
              <FontAwesomeIcon className="text-primary mr-3" icon={faEdit} />
              ProfileSetting
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/candidate/resume">
              <FontAwesomeIcon className="text-primary mr-3" icon={faFile} />
              Resume
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/candidate/favourite">
              <FontAwesomeIcon className="text-primary mr-3" icon={faHeart} />
              Favourite
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/candidate/apply">
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faCheckSquare}
              />
              Applied job
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink exact to="/candidate/plan">
              <FontAwesomeIcon className="text-primary mr-3" icon={faTag} />
              Pricing Plans
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
      <CardFooter className="bg-white p-0 py-3">
        <ListGroup>
          <ListGroupItem>
            <Link to="#">
              {' '}
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faPowerOff}
              />
              Log out
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link to="#">
              {' '}
              <FontAwesomeIcon
                className="text-primary mr-3"
                icon={faTrashAlt}
              />
              Delete Profile
            </Link>
          </ListGroupItem>
        </ListGroup>
      </CardFooter>
    </Card>
  );
};

export default CandidateSidebar;
