import React from 'react';

import SocialLink from 'src/components/SocialLink';
import DashboardCard from 'src/components/DashboardCard';

const CompanySocial = () => {
  return (
    <DashboardCard title="Social Profile" className="mt-5">
      <SocialLink
        parentClass="justify-content-center"
        childClass="btn btn-icon btn-outline-primary rounded-circle btn-sm"
      />
    </DashboardCard>
  );
};

export default CompanySocial;
