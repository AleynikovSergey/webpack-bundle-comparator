import React from 'react';
import { Link } from 'react-router-dom';

import img1 from 'src/assets/images/BlogSingle/resume1.jpg';
import img2 from 'src/assets/images/BlogSingle/resume2.jpg';
import img3 from 'src/assets/images/BlogSingle/resume3.jpg';

import DashboardCard from 'src/components/DashboardCard';
import Resume from 'src/components/Performer';

const resumeData = [
  {
    img: img1,
    to: '',
    heading: 'Akshay Due',
    type: 'position',
    position: 'Dancer',
  },
  {
    img: img2,
    to: '',
    heading: 'Farhan Shaikh',
    type: 'position',
    position: 'UI Designer',
  },
  {
    img: img3,
    to: '',
    heading: 'Maria Simon',
    type: 'position',
    position: 'Developer',
  },
];

const RecentResumes = () => {
  return (
    <DashboardCard title="recent resumes" className="mb-5">
      {Array.isArray(resumeData) &&
        resumeData.map((item, i) => <Resume key={i} {...item} />)}
      {resumeData.length >= 3 && (
        <Link to="#" className="text-capitalize text-primary mt-3">
          view all resume
        </Link>
      )}
    </DashboardCard>
  );
};

export default RecentResumes;
