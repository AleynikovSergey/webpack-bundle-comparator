// External components
import React from 'react';

import SingleDropdown from '../SingleDropdown';

const data = [
  {
    type: 'single',
    title: 'Blog Category',
    path: '/blog',
    subdropdown: null,
    icon: null,
  },
];
const Blog = () => {
  return (
    <ul className="dropdown-menu shadow p-0 mt-0">
      {data && data.map((item, i) => <SingleDropdown key={i} {...item} />)}
    </ul>
  );
};

export default Blog;
