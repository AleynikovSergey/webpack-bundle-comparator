import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardText, CardTitle } from 'reactstrap';

const JobsCard = (props) => {
  const { name, jobs, icon, className } = props;
  return (
    <Card
      body
      className={`jobs-card--wrapper pb-4 pl-0 rounded-0 pr-0 ${className}`}
    >
      <div className="jobs-card d-flex align-items-center">
        <div className="jobs-card--icon bg-dark text-white">
          <FontAwesomeIcon icon={icon && icon} className="icon" />
        </div>
        <div className="jobs-card--content ml-5">
          <CardTitle
            tag="h5"
            className="text-capitalize font-weight-normal text-dark m-0"
          >
            {name}
          </CardTitle>
          {jobs && (
            <CardText className="text-capitalize text-muted">
              ({jobs} jobs)
            </CardText>
          )}
        </div>
      </div>
    </Card>
  );
};

export default JobsCard;
