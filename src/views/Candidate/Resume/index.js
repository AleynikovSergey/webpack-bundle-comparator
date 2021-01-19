import React from 'react';
import { Button } from 'reactstrap';
// Own Component
import BasicInformation from './BasicInformation';
import AboutUs from './AboutUs';
import EducationBackground from './EducationBackground';
import WorkExperience from './WorkExperience';
import Qualification from './Qualification';

const Resume = () => {
  return (
    <>
      <BasicInformation />
      <AboutUs />
      <EducationBackground />
      <WorkExperience />
      <Qualification />
      <Button color="primary" type="submit" className="outline-hover--effect">
        Save Changes
      </Button>
    </>
  );
};

export default Resume;
