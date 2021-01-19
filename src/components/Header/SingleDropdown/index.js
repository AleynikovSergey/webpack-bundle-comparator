// External components
import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { faSquare, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Own component
import SubDropdown from './SubdropDown';

const SingleDropdown = (props) => {
  const { type, title, path, subdropdown, icon } = props;
  return (
    <>
      {type == 'single' && (
        <NavItem>
          <NavLink
            className="nav-link single-link position-relative "
            exact
            to={path}
          >
            <FontAwesomeIcon
              className="squre mr-2 position-relative"
              icon={faSquare}
            />{' '}
            {title}
          </NavLink>
        </NavItem>
      )}
      {type == 'dropdown' && (
        <NavItem className="sub-dropdown dropdown">
          <NavLink
            className="nav-link position-relative d-flex "
            exact
            to={path}
          >
            <span>
              <FontAwesomeIcon
                className=" squre mr-2 position-relative"
                icon={faSquare}
              />{' '}
              {title}
            </span>{' '}
            <FontAwesomeIcon
              className="  ml-auto mt-2 mr-2 text-primary"
              icon={faAngleRight}
            />
          </NavLink>
          <ul className="sub-dropdown-menu d-none dropdown-menu shadow mt-0 pt-0 pb-0 position-absolute">
            {subdropdown &&
              subdropdown.map((item, i) => <SubDropdown key={i} {...item} />)}
          </ul>
        </NavItem>
      )}
    </>
  );
};

export default SingleDropdown;
