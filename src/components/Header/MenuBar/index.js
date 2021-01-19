// External components
import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MultilevelSidebar from 'react-multilevel-sidebar';
import 'react-multilevel-sidebar/src/Sidebar.css';

const options = [
  {
    hideBorder: true,
    content: [
      {
        id: 1,
        name: (
          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Search...."
            className="border-0 bg-white p-0 "
          />
        ),
        icon: <i className="fa fa-chrome" />,
      },
    ],
  },

  {
    hideBorder: true,
    content: [
      {
        id: 2,
        name: <Link to="/">Home</Link>,
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 1,
                name: <Link to="/">Home1</Link>,
              },
              {
                id: 2,
                name: <Link to="/home2">Home2</Link>,
              },
              {
                id: 2,
                name: <Link to="home3">Home3</Link>,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    hideBorder: true,
    content: [
      {
        id: 3,
        name: <Link to="#">Jobs</Link>,
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 1,
                name: <Link to="/job">Job Listing Grid</Link>,
              },
              {
                id: 2,
                name: <Link to="/job/details">Job Single</Link>,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 4,
        name: <Link to="#">Pages</Link>,
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 1,
                name: <Link to="/about">About Us</Link>,
              },
              {
                id: 2,
                name: <Link to="/company/details">Companies</Link>,
              },
              {
                id: 3,
                name: <Link to="/company">Company Single</Link>,
              },
              {
                id: 4,
                name: <Link to="/fff">Error Page</Link>,
              },
              {
                id: 5,
                name: <Link to="/signin">Login</Link>,
              },
              {
                id: 6,
                name: <Link to="/pricing">Pricing Table</Link>,
              },
              {
                id: 7,
                name: <Link to="signup">Sign Up</Link>,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 5,
        name: <Link to="#">Dashboard</Link>,
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 1,
                name: <Link to="/candidate">Candidate</Link>,
              },
              {
                id: 1,
                name: <Link to="/employer">Company</Link>,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 6,
        name: <Link to="#">Blog</Link>,
        icon: <i className="fa fa-chrome" />,
        children: [
          {
            content: [
              {
                id: 1,
                name: <Link to="/blog">Blog</Link>,
              },
              {
                id: 2,
                name: <Link to="blog/details">Blog Single</Link>,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 7,
        name: <Link to="/contactus">Contact Us</Link>,
        icon: <i className="fa fa-chrome" />,
      },
    ],
  },
  {
    hideBorder: true,
    content: [
      {
        id: 8,
        name: <Link to="/signin">Login</Link>,
        icon: <i className="fa fa-chrome" />,
      },
    ],
  },
];

const Menubar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <MultilevelSidebar
        open={open}
        options={options}
        wrapperClassName="header-menu-bar"
        onToggle={handleClick}
        header={
          <div className="text-left pl-4 pb-2 d-flex justify-content-between">
            <Link to="/">
              <img
                src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/logo.png"
                alt="menu-logo"
                className="my-1"
              />{' '}
            </Link>
            <Button
              onClick={() => setOpen(false)}
              className="bg-white border-0 p-0 pr-3"
            >
              <FontAwesomeIcon className="text-dark" icon={faTimes} />{' '}
            </Button>
          </div>
        }
      />
      {/* using in our button to open the sidebar */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-white border-0 d-xl-none d-lg-none d-inline-block text-primary ml-auto mr-md-3 mr-sm-2 p-sm-0"
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </>
  );
};

export default Menubar;
