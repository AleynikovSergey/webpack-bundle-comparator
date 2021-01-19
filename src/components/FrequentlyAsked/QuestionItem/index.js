// External Component
import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const QuestionItem = (props) => {
  const { title, description, id, collapse, setCollapse } = props;
  const [status, setStatus] = useState(
    <p className="d-flex justify-content-between">
      <span>{title}</span>
      <span>
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </p>
  );

  const onEntering = () =>
    setStatus(
      <p className="d-flex justify-content-between">
        <span>{title}</span>
        <span>
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </p>
    );

  const onExited = () =>
    setStatus(
      <p className="d-flex justify-content-between">
        <span>{title}</span>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </p>
    );

  const toggle = () => setCollapse(!collapse);
  return (
    <div className="videos-item">
      <Button
        color="transparent"
        onClick={() => setCollapse(id)}
        style={{ marginBottom: '1rem' }}
        className="w-100 border-bottom p-0"
      >
        {' '}
        {status}
      </Button>
      <Collapse
        isOpen={id === collapse}
        onExited={onExited}
        onEntering={onEntering}
      >
        <p>{description}</p>
      </Collapse>
    </div>
  );
};
export default QuestionItem;
