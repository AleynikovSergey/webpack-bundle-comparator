import React from 'react';
import { Button, Col } from 'reactstrap';

const LoadMore = (props) => {
  const { home } = props;
  return (
    <Col md={12} className="text-center mt-md-6 mt-sm-5 mt-2">
      <Button
        color="primary"
        className="text-capitalize load-more outline-hover--effect"
      >
        load more
      </Button>
    </Col>
  );
};

export default LoadMore;
