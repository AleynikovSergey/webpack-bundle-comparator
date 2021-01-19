import React from 'react';

const RoundShapeAnimation = (props) => {
  const { className } = props;
  return (
    <figure
      className={`round-shape position-absolute d-none d-xl-block ${className}`}
    >
      <img
        src="https://webstrot.com/html/jbdesk/main_version/main_pages/images/shape4.png"
        alt="line-shape"
      />
    </figure>
  );
};

export default RoundShapeAnimation;
