import React from 'react';

import cmnt1 from 'src/assets/images/BlogSingle/cmnt1.jpg';
import cmnt2 from 'src/assets/images/BlogSingle/cmnt2.jpg';
import cmnt3 from 'src/assets/images/BlogSingle/cmnt3.jpg';
import cmnt4 from 'src/assets/images/BlogSingle/cmnt4.jpg';

import Comment from './Comment';

const blogComments = [
  {
    img: cmnt1,
    name: 'Jhon Doe',
    date: 'July 1, 2019 ',
    fragment:
      'Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.',
    to: '',
  },
  {
    img: cmnt2,
    name: 'Steffa Ferello',
    date: 'July 4, 2019 ',
    fragment:
      'Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.',
    to: '',
  },
  {
    img: cmnt3,
    name: 'Matin Lauran',
    date: 'March 1, 2019 ',
    fragment:
      'Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.',
    to: '',
  },
  {
    img: cmnt4,
    name: 'Eva Marilla',
    date: 'July 10, 2019',
    fragment:
      'Integer porttitor fringilla vestibulum. Phasellus curs our tinnt nulla, ut mattis augue finibus ac. Vivamus elementum enim ac enim ultrices rhoncus.',
    to: '',
  },
];

const Comments = () => {
  return (
    <div>
      <h4 className="text-capitalize mb-3 mt-6 font-weight-normal">
        Comments ({Array.isArray(blogComments) && blogComments.length})
      </h4>
      {Array.isArray(blogComments) &&
        blogComments.map((item, i) => (
          <Comment
            key={i}
            {...item}
            className={blogComments.length - 1 === i && 'border-0'}
          />
        ))}
    </div>
  );
};

export default Comments;
