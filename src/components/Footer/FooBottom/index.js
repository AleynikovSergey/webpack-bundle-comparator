import React from 'react';

const FooBottom = () => {
  return (
    <div className="foo-bottom waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop gradient-color">
        <div className="wave waveTop" />
      </div>
      <div className="waveWrapperInner bgMiddle">
        <div className="wave waveMiddle" />
      </div>
      <div className="waveWrapperInner bgBottom">
        <div className="wave waveBottom" />
      </div>
    </div>
  );
};

export default FooBottom;
