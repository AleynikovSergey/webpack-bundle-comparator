import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';

const Breadcrumbs = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumbs">
      <Container>
        <Row
          className="d-flex text-capitalize align-items-center pt-5 pb-5"
          md={2}
          sm={1}
          xs={1}
        >
          <Col className="text-center text-md-left">
            <h2 className="text-white">{title}</h2>
          </Col>
          <Col>
            <Breadcrumb
              className="mt-0 mb-0"
              listClassName="mb-0 justify-content-md-end justify-content-center"
            >
              <BreadcrumbItem>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{title}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
