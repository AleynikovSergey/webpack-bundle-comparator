import React from 'react';
import { Media } from 'reactstrap';

import mediaImg from 'src/assets/images/BlogSingle/media.jpg';

const BlogMedia = () => {
  return (
    <Media className="my-5">
      <Media left href="#" className="d-none d-md-block">
        <Media object src={mediaImg} alt="media image" className="w-75 pt-1" />
      </Media>
      <Media tag="p" body className="text-muted m-0 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        empor nt ut labore et dolore magna aliquaenim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
        <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Exceint occaecat cupidatat
      </Media>
    </Media>
  );
};

export default BlogMedia;
