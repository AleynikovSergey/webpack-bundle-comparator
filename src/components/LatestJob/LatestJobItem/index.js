import React from 'react';
import { ListGroup, ListGroupItem, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    logo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
    jobFor: 'Trainee Web Designer, (Fresher)',
    company: 'Google',
    remotely: 'Remotely',
    city: 'New York',
    price: '9,100',
  },
  {
    logo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
    jobFor: 'Trainee Web Designer, (Fresher)',
    company: 'Google',
    remotely: 'Remotely',
    city: 'New York',
    price: '9,100',
    to: '#',
  },
  {
    logo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt3.png',
    jobFor: 'Trainee Web Designer, (Fresher)',
    company: 'Google',
    remotely: 'Remotely',
    city: 'New York',
    price: '9,100',
    to: '#',
  },
  {
    logo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt4.png',
    jobFor: 'Trainee Web Designer, (Fresher)',
    company: 'Google',
    remotely: 'Remotely',
    city: 'New York',
    price: '9,100',
    to: '#',
  },
];

const LatestJobItem = () => {
  // const {logo,jobFor,company,remotely,city,price} = props;
  return (
    <>
      {data &&
        data.map((item, i) => (
          <ListGroup
            horizontal
            key={i}
            className="align-items-center justify-content-between border-bottom py-5"
          >
            <ListGroupItem tag="a" href={item.to || '#'} className="p-0">
              <img width="100%" src={item.logo} alt="logo" />
            </ListGroupItem>
            <ListGroupItem
              tag="a"
              href={item.to || '#'}
              className="p-0 ml-sm-3 job-for"
            >
              {item.jobFor}
            </ListGroupItem>
            <ListGroupItem className="text-muted d-none d-sm-block">
              {item.company}
            </ListGroupItem>
            <ListGroupItem className="text-muted d-none d-lg-block">
              {item.remotely}
            </ListGroupItem>
            <ListGroupItem className="text-muted d-none d-lg-block">
              {item.city}
            </ListGroupItem>
            <ListGroupItem className="text-muted d-none d-lg-block">
              ${item.price}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                outline
                color="primary"
                size="sm"
                className="default-hover--effect"
              >
                Apply
              </Button>
            </ListGroupItem>
          </ListGroup>
        ))}
      <Row>
        <Col className="d-flex justify-content-between mt-3">
          <p className="text-muted">
            {data.length < 5 ? `Showing 0${data.length}` : 'Showing 1-5'} of{' '}
            {data.length} Latest Jobs
          </p>
          <Link to="#" className="text-primary">
            See All Jobs <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default LatestJobItem;
