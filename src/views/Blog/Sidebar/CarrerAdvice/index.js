import React from 'react';
import { Link } from 'react-router-dom';

import img1 from 'src/assets/images/BlogSingle/advisor1.jpg';
import img2 from 'src/assets/images/BlogSingle/advisor2.jpg';
import img3 from 'src/assets/images/BlogSingle/advisor3.jpg';

import DashboardCard from 'src/components/DashboardCard';
import Advice from 'src/components/Performer';

const advice = [
  {
    img: img1,
    to: '',
    heading: 'Job Seekeks OCT - 2019',
    type: 'date',
    date: '20 OCT, 2019',
  },
  {
    img: img2,
    to: '',
    heading: 'Digital World NOV - 2018',
    type: 'date',
    date: '20 OCT, 2019',
  },
  {
    img: img3,
    to: '',
    heading: 'Job Seekeks DEC - 2019',
    type: 'date',
    date: '20 OCT, 2019',
  },
];

const CarrerAdvice = () => {
  return (
    <DashboardCard title="carrer advice" className="mb-5">
      {Array.isArray(advice) &&
        advice.map((item, i) => <Advice key={i} {...item} />)}
      {advice.length >= 3 && (
        <Link to="#" className="text-capitalize text-primary mt-3">
          view all
        </Link>
      )}
    </DashboardCard>
  );
};

export default CarrerAdvice;
