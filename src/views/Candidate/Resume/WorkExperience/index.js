import React from 'react';
import { ListGroup } from 'reactstrap';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// Own Component
import DashboardCard from 'src/components/DashboardCard';
import QualificationInfo from '../QualificationInfo';

const data = [
  {
    icon: faGraduationCap,
    year: '2018 - Present',
    worked: 'Lead UI/UX, Web Design, Interaction Design',
    workdedAt: 'At CDGI',
    description:
      'As a UI/UX Designer, i have a strong background of work closely with Developers and associate with Design Research to enhance design suggestions. Manage design wireframes, mockups and navigation maps. My job was to make sure that my Designs are unique.Develop clean well executed design concepts. Coordinate with team on design and prototype of new interfaces.',
  },
  {
    icon: faGraduationCap,
    year: '2014 - 2018',
    worked: 'Computer Operator/Programmer ',
    workdedAt: 'At Digiworld',
    description:
      'We can develop and design anything beyond your imagination. About our work, we don’t say anything because our work speaks. For more, you can ask our clients and they will tell you how much satisfied they are with our services. So, what are you waiting for?We can develop and design anything beyond your imagination. About our work, we don’t say anything because our work speaks. For more, you can ask our clients and they will tell you how much satisfied they are with our services. So, what are you waiting for?',
  },
];

const WorkExperience = () => {
  return (
    <DashboardCard title="Work Experience" action className="mb-5">
      <ListGroup>
        {data && data.map((item, i) => <QualificationInfo key={i} {...item} />)}
      </ListGroup>
    </DashboardCard>
  );
};

export default WorkExperience;
