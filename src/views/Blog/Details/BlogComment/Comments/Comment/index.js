import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const Comment = (props) => {
  const { img, to, name, date, fragment, className } = props;
  return (
    <Media className={`pt-5 pb-5 border-bottom ${className && className}`}>
      <Media left href="#">
        <img src={img} alt="client" />
      </Media>
      <Media body className="ml-5">
        <Media
          tag="h5"
          heading
          className=" text-capitalize font-weight-normal mb-3"
        >
          {name}
          <span
            className="text-primary h6 font-weight-normal ml-2 d-inline-block "
            style={{ fontSize: '14px' }}
          >
            {date} -
          </span>
        </Media>
        <p className="text-muted text-justify mb-2">{fragment}</p>
        <Link className="text-primary" to={to || '#'}>
          Reply
        </Link>
      </Media>
    </Media>
  );
};

export default Comment;
