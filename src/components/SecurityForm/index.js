import React from 'react';
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';
import DashboardCard from 'src/components/DashboardCard';

const SecurityForm = () => {
  return (
    <DashboardCard title="Password &Security" className="mt-5 mb-5">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Verification Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="webstrot@example.com"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Current Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="*************"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">New Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="*************"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Repet New Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="*************"
            />
          </FormGroup>
        </Col>
      </Row>
    </DashboardCard>
  );
};

export default SecurityForm;
