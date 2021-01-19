import React from 'react';

import { faBook, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import JobSummaryItem from 'src/components/JobSummaryItem';

const data = [
  { color: '#ff9500', icon: faBook, count: '260', category: 'Applied Job' },
  {
    color: '#1fbba6',
    icon: faEye,
    count: '11,120',
    category: 'Companies Viewed',
  },
  {
    color: '#76c80e',
    icon: faEnvelopeOpenText,
    count: '1608',
    category: 'Favourite Jobs',
  },
];
const JobSummary = () => {
  return (
    <>{data && data.map((item, i) => <JobSummaryItem key={i} {...item} />)}</>
  );
};

export default JobSummary;
