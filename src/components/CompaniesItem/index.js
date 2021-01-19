import React from 'react';
import { Card, CardBody, CardTitle, Button, CardImg } from 'reactstrap';

const CompaniesItem = (props) => {
  const { companyLogo, companyName, jobCount } = props;

  return (
    <Card className="text-center companies-job  overflow-hidden position-relative rounded-0">
      <CardImg
        top
        className="img-fluid p-5 m-auto w-50"
        src={companyLogo && companyLogo}
        alt="logo"
      />
      <div className="companies-country text-center bg-primary position-absolute pt-2">
        <h6 className="text-uppercase text-white">(USA)</h6>
      </div>
      <CardBody className="p-0">
        <Button
          size="sm"
          color="primary"
          style={{ transform: 'translateY(16px)' }}
        >
          {jobCount} Job Open
        </Button>
        <CardTitle tag="h5" className="pt-6 pb-4 border-top text-uppercase">
          {companyName}
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default CompaniesItem;
