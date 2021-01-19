import React from 'react';
import {
  Col,
  Row,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

const GeneralForm = () => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Row form>
        <Col md={6}>
          <InputGroup>
            <Input placeholder="Name*" className="border-right-0" />
            <InputGroupAddon addonType="append">
              <InputGroupText className="bg-white border-left-0">
                <FontAwesomeIcon className="text-primary" icon={faUser} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mt-5 mt-md-0">
            <Input placeholder="Email*" className="border-right-0" />
            <InputGroupAddon addonType="append">
              <InputGroupText className="bg-white border-left-0">
                <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col className="pt-4">
          <InputGroup className="w-100">
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              className="border-right-0"
              placeholder="Message"
            />
            <InputGroupAddon addonType="append">
              <InputGroupText className="bg-white border-left-0">
                <FontAwesomeIcon
                  className="text-primary mb-auto "
                  icon={faComment}
                />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Button className="mt-4 btn-sm outline-hover--effect" color="primary">
        Submit
      </Button>
    </Form>
  );
};

export default GeneralForm;
