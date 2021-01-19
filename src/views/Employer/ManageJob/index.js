import React from 'react';
import { Table } from 'reactstrap';
import JobTable from './JobTable';

import PaginationItems from './PaginationItems';

const data = [
  {
    generalaccountlink: '#',
    date: '02 Oct 2017',
    application: '24',
    status: 'Active',
    color: 'text-success',
  },
  {
    generalaccountlink: '#',
    date: '02 Oct 2017',
    application: '24',
    status: 'Expired',
    color: 'text-danger',
  },
  {
    generalaccountlink: '#',
    date: '02 Oct 2017',
    application: '24',
    status: 'Pending',
    color: 'text-warning',
  },
  {
    generalaccountlink: '#',
    date: '02 Oct 2017',
    application: '24',
    status: 'Active',
    color: 'text-success',
  },
  {
    generalaccountlink: '#',
    date: '02 Oct 2017',
    application: '24',
    status: 'Pending',
    color: 'text-warning',
  },
  {
    generalaccountlink: '#',
    date: '02 Oct 2017',
    application: '24',
    status: 'Active',
    color: 'text-success',
  },
];

const ManageJob = () => {
  return (
    <>
      <Table hover className="manage-job-table">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-4 pl-5">Job Title</th>
            <th className="d-none d-md-table-cell   py-4 pr-6 text-center">
              Applications
            </th>
            <th className=" d-none d-sm-table-cell py-4 p-0 text-center ">
              Status
            </th>
            <th className="py-4 pl-5 text-center">Action</th>
          </tr>
        </thead>
        <tbody className=" border mb-30">
          {data && data.map((item, i) => <JobTable key={i} {...item} />)}
        </tbody>
      </Table>
      <PaginationItems />
    </>
  );
};

export default ManageJob;
