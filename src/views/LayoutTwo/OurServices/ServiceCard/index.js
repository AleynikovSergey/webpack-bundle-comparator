import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle } from 'reactstrap';

const ServiceCard = (props) => {
  const { img, title, text, to, className } = props;
  return (
    <Card
      body
      className={`service-card text-center ${className} rounded-0 p-5`}
    >
      <div className="service-card--content">
        <img src={img} alt="service" className="pb-4" />
        <CardTitle tag="h5" className="text-capitalize">
          <Link to={to || '#'}>{title}</Link>
        </CardTitle>
        <CardText tag="p" className="text-muted">
          {text}
        </CardText>
      </div>
    </Card>
  );
};

export default ServiceCard;
