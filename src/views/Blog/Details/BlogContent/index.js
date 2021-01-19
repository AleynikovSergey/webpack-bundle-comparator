import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import thumbnail from 'src/assets/images/BlogSingle/thumbnail.jpg';

import Blockquote from './Blockquote';
import BlogMedia from './Media';
import Footer from '../../Footer';

const BlogContent = () => {
  return (
    <>
      <Card className="blog-item">
        <CardImg top width="100%" src={thumbnail} alt="post thumbnail" />
        <CardBody className="p-6">
          <CardText className="text-primary mb-3 text-uppercase">
            feb 19, 2019
          </CardText>
          <CardTitle
            tag="h3"
            className="font-weight-normal text-capitalize mb-4"
          >
            Brabus is smooth animated portfolio
          </CardTitle>
          <CardText>
            Layout for agencies and freelancers. Fully animated and unique
            sections make item more attractive. Brabus is the best way to create
            agency or portfolio website. It is easy to customize codes, based on
            Bootstrap and Sass.Brabus is smooth.
          </CardText>
          <BlogMedia />
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et ore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea codo consequat. Duis aute irure dolor in reprehenderit
            in voluptate elit esse cillum dolore eu fugiat nulla paratur
            Excepteur sint occaecat.
          </CardText>
        </CardBody>
        <Blockquote />
        <CardBody className="px-6 py-7">
          <CardText>
            Layout for agencies and freeis the best way to create agency or
            portfolio website. It is easy to customize codes, bas lancers. Fully
            animated and unique sections make item more attractive. Brabus is
            the best way to create agency or portfolio website. It is easy to
            customize codes, based on Bootstrap and Sass.Brabus is smooth.
          </CardText>
        </CardBody>
        <Footer />
      </Card>
    </>
  );
};

export default BlogContent;
