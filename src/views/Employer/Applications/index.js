import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import DashboardCard from 'src/components/DashboardCard';
import ApplicationPageOne from './ApplicationPageOne';

const Applications = () => {
  return (
    <>
      <DashboardCard title="Recent Applications" className="mb-4" />
      <ApplicationPageOne />
      <Pagination aria-label="Page navigation example justify-content-center">
        <PaginationItem disabled className="mr-2">
          <PaginationLink className="text-dark" previous href="#" />
        </PaginationItem>
        <PaginationItem active className="mr-2">
          <PaginationLink className="bg-primary border-primary" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="mr-2">
          <PaginationLink className="text-dark" href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="mr-2">
          <PaginationLink className="text-dark" href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="mr-2">
          <PaginationLink className="text-dark" href="#">
            ...
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="mr-2">
          <PaginationLink className="text-dark" href="#">
            6
          </PaginationLink>
        </PaginationItem>
        <PaginationItem className="mr-2">
          <PaginationLink className="text-dark" next href="#" />
        </PaginationItem>
      </Pagination>
    </>
  );
};

export default Applications;
