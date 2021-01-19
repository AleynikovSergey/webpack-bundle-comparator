// External component
import React from 'react';
import { Row, Col, Container, DropdownItem } from 'reactstrap';

// Own component
import ProductItem from './MegaMenuItem';
import AvailabeJob from './AvailabeJob';

const jobSkills = [
  {
    path: '#',
    itemName: 'HTML5 & CSS3',
  },
  {
    path: '#',
    itemName: 'wordpress',
  },
  {
    path: '#',
    itemName: ' javascript',
  },
  {
    path: '#',
    itemName: 'photoshop',
  },
  {
    path: '#',
    itemName: 'designer',
  },
  {
    path: '#',
    itemName: 'construction',
  },
];
const categories = [
  {
    path: '#',
    itemName: 'graphic design',
  },
  {
    path: '#',
    itemName: ' engineering jobs',
  },
  {
    path: '#',
    itemName: ' mainframe jobs',
  },
  {
    path: '#',
    itemName: ' PSU jobs',
  },
  {
    path: '#',
    itemName: 'goverment jobs',
  },
  {
    path: '#',
    itemName: 'IT company',
  },
];
const jobLocation = [
  {
    path: '#',
    itemName: 'India',
  },
  {
    path: '#',
    itemName: 'United State',
  },
  {
    path: '#',
    itemName: 'Japan',
  },
  {
    path: '#',
    itemName: 'Dubai',
  },
  {
    path: '#',
    itemName: 'South Africa',
  },
  {
    path: '#',
    itemName: 'China',
  },
];
const openJobs = [
  {
    logo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/job1.jpg',
    jobCategory: 'Some Designers Inelevated The..',
    time: '5 hour ago',
  },
  {
    logo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/job1.jpg',
    jobCategory: 'Some Designers Inelevated The..',
    time: '12 hour ago',
  },
];
const MegaDropDown = () => {
  return (
    <div className="dropdown-menu shadow-sm mega-dropdown-menu mt-0">
      <Container className="d-block">
        <Row>
          <Col className=" p-0" lg={3} sm={6} md={6}>
            <ul className="border-right p-0 pb-3">
              <DropdownItem
                header
                className="p-5 border-0 text-primary h5 bg-white"
              >
                Job Skills
              </DropdownItem>
              {jobSkills &&
                jobSkills.map((item, i) => <ProductItem key={i} {...item} />)}
            </ul>
          </Col>
          <Col className=" p-0" lg={3} sm={6} md={6}>
            <ul className="border-right p-0 pb-3">
              <DropdownItem
                header
                className="p-5 border-0 text-primary h5 bg-white"
              >
                Categories
              </DropdownItem>
              {categories &&
                categories.map((item, i) => <ProductItem key={i} {...item} />)}
            </ul>
          </Col>
          <Col className=" p-0" lg={3} sm={6} md={6}>
            <ul className="border-right p-0 pb-3">
              <DropdownItem
                header
                className="p-5 border-0 text-primary h5 bg-white"
              >
                Jackets
              </DropdownItem>
              {jobLocation &&
                jobLocation.map((item, i) => <ProductItem key={i} {...item} />)}
            </ul>
          </Col>
          <Col className=" p-0" lg={3} sm={6} md={6}>
            <ul className="p-0 pb-3">
              <DropdownItem
                header
                className="p-5 border-0 text-primary h5 bg-white"
              >
                Accessories
              </DropdownItem>
              {openJobs &&
                openJobs.map((item, i) => <AvailabeJob key={i} {...item} />)}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MegaDropDown;
