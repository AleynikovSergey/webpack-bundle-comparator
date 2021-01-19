import React from 'react';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
// Own Component
import DashboardCard from 'src/components/DashboardCard';

const IntroVideo = () => {
  return (
    <DashboardCard
      title="Intro Video"
      action
      className="mb-5"
      modalName="videoLink"
    >
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormGroup row>
          <Col sm={7}>
            <Input
              type="text"
              name="video"
              placeholder="youtube url or browse video"
            />
          </Col>
          <Col sm={5}>
            <Button color="primary" block className="outline-hover--effect">
              Browse video
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </DashboardCard>
  );
};

export default IntroVideo;
