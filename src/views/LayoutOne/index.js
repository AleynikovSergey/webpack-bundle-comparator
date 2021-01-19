import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTheme } from 'src/state/ducks/ui';

import JobPricingPlan from 'src/components/JobPricingPlan';
import StatisticsBanner from 'src/components/StatisticsBanner';
import BestJobsTwo from './BestJobsTwo';
import HappyClients from './HappyClients';
import RegisterAs from './RegisterAs';
import HeroBannerThree from './HeroBannerThree';
import SearchByCategory from './SearchByCategory';
import ControlBusiness from './ControlBusiness';
import DownloadAppThree from './DownloadAppThree';
import RecentResumeThree from './RecentResumeThree';

const HomeThree = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme('violet'));
  });
  return (
    <>
      <HeroBannerThree />
      <SearchByCategory />
      <BestJobsTwo />
      <StatisticsBanner banner3 />
      <ControlBusiness />
      <DownloadAppThree />
      <HappyClients />
      <JobPricingPlan pricing3 />
      <RegisterAs />
      <RecentResumeThree />
    </>
  );
};

export default HomeThree;
