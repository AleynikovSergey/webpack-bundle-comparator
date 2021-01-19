import React from 'react';

import DashboardCard from 'src/components/DashboardCard';
import Graph from './Graph';

const ViewGraph = () => {
  return (
    <DashboardCard title="View Graph" className="mt-5">
      <Graph />
    </DashboardCard>
  );
};

export default ViewGraph;
