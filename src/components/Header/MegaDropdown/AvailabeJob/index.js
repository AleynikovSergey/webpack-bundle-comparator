import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const AvailabeJob = (props) => {
  const { logo, jobCategory, time } = props;
  return (
    <Media className="px-4 pb-5">
      <Media left>
        <Media
          style={{ width: 80 }}
          className="d-block  border"
          object
          src={logo}
          alt="job"
        />
      </Media>
      <Media body className="pl-3 align-self-center">
        <Link to="#">
          <h6 className="text-dark font-14">{jobCategory}</h6>
          <p className="text-primary font-14">{time}</p>
        </Link>
      </Media>
    </Media>
  );
};

export default AvailabeJob;
