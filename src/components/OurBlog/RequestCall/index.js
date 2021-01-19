import React from 'react';
import {
  Card,
  Form,
  FormGroup,
  Input,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

const RequestCall = () => {
  return (
    <Card body className="px-5 py-6 request-call-back">
      <CardTitle className="pb-5 h4 text-white">Request Call Back</CardTitle>
      <CardText className="text-white">
        What do all consultants need? In short trust This is achieved with
        professional and the ability to communicate. and the ability to
        communicate.
      </CardText>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormGroup>
          <Input type="text" name="help" placeholder="How Can We Help?" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="name" placeholder="Your Name" />
        </FormGroup>
        <FormGroup>
          <Input type="email" name="email" placeholder="Your Email" />
        </FormGroup>
        <Button
          color="warning"
          block
          className="text-white outline-hover--effect warning"
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default RequestCall;
