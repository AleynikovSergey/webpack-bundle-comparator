import React from 'react';
import DashboardCard from 'src/components/DashboardCard';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AboutJob = () => {
  return (
    <DashboardCard title="About This Job" className="mb-5">
      <CKEditor editor={ClassicEditor} />
    </DashboardCard>
  );
};

export default AboutJob;
