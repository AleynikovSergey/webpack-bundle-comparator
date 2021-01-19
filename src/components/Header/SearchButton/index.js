import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchButton = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="search-button align-self-center overflow-hidden">
      <div
        className={`position-fixed text-left pl-4  d-flex justify-content-around align-items-center ${
          search ? 'search-toggle' : 'search-slider'
        }`}
        style={{ width: '100%', background: '#fff', zIndex: 999 }}
      >
        <Form className="pl-13 w-50">
          <FormGroup className="m-0 ">
            <Input
              type="text"
              name="search"
              id="exampleEmail"
              placeholder="Type to Search"
              className="border-0 py-6 font-20"
            />
          </FormGroup>
        </Form>
        <Button
          onClick={() => setSearch(!search)}
          className="bg-white border-0 p-0 pt-3 align-self-center"
        >
          <FontAwesomeIcon className="text-dark" icon={faTimes} />{' '}
        </Button>
      </div>
      <Button
        onClick={() => setSearch(!search)}
        className="bg-white border-0 text-primary p-0 align-self-center "
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  );
};

export default SearchButton;
