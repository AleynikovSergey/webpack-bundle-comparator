import React from 'react';

export const SubFallback = () => {
  return (
    <div className="sk-cube-grid">
      <div className="sk-cube sk-cube1" />
      <div className="sk-cube sk-cube2" />
      <div className="sk-cube sk-cube3" />
      <div className="sk-cube sk-cube4" />
      <div className="sk-cube sk-cube5" />
      <div className="sk-cube sk-cube6" />
      <div className="sk-cube sk-cube7" />
      <div className="sk-cube sk-cube8" />
      <div className="sk-cube sk-cube9" />
    </div>
  );
};

const Fallback = () => {
  return (
    <div className="jb_preloader position-fixed bg-white">
      <div className="spinner_wrap position-absolute">
        <div className="spinner bg-white rounded-circle" />
      </div>
    </div>
  );
};

export default Fallback;
