import React from 'react';
import { Form, Input, Row, Col, Button, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-dropdown-select';

const BannerForm = () => {
  return (
    <Form
      className="banner-form mb-3"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Row form>
        <Col md={7} sm={7} className="mb-3">
          <Input
            placeholder="Keyword e.g. (Job Title, Description, Tags)"
            className="mr-3 pl-2"
          />
        </Col>
        <Col md={5} sm={5} className="mb-3">
          <FormGroup className="mb-0">
            <Select
              className=" text-muted form-control"
              placeholder="Select Location"
              options={[
                {
                  value: 'Calefornia',
                  label: 'Calefornia',
                },
                {
                  value: 'los vegas',
                  label: 'los vegas',
                },
              ]}
            />
          </FormGroup>
        </Col>
        <Col md={7} sm={7} className="mb-3">
          <FormGroup className="mb-0">
            <Select
              className=" text-muted form-control"
              placeholder="category"
              options={[
                {
                  value: 'real estate',
                  label: 'real estate',
                },
                {
                  value: 'electronics',
                  label: 'electronics',
                },
                {
                  value: 'marketing',
                  label: 'marketing',
                },
              ]}
            />
          </FormGroup>
        </Col>
        <Col md={5} sm={5} className="mb-3">
          <FormGroup className="mb-0">
            <Select
              className=" text-muted form-control"
              placeholder="experience"
              options={[
                {
                  value: '5 year',
                  label: '5 year',
                },
                {
                  value: '3 year',
                  label: '3 year',
                },
                {
                  value: 'fresher',
                  label: 'fresher',
                },
              ]}
            />
          </FormGroup>
        </Col>
        <Col>
          <Button color="primary" className="outline-hover--effect">
            <FontAwesomeIcon className="mr-2" icon={faSearch} />
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BannerForm;
