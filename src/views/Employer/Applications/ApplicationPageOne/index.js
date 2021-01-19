import React from 'react';
import {
  faCalendar,
  faMapMarker,
  faFileDownload,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import ThumbnailIconBtn from 'src/components/ThumbnailIconBtn';

const data = [
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/rs1.jpg',
    title: 'Luca Wallace',
    jobCategory: 'Web Designer',
    jobCategoryIcon: faCalendar,
    location: ' Los Angeles',
    locationIcon: faMapMarker,
    btnOneIcon: faFileDownload,
    btnOneName: 'Download Info',
    btnTwoIcon: faEnvelope,
    btnTwoName: 'Send',
  },
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/rs4.jpg',
    title: 'Luca Wallace',
    jobCategory: 'Web Designer',
    jobCategoryIcon: faCalendar,
    location: ' Los Angeles',
    locationIcon: faMapMarker,
    btnOneIcon: faFileDownload,
    btnOneName: 'Download Info',
    btnTwoIcon: faEnvelope,
    btnTwoName: 'Send',
  },
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/rs2.jpg',
    title: 'Luca Wallace',
    jobCategory: 'Web Designer',
    jobCategoryIcon: faCalendar,
    location: ' Los Angeles',
    locationIcon: faMapMarker,
    btnOneIcon: faFileDownload,
    btnOneName: 'Download Info',
    btnTwoIcon: faEnvelope,
    btnTwoName: 'Send',
  },
];
const ApplicationPageOne = () => {
  return (
    <>{data && data.map((item, i) => <ThumbnailIconBtn key={i} {...item} />)}</>
  );
};

export default ApplicationPageOne;
