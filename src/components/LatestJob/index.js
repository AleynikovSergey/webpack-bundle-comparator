import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import classnames from 'classnames';

import LatestJobItem from './LatestJobItem';

const LatestJob = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container className="py-6 py-md-13 latest-jobs">
      <Row>
        <Col>
          <Nav tabs className="d-flex">
            <h5 className="mr-auto p-2">Latest Jobs</h5>
            <NavItem role="button">
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                All
              </NavLink>
            </NavItem>
            <NavItem role="button">
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                Featured
              </NavLink>
            </NavItem>
            <NavItem role="button" className="d-none d-lg-block">
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}
              >
                Remotely
              </NavLink>
            </NavItem>
            <NavItem role="button" className="d-none d-lg-block">
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => {
                  toggle('4');
                }}
              >
                Part Time
              </NavLink>
            </NavItem>
            <NavItem role="button" className="d-none d-lg-block">
              <NavLink
                className={classnames({ active: activeTab === '5' })}
                onClick={() => {
                  toggle('5');
                }}
              >
                Full Time
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <LatestJobItem />
            </TabPane>
            <TabPane tabId="2">
              <LatestJobItem />
            </TabPane>
            <TabPane tabId="3">
              <LatestJobItem />
            </TabPane>
            <TabPane tabId="4">
              <LatestJobItem />
            </TabPane>
            <TabPane tabId="5">
              <LatestJobItem />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
};
export default LatestJob;
