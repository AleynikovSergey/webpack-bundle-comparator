import React from 'react';
import { Link } from 'react-router-dom';

import DashboardCard from 'src/components/DashboardCard';
import FilterBox from 'src/components/FilterBox';

const jobLocation = [
  {
    position: 'Jobs In Delhi',
    count: 24,
  },
  {
    position: ' Jobs In Mumbai',
    count: 1242,
  },
  {
    position: 'Jobs In Chennai',
    count: 458,
  },
  {
    position: 'Jobs In Indore',
    count: 1047,
  },
  {
    position: 'Job In Bhopal',
    count: 124,
  },
  {
    position: 'Job In Pune',
    count: 124,
  },
  {
    position: 'Job In Banglore',
    count: 124,
  },
];

const JobLocation = () => {
  return (
    <DashboardCard title="Jobs By Location" className="mb-5">
      {Array.isArray(jobLocation) &&
        jobLocation.map((item, i) => <FilterBox key={i} {...item} />)}
      {jobLocation.length >= 7 && (
        <Link to="#" className="text-primary text-capitalize ml-2">
          View All Categories{' '}
        </Link>
      )}
    </DashboardCard>
  );
};

export default JobLocation;
