import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody } from 'reactstrap';

const BlogItem = (props) => {
  const { image, date, title } = props;
  return (
    <Card className="our-blog-card">
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <p className="text-primary">{date}</p>
        <Link to="#">{title}</Link>
      </CardBody>
    </Card>
  );
};

export default BlogItem;
