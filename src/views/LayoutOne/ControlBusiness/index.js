import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import RoundShapeAnimation from 'src/components/RoundShapeAnimation';
import SectionHeading from 'src/components/SectionHeading';
import ControlCard from './ControlCard';

const controlBusiness = [
  {
    id: 1,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c1.png',
    title: 'job managment ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 2,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c2.png',
    title: 'eassy pay money ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 3,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c3.png',
    title: 'flexible invoicing ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 4,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c4.png',
    title: 'Compliance Reporting ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 5,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c5.png',
    title: 'job schedule ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 6,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c6.png',
    title: 'safety checklists ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 7,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c7.png',
    title: 'assest managment ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 8,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c8.png',
    title: 'job notifications ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
  {
    id: 9,
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/c9.png',
    title: 'customer portal ',
    text:
      'Create jobs, allocate to technicians, track time & materials to determine job profitability ',
    to: '',
  },
];

const ControlBusiness = () => {
  return (
    <section className="control-business pt-7 pb-7 pt-sm-13 pb-sm-13 position-relative">
      <RoundShapeAnimation className="round-shape--left" />
      <div className="line3">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line3.png"
          alt="line"
          className="img-fluid"
        />
      </div>
      <SectionHeading
        title="Control Everything From Your Business"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          {Array.isArray(controlBusiness) &&
            controlBusiness.map((item) => {
              if (item.id > 9) return false;
              return (
                <Col lg={4} key={item.id}>
                  <ControlCard {...item} />
                </Col>
              );
            })}
        </Row>
      </Container>
      <RoundShapeAnimation className="round-shape--right" />
    </section>
  );
};

export default ControlBusiness;
