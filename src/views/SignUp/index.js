import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import RegistrationItem from 'src/components/RegistrationItem';
import LoginItem from 'src/components/LoginItem';

const SignUp = () => {
  return (
    <Container className="pt-13">
      <Card className="overflow-hidden">
        <Row>
          <Col md={12} lg={6} className="p-0">
            <LoginItem />
          </Col>
          <Col md={12} lg={6} className="p-0">
            <Form
              className="text-center signup-form py-9 px-10"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h4 className="pb-5">Sign Up</h4>
              <RegistrationItem
                inputtype="text"
                inputplaceholder="Full Name*"
                icon={faUser}
              />
              <RegistrationItem
                inputtype="email"
                inputplaceholder="Email Address*"
                icon={faEnvelope}
              />
              <RegistrationItem
                inputtype="password"
                inputplaceholder="Password*"
                icon={faLock}
              />

              <FormGroup className="py-5" check>
                <Label check className="text-muted">
                  <Input type="checkbox" /> Remember me ?
                  <Link to="#" className="text-primary">
                    {'  '} Forgot Password
                  </Link>
                </Label>
              </FormGroup>
              <Button
                block
                color="primary"
                className="btn-lg my-5 outline-hover--effect "
              >
                Sign Up
              </Button>
              <FormGroup>
                <Label className="text-muted">
                  Don’t have an acount ?
                  <Link to="#" className="text-primary">
                    {'  '} Log In
                  </Link>
                </Label>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default SignUp;
