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
} from 'reactstrap';
import classnames from 'classnames';
import SectionHeading from 'src/components/SectionHeading';
import BestJobItems from './BestJobItems';
import PaginationItems from 'src/components/PaginationItems';

const BestJobs = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <section className="best-jobs bg-light">
      <SectionHeading
        title="Our Best Jobs For You"
        description="Your next level Product developemnt company assets"
      />
      <Container className="">
        <Row>
          <Col lg={12} className="best-jobs-tabs">
            <Nav tabs className="d-flex border-0 justify-content-center  mb-3">
              <NavItem role="button" className="bg-white">
                <NavLink
                  className={` text-uppercase text-dark ${classnames({
                    active: activeTab === '1',
                  })}`}
                  onClick={() => {
                    toggle('1');
                  }}
                >
                  Latest Job
                </NavLink>
              </NavItem>
              <NavItem role="button" className="bg-white">
                <NavLink
                  className={`text-uppercase text-dark ${classnames({
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
        <Row>
          <Col lg={12}>
            <PaginationItems paginationbg="bg-primary border-primary" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestJobs;
