// External components
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Logo = () => {
  const theme = useSelector((store) => store.theme);

  return (
    <Link to="/" className="">
      <img
        src={
          (theme === 'default' &&
            'https://webstrot.com/html/jbdesk/main_version/main_pages/images/logo.png') ||
          (theme === 'green' &&
            'https://webstrot.com/html/jbdesk/main_version/main_pages/images/logo3.png') ||
          (theme === 'violet' &&
            'https://webstrot.com/html/jbdesk/main_version/main_pages/images/logo4.png')
        }
        alt="logo"
        className="image-fluid"
      />
    </Link>
  );
};

export default Logo;
