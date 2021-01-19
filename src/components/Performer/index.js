import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const Performer = (props) => {
  const { img, to, heading, type, date, position } = props;
  return (
    <Media className="mb-3">
      <Media left href="#">
        <Media object src={img} alt="advisor" />
      </Media>
      <Media body className="ml-3">
        <Link to={to || '#'} className="text-capitalize text-dark h6">
          {heading}
        </Link>
        <div>
          {type === 'date' && (
            <>
              <FontAwesomeIcon
                className="text-primary"
                style={{ fontSize: '14px' }}
                icon={faCalendar}
              />
              <span
                className="text-muted text-uppercase ml-2"
                style={{ fontSize: '14px' }}
              >
                {date && date}
              </span>
            </>
          )}
          {type === 'position' && (
            <div className="mt-2">
              <FontAwesomeIcon
                className="text-primary"
                style={{ fontSize: '14px' }}
                icon={faFolderOpen}
              />
              <span
                className="text-capitalize text-muted ml-2"
                style={{ fontSize: '14px' }}
              >
                {position && position}
              </span>
            </div>
          )}
        </div>
      </Media>
    </Media>
  );
};

export default Performer;
