import React from 'react';
import { Col, Row, FormGroup, Label, Input, Button } from 'reactstrap';

// Own component
import DashboardCard from 'src/components/DashboardCard';

const SocialNetwork = () => {
  return (
    <DashboardCard title="Social Network" className="mt-5 mb-5">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Google</Label>
            <Input
              type="text"
              name="google"
              placeholder="https//:google.com/webstrot"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Facebook</Label>
            <Input
              type="text"
              name="facebook"
              placeholder="https//:facebook.com/webstrot"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Twitter</Label>
            <Input
              type="text"
              name="twitter"
              id="twitter"
              placeholder="https//:twitter/webstrot"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Linkedin</Label>
            <Input
              type="text"
              name="linkedin"
              placeholder="https//:linkedin.com/webstrot"
            />
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary" className="outline-hover--effect">
        Add More
      </Button>
    </DashboardCard>
  );
};

export default SocialNetwork;
