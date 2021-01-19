import React from 'react';
import { Link } from 'react-router-dom';

import DashboardCard from 'src/components/DashboardCard';
import Category from './Category';

const category = [
  {
    item: 'Graphic Designer',
    count: 214,
    to: '',
  },
  {
    item: 'Engineering Jobs',
    count: 514,
    to: '',
  },
  {
    item: 'Mainframe Jobs',
    count: 554,
    to: '',
  },
  {
    item: 'Legal Jobs',
    count: 457,
    to: '',
  },
  {
    item: 'IT Jobs',
    count: 1254,
    to: '',
  },
  {
    item: 'R&D Jobs',
    count: 554,
    to: '',
  },
  {
    item: 'Government Jobs',
    count: 350,
    to: '',
  },
  {
    item: 'PSU Jobs',
    count: 221,
    to: '',
  },
];

const BlogCategory = () => {
  return (
    <DashboardCard title="Blog Category" className="mb-5">
      <ul className="p-0 blog-category">
        {Array.isArray(category) &&
          category.map((item, i) => <Category key={i} {...item} />)}
      </ul>
      {category.length >= 8 && (
        <Link to="#" className="text-capitalize text-primary mt-3">
          view all categories
        </Link>
      )}
    </DashboardCard>
  );
};

export default BlogCategory;
