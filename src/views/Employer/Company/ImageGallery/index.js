import React from 'react';
import { Button } from 'reactstrap';
// Own Component
import DashboardCard from 'src/components/DashboardCard';
import ImageItem from './ImageItem';

const data = [
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/gallery1.jpg',
    alt: 'gallery1',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/gallery2.jpg',
    alt: 'gallery1',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/gallery3.jpg',
    alt: 'gallery1',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/gallery1.jpg',
    alt: 'gallery1',
  },
];
const ImageGallery = () => {
  return (
    <DashboardCard
      title="Image Gallery"
      action
      className="mb-5"
      modalName="gallery"
    >
      <ul className="p-0">
        {data && data.map((item, i) => <ImageItem key={i} {...item} />)}
      </ul>
      <Button color="primary" className="outline-hover--effect">
        Add Image
      </Button>
    </DashboardCard>
  );
};

export default ImageGallery;
