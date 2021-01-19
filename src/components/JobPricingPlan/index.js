import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SectionHeading from 'src/components/SectionHeading';
import JobPricingPlanItem from 'src/components/JobPricingPlanItem';

const pricingPlan = [
  {
    title: 'Basic Plan',
    price: '29',
    duration: 'Per Month',
    list: [
      '5 Jobs Posting',
      '2 Featured Jobs',
      '1 Renew Jobs',
      '10 Days Duration',
      'Email Alert',
    ],
  },
  {
    title: 'Premium Plan',
    price: '49',
    duration: 'Per Month',
    list: [
      '5 Jobs Posting',
      '2 Featured Jobs',
      '1 Renew Jobs',
      '10 Days Duration',
      'Email Alert',
    ],
  },
  {
    title: 'Advanced Plan',
    price: '69',
    duration: 'Per Month',
    list: [
      '5 Jobs Posting',
      '2 Featured Jobs',
      '1 Renew Jobs',
      '10 Days Duration',
      'Email Alert',
    ],
  },
];

const JobPricingPlan = (props) => {
  const { home1, pricing2, pricing3 } = props;
  return (
    <div
      className={`bg-light ${home1 && 'pricing-plan pt-6 pt-md-13'} ${
        pricing2 && 'pricing-plan-two pt-13'
      } ${
        pricing3 &&
        'pricing-plan-three mb-6 mb-lg-13 position-relative pt-13 pt-lg-0'
      }`}
    >
      {pricing3 && (
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line.png"
          alt="line-shape"
          className="line-shape1 position-absolute d-none d-xl-block"
        />
      )}

      <SectionHeading
        title="Choose Pricing Plan"
        description="Your next level Product developemnt company assets"
      />
      <Container
        className={`pricing-plan-item ${
          (home1 || pricing2) && 'pb-6 pb-md-13'
        }`}
      >
        <Row className="justify-content-center">
          {Array.isArray(pricingPlan) &&
            pricingPlan.map((item, i) => (
              <Col
                lg={4}
                md={12}
                sm={12}
                key={i}
                className="mb-md-6 mb-sm-6 mb-6"
              >
                <JobPricingPlanItem
                  {...item}
                  home1={home1}
                  pricing2={pricing2}
                  pricing3={pricing3}
                />
              </Col>
            ))}
        </Row>
      </Container>
      {pricing3 && (
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line3.png"
          alt="line-shape"
          className="line-shape2 position-absolute d-none d-xl-block"
        />
      )}
    </div>
  );
};

export default JobPricingPlan;
