import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SectionHeading from 'src/components/SectionHeading';
import SliderCard from 'src/components/SliderCard';
import CustomButtonGroup from 'src/components/CustomButtonGroup';

import img from 'src/assets/images/SliderCard/team1.png';

const teamExpert = [
  {
    img,
    position: 'Sr. Advisor',
    name: 'Reen Scot',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/team1.png',
    position: 'director',
    name: 'jonny doe',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/team2.png',
    position: 'Sr. Advisor',
    name: 'jenny kim',
  },
  {
    img:
      'https://webstrot.com/html/jbdesk/main_version/main_pages/images/team4.png',
    position: 'Sr. Advisor',
    name: 'sunita A.',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 434, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const TeamExpert = () => {
  return (
    <div className="pt-13 pb-13 bg-light">
      <SectionHeading
        title="Meet Our Expert Team Member"
        description="Your next level Product developemnt company assets"
      />
      <Container>
        <Row>
          <Col>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              slidesToSlide={1}
              customTransition=" transform 1000ms ease-in-out"
              transitionDuration={1000}
              arrows={false}
              customButtonGroup={<CustomButtonGroup />}
              className="team-expert-slider position-static"
            >
              {Array.isArray(teamExpert) &&
                teamExpert.map((item, i) => <SliderCard key={i} {...item} />)}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamExpert;
