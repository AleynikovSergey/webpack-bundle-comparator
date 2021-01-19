// External components
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Own Component
import SingleDropdown from '../SingleDropdown';

const data = [
  {
    type: 'single',
    title: 'Jobs',
    path: '/job',
    subdropdown: null,
    icon: null,
  },

  {
    type: 'single',
    title: 'Job Single',
    path: '/job/details',
    subdropdown: null,
    icon: null,
  },
  {
    title: 'Jobs',
    path: '#',
    type: 'dropdown',
    icon: faArrowRight,
    subdropdown: [
      {
        title: 'Jobs',
        path: '/job',
      },
      {
        title: 'Job Single',
        path: '/job/details',
      },
    ],
  },
];
const Jobs = () => {
  return (
    <ul className="dropdown-menu shadow pt-0 pb-0 mt-0">
      {data && data.map((item, i) => <SingleDropdown key={i} {...item} />)}
    </ul>
  );
};

export default Jobs;
