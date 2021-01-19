import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Media } from 'reactstrap';

const BlogCard = (props) => {
  const { img, title, date, text, to } = props;
  return (
    <Card body className="p-0 rounded-0 blog-card mb-5">
      <Media>
        <Media left href="#">
          <Media object src={img} alt="Generic placeholder image" />
        </Media>
        <Media body className="p-5">
          <Media heading tag="h5">
            <Link to={to || '#'}>{title}</Link>
          </Media>
          <p className="text-uppercase text-primary m-0">{date}</p>
          <h6
            className="font-weight-normal text-lowercase text-muted pt-3"
            style={{
              lineHeight: '24px',
            }}
          >
            {text}
          </h6>
        </Media>
      </Media>
    </Card>
  );
};

export default BlogCard;
