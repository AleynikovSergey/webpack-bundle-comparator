import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faEye,
  faCalendar,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const ManageJob = (props) => {
  const { generalaccountlink, date, application, status, color } = props;
  return (
    <>
      <tr>
        <td className="pb-3 pt-5 pt-4 pr-0  pl-5">
          <h6>
            <Link to={generalaccountlink}> General Ledger Accountant</Link>
          </h6>
          <p className="text-muted font-14">
            <FontAwesomeIcon icon={faCalendar} className="mr-2 text-primary" />
            Date Posted : {date}
          </p>
        </td>
        <td className="pb-3 pt-5 pt-4 pr-0  pl-5 d-none d-md-table-cell">
          <p>
            <Link to="#" className="text-primary">
              {application} Applications
            </Link>
          </p>
        </td>
        <td className="pb-3 pt-5  d-none d-sm-table-cell ">
          <p className={` ${color} `}>{status}</p>
        </td>
        <td className="pb-3 pt-5  pr-0  pl-4 pr-2">
          <ul className="d-inline-flex">
            <li className="mr-3">
              <Link to="#">
                <FontAwesomeIcon className="font-14" icon={faEye} />
              </Link>
            </li>
            <li className="mr-3">
              <Link to="#">
                <FontAwesomeIcon className="font-14" icon={faEdit} />
              </Link>
            </li>
            <li className="">
              <Link to="#">
                <FontAwesomeIcon className="font-14" icon={faTrashAlt} />
              </Link>
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
};

export default ManageJob;
