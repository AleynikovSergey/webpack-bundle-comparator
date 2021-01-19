import React from 'react';
import { Row, Col } from 'reactstrap';
// Images
import JobItem from 'src/components/JobItem';

const data = [
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
  {
    jobimg:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    company: 'Google',
    jobCategory: 'Software Engineer, (Fresher)',
    sallery: '12K - 15k P.A.',
    location: 'Los Angeles, Califonia PO, 455001',
  },
];

const JobListingItem = (props) => {
  const { grid } = props;
  return (
    <>
      {grid ? (
        <Row>
          {data &&
            data.map((item, i) => (
              <Col md={6} key={i}>
                <JobItem
                  {...item}
                  grid={grid}
                  firstColmn="col-md-12 col-sm-12 col-xs-12 p-0"
                  secondColmn="col-md-12 col-sm-12 col-xs-12 p-0"
                  textPositon="text-left"
                />
              </Col>
            ))}
        </Row>
      ) : (
        <Row>
          {data &&
            data.map((item, i) => (
              <Col md={12} key={i}>
                <JobItem
                  {...item}
                  grid={grid}
                  firstColmn="col-md-8 col-sm-12 col-xs-12"
                  secondColmn="col-md-4 col-sm-12 col-xs-12"
                  textPositon="text-left text-md-right"
                />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default JobListingItem;
