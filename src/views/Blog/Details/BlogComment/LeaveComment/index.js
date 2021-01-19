import React from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';

import GeneralForm from 'src/components/GeneralForm';

const LeaveComment = () => {
  return (
    <Card className="border-0 p-0 mt-6">
      <CardHeader
        tag="h4"
        className="bg-transparent border-0 text-capitalize mb-4 p-0 pb-2 font-weight-normal"
      >
        leave a comment
      </CardHeader>
      <CardBody className="p-0">
        <GeneralForm />
      </CardBody>
    </Card>
  );
};

export default LeaveComment;
