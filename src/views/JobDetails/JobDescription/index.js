import React from 'react';
import { Card, CardFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretRight,
  faGlobeAsia,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';

import SocialLink from 'src/components/SocialLink';
import LocationMap from 'src/components/LocationMap';
import JobDescriptionItem from './JobDescriptionItem';

const JobDescription = () => {
  return (
    <>
      <Card>
        <JobDescriptionItem title="Job Description ">
          <p>
            Google is and always will be an engineering company. We hire people
            with a broad set of ical skills who are ready to tackle some of
            technology's greatest challenges and make an impact on millions, if
            not billions, of users. At Google, engineers not only revolutionize
            search, they routinely work on massive scalability and storage
            solutions, large-scale applications and rely new platforms for
            developers around the world. From AdWords to Chrome, Android to Ye,
            Social to Local, Google engineers are changing the world.
          </p>
          <ul className="d-flex p-0 flex-wrap">
            <li className="mr-5">
              <span>
                <FontAwesomeIcon
                  icon={faGlobeAsia}
                  className=" text-primary mr-1"
                />
              </span>
              www.example.com
            </li>
            <li>
              <span>
                <FontAwesomeIcon
                  icon={faFileDownload}
                  className=" text-primary mr-1"
                />
              </span>
              Download Info
            </li>
          </ul>
        </JobDescriptionItem>

        <JobDescriptionItem title="Responsibilities">
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Curabitur aliquet quam id dui posuere blandit.Curabitur non
            nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
            aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Curabitur aliquet
            quam id dui posuere blandit.
          </p>
          <ul className="p-0">
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Build next-generation web applications with a focus on the client
              side.
            </li>
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Redesign UI's, implement new UI's, and pick up Java as necessary.
            </li>
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Explore and design dynamic and compelling consumer experiences.
            </li>
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Design and build scalable framework for web applications.
            </li>
          </ul>
        </JobDescriptionItem>

        <JobDescriptionItem title="Minimum Qualifications">
          <ul className="p-0 ">
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Build next-generation web applications with a focus on the client
              side.
            </li>
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Redesign UI's, implement new UI's, and pick up Java as necessary.
            </li>
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Explore and design dynamic and compelling consumer experiences.
            </li>
            <li className="mt-2">
              <span>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className=" text-primary mr-1"
                />
              </span>
              Design and build scalable framework for web applications.
            </li>
          </ul>
        </JobDescriptionItem>

        <JobDescriptionItem title="How To Apply">
          <p>
            Google is and always will be an engineering company. We hire people
            with a broad set of ical skills who are ready to tackle some of
            technology's greatest challenges and make an impact on millions, if
            not billions, of users. At Google, engineers not only revolutionize
            search, they routinely
          </p>
        </JobDescriptionItem>

        <JobDescriptionItem title="Location">
          <div className="rounded-10">
            <LocationMap height={300} />
          </div>
        </JobDescriptionItem>

        <CardFooter className="border-top-0 bg-transparent d-flex align-items-center justify-content-center pt-4 pb-4">
          <span className="mr-4">share:</span>
          <SocialLink
            parentClass="justify-content-center"
            childClass="btn btn-icon btn-outline-primary rounded-circle btn-sm"
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default JobDescription;
