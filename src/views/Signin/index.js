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
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import RegistrationItem from 'src/components/RegistrationItem';
import LoginItem from 'src/components/LoginItem';

const Signin = () => {
  return (
    <Container className="pt-13">
      <Card className="overflow-hidden">
        <Row>
          <Col md={12} lg={6} className="p-0">
            <LoginItem />
          </Col>
          <Col md={12} lg={6} className="p-0">
            <Form
              className="text-center login-form  py-14 px-13"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h4 className="pb-5">Login</h4>
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
              <FormGroup check className="my-5">
                <Label check className="text-muted">
                  <Input type="checkbox" /> Remember me ?
                  <Link to="#" className="text-primary">
                    Forgot Password
                  </Link>
                </Label>
              </FormGroup>
              <Button
                block
                color="primary"
                className="btn-lg  my-5 outline-hover--effect"
              >
                Login
              </Button>
              <FormGroup>
                <Label className="text-muted">
                  Don’t have an acount ?
                  <Link to="#" className="text-primary">
                    {'  '} Sign up
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

export default Signin;
