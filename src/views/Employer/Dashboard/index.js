import React from 'react';
import { Row, Col } from 'reactstrap';
import { faSuitcase, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Thumbnail from 'src/components/Thumbnail';
import DashboardCard from 'src/components/DashboardCard';
import LocationMap from 'src/components/LocationMap';
import SocialLink from 'src/components/SocialLink';
import RecentApplication from './RecentApplication';
import Activity from './Activity';
import CompanyOverview from './CompanyOverview';
import Summary from './Summary';
import ViewGraph from './ViewGraph';

const data = [
  {
    id: 1,
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/ws.png',
    title: 'Luca Wallace',
    jobCategory: ' Software Firm',
    jobCategoryIcon: faSuitcase,
    location: ' Los Angeles',
    locationIcon: faMapMarkerAlt,
    buttonName: 'View Profile',
  },
];
const Dashboard = () => {
  return (
    <>
      {data && data.map((item) => <Thumbnail key={item.id} {...item} />)}
      <Summary />
      <ViewGraph />
      <Row className="mt-4">
        <Col md={5}>
          <CompanyOverview />
        </Col>
        <Col md={7}>
          <DashboardCard title="Our Location">
            <LocationMap height={260} />
          </DashboardCard>
          <DashboardCard title="Social Profile" className="mt-5 mb-5">
            <SocialLink
              parentClass="justify-content-center"
              childClass="btn btn-icon btn-outline-primary rounded-circle btn-sm"
            />
          </DashboardCard>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <RecentApplication />
        </Col>
        <Col lg={5}>
          <Activity />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
