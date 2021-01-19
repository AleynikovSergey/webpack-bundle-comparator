import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardImgOverlay,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP } from '@fortawesome/free-brands-svg-icons';
const LoginItem = () => {
  return (
    <Card className="text-center border-0">
      <CardImg
        width="100%"
        src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/login.jpg"
        alt="Card image cap"
      />
      <CardImgOverlay>
        <CardBody className="text-center pt-6">
          <img
            src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/logo.png"
            className="img-fluid"
            alt="Responsive image"
          />

          <ListGroup>
            <ListGroupItem className="bg-transparent p-0">
              {' '}
              <Button color="primary" className="my-4">
                Login With Facebook
                <FontAwesomeIcon className="ml-5" icon={faFacebookF} />
              </Button>
            </ListGroupItem>
            <ListGroupItem className="bg-transparent p-0">
              {' '}
              <Button color="primary" className="outline-hover--effect">
                Login With Printest
                <FontAwesomeIcon className="ml-5" icon={faPinterestP} />
              </Button>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
        <div className="login-or-register position-absolute font-18 d-none d-lg-block">
          <h6 className="text-white font-weight-bold">OR</h6>
        </div>
      </CardImgOverlay>
    </Card>
  );
};

export default LoginItem;
