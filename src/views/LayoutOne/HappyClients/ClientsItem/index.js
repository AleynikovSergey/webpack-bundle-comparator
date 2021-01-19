import React from 'react';
import { Card, CardBody, CardTitle, Col, Row, CardText } from 'reactstrap';

const ClientsItem = (props) => {
  const { title, category, text, img } = props;
  return (
    <Row className="align-items-center">
      <Col xl={8} lg={12} md={12}>
        <Card className="happy-clients-card">
          <figure className="client_shap1 bubble position-absolute">
            <img
              src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/bubble.png"
              className="img-responsive"
              alt="img"
            />
          </figure>
          <figure className="client_shap2 bubble position-absolute">
            <img
              src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/bubble.png"
              className="img-responsive"
              alt="img"
            />
          </figure>
          <CardBody className="pt-4 pt-md-8 pb-6 pb-md-11 px-4 px-lg-8 text-center text-md-left">
            <img
              src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/quote1.png"
              alt="client-icon"
            />
            <CardTitle tag="h5" className="mt-4">
              {title} <span className="text-muted font-16">({category})</span>
            </CardTitle>
            <CardText>{text}</CardText>
            <figure className="client_shap3 bubble position-absolute">
              <img
                src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/bubble.png"
                className="img-responsive"
                alt="img"
              />
            </figure>
          </CardBody>
        </Card>
      </Col>
      <Col xl={4} lg={12} className="d-none d-xl-block">
        <img src={img} alt="profile" />
      </Col>
    </Row>
  );
};

export default ClientsItem;
