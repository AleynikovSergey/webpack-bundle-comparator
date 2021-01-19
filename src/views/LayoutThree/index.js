import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTheme } from 'src/state/ducks/ui';

import JobsCategory from 'src/components/JobsCategory';
import LatestJob from 'src/components/LatestJob';
import JobReview from 'src/components/JobReview';
import StatisticsBanner from 'src/components/StatisticsBanner';
import HiringCompany from 'src/components/HiringCompany';
import JobCover from 'src/components/JobCover';
import JobPricingPlan from 'src/components/JobPricingPlan';
import AppBanner from 'src/components/AppBanner';
import OurBlog from 'src/components/OurBlog';
import TopJobs from './TopJobs';
import HeroBanner from './HeroBanner';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme('default'));
  });
  return (
    <>
      <HeroBanner />
      <TopJobs />
      <JobsCategory />
      <JobCover />
      <LatestJob />
      <StatisticsBanner banner1 />
      <HiringCompany />
      <JobPricingPlan home1 />
      <JobReview />
      <AppBanner />
      <OurBlog />
    </>
  );
};

export default Home;
