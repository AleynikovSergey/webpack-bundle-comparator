import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Button,
} from 'reactstrap';
import Select from 'react-dropdown-select';
import SalaryRangeSlider from 'src/components/SalaryRangeSlider';
import TrendingKeyword from 'src/components/TrendingKeyword';

const Filters = () => {
  return (
    <Card className="filters">
      <CardBody className="px-12 py-9 text-white">
        <CardTitle tag="h1" className="text-white mb-5">
          Filters
        </CardTitle>
        <h5 className="text-white">Salary</h5>
        <SalaryRangeSlider />
        <Form className="mb-6">
          <FormGroup className="mt-5">
            <Label tag="h5" className="mb-4 text-white" for="exampleSelect">
              Experience
            </Label>
            <Select
              className="border-0 text-muted form-control"
              placeholder="(Job Title, Description, Tags)"
              options={[
                {
                  value: '(Job Title, Description, Tags)',
                  label: '(Job Title, Description, Tags)',
                },
                {
                  value: 'Graphics Designer',
                  label: 'Graphics Designer',
                },
              ]}
            />
          </FormGroup>
          <FormGroup className="mt-5">
            <Label tag="h5" className="mb-4 text-white" for="exampleSelect">
              Category
            </Label>
            <Select
              className="border-0 text-muted form-control"
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
          <FormGroup className="mt-5">
            <Label tag="h5" className="mb-4 text-white" for="exampleSelect">
              Location
            </Label>
            <Select
              className="border-0 text-muted form-control"
              placeholder="Select Location"
              options={[
                {
                  value: 'Select Location',
                  label: 'Select Location',
                },
                {
                  value: 'Chennai',
                  label: 'Chennai',
                },
              ]}
            />
          </FormGroup>
          <Button color="primary" block className="mt-6">
            Search
          </Button>
        </Form>
        <TrendingKeyword />
      </CardBody>
    </Card>
  );
};

export default Filters;
