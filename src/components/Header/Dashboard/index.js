// External components
import React from 'react';

// Own Component
import SingleDropdown from '../SingleDropdown';

const data = [
  {
    type: 'single',
    title: 'Candidate',
    path: '/candidate',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'Company',
    path: '/employer',
    subdropdown: null,
    icon: null,
  },
];
const Dashboard = () => {
  return (
    <ul className="dropdown-menu shadow pt-0 pb-0 mt-0">
      {data && data.map((item, i) => <SingleDropdown key={i} {...item} />)}
    </ul>
  );
};

export default Dashboard;
