import React from 'react';
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import featImg1 from 'src/assets/images/Footer/feat-img1.png';
import featImg2 from 'src/assets/images/Footer/feat-img2.png';
import featImg3 from 'src/assets/images/Footer/feat-img3.png';
import featImg4 from 'src/assets/images/Footer/feat-img4.png';
import featImg5 from 'src/assets/images/Footer/feat-img5.png';
import featImg6 from 'src/assets/images/Footer/feat-img6.png';
import { Link } from 'react-router-dom';

const fooNav = [
  {
    title: 'Features',
    item: [
      {
        icon: faSquare,
        text: 'Job Management & Billing',
        type: null,
      },
      {
        icon: faSquare,
        text: 'Time & Materials Tracking',
        type: null,
      },
      {
        icon: faSquare,
        text: 'Standards Compliance ',
        type: null,
      },
      {
        icon: faSquare,
        text: 'Real Time GPS Tracking',
        type: null,
      },
      {
        icon: faSquare,
        text: 'Client Portal',
        type: null,
      },
      {
        icon: faSquare,
        text: ' Powerful Workflow',
        type: null,
      },
    ],
  },
  {
    title: 'Browse',
    item: [
      {
        icon: faSquare,
        text: 'Freelancers by Category',
        type: null,
      },
      {
        icon: faSquare,
        text: ' Freelancers in USA ',
        type: null,
      },
      {
        icon: faSquare,
        text: ' Freelancers in UK ',
        type: null,
      },
      {
        icon: faSquare,
        text: ' Freelancers in Canada',
        type: null,
      },
      {
        icon: faSquare,
        text: ' Freelancers in india',
        type: null,
      },
      {
        icon: faSquare,
        text: '  find jobs',
        type: null,
      },
    ],
  },
  {
    title: 'App & Integration',
    item: [
      {
        icon: featImg1,
        text: 'Xero',
        type: 'image',
      },
      {
        icon: featImg2,
        text: ' Reckon',
        type: 'image',
      },
      {
        icon: featImg3,
        text: ' Flexidocs',
        type: 'image',
      },
      {
        icon: featImg4,
        text: ' Microsoft Exchange',
        type: 'image',
      },
      {
        icon: featImg5,
        text: 'Mailchimp',
        type: 'image',
      },
      {
        icon: featImg6,
        text: '  MYOB',
        type: 'image',
      },
    ],
  },
];

const FooNav = ({ to }) => {
  return (
    <>
      {fooNav &&
        fooNav.map((item, i) => (
          <Col lg={3} sm={6} key={i}>
            <Card className="foo-nav bg-transparent border-0 text-capitalize">
              <CardHeader
                tag="h5"
                className="bg-transparent border-0 text-white m-0 pb-4 mt-2 pl-0"
              >
                {item.title}
              </CardHeader>
              <CardBody tag="ul" className="pl-0 pr-0 ">
                {item.item.map((item, i) => (
                  <li key={i} className="d-flex">
                    {item.type === 'image' ? (
                      <img src={item.icon} alt="feature" className="mb-3" />
                    ) : (
                      <FontAwesomeIcon
                        className="mt-2 text-primary h6 position-relative"
                        icon={item.icon}
                      />
                    )}
                    <Link to={to || '#'} className="mb-3 text-muted ml-4">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </CardBody>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default FooNav;
