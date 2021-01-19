import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';
import { faLaptop, faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SectionHeading from 'src/components/SectionHeading';
import RoundShapeAnimation from 'src/components/RoundShapeAnimation';

const RegisterAs = () => {
  return (
    <section className="register pt-0 pt-lg-13 pb-6 pb-md-13 position-relative overflow-hidden">
      <SectionHeading
        title="We Are Popular Everywhere"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          <Col>
            <Card className="mb-5">
              <Row className="text-center ">
                <Col lg={6} className="employer-item">
                  <CardBody className="py-5 px-5 px-md-13 employer-card-body">
                    <i>
                      <FontAwesomeIcon className="h2" icon={faLaptop} />
                    </i>
                    <CardTitle tag="h5" className="mt-3">
                      I'm An Employer
                    </CardTitle>
                    <CardText className="mb-0">
                      Signed in companies are able to post new job offers,
                      searching for candidate...
                    </CardText>
                    <Button
                      outline
                      className="position-relative bg-white company-btn"
                    >
                      Register As Company
                    </Button>
                  </CardBody>
                </Col>
                <Col lg={6}>
                  <CardBody className="py-5 px-5 px-md-13 mt-6 mt-lg-0 candidate-card-body">
                    <i>
                      <FontAwesomeIcon className="h2" icon={faLaptopMedical} />
                    </i>
                    <CardTitle tag="h5" className="mt-3">
                      I'm An Candidate
                    </CardTitle>
                    <CardText className="mb-0">
                      Signed in companies are able to post new job offers,
                      searching for candidate...
                    </CardText>
                    <Button outline className="position-relative bg-white">
                      Register As Candidate
                    </Button>
                  </CardBody>
                  <div className="register-or d-none d-lg-block position-absolute">
                    <h5 className="font-weight-bold">OR</h5>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <RoundShapeAnimation />
    </section>
  );
};

export default RegisterAs;
