import React from 'react';
import { ListGroup } from 'reactstrap';
import {
  faCalendar,
  faInfo,
  faMapMarkerAlt,
  faUserTie,
  faEnvelope,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons';

import Information from 'src/components/Information';

const overviewdata = [
  {
    icon: faCalendar,
    title: 'Date Posted:',
    description: 'Octomber 02, 2019',
  },
  {
    icon: faMapMarkerAlt,
    title: 'Location:',
    description: 'Los Angeles Califonia PO',
  },
  {
    icon: faInfo,
    title: 'Job Title:',
    description: 'HTML Developer',
  },
  {
    icon: faEnvelope,
    title: 'Hours:',
    description: '40h / Week',
  },
  {
    icon: faUserTie,
    title: 'Salary:',
    description: '$12K - 15k P.A.',
  },
  {
    icon: faGlobeAsia,
    title: 'Category:',
    description: 'Developer',
  },
  {
    icon: faGlobeAsia,
    title: 'Experience:',
    description: '1+ Years Experience',
  },
];

const JobLisingItem = () => {
  return (
    <ListGroup>
      {overviewdata &&
        overviewdata.map((item, i) => <Information key={i} {...item} />)}
    </ListGroup>
  );
};

export default JobLisingItem;
