import React from 'react';

const Skeleton = ({
  width = '50%',
  height = 16,
  bottom = 14,
  circle = false,
}) => {
  return (
    <div
      className="skeleton "
      style={{
        width,
        height,
        marginBottom: bottom,
        ...(circle && { borderRadius: '100%', height: width }),
      }}
    ></div>
  );
};

export default Skeleton;
