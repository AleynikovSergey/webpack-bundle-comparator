import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationItems = (props) => {
  const { paginationbg } = props;
  return (
    <Pagination
      aria-label="Page navigation example justify-content-center"
      className="pt-9 mb-7 mb-lg-0"
    >
      <PaginationItem disabled className="mr-2">
        <PaginationLink className="text-dark" previous href="#" />
      </PaginationItem>
      <PaginationItem active className="mr-2">
        <PaginationLink className={`${paginationbg}`} href="#">
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
