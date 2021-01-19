import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QualificationInfo = (props) => {
  const { icon, year, description, worked, workdedAt } = props;
  return (
    <ListGroupItem className="d-flex p-1 border-bottom">
      <FontAwesomeIcon className="mt-2 text-primary" icon={icon} />
      <div className="ml-4 pb-4">
        <span className="text-muted">{year}</span>
        <h6 className="m-0 d-block py-2">
          {worked} <span className="text-primary">{workdedAt}</span>
        </h6>
        <p className="m-0 d-block text-muted">{description}</p>
      </div>
    </ListGroupItem>
  );
};

export default QualificationInfo;
