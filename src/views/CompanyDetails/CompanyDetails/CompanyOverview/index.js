import React from 'react';
import { Button, ListGroup } from 'reactstrap';
import {
  faCalendar,
  faInfo,
  faMapMarkerAlt,
  faUserTie,
  faEnvelope,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';
import DashboardCard from 'src/components/DashboardCard';
import Information from 'src/components/Information';

const overview = [
  {
    icon: faCalendar,
    title: 'Categories:',
    description: 'Design & Creative',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Location:',
    description: 'Los Angeles Califonia PO',
  },
  {
    icon: faInfo,
    title: 'Hotline:',
    description: '0145636941',
  },
  {
    icon: faEnvelope,
    title: 'Email:',
    description: 'webstrot@example.com',
  },
  {
    icon: faUserTie,
    title: 'Company Size:',
    description: '20-50',
  },
  {
    icon: faGlobeAsia,
    title: 'Website:',
    description: 'www.webstrot.com',
  },
];

const CompanyOverview = () => {
  return (
    <DashboardCard title="Overview Company">
      <ListGroup>
        {overview &&
          overview.map((item, i) => <Information key={i} {...item} />)}
      </ListGroup>
      <Button color="primary" block className="outline-hover--effect">
        Contact Us
      </Button>
    </DashboardCard>
  );
};

export default CompanyOverview;
