import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardFooter,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const data = [
  {
    title: 'Contact Us',
    logo: faPhone,
    contactNumber: '+1800-148-423',
    secondNumber: '+1800-148-423',
    email: null,
    location: null,
  },
  {
    title: 'Email',
    logo: faEnvelope,
    contactNumber: null,
    email: 'jbdesks@example.com',
    secondEmail: 'support@example.com',
    location: null,
  },
  {
    title: 'Location',
    logo: faMapMarkerAlt,
    contactNumber: null,
    email: null,
    location: '51-Maxico ,canada',
    secondLocation: '52B-melbourne,UK',
  },
];
const ContactInfo = () => {
  return (
    <Container className="pb-11 overflow-hidden">
      <Row>
        {data &&
          data.map((item, i) => (
            <Col key={i} md={4} className="text-center">
              <Card className="contact-info">
                <CardTitle className="h5 text-primary my-5">
                  {item.title}
                </CardTitle>
                <CardBody className="py-6 bg-primary card-bg-gradient position-relative">
                  <span className=" d-inline-block p-4">
                    <FontAwesomeIcon
                      className="text-white h4 m-0"
                      icon={item.logo}
                    />
                  </span>
                </CardBody>
                <CardFooter className="p-6 bg-white">
                  {item.contactNumber && (
                    <>
                      <CardText className="mb-0 text-muted">
                        {item.contactNumber}
                      </CardText>
                      <CardText className="mb-0 text-muted">
                        {item.secondNumber}
                      </CardText>
                    </>
                  )}
                  {item.email && (
                    <>
                      <Link to="#" className="d-block text-muted ">
                        {item.email}
                      </Link>
                      <Link className="text-muted" to="#">
                        {item.secondEmail}
                      </Link>
                    </>
                  )}
                  {item.location && (
                    <>
                      <CardText className="mb-0 text-muted">
                        {item.location}
                      </CardText>
                      <CardText className="mb-0 text-muted">
                        {item.secondLocation}
                      </CardText>
                    </>
                  )}
                </CardFooter>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ContactInfo;
