import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CompaniesItem from '../CompaniesItem';
import HiringDetails from './HiringDetails';
import CustomButtonGroup from 'src/components/CustomButtonGroup';

import logo from 'src/assets/images/Companies/cmp1.png';

const data = [
  {
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp3.png',
  },
  {
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp4.png',
  },
  {
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/cmp2.png',
  },
  {
    companyName: 'Akshay INC.',
    jobCount: '04',
    companyLogo: logo,
  },
];

// Slider Resposive data
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1199, min: 576 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const HiringCompany = () => {
  return (
    <Container className="pb-6 pb-md-13 text-center text-lg-left hiring-company">
      <Row>
        <Col
          md={12}
          lg={6}
          xs={12}
          sm={12}
          className="text-center text-lg-left"
        >
          <HiringDetails />
        </Col>
        <Col md={12} lg={6} xs={12} sm={12}>
          <Carousel
            className="hiring-company--slider position-static"
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            slidesToSlide={2}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            arrows={false}
            customButtonGroup={<CustomButtonGroup />}
            itemClass="p-2"
          >
            {data && data.map((item, i) => <CompaniesItem key={i} {...item} />)}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default HiringCompany;
