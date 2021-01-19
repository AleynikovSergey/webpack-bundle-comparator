import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import Pagination from 'react-js-pagination';

const activePage = 1;

const PaginationPage = () => {
  const [page, setPage] = useState(activePage);
  const handlePageChange = (pageNumber) => {
    setPage({ activePage: pageNumber });
  };

  return (
    <Row className="text-center my-9">
      <Col>
        <div className="d-inline-block ">
          <Pagination
            hideNavigation
            firstPageText="prev"
            lastPageText="next"
            activePage={page}
            itemsCountPerPage={2}
            totalItemsCount={10}
            pageRangeDisplayed={4}
            itemClass="page-item"
            linkClass="page-link"
            onChange={handlePageChange}
          />
        </div>
      </Col>
    </Row>
  );
};

export default PaginationPage;
