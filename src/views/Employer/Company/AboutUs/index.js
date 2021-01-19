import React from 'react';

// Own Component
import DashboardCard from 'src/components/DashboardCard';

const AboutUs = () => {
  return (
    <DashboardCard title="About Us" action className="mb-5" modalName="about">
      <p>
        Google is and always will be an engineering company. We hire people with
        a broad set of icalskills who are ready to tackle some of technology's
        greatest challenges and make an impact on milions, if not billions, of
        users. At Google, engineers not only revolutionize search, they
        routinely work on massive scalability and storage solutions,
      </p>
    </DashboardCard>
  );
};

export default AboutUs;
