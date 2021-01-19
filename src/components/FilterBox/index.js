import React from 'react';
import { Input } from 'reactstrap';

const FilterBox = (props) => {
  const { position, count } = props;
  return (
    <div className="custom-control custom-checkbox mb-2 filter-box">
      <Input
        type="checkbox"
        className="custom-control-input input"
        id={position}
      />
      <label
        className="custom-control-label label text-muted ml-2 text-capitalize"
        htmlFor={position}
      >
        {position}
      </label>
      <span className="ml-2 count">({count})</span>
    </div>
  );
};

export default FilterBox;
