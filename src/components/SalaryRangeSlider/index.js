import React, { useState } from 'react';
import { RangeSlider } from 'reactrangeslider';

const handleStyle = {
  backgroundColor: '#000',
  border: '2px solid #fff',
  height: '10px',
  width: '10px',
  top: '9px',
};

const focusedHandleStyle = {
  backgroundColor: '#000',
  border: '2px solid #fff',
  outline: 0,
  borderRadius: '50%',
};

const hoveredHandleStyle = {
  backgroundColor: '#000',
  border: '2px solid #fff',
  boxShadow: 'none',
};

const activeHandleStyle = {
  backgroundColor: '#000',
  border: '2px solid #fff',
  boxShadow: 'none',
};

const trackStyle = {
  width: '100%',
  height: '2px',
  backgroundColor: '#000',
  border: 'none',
};

const highlightedTrackStyle = {
  backgroundColor: '#fff',
  border: 'none',
  width: '100%',
  height: '2px',
};
const SalaryRangeSlider = () => {
  const [value, setValue] = useState({ start: 900, end: 4000 });
  const onChange = (e) => {
    setValue(e);
  };
  return (
    <>
      <RangeSlider
        trackStyle={trackStyle}
        highlightedTrackStyle={highlightedTrackStyle}
        handleStyle={handleStyle}
        focusedHandleStyle={focusedHandleStyle}
        hoveredHandleStyle={hoveredHandleStyle}
        activeHandleStyle={activeHandleStyle}
        value={value}
        onChange={onChange}
        defaultValue={20}
        max={10000}
        step={400}
        trackClassName="track"
        highlightedTrackClassName="highlight"
      />
      <div className="text-white ml-2">
        ${value.start || 0} - ${value.end || 0}
      </div>
    </>
  );
};

export default SalaryRangeSlider;
