import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch } from 'react-redux';

import { addBreadcrumb } from 'src/state/ducks/ui';

const TitleComponent = ({ title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      dispatch(addBreadcrumb(title));
    } else {
      dispatch(addBreadcrumb(null));
    }
  }, [title, dispatch]);
  return (
    <Helmet>
      <title>{title ? `${title} - JB desks` : 'JB desks'}</title>
    </Helmet>
  );
};

const withTitle = ({ component: Component, title, ...props }) => {
  return (
    <>
      <TitleComponent title={title} />
      <Component {...props} />
    </>
  );
};

export default withTitle;
