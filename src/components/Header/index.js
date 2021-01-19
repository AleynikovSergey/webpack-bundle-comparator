// External components
import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { Sticky } from 'react-sticky';

// Own Components
import ButtonGroups from './ButtonGroups';
import Logo from './Logo';
import Jobs from './Jobs';
import Pages from './Pages';
import Dashboard from './Dashboard';
import Blog from './Blog';
import MegaDropDown from './MegaDropdown';
import SearchButton from './SearchButton';
import HomePages from './HomePages';

const Header = () => {
  return (
    <Sticky disableCompensation topOffset={400}>
      {({ style, isSticky }) => (
        <header
          style={style}
          className={` ${
            isSticky ? 'sticky-header' : 'position-relative border bg-white'
          }`}
        >
          <Container fluid>
            <Row className="align-items-center ">
              <Col xl={2} lg={2} md={2} sm={2} xs={2} className="d-flex">
                <div className="jb-logo">
                  <Logo />
                </div>
              </Col>
              <Col className="nav-col" xl={8} lg={9} md={5} sm={7} xs={5}>
                <div className=" navigation">
                  <Navbar className="p-0 border-right d-lg-block d-xl-block d-none">
                    <Nav>
                      <NavItem className="dropdown">
                        <Link
                          exact
                          className="nav-link position-relative main-nav text-dark"
                          to="#"
                        >
                          Home
                        </Link>
                        <HomePages />
                      </NavItem>

                      <NavItem className="dropdown">
                        <Link
                          className="nav-link position-relative main-nav text-dark"
                          to="#"
                        >
                          Jobs
                        </Link>
                        <Jobs />
                      </NavItem>

                      <NavItem className="dropdown position-static mega-dropdown">
                        <Link
                          className="nav-link main-nav position-relative text-dark"
                          to="#"
                        >
                          Candidates
                        </Link>
                        <MegaDropDown />
                      </NavItem>
                      <NavItem className="dropdown">
                        <Link
                          className="nav-link position-relative main-nav text-dark"
                          to="#"
                        >
                          Pages
                        </Link>
                        <Pages />
                      </NavItem>
                      <NavItem className="dropdown">
                        <Link
                          className="nav-link position-relative main-nav text-dark"
                          to="#"
                        >
                          Dashboard
                        </Link>
                        <Dashboard />
                      </NavItem>
                      <NavItem className="dropdown">
                        <Link
                          className="nav-link position-relative main-nav text-dark"
                          to="#"
                        >
                          Blog
                        </Link>
                        <Blog />
                      </NavItem>
                      <NavItem>
                        <NavLink
                          exact
                          className="nav-link position-relative main-nav text-dark"
                          to="/contactus"
                        >
                          Contact
                        </NavLink>
                      </NavItem>
                      <SearchButton />
                    </Nav>
                  </Navbar>
                </div>
              </Col>
              <Col className="p-0" xl={2} lg={1} md={5} sm={3} xs={5}>
                <div className="user-info d-flex justify-content-center align-items-center align-self-center text-center">
                  <ButtonGroups />
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      )}
    </Sticky>
  );
};

export default Header;
