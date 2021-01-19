import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// Own Component
import ContactForm from './ContactForm';
import LocationMap from 'src/components/LocationMap';

const Contact = () => {
  return (
    <Container fluid className="pb-10 overflow-hidden">
      <Row className="align-items-center">
        <Col md={12} lg={5} xs={12} sm={12} className="px-0">
          <LocationMap height={550} />
        </Col>
        <Col md={12} lg={7} xs={12} sm={12} className="contact-form">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
