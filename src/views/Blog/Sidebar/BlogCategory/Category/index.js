import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Category = (props) => {
  const { item, count, to } = props;
  return (
    <li className="mb-3 category">
      <FontAwesomeIcon className="text-primary icon" icon={faCaretRight} />
      <Link to={to || '#'} className="m-0 text-muted ml-2 text-capitalize">
        {' '}
        {item}
      </Link>
      <span className="text-primary">({count})</span>
    </li>
  );
};

export default Category;
