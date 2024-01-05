import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router/lib';

import Page from './layout/Page'
import {Login} from './page/login';
import {Publish} from './page/publish';
import {Draft} from './page/draft';
import {Edit} from './page/edit';
import AppRouter from "./routers/AppRouter";

const routes =
    <Route path={'/'} name={"pc-editor"} components={Page}>

        <IndexRedirect to="/publish" />
        <Route path={'login'} component={Login} />
        <Route path={'publish'} component={Publish} />
        <Route path={'draft'} component={Draft} />
        <Route path={'edit'} component={Edit} />
    </Route>;


ReactDOM.render(
    <Provider >
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

