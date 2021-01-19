import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';

const NewsLatterTwo = () => {
  return (
    <section className="news-letter-two">
      <Container className="news-letter-item ">
        <Row>
          <Col className="text-center">
            <Card className="position-absolute">
              <CardBody className="py-6 py-md-12 px-6 px-md-13">
                <img
                  src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mess2.png"
                  alt="newslatter"
                  className="position-absolute animation-bounce d-none d-lg-block"
                  style={{ right: 50, top: 50 }}
                />
                <CardTitle tag="h1">Looking For A Job</CardTitle>
                <CardText className="mt-5 px-0 px-md-13">
                  We Can’t wait to welcome you on our Emaily Family Your next
                  level Product developemnt company assetsYour next level
                  Product
                </CardText>
                <Button color="primary" className="mt-6 outline-hover--effect">
                  Submit
                </Button>
                <img
                  src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/mess1.png"
                  alt="newslatter"
                  className="position-absolute animation-bounce d-none d-lg-block"
                  style={{ left: 50, bottom: 50 }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLatterTwo;
