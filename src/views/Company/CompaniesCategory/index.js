import React from 'react';
import { Card, FormGroup, Form, Col, CardBody } from 'reactstrap';
import Select from 'react-dropdown-select';

const CompaniesCategory = () => {
  return (
    <Col lg={12}>
      <Card>
        <CardBody className="d-flex justify-content-between align-items-center p-5">
          <Form
            className="w-25"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FormGroup className="mb-0">
              <Select
                className="text-muted form-control"
                placeholder="Category"
                options={[
                  {
                    value: 'Category',
                    label: 'Category',
                  },
                  {
                    value: 'Education',
                    label: 'Education',
                  },
                ]}
              />
            </FormGroup>
          </Form>
          <p className="text-primary mb-0">You're Watching 01 To 05</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CompaniesCategory;
