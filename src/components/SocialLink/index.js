import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGooglePlusG,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const SocialLink = (props) => {
  const { parentClass, childClass, to, type, msg } = props;
  return (
    <ul className={`social-link d-flex m-0 p-0 ${parentClass}`}>
      <li className="mr-2">
        <Link
          className={` ${childClass && childClass}`}
          title="Facebook"
          to={to || '#'}
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
      </li>
      <li className="mr-2">
        <Link
          className={` ${childClass && childClass}`}
          title="Twitter"
          to={to || '#'}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </li>
      <li className="mr-2">
        <Link
          className={` ${childClass && childClass}`}
          title="Linkedin"
          to={to || '#'}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Link>
      </li>
      <li>
        <Link
          className={` ${childClass && childClass}`}
          title="Google"
          to={to || '#'}
        >
          <FontAwesomeIcon icon={faGooglePlusG} />
        </Link>
      </li>
      {type === 'bloger' && (
        <>
          <li>
            <Link
              className={` ${childClass && childClass}`}
              title="Google"
              to={to || '#'}
            >
              <FontAwesomeIcon icon={faPinterestP} />
            </Link>
          </li>
          <li>
            <Link
              className={` ${childClass && childClass} position-relative`}
              title="Google"
              to={to || '#'}
            >
              <FontAwesomeIcon icon={faCommentDots} />
              <span className="tool-tip position-absolute bg-primary text-white font-10 rounded-circle d-flex justify-content-center align-items-center">
                {msg}
              </span>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};

export default SocialLink;
