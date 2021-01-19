import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DashboardCard from 'src/components/DashboardCard';
import Information from 'src/components/Information';
import { faFlag, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const Keywords = () => {
  return (
    <DashboardCard title="Trending Keywords" className="mb-5">
      <Form>
        <FormGroup>
          <Input type="text" name="keywords" placeholder="Type Keywords" />
        </FormGroup>
      </Form>
      <Information
        icon={faPencilAlt}
        description=" Trending Keywords :ui designer,developer,seniorit company,design,call center"
      />
    </DashboardCard>
  );
};

export default Keywords;
