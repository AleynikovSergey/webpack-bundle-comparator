import React from 'react';

import Thumbnail from 'src/components/Thumbnail';

const data = [
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/rc1.png',
    title: 'Luca Wallace',
    jobCategory: 'Web Designer',
    buttonName: 'Send',
    btnSize: 'sm',
  },
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/rc2.png',
    title: 'Luca Wallace',
    jobCategory: 'Web Designer',
    buttonName: 'Send',
    btnSize: 'sm',
  },
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/rc3.png',
    title: 'Luca Wallace',
    jobCategory: 'Web Designer',
    buttonName: 'Send',
    btnSize: 'sm',
  },
  {
    thumbnailImg:
      'https://webstrot.com/html/jbdesk/main_version/dashboard/images/rc3.png',
    title: 'Luca Wallace',
    jobCategory: 'Web Designer',
    buttonName: 'Send',
    btnSize: 'sm',
  },
];
const RecentApplication = () => {
  return (
    <>
      <h6 className="bg-primary text-white p-4 mb-0">Recent Application</h6>
      {data &&
        data.map((item, i) => (
          <Thumbnail key={i} {...item} className="border-top-0" />
        ))}
    </>
  );
};

export default RecentApplication;
