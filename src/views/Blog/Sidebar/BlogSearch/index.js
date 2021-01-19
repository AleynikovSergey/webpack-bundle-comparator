import React from 'react';
import { Input, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import DashboardCard from '../../../../components/DashboardCard';

const BlogSearch = () => {
  return (
    <DashboardCard title="Search" className="mb-5 mt-5 mt-lg-0">
      <InputGroup>
        <Input placeholder="Search" className="border-right-0" />
        <InputGroupAddon addonType="append">
          <InputGroupText className="bg-transparent border-left-0">
            <FontAwesomeIcon className="text-primary" icon={faSearch} />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </DashboardCard>
  );
};

export default BlogSearch;
