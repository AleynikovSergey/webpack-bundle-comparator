import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  Button,
  CardText,
  CardImgOverlay,
} from 'reactstrap';

import logo from 'src/assets/images/BlogSingle/logo.png';

const AddResume = () => {
  return (
    <Card inverse>
      <CardImg src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/resume.jpg" />
      <CardImgOverlay
        style={{
          background: 'rgba(44, 48, 68, 0.9)',
        }}
      >
        <Card className="border-0 bg-transparent text-center">
          <CardImg
            className="pr-5 pt-3 pl-5"
            top
            width="100%"
            src={logo}
            alt="Card image cap"
          />
          <CardBody className="">
            <CardText tag="h6" className="m-0 pt-2 pb-4 text-white">
              Get Best Matched Jobs On Your Email. Add Resume NOW!
            </CardText>
            <Button color="primary" size="sm" className="outline-hover--effect">
              Add Resume
            </Button>
          </CardBody>
        </Card>
      </CardImgOverlay>
    </Card>
  );
};

export default AddResume;
