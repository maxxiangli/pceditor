import React, { Suspense } from 'react';
import LoadingPage from '../components/LoadingPage';
import config from './config';
import {Switch} from "antd";
import {hashHistory, Redirect, Route, Router} from "react-router";

const renderRoutes = routes => {
  if (!Array.isArray(routes)) {
    return null;
  }

  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.redirect) {
          return (
            <Redirect
              key={route.path || index}
              exact={route.exact}
              strict={route.strict}
              from={route.path}
              to={route.redirect}
            />
          );
        }

        return (
          <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={() => {
              const renderChildRoutes = renderRoutes(route.childRoutes);
              if (route.component) {
                return (
                  <Suspense fallback={<LoadingPage />}>
                    <route.component route={route}>{renderChildRoutes}</route.component>
                  </Suspense>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  );
};

const AppRouter = () => {
  // console.log(renderRoutes(config));
  return <Router history={hashHistory} >{renderRoutes(config)}</Router>;
};

// const AppRouter = renderRoutes(config);

export default AppRouter;
