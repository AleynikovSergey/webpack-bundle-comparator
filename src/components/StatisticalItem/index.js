import React from 'react';
import { ListGroupItem } from 'reactstrap';

const StatisticalItem = (props) => {
  const { counterNumber, counterName, banner1 } = props;
  return (
    <>
      <ListGroupItem className="bg-transparent ">
        <h2 className={` ${banner1 ? 'text-white ' : ' text-dark'}`}>
          {counterNumber}
        </h2>
        <p className={` ${banner1 ? 'text-white' : 'text-dark'}`}>
          {counterName}
        </p>
      </ListGroupItem>
    </>
  );
};

export default StatisticalItem;
