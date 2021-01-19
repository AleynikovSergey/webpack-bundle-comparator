import React from 'react';
import { ListGroup, Row, Col } from 'reactstrap';
import {
  faCalendar,
  faEnvelope,
  faMapMarker,
  faGlobeAsia,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
// Own Component
import DashboardCard from 'src/components/DashboardCard';
import Information from 'src/components/Information';

const data = [
  {
    icon: faCalendar,
    title: 'Job Description:',
    description: 'Graphic Designer',
  },
  {
    icon: faMapMarker,
    title: 'Location:',
    description: 'Los Angeles Califonia PO',
  },
  {
    icon: faInfoCircle,
    title: 'Phone :',
    description: '0145636941',
  },
];
const data2 = [
  {
    icon: faEnvelope,
    title: 'Email:',
    description: 'digital@example.com',
  },
  {
    icon: faGlobeAsia,
    title: 'Website:',
    description: 'www.digital.com',
  },
];
const BasicInformation = () => {
  return (
    <DashboardCard title="Basic Information" action className="mb-5">
      <Row>
        <Col lg={6}>
          <ListGroup>
            {data && data.map((item, i) => <Information key={i} {...item} />)}
          </ListGroup>
        </Col>
        <Col lg={6}>
          <ListGroup>
            {data2 && data2.map((item, i) => <Information key={i} {...item} />)}
          </ListGroup>
        </Col>
      </Row>
    </DashboardCard>
  );
};

export default BasicInformation;
