import React from 'react';

import DashboardCard from 'src/components/DashboardCard';
import LocationMap from 'src/components/LocationMap';

const CompanyLocation = () => {
  return (
    <DashboardCard title="our location" className="mt-5">
      <LocationMap height={300} />
    </DashboardCard>
  );
};

export default CompanyLocation;
