import React from 'react';
import { ListGroup } from 'reactstrap';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

// Own component
import DashboardCard from 'src/components/DashboardCard';
import QualificationInfo from '../QualificationInfo';

const data = [
  {
    icon: faGraduationCap,
    year: '2018 - Present',
    worked: 'Masters In Software Engineering ',
    workdedAt: 'At CDGI',
    description:
      'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
  },
  {
    icon: faGraduationCap,
    year: '2014 - 2018',
    worked: 'Computer Operator/Programmer ',
    workdedAt: 'At Digiworld',
    description:
      'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
  },
  {
    icon: faGraduationCap,
    year: '2014 - 2018',
    worked: 'Computer Operator/Programmer ',
    workdedAt: 'At Digiworld',
    description:
      'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
  },
];
const EducationBackground = () => {
  return (
    <DashboardCard title="Educational Background" action className="mb-5">
      <ListGroup>
        {data && data.map((item, i) => <QualificationInfo key={i} {...item} />)}
      </ListGroup>
    </DashboardCard>
  );
};

export default EducationBackground;
