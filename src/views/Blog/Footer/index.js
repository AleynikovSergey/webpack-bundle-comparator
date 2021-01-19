import React from 'react';
import { CardFooter } from 'reactstrap';
import ownerImg from 'src/assets/images/BlogSingle/owner.jpg';

import SocialLink from 'src/components/SocialLink';

const Footer = () => {
  return (
    <CardFooter className="d-flex justify-content-between px-4 py-5 bg-white flex-wrap">
      <div className="post-owner">
        <img src={ownerImg} alt="post owner" />
        <span className="text-muted ml-2 text-capitalize">Jhon Doe</span>
      </div>
      <SocialLink
        type="bloger"
        msg={4}
        childClass="btn btn-outline-primary btn-icon btn-sm ml-3 rounded-circle border-0 "
      />
    </CardFooter>
  );
};

export default Footer;
