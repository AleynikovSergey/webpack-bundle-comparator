import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
// Style
import 'react-image-lightbox/style.css';
const ImageItem = (props) => {
  const { img, alt } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <Lightbox mainSrc={img} onCloseRequest={() => setOpen(false)} />}

      <li className="d-inline m-2">
        <Link onClick={() => setOpen(true)} to="#" title="Eye">
          <img width="15%" src={img} alt={alt} />
        </Link>
      </li>
    </>
  );
};

export default ImageItem;
