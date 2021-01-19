import React from 'react';

import { faBook, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import JobSummaryItem from 'src/components/JobSummaryItem';
import { Row, Col } from 'reactstrap';
import { faUser, faEye } from '@fortawesome/free-regular-svg-icons';

const data = [
  { color: '#ff9500', icon: faBook, count: '260', category: 'Job Posted' },
  {
    color: '#ff5e3a',
    icon: faUser,
    count: '590',
    category: 'Shortlisted Resume',
  },
  {
    color: '#1fbba6',
    icon: faEye,
    count: '1608',
    category: 'Total Page View',
  },
  {
    color: '#76c80e',
    icon: faEnvelopeOpenText,
    count: '1608',
    category: 'Total Application',
  },
];
const Summary = () => {
  return (
    <>
      <Row>
        {data &&
          data.map((item, i) => (
            <Col md={6} key={i}>
              <JobSummaryItem {...item} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Summary;
