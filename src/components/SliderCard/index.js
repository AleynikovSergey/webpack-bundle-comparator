import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const SliderCard = (props) => {
  const { img, position, name, to } = props;
  return (
    <Card className="m-2 mb-13 slider-card">
      <div className="slider-card--img bg-primary overflow-hidden">
        <CardImg
          top
          width="100%"
          className="w-auto"
          src={img && img}
          alt="Card image cap"
        />
      </div>
      <CardBody className="text-center text-capitalize pt-5 pb-5">
        <CardTitle className="text-primary">({position})</CardTitle>
        <Link to={to || '#'} className="h5 font-weight-bold text-dark">
          {name}
        </Link>
      </CardBody>
    </Card>
  );
};

export default SliderCard;
