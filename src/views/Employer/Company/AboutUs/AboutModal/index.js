import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
const AboutModal = () => {
  return (
    <FormGroup row>
      <Label for="exampleText" sm={3}>
        Write Yourself:
      </Label>
      <Col sm={9}>
        <Input
          type="textarea"
          name="text"
          id="exampleText"
          placeholder="Write YourSelf"
          className="border-top-0 border-left-0 border-right-0 boder-bottom"
        />
      </Col>
    </FormGroup>
  );
};

export default AboutModal;
