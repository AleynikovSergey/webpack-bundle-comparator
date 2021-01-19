import React from 'react';
import { CardText } from 'reactstrap';

import quote from 'src/assets/images/BlogSingle/quote.png';

const Blockquote = () => {
  return (
    <div className="latest-post position-relative p-6">
      <img src={quote} alt="quote" className="position-absolute" />
      <CardText tag="h5" className="text-white font-italic text-capitalize">
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
        Eiusmod Tempor Indunt Ut Labore Et Dolore Magna Aliqua. "
      </CardText>
      <CardText tag="h6" className="text-capitalize text-white pt-4">
        - by farhan sheikh
      </CardText>
    </div>
  );
};

export default Blockquote;
