import React from 'react';
import {
  Col,
  Container,
  Form,
  Row,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-dropdown-select';

const SearchByCategory = () => {
  return (
    <Container className="searchby-category mt-6 mt-md-13">
      <Row>
        <Col lg={12}>
          <Form
            className="border pl-1"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Row form>
              <Col lg={3} className="pr-0">
                <FormGroup className="mb-0 py-1 pl-2">
                  <Select
                    className="border-left-0 border-top-0 border-bottom-0 text-muted form-control"
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
              </Col>

              <Col lg={3} className="p-0">
                <FormGroup className="mb-0 py-1">
                  <Select
                    className="border-left-0 border-top-0 border-bottom-0 text-muted form-control"
                    placeholder="Job Title"
                    options={[
                      {
                        value: 'Job Title',
                        label: 'Job Title',
                      },
                      {
                        value: 'Markeing',
                        label: 'Markeing',
                      },
                    ]}
                  />
                </FormGroup>
              </Col>
              <Col lg={3} className="p-0">
                <FormGroup className="mb-0 py-1">
                  <Select
                    className="border-left-0 border-top-0 border-bottom-0 text-muted form-control"
                    placeholder="Location"
                    options={[
                      {
                        value: 'Location',
                        label: 'Location',
                      },
                      {
                        value: 'Bangladesh',
                        label: 'Bangladesh',
                      },
                    ]}
                  />
                </FormGroup>
              </Col>
              <Col lg={3} className=" d-flex justify-content-between">
                <FormGroup className="mb-0 py-1 keyword">
                  <Input
                    type="text"
                    name="tag"
                    className="border-0"
                    placeholder="Keyword"
                  />
                </FormGroup>
                <Button>
                  <FontAwesomeIcon className="font-18" icon={faSearch} />
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchByCategory;
