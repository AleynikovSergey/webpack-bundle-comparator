// External components
import React from 'react';

// Own component
import SingleDropdown from '../SingleDropdown';

const data = [
  {
    type: 'single',
    title: 'About Us',
    path: '/about',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'Companies',
    path: '/company',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'Company Single',
    path: '/company/details',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'Error Page',
    path: 'err',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'Login',
    path: '/signin',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'Pricing Table',
    path: '/pricing',
    subdropdown: null,
    icon: null,
  },
  {
    type: 'single',
    title: 'Sign Up',
    path: '/signup',
    subdropdown: null,
    icon: null,
  },
];
const Pages = () => {
  return (
    <ul className="dropdown-menu shadow pt-0 pb-0 mt-0">
      {data && data.map((item, i) => <SingleDropdown key={i} {...item} />)}
    </ul>
  );
};

export default Pages;
