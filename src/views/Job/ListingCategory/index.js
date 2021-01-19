import { faBars, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, FormGroup, Form, CardBody, Button } from 'reactstrap';
import Select from 'react-dropdown-select';
import JobLisingItem from '../JobListingItem';

const ListingCategory = () => {
  const [list, setList] = useState(false);

  return (
    <>
      <Card className="rounded-0">
        <CardBody className="d-flex justify-content-between align-items-center p-5 ">
          <div className="category d-flex align-items-baseline">
            <Form
              className="mr-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormGroup className="mb-0">
                <Select
                  className="text-muted form-control"
                  placeholder="Sort By"
                  options={[
                    {
                      value: 'Category',
                      label: 'Category',
                    },
                    {
                      label: 'Education',
                      value: 'Education',
                    },
                  ]}
                />
              </FormGroup>
            </Form>

            <Button
              onClick={() => setList(true)}
              color={`${list ? 'primary' : ''}`}
              size="sm"
              className="btn-icon mr-3 ml-14 ml-md-0 d-none d-md-block"
            >
              <FontAwesomeIcon icon={faThLarge} />
            </Button>
            <Button
              onClick={() => setList(false)}
              color={`${!list ? 'primary' : null}`}
              size="sm"
              className="btn-icon "
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
          <h6 className="text-primary mb-0 font-14 d-none d-md-block">
            You're Watching 01 To 10
          </h6>
        </CardBody>
      </Card>
      <JobLisingItem grid={list} />
    </>
  );
};

export default ListingCategory;
