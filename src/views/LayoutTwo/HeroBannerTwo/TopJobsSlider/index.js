import React from 'react';

import { useQuery } from '@apollo/client';
import { Col } from 'reactstrap';

import { SKILL } from 'src/resolvers/skill/query';
import SkillItem from 'src/components/SkillItem';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleJob from 'src/components/SingleJob';

// Slider Resposive data
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 6,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1199, min: 576 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TopJobsSlider = () => {
  const { data, loading, error } = useQuery(SKILL);
  return (
    <div>
      {!loading ? (
        data?.skill && (
          <Carousel
            className="hiring-company--slider position-static"
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={4000}
            slidesToSlide={2}
            customTransition="transform 1000ms ease-in-out"
            transitionDuration={1000}
            arrows={false}
            itemClass="p-2"
          >
            {data.skill.map(({ id, name, image }) => (
              <SingleJob key={id} id={id} name={name} image={image} />
            ))}
          </Carousel>
        )
      ) : (
        <>
          <Col lg={2} md={4} sm={4} xs={12} className="top-jobs">
            <SkillItem loading />
          </Col>
          <Col lg={2} md={4} sm={4} xs={12} className="top-jobs">
            <SkillItem loading />
          </Col>
          <Col lg={2} md={4} sm={4} xs={12} className="top-jobs">
            <SkillItem loading />
          </Col>
        </>
      )}
    </div>
  );
};

export default TopJobsSlider;
