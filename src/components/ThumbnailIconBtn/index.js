import React from 'react';
import {
  Media,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThumbnailIconBtn = (props) => {
  const {
    thumbnailImg,
    title,
    jobCategory,
    jobCategoryIcon,
    location,
    locationIcon,
    btnOneIcon,
    btnOneName,
    btnTwoIcon,
    btnTwoName,
  } = props;
  return (
    <Card className="p-5 mb-5 thumbnail-btn-icon">
      <Row>
        <Col xl={7} md={8} lg={8}>
          <Media>
            <Media left>
              <Media
                className="d-block"
                object
                src={thumbnailImg}
                alt="thumbnail"
              />
            </Media>
            <Media body className="pl-3 ">
              <h4 className="pl-3 m-0">{title}</h4>
              <ListGroup horizontal className="mt-1">
                <ListGroupItem className="p-1">
                  <FontAwesomeIcon
                    className="pr-1 text-primary mr-1"
                    icon={jobCategoryIcon}
                  />
                  {jobCategory}
                </ListGroupItem>
                <ListGroupItem className="p-1 pr-0">
                  <FontAwesomeIcon
                    className="pr-1 text-primary mr-1"
                    icon={locationIcon}
                  />
                  {location}
                </ListGroupItem>
              </ListGroup>
            </Media>
          </Media>
        </Col>
        <Col xl={5} md={4} lg={4} className="align-self-center ">
          <ListGroup horizontal className="justify-content-center">
            <ListGroupItem className="p-0">
              <Button
                color="primary"
                outline
                className="border d-flex align-items-center pl-3 pr-3 ml-3 default-hover--effect primary "
              >
                <FontAwesomeIcon
                  className="mr-2 h6 m-0 d-flex align-self-center text-primary"
                  icon={btnOneIcon}
                />
                {btnOneName}
              </Button>
            </ListGroupItem>
            <ListGroupItem className="d-none d-xl-block p-0">
              <Button
                color="primary"
                className="border d-flex align-items-center pl-3 pr-3 ml-3 text-white outline-hover--effect "
              >
                <FontAwesomeIcon
                  className="mr-2  h6 m-0 d-flex align-self-center icon text-white"
                  icon={btnTwoIcon}
                />
                {btnTwoName}
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default ThumbnailIconBtn;
