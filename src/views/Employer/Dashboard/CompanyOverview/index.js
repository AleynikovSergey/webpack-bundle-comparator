import React from 'react';
import { ListGroup } from 'reactstrap';
import {
  faCalendar,
  faInfo,
  faMapMarkerAlt,
  faEnvelope,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';
import Information from 'src/components/Information';
import DashboardCard from 'src/components/DashboardCard';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const infoData = [
  {
    icon: faCalendar,
    title: 'Job Description:',
    description: 'Graphic Designe',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Location:',
    description: 'Los Angeles Califonia PO',
  },
  {
    icon: faInfo,
    title: 'Phone:',
    description: '0145636941',
  },
  {
    icon: faEnvelope,
    title: 'Email:',
    description: 'webstrot@example.com',
  },
  {
    icon: faUser,
    title: 'Compant Size:',
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
    <DashboardCard title="Company Overview" className="mb-5">
      <ListGroup className="p-0">
        {infoData &&
          infoData.map((item, i) => <Information key={i} {...item} />)}
      </ListGroup>
    </DashboardCard>
  );
};

export default CompanyOverview;
