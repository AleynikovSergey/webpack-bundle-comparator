import React from 'react';

import thumbnail from 'src/assets/images/BlogSingle/thumbnail.jpg';

import BlogItem from './BlogItem';

const postData = [
  {
    id: 1,
    image: thumbnail,
    date: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
  },
  {
    id: 2,
    image: thumbnail,
    date: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
  },
  {
    id: 3,
    image: thumbnail,
    date: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
  },
  {
    id: 4,
    image: thumbnail,
    date: 'feb 19, 2019',
    title: 'Brabus is smooth animated portfolio',
    description:
      'Layout for agencies and freelancers. Fully animated and unique sections make item more attractive. Brabus is the best way to createagency or portfolio website. It is easy to customize codes, based onBootstrap and Sass.Brabus is smooth.',
  },
];

const Blog = () => {
  return (
    <>
      {Array.isArray(postData) &&
        postData.map((item) => <BlogItem key={item.id} {...item} />)}
    </>
  );
};

export default Blog;
