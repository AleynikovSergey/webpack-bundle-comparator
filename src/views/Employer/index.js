import React, { lazy, Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import withTitle from 'src/components/TitleComponent';
import { SubFallback } from 'src/components/Fallback';

import Sidebar from './Sidebar';

const Dashboard = lazy(() => import('./Dashboard'));
const Applications = lazy(() => import('./Applications'));
const ProfileSetting = lazy(() => import('./ProfileSetting'));
const Portfolio = lazy(() => import('./Portfolio'));
const CreatePost = lazy(() => import('./CreatePost'));
const ManageJobs = lazy(() => import('./ManageJob'));
const Pricing = lazy(() => import('./Pricing'));
const Company = lazy(() => import('./Company'));

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
                    title: 'Employer Dashboard',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/application`}
                render={(props) =>
                  withTitle({
                    component: Applications,
                    title: 'Applications',
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
                    title: 'Edit Employer Profile',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/portfolio`}
                render={(props) =>
                  withTitle({
                    component: Portfolio,
                    title: 'portfolio',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/jobs`}
                render={(props) =>
                  withTitle({
                    component: ManageJobs,
                    title: 'Manage Jobs',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/post`}
                render={(props) =>
                  withTitle({
                    component: CreatePost,
                    title: 'Post New Job',
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
              <Route
                exact
                path={`${path}/company`}
                render={(props) =>
                  withTitle({
                    component: Company,
                    title: 'Company Page',
                    ...props,
                  })
                }
              />
              <Route
                exact
                path={`${path}/manage`}
                render={(props) =>
                  withTitle({
                    component: ManageJobs,
                    title: 'Manage Jobs',
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
