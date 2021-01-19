import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import withTitle from 'src/components/TitleComponent';
import { SubFallback } from 'src/components/Fallback';
import Sidebar from './Sidebar';

const Blog = lazy(() => import('./Blog'));
const Details = lazy(() => import('./Details'));

const Routes = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Container className="mt-9">
        <Row>
          <Col lg={9} md={12} sm={12}>
            <Suspense fallback={<SubFallback />}>
              <Switch>
                <Route
                  exact
                  path={`${path}`}
                  render={(props) =>
                    withTitle({
                      component: Blog,
                      title: 'Blog',
                      ...props,
                    })
                  }
                />
                <Route
                  exact
                  path={`${path}/details`}
                  render={(props) =>
                    withTitle({
                      component: Details,
                      title: 'Blog details',
                      ...props,
                    })
                  }
                />
              </Switch>
            </Suspense>
          </Col>
          <Col lg={3} md={12} sm={12}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Routes;
