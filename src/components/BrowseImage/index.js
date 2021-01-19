import React from 'react';
import { Media, Input, Row, Col } from 'reactstrap';

const BrowseImage = (props) => {
  const { image, text, firstColmn, secondColmn, textPosition } = props;
  return (
    <Media className="p-5 border-bottom overflow-hidden">
      <Row>
        <div className={`${firstColmn}`}>
          <Media left href="#">
            <Media object src={image} alt="profile picture" />
          </Media>
        </div>
        <div className={`${secondColmn}`}>
          <Media body className={`ml-md-5 ${textPosition}`}>
            <Media tag="p" heading>
              {text}
            </Media>
            <Input type="file" name="file" className="w-50 d-inline-block" />
          </Media>
        </div>
      </Row>
    </Media>
  );
};

export default BrowseImage;
