import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationItems = () => {
  return (
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
  );
};

export default PaginationItems;
