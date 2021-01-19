import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'reactstrap';

const ResumeCard = (props) => {
  const { to, img, name, position } = props;
  return (
    <Card body className="resume-card--wrapper rounded-pill mb-5">
      <div className="resume-card d-flex justify-content-between align-items-center">
        <div className="resume-card--content d-flex align-items-center">
          <div className="applicant">
            <img src={img} alt="applicant" className="rounded-circle" />
          </div>
          <div className="bio ml-3">
            <h5 className="text-capitalize">
              <Link to={to || '#'}>{name}</Link>
            </h5>
            <p>
              <FontAwesomeIcon icon={faFolderOpen} className="icon" /> &nbsp;{' '}
              {position}
            </p>
          </div>
        </div>
        <div className="resume-card--btn">
          <Button color="light" outline className="rounded-pill border">
            <Link to={to || '#'}>View Profile</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ResumeCard;
