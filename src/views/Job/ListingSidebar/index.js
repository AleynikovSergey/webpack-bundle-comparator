import React from 'react';

import AddResume from 'src/components/AddResume';
import JobCategory from './JobCategory';
import JobLocation from './JobLocation';
import JobSkill from './JobSkill';

const ListingSidebar = () => {
  return (
    <>
      <JobCategory />
      <JobLocation />
      <JobSkill />
      <AddResume />
    </>
  );
};

export default ListingSidebar;
