import React, { Suspense, lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import withTitle from 'src/components/TitleComponent';
import { SubFallback } from 'src/components/Fallback';

import Sidebar from './Sidebar';

const Dashboard = lazy(() => import('./Dashboard'));
const AppliedJob = lazy(() => import('./AppliedJob'));
const ProfileSetting = lazy(() => import('./ProfileSetting'));
const Resume = lazy(() => import('./Resume'));
const Favourite = lazy(() => import('./Favourite'));
const Pricing = lazy(() => import('./Pricing'));

const Routes = () => {
  const { path } = useRouteMatch();
  return (
    <Container className="pt-8">
      <Row>
        <Col lg={3} md={12} sm={12}>
          <Sidebar />
        </Col>
        <Col lg={9} md={12} sm={12}>
          <Suspense fallback={<SubFallback />}>
            <Switch>
              <Route
                exact
                path={`${path}`}
                render={(props) =>
                  withTitle({
                    component: Dashboard,
                    title: 'Candidate Dashboard',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/apply`}
                render={(props) =>
                  withTitle({
                    component: AppliedJob,
                    title: 'Candidate Applied Jobs',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/profile`}
                render={(props) =>
                  withTitle({
                    component: ProfileSetting,
                    title: 'Edit Candidate Profile',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/resume`}
                render={(props) =>
                  withTitle({
                    component: Resume,
                    title: 'Candidates Resume',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/favourite`}
                render={(props) =>
                  withTitle({
                    component: Favourite,
                    title: 'Favourite Jobs',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/plan`}
                render={(props) =>
                  withTitle({
                    component: Pricing,
                    title: 'Pricing Plans',
                    ...props,
                  })
                }
              />
            </Switch>
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default Routes;
