import React from 'react';
import { Col, Row } from 'reactstrap';
import Thumbnail from 'src/components/Thumbnail';
import { faSuitcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import BasicInformation from './BasicInformarion';
import DashboardCard from 'src/components/DashboardCard';
import LocationMap from 'src/components/LocationMap';
import JobSummary from './JobSummary';
import SocialProfile from './SocialProfile';
import RecentActivity from './RecentActivity';
const data = [
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/pf1.jpg',
    title: 'Luca Wallace',
    jobCategory: ' Software Firm',
    jobCategoryIcon: faSuitcase,
    location: ' Los Angeles',
    locationIcon: faMapMarkerAlt,
    buttonName: 'View Profile',
    className: 'mb-4',
  },
];
const Dashboard = () => {
  return (
    <>
      {data && data.map((item, i) => <Thumbnail key={i} {...item} />)}
      <Row className="mb-4">
        <Col lg={5}>
          <BasicInformation />
          <SocialProfile />
        </Col>
        <Col lg={7}>
          <DashboardCard title="Our Location">
            <LocationMap height={260} />
          </DashboardCard>
          <JobSummary />
        </Col>
      </Row>
      <RecentActivity />
    </>
  );
};

export default Dashboard;
