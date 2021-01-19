import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      className="custom-arrows d-block"
      style={{
        textAlign: 'center',
        position: 'absolute',
      }}
    >
      <Button
        className="p-0 bg-transparent text-light border-0 mr-2"
        onClick={previous}
      >
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </Button>
      <Button className="p-0 bg-transparent text-light border-0" onClick={next}>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </Button>
    </div>
  );
};
export default CustomButtonGroupAsArrows;
