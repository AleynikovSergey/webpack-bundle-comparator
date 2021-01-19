import React from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegistrationItem = (props) => {
  const { inputtype, inputname, inputid, inputplaceholder, icon } = props;
  return (
    <InputGroup className=" mb-4">
      <Input
        type={inputtype}
        name={inputname}
        id={inputid}
        placeholder={inputplaceholder}
        className="border-right-0"
      />
      <InputGroupAddon addonType="append">
        <InputGroupText className="bg-transparent text-primary border-left-0">
          <FontAwesomeIcon className="text-primary" icon={icon} />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default RegistrationItem;
