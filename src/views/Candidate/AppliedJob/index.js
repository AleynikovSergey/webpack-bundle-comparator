import React from 'react';
import { Row, Col } from 'reactstrap';
// Images
import JobItem from 'src/components/JobItem';
import jobimg from 'src/assets/images/JobItem/logo.png';

const data = [
  {
    jobimg: jobimg,
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
    firstColmn: 'col-md-8 col-sm-12 col-xs-12',
    secondColmn: 'col-md-4 col-sm-12 col-xs-12',
    textPositon: 'text-left text-md-right',
  },
  {
    jobimg: jobimg,
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
    firstColmn: 'col-md-8 col-sm-12 col-xs-12',
    secondColmn: 'col-md-4 col-sm-12 col-xs-12',
    textPositon: 'text-left text-md-right',
  },
  {
    jobimg: jobimg,
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
    firstColmn: 'col-md-8 col-sm-12 col-xs-12',
    secondColmn: 'col-md-4 col-sm-12 col-xs-12',
    textPositon: 'text-left text-md-right',
  },
];

const AppliedJob = () => {
  return (
    <Row>
      <Col md={12}>
        <h6 className="border p-4 bg-primary text-white">
          0{data.length} Applied Jobs
        </h6>
        {data && data.map((item, i) => <JobItem key={i} {...item} />)}
      </Col>
    </Row>
  );
};

export default AppliedJob;
