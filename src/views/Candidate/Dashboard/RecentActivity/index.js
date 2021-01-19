import React from 'react';
import { ListGroup } from 'reactstrap';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Information from 'src/components/Information';
import DashboardCard from 'src/components/DashboardCard';

const data = [
  {
    icon: faAngleRight,
    title: ' Our Resume Updated!Dobrick Published An Article',
    description: '5 hours ago',
    className: 'border-bottom',
  },
  {
    icon: faAngleRight,
    title: ' Our Resume Updated!Dobrick Published An Article',
    description: '5 hours ago',
    className: 'border-bottom mt-3',
  },
  {
    icon: faAngleRight,
    title: ' Our Resume Updated!Dobrick Published An Article',
    description: '5 hours ago',
    className: 'border-bottom mt-3',
  },
  {
    icon: faAngleRight,
    title: ' Our Resume Updated!Dobrick Published An Article',
    description: '5 hours ago',
  },
];
const RecentActivity = () => {
  return (
    <DashboardCard title="Recent Activity">
      <ListGroup>
        {data && data.map((item, i) => <Information key={i} {...item} />)}
      </ListGroup>
    </DashboardCard>
  );
};

export default RecentActivity;
