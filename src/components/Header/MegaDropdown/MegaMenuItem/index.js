// External component
import React from 'react';

import { Link } from 'react-router-dom';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MegaMenuItem = ({ title, path, itemName }) => {
  return (
    <li>
      <Link
        className="position-relative text-dark  d-block"
        title={itemName}
        to={path}
      >
        <FontAwesomeIcon
          className="squre mr-2 position-relative"
          icon={faSquare}
        />{' '}
        {itemName}
      </Link>
    </li>
  );
};

export default MegaMenuItem;
