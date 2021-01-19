import React from 'react';
import { ListGroup } from 'reactstrap';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
// Own componentt
import DashboardCard from 'src/components/DashboardCard';
import Information from 'src/components/Information';

const data = [
  {
    icon: faCheckSquare,
    description: '5 years+ experience designing and building products.',
  },
  {
    icon: faCheckSquare,
    description: 'Skilled at any Kind Design Tools.',
  },
  {
    icon: faCheckSquare,
    description: 'Passion for people-centered design, solid intuition.',
  },
  {
    icon: faCheckSquare,
    description: 'Hard Worker & Quick Lerner.',
  },
];
const Qualification = () => {
  return (
    <DashboardCard title="Special Qualification" action className="mb-5">
      <ListGroup>
        {data && data.map((item, i) => <Information key={i} {...item} />)}
      </ListGroup>
    </DashboardCard>
  );
};

export default Qualification;
