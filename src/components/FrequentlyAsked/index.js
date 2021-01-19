import React, { useState } from 'react';

// Own component
import QuestionItem from './QuestionItem';

const data = [
  {
    id: 1,
    title: 'Is There Any Auto-Renew Subscription?',
    description:
      "This is Photoshop's version of LoremProin gravida nibh vel velit auctor Ipsum. Proin gravida nibh vel velit auctor aliquet....",
  },
  {
    id: 2,
    title: 'How Many Sites Can I Use My Themes On?',
    description:
      "This is Photoshop's version of LoremProin gravida nibh vel velit auctor Ipsum. Proin gravida nibh vel velit auctor aliquet....",
  },
  {
    id: 3,
    title: 'How Many Sites Can I Use My Themes On?',
    description:
      "This is Photoshop's version of LoremProin gravida nibh vel velit auctor Ipsum. Proin gravida nibh vel velit auctor aliquet....",
  },
  {
    id: 4,
    title: 'How Many Sites Can I Use My Themes On?',
    description:
      "This is Photoshop's version of LoremProin gravida nibh vel velit auctor Ipsum. Proin gravida nibh vel velit auctor aliquet....",
  },
];
const FrequentlyAsked = (props) => {
  const { home2 } = props;
  const [collapse, setCollapse] = useState(1);
  return (
    <>
      <h3 className="mb-6">Frequently Asked Question?</h3>
      {data &&
        data.map((item) => {
          if (!home2) {
            if (item.id > 2) return false;
          }
          return (
            <QuestionItem
              key={item.id}
              {...item}
              collapse={collapse}
              setCollapse={setCollapse}
            />
          );
        })}
    </>
  );
};

export default FrequentlyAsked;
