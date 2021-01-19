import React from 'react';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import DashboardCard from 'src/components/DashboardCard';
import LocationMap from 'src/components/LocationMap';

const Address = () => {
  return (
    <DashboardCard title="Address / Location" className="mb-3">
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect5">Country</Label>
              <Input type="select" name="select" id="exampleSelect5">
                <option>USA</option>
                <option>Germany</option>
                <option>France</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleSelect6">City</Label>
              <Input type="select" name="select" id="exampleSelect6">
                <option>Calofornia</option>
                <option>Calofornia</option>
                <option>Calofornia</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="exampleAddress">Full Address</Label>
          <Input
            type="text"
            name="address"
            id="exampleAddress"
            placeholder="London Uk"
          />
        </FormGroup>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">Lattitude</Label>
              <Input
                type="text"
                name="city"
                id="41.4073509"
                placeholder="41.4073509"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">Longitude</Label>
              <Input
                type="text"
                name="state"
                id="exampleState"
                placeholder="51.4073509"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleZip">Zoom</Label>
              <Input type="text" name="zip" id="exampleZip" placeholder="20" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <LocationMap height={400} />
    </DashboardCard>
  );
};

export default Address;
