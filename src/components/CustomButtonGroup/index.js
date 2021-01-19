import * as React from 'react';
import { Button } from 'reactstrap';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="custom-button-group d-block position-absolute m-0 mt-md-5">
      <Button
        onClick={() => previous()}
        outline
        color="light"
        className="text-dark mr-3 border"
      >
        <FontAwesomeIcon icon={faArrowLeft} />{' '}
      </Button>
      <Button
        onClick={() => next()}
        outline
        color="light"
        className="text-dark border"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </div>
  );
};

export default CustomButtonGroup;
