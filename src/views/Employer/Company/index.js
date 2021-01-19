import React from 'react';
import { Button } from 'reactstrap';

import BasicInformation from './BasicInformation';
import AboutUs from './AboutUs';
import IntroVideo from './IntroVideo';
import ImageGallery from './ImageGallery';

const Company = () => {
  return (
    <>
      <BasicInformation />
      <AboutUs />
      <IntroVideo />
      <ImageGallery />
      <Button
        color="primary"
        className="mb-5"
        className="outline-hover--effect"
      >
        Save Changes
      </Button>
    </>
  );
};

export default Company;
