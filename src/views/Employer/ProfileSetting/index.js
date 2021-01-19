import React from 'react';
import { Button, Card, Input, FormGroup, Label, Form } from 'reactstrap';
import ProfileEditForm from 'src/components/ProfileEditForm';
import SocialNetwok from 'src/components/SocialLinkForm';
import SecurityForm from 'src/components/SecurityForm';
import BrowseImage from 'src/components/BrowseImage';

const ProfileSetting = () => {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Card>
        <BrowseImage
          image="https://webstrot.com/html/jbdesk/main_version/dashboard/images/ws.png"
          text="JPEG Or PNG 500x500px Thumbnail"
          firstColmn="col-md-2 col-sm-2 col-xs-2 text-center text-md-left"
          secondColmn="col-md-10 col-sm-10 col-xs-10"
          textPosition="text-center text-md-left"
        />
        <BrowseImage
          image="https://webstrot.com/html/jbdesk/main_version/dashboard/images/banner.png"
          text="JPEG Or PNG 1920x300px Cover Image"
          firstColmn="col-md-5 col-sm-12 col-xs-2 text-center text-md-left"
          secondColmn="col-md-7 col-sm-12 col-xs-10  text-center text-md-left"
          textPosition=""
        />
        <ProfileEditForm />
      </Card>
      <SocialNetwok />
      <SecurityForm />
      <FormGroup check className="mb-5">
        <Label check>
          <Input type="checkbox" />
          Enable Two Step Verification Via Email
        </Label>
      </FormGroup>
      <Button color="primary" className="outline-hover--effect">
        Save Changes
      </Button>
    </Form>
  );
};

export default ProfileSetting;
