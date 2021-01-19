import React from 'react';
import { Col, Row } from 'reactstrap';

import GeneralForm from 'src/components/GeneralForm';

const ContactForm = () => {
  return (
    <Row>
      <Col lg={{ size: 7, offset: 1 }}>
        .<h2>Get In Touch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
        <GeneralForm />
      </Col>
    </Row>
  );
};

export default ContactForm;
