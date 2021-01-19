import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Information = (props) => {
  const { icon, title, description, className } = props;
  return (
    <ListGroupItem className={`d-flex p-1 ${className}`}>
      <FontAwesomeIcon className="mt-2 text-primary" icon={icon} />
      <div className="ml-4 pb-4">
        <p className="m-0 d-block">{title}</p>
        <span className="m-0 d-block text-muted">{description}</span>
      </div>
    </ListGroupItem>
  );
};

export default Information;
