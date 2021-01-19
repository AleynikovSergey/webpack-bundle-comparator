import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle } from 'reactstrap';

const ControlCard = (props) => {
  const { img, title, text, to } = props;
  return (
    <Card body className="control-card border-0 bg-transparent">
      <div className="control-card--content text-center">
        <img src={img} alt="control image" className="pb-4" />
        <CardTitle tag="h5" className="text-capitalize text-dark m-0">
          <Link to={to || '#'}>{title} </Link>
        </CardTitle>
        <CardText tag="p">{text} </CardText>
      </div>
    </Card>
  );
};

export default ControlCard;
