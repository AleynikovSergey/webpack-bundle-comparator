import React from 'react';
import { CardTitle, CardBody } from 'reactstrap';

const JobDescriptionItem = (props) => {
  const { title, children } = props;
  return (
    <>
      <CardBody className="border-bottom">
        <CardTitle tag="h4" className="m-0 pb-4">
          {title}
        </CardTitle>
        {children && <>{children}</>}
      </CardBody>
    </>
  );
};

export default JobDescriptionItem;
