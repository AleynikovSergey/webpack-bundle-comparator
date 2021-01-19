import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'reactstrap';

const TestimonialCard = (props) => {
  const { id, img, text, name, to, className } = props;
  return (
    <Card
      body
      className={`testimonial-card rounded-0 mb-5 ${className} ${
        id === 4 && 'translateY'
      }`}
    >
      <CardText tag="p" className="font-italic pb-6 m-0">
        {text}
      </CardText>
      <div className="testimonial-card--owner">
        <img src={img} alt="owner" />
        <Link to={to || '#'} className="pl-4 text-capitalize text-dark">
          {name}
        </Link>
      </div>
    </Card>
  );
};

export default TestimonialCard;
