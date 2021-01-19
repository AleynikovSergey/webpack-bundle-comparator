import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import sign from 'src/assets/images/Signature/sign.png';

const aboutText = {
  text:
    "“Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis ndum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit et nibh vulputate cursus a sit amet mauris. This is Photoshop'sversion of Lorem um. Proin gravida nibh vel velit auctor aliquet.”",
  name: 'sarika fenny',
  position: 'Director',
  sign,
};

const AboutText = () => {
  return (
    <Container className="pb-13 mt-5 mt-lg-3">
      <Row>
        <Col lg={{ size: 10, offset: 1 }} md={12} sm={12}>
          <div className="about-text text-center">
            <p className="font-italic font-weight-normal m-0">
              {aboutText.text}
            </p>
            <h6 className="mt-3 mb-0 text-capitalize">
              {' '}
              - by <span className="text-primary"> {aboutText.name}</span> (
              {aboutText.position}){' '}
            </h6>
            <img
              src={aboutText.sign}
              alt="signature"
              className="img-fluid pt-4"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutText;
