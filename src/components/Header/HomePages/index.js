// External components
import React from 'react';

// Own Component
import SingleDropdown from '../SingleDropdown';

const data = [
  {
    type: 'single',
    title: 'home',
    path: '/',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'home2',
    path: '/home2',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'home3',
    path: '/home3',
    subdropdown: null,
    icon: null,
  },
];
const HomePages = () => {
  return (
    <ul className="dropdown-menu shadow pt-0 pb-0 mt-0">
      {data && data.map((item, i) => <SingleDropdown key={i} {...item} />)}
    </ul>
  );
};

export default HomePages;
