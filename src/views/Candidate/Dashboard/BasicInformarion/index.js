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
    icon: faGlobeAsia,
    title: 'Website:',
    description: 'www.webstrot.com',
  },
];
const BasicInformation = () => {
  return (
    <DashboardCard title="Basic Information">
      <ListGroup className="p-0">
        {infoData &&
          infoData.map((item, i) => <Information key={i} {...item} />)}
      </ListGroup>
    </DashboardCard>
  );
};

export default BasicInformation;
