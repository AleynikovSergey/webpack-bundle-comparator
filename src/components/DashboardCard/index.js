import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import DashboardModal from '../Modal';
import BasicInfoModal from 'src/views/Employer/Company/BasicInformation/BasicInfoModal';
import AboutModal from 'src/views/Employer/Company/AboutUs/AboutModal';
import VideoModal from 'src/views/Employer/Company/IntroVideo/VideoModal';
import GalleryModal from 'src/views/Employer/Company/ImageGallery/GalleryModal';

const DashboardCard = (props) => {
  const { title, action, children, className, modalName } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Card className={`${className && className}`}>
      <CardHeader
        tag="h6"
        className="d-flex justify-content-between align-items-center bg-primary"
      >
        <CardTitle className="m-0 text-white text-capitalize p-2">
          {title}
        </CardTitle>
        {action && (
          <Button
            size="sm"
            onClick={toggle}
            className="btn-icon text-white"
            color="link"
          >
            {modalName == 'basic' && (
              <DashboardModal
                modal={modal}
                toggle={toggle}
                title="basic information"
              >
                <BasicInfoModal />
              </DashboardModal>
            )}
            {modalName == 'about' && (
              <DashboardModal modal={modal} toggle={toggle} title="About Us">
                <AboutModal />
              </DashboardModal>
            )}
            {modalName == 'videoLink' && (
              <DashboardModal modal={modal} toggle={toggle} title="Intro Video">
                <VideoModal />
              </DashboardModal>
            )}
            {modalName == 'gallery' && (
              <DashboardModal modal={modal} toggle={toggle} title="Intro Video">
                <GalleryModal />
              </DashboardModal>
            )}

            <FontAwesomeIcon icon={faEdit} />
          </Button>
        )}
      </CardHeader>
      {children && <CardBody>{children}</CardBody>}
    </Card>
  );
};

export default DashboardCard;
