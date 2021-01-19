import React from 'react';
import { Link } from 'react-router-dom';

import DashboardCard from 'src/components/DashboardCard';
import FilterBox from 'src/components/FilterBox';

const jobSkill = [
  {
    position: 'Javascript',
    count: 124,
  },
  {
    position: 'HTML5',
    count: 42,
  },
  {
    position: 'CSS',
    count: 158,
  },
  {
    position: 'Marketing',
    count: 47,
  },
  {
    position: 'Web Design',
    count: 124,
  },
  {
    position: 'PHP',
    count: 124,
  },
  {
    position: 'Social Media',
    count: 124,
  },
];

const JobSkill = () => {
  return (
    <DashboardCard title="Your Skill's" className="mb-5">
      {Array.isArray(jobSkill) &&
        jobSkill.map((item, i) => <FilterBox key={i} {...item} />)}
      {jobSkill.length >= 7 && (
        <Link to="#" className="text-primary text-capitalize ml-2">
          View All Categories{' '}
        </Link>
      )}
    </DashboardCard>
  );
};

export default JobSkill;
