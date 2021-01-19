import React from 'react';

import StatisticsBanner from 'src/components/StatisticsBanner';
import JobReview from 'src/components/JobReview';
import AppBanner from 'src/components/AppBanner';
import AboutText from './AboutText';
import JobAgency from 'src/components/JobAgency';
import TeamExpert from './TeamExpert';
import AboutSlider from './AboutSlider';

const About = () => {
  return (
    <>
      <AboutSlider />
      <AboutText />
      <StatisticsBanner />
      <JobAgency />
      <TeamExpert />
      <JobReview />
      <AppBanner />
    </>
  );
};

export default About;
