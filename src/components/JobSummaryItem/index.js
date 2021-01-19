import React from 'react';
import { Card, Media } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JobSummaryItem = (props) => {
  const { color, icon, count, category } = props;
  return (
    <Card className="mt-3 rounded-0">
      <Media>
        <Media
          left
          href="#"
          style={{ background: color, height: 85, width: 80 }}
          className=" text-white py-5 px-5"
        >
          <FontAwesomeIcon
            className="h3 pl-1 align-self-center text-white"
            icon={icon}
          />
        </Media>
        <Media body className="pl-5 align-self-center">
          <Media heading>{count}</Media>
          {category}
        </Media>
      </Media>
    </Card>
  );
};

export default JobSummaryItem;
