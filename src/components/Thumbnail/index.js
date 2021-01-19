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

const Thumbnail = (props) => {
  const {
    thumbnailImg,
    title,
    jobCategory,
    jobCategoryIcon,
    location,
    locationIcon,
    iconbutton,
    buttonName,
    btnSize,
    className,
  } = props;
  return (
    <Card className={`p-5 thumbnail rounded-0 ${className}`}>
      <Row>
        <Col md={8} sm={12} lg={8}>
          <Media>
            <Media left>
              <Media
                className="d-block"
                object
                src={thumbnailImg}
                alt="thumbnail"
              />
            </Media>
            <Media body className="pl-3 align-self-center">
              <h5 className="pl-3 m-0 font-weight-normal text-dark">{title}</h5>
              <ListGroup horizontal className="flex-wrap">
                <ListGroupItem className="pr-0 pb-0 ">
                  {jobCategoryIcon && (
                    <FontAwesomeIcon
                      className=" text-primary mr-1"
                      icon={jobCategoryIcon}
                    />
                  )}
                  {jobCategory}
                </ListGroupItem>
                <ListGroupItem className="pr-0 pb-0">
                  {locationIcon && (
                    <FontAwesomeIcon
                      className=" text-primary mr-1"
                      icon={locationIcon}
                    />
                  )}
                  {location}
                </ListGroupItem>
              </ListGroup>
            </Media>
          </Media>
        </Col>
        <Col
          md={4}
          lg={4}
          className="align-self-center text-lg-right text-md-right text-sm-left"
        >
          <ListGroup horizontal className="d-inline-flex">
            {iconbutton && (
              <Button
                size="sm"
                outline
                color="light"
                className="btn-icon border d-flex align-items-center  mt-3 mr-3"
              >
                <FontAwesomeIcon className="text-primary" icon={iconbutton} />
              </Button>
            )}
            <Button
              color="primary"
              size={btnSize}
              className="mt-3 outline-hover--effect"
            >
              {buttonName}
            </Button>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
};

export default Thumbnail;
