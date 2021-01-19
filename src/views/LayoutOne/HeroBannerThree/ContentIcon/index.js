import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAmazon,
  faAngular,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import { faBlog, faThLarge } from '@fortawesome/free-solid-svg-icons';

const contentIcon = [faApple, faAmazon, faAngular, faThLarge, faBlog];

const ContentIcon = (props) => {
  const { to } = props;
  return (
    <div className="content-icon animated fadeInUp">
      <ul className="p-0">
        {Array.isArray(contentIcon) &&
          contentIcon.map((item, i) => (
            <li key={i}>
              <Link to={to || '#'}>
                <FontAwesomeIcon icon={item} className="icon" />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContentIcon;
