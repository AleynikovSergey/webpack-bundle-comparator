import React from 'react';
import CustomButtonGroup from 'src/components/CustomButtonGroup';
import { Row, Col } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import JobItem from 'src/components/JobItem';

const data = [
  {
    slide: [
      {
        jobimg:
          'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt2.png',
        company: 'Google',
        jobCategory: 'Software Engineer, (Fresher)',
        sallery: '12K - 15k P.A.',
        location: 'Los Angeles, Califonia PO, 455001',
        firstColmn: 'col-md-8 col-sm-12 col-xs-12',
        secondColmn: 'col-md-4 col-sm-12 col-xs-12',
        textPositon: 'text-left text-md-right',
      },
      {
        jobimg:
          'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt1.png',
        company: 'Google',
        jobCategory: 'Software Engineer, (Fresher)',
        sallery: '12K - 15k P.A.',
        location: 'Los Angeles, Califonia PO, 455001',
        firstColmn: 'col-md-8 col-sm-12 col-xs-12',
        secondColmn: 'col-md-4 col-sm-12 col-xs-12',
        textPositon: 'text-left text-md-right',
      },
      {
        jobimg:
          'https://webstrot.com/html/jbdesk/main_version/main_pages/images/lt5.png',
        company: 'Google',
        jobCategory: 'Software Engineer, (Fresher)',
        sallery: '12K - 15k P.A.',
        location: 'Los Angeles, Califonia PO, 455001',
        firstColmn: 'col-md-8 col-sm-12 col-xs-12',
        secondColmn: 'col-md-4 col-sm-12 col-xs-12',
        textPositon: 'text-left text-md-right',
      },
    ],
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    partialVisible: true,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const OpenJobs = () => {
  return (
    <>
      <Row className="mt-10">
        <Col>
          <h5>Job Open</h5>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            slidesToSlide={1}
            customTransition=" transform 1000ms ease-in-out"
            transitionDuration={1000}
            arrows={false}
            customButtonGroup={<CustomButtonGroup />}
            className="company-single-slider position-static"
            partialVisible
          >
            {data &&
              data.map((items) =>
                items?.slide.map((item, i) => (
                  <Col md={12} key={i}>
                    <JobItem {...item} />
                  </Col>
                ))
              )}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default OpenJobs;
