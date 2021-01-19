import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
const BasicInfoModal = () => {
  return (
    <>
      <FormGroup row>
        <Label for="exampetext" sm={3}>
          Category :
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="category"
            id="exampleEmail"
            placeholder="Design & Creative"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>
          Location :
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="location"
            id="exampleEmail"
            placeholder="loss angels"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>
          Phone :
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="phone"
            id="exampleEmail"
            placeholder="+91 98362271"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>
          Email :
        </Label>
        <Col sm={9}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="webstroat@gmail.com"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={3}>
          Company size :
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="phone"
            id="exampleEmail"
            placeholder="100"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
        </Col>
      </FormGroup>
    </>
  );
};

export default BasicInfoModal;
