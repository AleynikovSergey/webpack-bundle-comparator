import React from 'react';

import TrendingKeyword from 'src/components/TrendingKeyword';
import BannerForm from './Form';

const BannerLeft = () => {
  return (
    <div className="pt-14 pb-xl-11 pb-lg-11 pb-md-11 pb-sm-11 pb-0 ">
      <h1
        className="pb-3 text-dark font-weight-normal text-center text-lg-left"
        style={{ fontSize: '50px' }}
      >
        The Easy Way To Get Your New Job
      </h1>
      <p className="pb-4 text-muted text-center text-lg-left">
        This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
        auctor . sollicitudin, lorem quis bibendum auctor, sem nibh id elit.
      </p>
      <BannerForm />
      <div className="trending mb-md-13 mb-sm-5 mb-10">
        <TrendingKeyword />
      </div>
    </div>
  );
};

export default BannerLeft;
