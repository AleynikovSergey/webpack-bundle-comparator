import React from 'react';

import banner from 'src/assets/images/CompanySingle/company-banner.png';

import Details from './CompanyDetails';

const CompanyDetails = () => {
  return (
    <>
      <img src={banner} alt="company banner" className="img-fluid" />
      <Details />
    </>
  );
};

export default CompanyDetails;
