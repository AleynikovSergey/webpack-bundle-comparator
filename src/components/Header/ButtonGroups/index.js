// External components
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Media,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
  faUserEdit,
  faCog,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menubar from '../MenuBar';

const ButtonGroups = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      {/* <Button outline href="/signup" color="primary" className="mr-3">
        Sign Up
      </Button>
      <Button color="primary" href="/login">
        Login
      </Button> */}

      <Dropdown
        className="user-profile d-xl-block d-lg-block d-md-block d-sm-block  d-none "
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle className="bg-transparent text-dark border-0 p-0">
          <Media>
            <Media left href="#">
              <Media
                object
                src="https://webstrot.com/html/jbdesk/main_version/dashboard/images/pf.png"
                alt="user profile"
              />
            </Media>
            <Media
              body
              className="text-primary ml-3 d-none d-xl-block d-md-block d-lg-none"
            >
              <Media heading tag="h5" className="text-dark">
                Luca wallace
              </Media>
              luca@gmail.com
            </Media>
          </Media>
        </DropdownToggle>
        <DropdownMenu className="p-0">
          <NavItem>
            <NavLink
              className="nav-link single-link position-relative "
              exact
              to="#"
            >
              <FontAwesomeIcon
                className="mr-2 position-relative text-primary"
                icon={faUserEdit}
              />
              Account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link single-link position-relative "
              exact
              to="#"
            >
              <FontAwesomeIcon
                className=" mr-2 position-relative text-primary"
                icon={faCog}
              />
              Setting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="nav-link single-link position-relative "
              exact
              to="#"
            >
              <FontAwesomeIcon
                className=" mr-2 position-relative  text-primary"
                icon={faSignInAlt}
              />
              Logout
            </NavLink>
          </NavItem>
        </DropdownMenu>
      </Dropdown>
      <Menubar />
    </>
  );
};

export default ButtonGroups;
