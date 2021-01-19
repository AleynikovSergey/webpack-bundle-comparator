import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const DashboardModal = (props) => {
  const { modal, toggle, children, to, title } = props;
  return (
    <Modal isOpen={modal} toggle={toggle} className="mt-13">
      <ModalHeader tag="h6" toggle={toggle} className="border-0">
        <FontAwesomeIcon className="text-primary mr-1" icon={faEdit} />
        <span className="text-capitalize text-dark">{title}</span>
      </ModalHeader>
      <Form>
        {children && <ModalBody>{children}</ModalBody>}
        <ModalFooter className="border-0 justify-content-start">
          <Button color="primary" onClick={toggle}>
            Save Updates
          </Button>{' '}
          <Link
            to={to || '#'}
            className="text-primary text-capitalize"
            onClick={toggle}
          >
            cancel
          </Link>{' '}
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default DashboardModal;
