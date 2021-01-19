import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import TrendingKeyword from 'src/components/TrendingKeyword';
import JobLisingItem from './JobLisingItem';

const JobsOverview = () => {
  return (
    <>
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center bg-primary card-header text-white">
          Jobs Overview
        </CardHeader>
        <CardBody className="text-center">
          <img
            src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/overview.png"
            alt="Cardcap"
            className="image-fluid"
          />
          <h6 className="align-self-center pt-4">
            HTML Developer (1 - 2 Yrs Exp.)
          </h6>
          <p className="align-self-center text-primary">
            Webstrot Technology Pvt. Ltd.
          </p>
          <Button outline color="primary" className="btn-icon btn-sm mr-4">
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button color="primary" className="btn btn-sm">
            Part Time
          </Button>
        </CardBody>

        <CardBody className="p-5">
          <JobLisingItem />
          <Button block color="primary" className="btn  btn-md ">
            Apply Now!
          </Button>
        </CardBody>
        <CardFooter className="d-flex justify-content-between align-items-center bg-white card-header p-5">
          <TrendingKeyword />
        </CardFooter>
      </Card>
    </>
  );
};

export default JobsOverview;
