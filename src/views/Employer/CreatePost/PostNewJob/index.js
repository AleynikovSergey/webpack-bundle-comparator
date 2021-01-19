import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import DashboardCard from 'src/components/DashboardCard';

const PostNewJob = () => {
  return (
    <DashboardCard title="Post New Job" className="mb-5">
      <Form>
        <FormGroup>
          <Label for="exampleSelect1">Job Category</Label>
          <Input type="select" name="select" id="exampleSelect1">
            <option>Ui/Ux DEsigner</option>
            <option>Ui/Ux DEsigner</option>
            <option>Ui/Ux DEsigner</option>
            <option>Ui/Ux DEsigner</option>
            <option>Ui/Ux DEsigner</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail1">Job title</Label>
          <Input
            type="text"
            name="email"
            id="exampleEmail1"
            placeholder="Need a Graphic Designer"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect2">Job Type</Label>
              <Input type="select" name="select" id="exampleSelect2">
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplejob1">Working Hour</Label>
              <Input
                type="text"
                name="job"
                id="examplejob1"
                placeholder="40/h Week"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect3">Salary</Label>
              <Input type="select" name="select" id="exampleSelect3">
                <option>$12k - 15k P.A</option>
                <option>$12k - 15k P.A</option>
                <option>$12k - 15k P.A</option>
                <option>$12k - 15k P.A</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect4">Experience</Label>
              <Input type="select" name="select" id="exampleSelect4">
                <option>1 Year Experience</option>
                <option>2 Year Experience</option>
                <option>3 Year Experience</option>
                <option>4 Year Experience</option>
                <option>5 Year Experience</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </DashboardCard>
  );
};

export default PostNewJob;
