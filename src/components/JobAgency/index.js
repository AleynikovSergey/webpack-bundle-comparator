import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import CompaniesItem from 'src/components/CompaniesItem';
import SingleJob from 'src/components/SingleJob';

import laravel from 'src/assets/images/SingleJob/laravel.png';
import wordpress from 'src/assets/images/SingleJob/wordpress.png';
import angular from 'src/assets/images/SingleJob/angular.png';
import logo1 from 'src/assets/images/Companies/cmp3.png';
import logo2 from 'src/assets/images/Companies/cmp4.png';

const jobOpen = [
  {
    companyLogo: logo1,
    jobCount: 25,
    companyName: 'BURGER PATTY',
  },
  {
    companyLogo: logo2,
    jobCount: 4,
    companyName: 'AKSHAY INC.',
  },
];

const jobSkill = [
  {
    name: 'laravel',
    image: laravel,
    id: 1,
  },
  {
    name: 'Wordpress',
    image: wordpress,
    id: 2,
  },
  {
    name: 'AngularJS',
    image: angular,
    id: 3,
  },
];

const JobAgency = (props) => {
  const { home2 } = props;
  return (
    <section className="job-agency bg-light">
      <Container className="pt-0 pt-lg-13 pb-13 ">
        <Row>
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="text-center text-lg-left mb-3"
          >
            <div className="job-agency--heading mb-6 mb-lg-0">
              <h2 className="text-capitalize font-weight-normal mb-3">
                We Iusto Creative Digital Agency, We Provide Professional Web
                Page.
              </h2>
              <p className="mb-4">
                What do all consultants need? In short, trust. This is
                achprofessional presentation and the ability to
                communicateclearly with existing and potential clients. Whether
                you are an accountant,What do all consultants need? In short,
                trust. This is achieved with professional presentation and the
                ability to communicate.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                ed minim veniam, quis nostrud dipisicing elit, sed do eiusmod
                tempor incididunt exercitationlaborum.
              </p>
              <Button color="primary" className="outline-hover--effect">
                Learn More
              </Button>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Row>
              {jobOpen &&
                jobOpen.map((item, i) => (
                  <Col
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    key={i}
                    className="mb-6 mb-md-0"
                  >
                    <CompaniesItem {...item} />
                  </Col>
                ))}
              {jobSkill &&
                jobSkill.map((item, i) => (
                  <Col className="mt-4" lg={4} md={4} sm={4} xs={12} key={i}>
                    <SingleJob {...item} home2={home2} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobAgency;
