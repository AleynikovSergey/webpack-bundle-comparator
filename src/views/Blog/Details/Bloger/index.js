import React from 'react';
import { Media } from 'reactstrap';

import SocialLink from 'src/components/SocialLink';

import client from 'src/assets/images/BlogSingle/client.jpg';

const Bloger = () => {
  return (
    <Media className="p-6 border mt-6 flex-wrap bloger">
      <Media left href="#">
        <Media object src={client} alt="client" />
      </Media>
      <Media body className="ml-5">
        <Media tag="h5" heading className="text-primary text-capitalize">
          About Admin - Ajay Suryavanshi
        </Media>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          auctor lacinia tesue. Vivamus et tellus in urna faucibus porttitor.
          Sed auctor ut nunc..
        </p>
        <SocialLink childClass="btn btn-icon btn-outline-primary btn-sm rounded-circle mr-2" />
      </Media>
    </Media>
  );
};

export default Bloger;
