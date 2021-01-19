import React from 'react';

const JobCoverImgItem = (props) => {
  const { coverimg } = props;
  return (
    <div>
      <img src={coverimg} className="img-fluid" alt="Responsive image" />
    </div>
  );
};

export default JobCoverImgItem;
