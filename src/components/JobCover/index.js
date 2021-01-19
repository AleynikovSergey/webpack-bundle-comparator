import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import JobCoverItem from '../JobCoverItem';
import JobCoverImgItem from '../JobCoverImgItem';

const JobCover = () => {
  return (
    <div className="py-6 py-md-13 bg-light text-center text-lg-left">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="mb-md-6 mb-sm-6 mb-6">
            <JobCoverItem
              coverheading="Grow Next Level Business"
              covertitle="#1 MOST trusted digital marketplace company"
              coverparagraph="  What do all consultants need? In short, trust. This is achieved with
          professional presentation and the ability to communicate clearly with
          and potential clients. Whether you are an accountant. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit, sed do eiusd tempor
          incididunt ut labore et dolore magna aliqua."
              coverbutton="discover more"
            />
          </Col>
          <Col lg={6} md={12} sm={12} className="text-center">
            <JobCoverImgItem coverimg="https://webstrot.com/html/jbdesk/main_version/main_pages/images/gnxt.jpg" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JobCover;
