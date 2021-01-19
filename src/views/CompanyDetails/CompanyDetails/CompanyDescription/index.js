import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap';

import SocialLink from 'src/components/SocialLink';

const description = [
  {
    title: 'About Us',
    item:
      'This is Photoshop version of Lorem IpsumProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
    type: 'text',
  },
  {
    title: 'Responsiblities',
    item:
      'This is Photoshop version of Lorem IpsumProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
    type: 'text',
  },
  {
    title: 'Intro Video',
    item:
      'This is Photoshop version of Lorem IpsumProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
    type: 'video',
  },
];

const CompanyDescription = () => {
  return (
    <Card>
      {description &&
        description.map((item, i) => (
          <CardBody key={i} className="border-bottom">
            <CardTitle tag="h4" className="m-0 pb-4">
              {item.title}
            </CardTitle>
            {item.type === 'text' ? (
              <CardText className="text-muted">{item.item}</CardText>
            ) : (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/I6pxeyz-rWI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </CardBody>
        ))}
      <CardFooter className="border-top-0 bg-transparent d-flex align-items-center justify-content-center pt-4 pb-4">
        <span className="mr-4">share:</span>
        <SocialLink childClass="btn btn-icon btn-outline-primary rounded-circle btn-sm" />
      </CardFooter>
    </Card>
  );
};

export default CompanyDescription;
