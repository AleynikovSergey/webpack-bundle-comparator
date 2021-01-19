import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import Footer from '../../Footer';

const BlogItem = (props) => {
  const { image, date, title, description } = props;

  const { url } = useRouteMatch();

  return (
    <Card className="mb-6 blog-item">
      <CardImg top src={image} alt="blog" />
      <CardBody className="px-6 py-7">
        <CardText className="text-primary mb-3 text-uppercase">{date}</CardText>
        <CardTitle tag="h3" className="font-weight-normal text-capitalize mb-4">
          <Link to={`${url}/details`} className="text-secondary">
            {title}
          </Link>
        </CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
      <Footer />
    </Card>
  );
};

export default BlogItem;
