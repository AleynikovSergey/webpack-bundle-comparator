import React from 'react';
import { Col, Row, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const ProfileEditForm = () => {
  return (
    <Row form className="p-5">
      <Col md={6}>
        <FormGroup>
          <Label for="examplePassword">@Username</Label>
          <Input type="name" name="name" id="name" placeholder="Luca Wallace" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" placeholder="Luca@examplae.com" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="phone">Phone</Label>
          <CustomInput id="phone" type="select" name="customSelect">
            <option value="">0</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Value 4</option>
            <option>Value 5</option>
          </CustomInput>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="website">Website</Label>
          <Input type="text" name="website" placeholder="www.webstrot.com" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="description">Job Description</Label>
          <Input type="select" name="select" id="description">
            <option>MArketing</option>
            <option>It And Computer</option>
            <option>MArketing</option>
            <option>MArketing</option>
            <option>MArketing</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="Address">Address</Label>
          <Input type="text" name="address" placeholder="124/A Kalani Bagh" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="examplePassword">Country</Label>
          <Input type="text" name="name" placeholder="India" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="state">State</Label>
          <Input type="select" name="select" id="state">
            <option>Madhya Pradesh</option>
            <option>Uttar Pradesh</option>
            <option>Himachal Pradesh</option>
            <option>Punjab Pradesh</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="examplePassword">City</Label>
          <Input type="text" name="city" id="city" placeholder="Luca Wallace" />
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleSelect">Zip Code</Label>
          <Input type="select" name="select">
            <option>455001</option>
            <option>322003</option>
            <option>455001</option>
            <option>322003</option>
            <option>455001</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default ProfileEditForm;
