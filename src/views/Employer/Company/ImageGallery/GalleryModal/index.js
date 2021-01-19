import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
const GalleryModal = () => {
  return (
    <>
      <FormGroup row>
        <Label for="exampleText" sm={3}>
          Gallery 01:
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="text"
            id="exampleText"
            placeholder="Title"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
          <Input
            type="text"
            name="text"
            id="exampleText"
            placeholder="Link"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
          <Label for="exampleFile" className="text-muted m-3">
            Image
          </Label>
          <Input type="file" name="file" id="exampleFile" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={3}>
          Gallery 02:
        </Label>
        <Col sm={9}>
          <Input
            type="text"
            name="text"
            id="exampleText"
            placeholder="Title"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
          <Input
            type="text"
            name="text"
            id="exampleText"
            placeholder="Link"
            className="border-top-0 border-left-0 border-right-0 boder-bottom"
          />
          <Label for="exampleFile" className="text-muted m-3">
            Image
          </Label>
          <Input type="file" name="file" id="exampleFile" />
        </Col>
      </FormGroup>
    </>
  );
};

export default GalleryModal;
