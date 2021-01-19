import React from 'react';
import { Link } from 'react-router-dom';

import DashboardCard from 'src/components/DashboardCard';
import FilterBox from 'src/components/FilterBox';

const jobCategory = [
  { position: 'Graphic Designer', count: 155 },
  { position: ' Engineering Jobs', count: 514 },
  { position: 'Mainframe Jobs', count: 554 },
  { position: 'Legal Jobs', count: 457 },
  { position: 'IT Jobs', count: 254 },
  { position: 'PSU Jobs', count: 1054 },
  { position: 'Government Jobs', count: 1284 },
];

const JobCategory = () => {
  return (
    <DashboardCard title="Jobs By Category" className="mb-5">
      {Array.isArray(jobCategory) &&
        jobCategory.map((item, i) => <FilterBox key={i} {...item} />)}
      {jobCategory.length >= 7 && (
        <Link to="#" className="text-primary text-capitalize ml-2">
          View All Categories{' '}
        </Link>
      )}
    </DashboardCard>
  );
};

export default JobCategory;
