import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';
const VideoModal = () => {
  return (
    <FormGroup row>
      <Label for="exampleEmail" sm={3}>
        Video Link :
      </Label>
      <Col sm={9}>
        <Input
          type="text"
          name="videolink"
          id="exampleEmail"
          placeholder="Youtube Url Or Browse Link"
          className="border-top-0 border-left-0 border-right-0 boder-bottom"
        />
      </Col>
    </FormGroup>
  );
};

export default VideoModal;
