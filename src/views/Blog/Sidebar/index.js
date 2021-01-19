import React from 'react';

import AddResume from 'src/components/AddResume';
import BlogSearch from './BlogSearch';
import BlogCategory from './BlogCategory';
import JobSpotlight from './JobSpotlight';
import RecentResumes from './RecentResumes';
import CarrerAdvice from './CarrerAdvice';

const Sidebar = () => {
  return (
    <>
      <BlogSearch />
      <BlogCategory />
      <CarrerAdvice />
      <JobSpotlight />
      <RecentResumes />
      <AddResume />
    </>
  );
};

export default Sidebar;
