import React, { useState } from 'react';
import {
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import classnames from 'classnames';
import SectionHeading from 'src/components/SectionHeading';
import BestJobItems from './BestJobItems';
import RoundShapeAnimation from 'src/components/RoundShapeAnimation';

const BestJobsTwo = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <section className="best-jobs-two bg-white position-relative pb-6 pb-md-13 mt-6 mt-md-13">
      <figure className="line-shape position-absolute d-none d-xl-block">
        <img
          src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/line.png"
          alt="line-shape"
        />
      </figure>
      <SectionHeading
        title="Our Best Jobs For You"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          <Col lg={12} className="best-jobs-tabs text-center">
            <Nav
              tabs
              className="d-inline-block border-0 justify-content-center  mb-6"
            >
              <NavItem role="button" className=" bg-transparent d-inline-block">
                <NavLink
                  className={`first-nav text-uppercase text-dark ${classnames({
                    active: activeTab === '1',
                  })}`}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  Latest Job
                </NavLink>
              </NavItem>
              <NavItem role="button" className="bg-transparent d-inline-block">
                <NavLink
                  className={`last-nav text-uppercase text-dark ${classnames({
                    active: activeTab === '2',
                  })}`}
                  onClick={() => {
                    toggle('2');
                  }}
                >
                  Popular Job
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <BestJobItems />
              </TabPane>
              <TabPane tabId="2">
                <BestJobItems />
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
      <RoundShapeAnimation />
    </section>
  );
};

export default BestJobsTwo;
