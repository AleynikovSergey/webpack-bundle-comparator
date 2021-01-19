import React from 'react';
import { Button } from 'reactstrap';

const JobCoverItem = (props) => {
  const { coverheading, covertitle, coverparagraph, coverbutton } = props;

  return (
    <>
      <div className="pb-4">
        <h2
          className="text-capitalize font-weight-normal mb-2 text-dark"
          style={{ fontSize: '36px' }}
        >
          {coverheading}
        </h2>
        <p className="text-primary m-0">{covertitle}</p>
      </div>
      <p className="text-muted text-justify mb-5">{coverparagraph}</p>
      <div className="bt">
        <Button
          color="primary"
          className="text-capitalize outline-hover--effect"
        >
          {coverbutton}
        </Button>
      </div>
    </>
  );
};

export default JobCoverItem;
