import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButtonGroupAsArrows from 'src/components/CustomArrows';
import img from 'src/assets/images/BlogSingle/spt1.jpg';

import DashboardCard from 'src/components/DashboardCard';
import Spotlight from './Spotlight';

const spotlight = [
  {
    img,
    position: 'HTML Developer',
    experience: '1 - 2 Yrs Exp.',
    company: 'Webstrot Technology Ltd.',
    salary: '$12K - 15k P.A.',
    location: 'Caliphonia, PO 455001',
  },
  {
    img,
    position: 'HTML Developer',
    experience: '1 - 2 Yrs Exp.',
    company: 'Webstrot Technology Ltd.',
    salary: '$12K - 15k P.A.',
    location: 'Caliphonia, PO 455001',
  },
  {
    img,
    position: 'HTML Developer',
    experience: '1 - 2 Yrs Exp.',
    company: 'Webstrot Technology Ltd.',
    salary: '$12K - 15k P.A.',
    location: 'Caliphonia, PO 455001',
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const JobSpotlight = () => {
  return (
    <DashboardCard title="job spotlight" className="mb-5">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        slidesToSlide={1}
        customTransition=" transform 1000ms ease-in-out"
        transitionDuration={1000}
        arrows={false}
        customButtonGroup={<CustomButtonGroupAsArrows />}
        className="blog-spotlight position-static"
      >
        {spotlight &&
          spotlight.map((item, i) => <Spotlight key={i} {...item} />)}
      </Carousel>
    </DashboardCard>
  );
};

export default JobSpotlight;
