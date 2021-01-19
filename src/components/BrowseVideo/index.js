import React from 'react';
import { Row, Card, Col } from 'reactstrap';

import GalleryTop from 'src/components/GalleryTop';

const BrowseVideo = () => {
  return (
    <Row>
      <Col xs="12" sm="12" md="12">
        <card body>
          <GalleryTop text="intro video" />
        </card>
      </Col>
    </Row>
  );
};

export default BrowseVideo;
