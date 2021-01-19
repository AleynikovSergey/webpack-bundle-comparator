// External components
import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubDropdown = (props) => {
  const { title, path } = props;
  return (
    <NavItem>
      <NavLink className="nav-link position-relative" exact to={path}>
        <FontAwesomeIcon
          className="sub-squre mr-2 position-relative"
          icon={faSquare}
        />{' '}
        {title}
      </NavLink>
    </NavItem>
  );
};

export default SubDropdown;
